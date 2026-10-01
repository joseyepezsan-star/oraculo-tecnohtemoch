$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Port = 8000

function Get-MimeType([string]$Path) {
    switch ([IO.Path]::GetExtension($Path).ToLowerInvariant()) {
        ".html" { "text/html; charset=utf-8" }
        ".css"  { "text/css; charset=utf-8" }
        ".js"   { "application/javascript; charset=utf-8" }
        ".json" { "application/json; charset=utf-8" }
        ".jpg"  { "image/jpeg" }
        ".jpeg" { "image/jpeg" }
        ".png"  { "image/png" }
        ".svg"  { "image/svg+xml" }
        ".mind" { "application/octet-stream" }
        default { "application/octet-stream" }
    }
}

$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)
$listener.Start()

Write-Host ""
Write-Host "==============================================" -ForegroundColor DarkYellow
Write-Host "  ORACULO DE TECNOHTEMOCH - SERVIDOR LOCAL" -ForegroundColor Yellow
Write-Host "==============================================" -ForegroundColor DarkYellow
Write-Host ""
Write-Host "Carpeta: $Root"
Write-Host "Direccion: http://localhost:$Port/"
Write-Host ""
Write-Host "NO CIERRES ESTA VENTANA mientras pruebas la pagina." -ForegroundColor Cyan
Write-Host "Para terminar, presiona Ctrl+C." -ForegroundColor Gray
Write-Host ""

Start-Process "http://localhost:$Port/"

try {
    while ($true) {
        $client = $listener.AcceptTcpClient()
        try {
            $stream = $client.GetStream()
            $reader = New-Object IO.StreamReader($stream, [Text.Encoding]::ASCII, $false, 1024, $true)

            $requestLine = $reader.ReadLine()
            if ([string]::IsNullOrWhiteSpace($requestLine)) {
                $client.Close()
                continue
            }

            # Consumir cabeceras HTTP
            while (($line = $reader.ReadLine()) -ne "") {
                if ($null -eq $line) { break }
            }

            $parts = $requestLine.Split(" ")
            $method = $parts[0]
            $urlPath = if ($parts.Length -gt 1) { $parts[1] } else { "/" }

            if ($method -ne "GET") {
                $body = [Text.Encoding]::UTF8.GetBytes("405 Method Not Allowed")
                $header = "HTTP/1.1 405 Method Not Allowed`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
                $hb = [Text.Encoding]::ASCII.GetBytes($header)
                $stream.Write($hb,0,$hb.Length)
                $stream.Write($body,0,$body.Length)
                continue
            }

            $urlPath = $urlPath.Split("?")[0]
            $urlPath = [Uri]::UnescapeDataString($urlPath)
            if ($urlPath -eq "/") { $urlPath = "/index.html" }

            $relative = $urlPath.TrimStart("/").Replace("/", [IO.Path]::DirectorySeparatorChar)
            $fullPath = [IO.Path]::GetFullPath((Join-Path $Root $relative))
            $rootFull = [IO.Path]::GetFullPath($Root)

            if (-not $fullPath.StartsWith($rootFull, [StringComparison]::OrdinalIgnoreCase)) {
                $body = [Text.Encoding]::UTF8.GetBytes("403 Forbidden")
                $header = "HTTP/1.1 403 Forbidden`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
                $hb = [Text.Encoding]::ASCII.GetBytes($header)
                $stream.Write($hb,0,$hb.Length)
                $stream.Write($body,0,$body.Length)
                continue
            }

            if (Test-Path $fullPath -PathType Leaf) {
                $bytes = [IO.File]::ReadAllBytes($fullPath)
                $mime = Get-MimeType $fullPath
                $header = "HTTP/1.1 200 OK`r`nContent-Type: $mime`r`nContent-Length: $($bytes.Length)`r`nCache-Control: no-cache`r`nConnection: close`r`n`r`n"
                $hb = [Text.Encoding]::ASCII.GetBytes($header)
                $stream.Write($hb,0,$hb.Length)
                $stream.Write($bytes,0,$bytes.Length)
                Write-Host "200  $urlPath" -ForegroundColor DarkGreen
            }
            else {
                $body = [Text.Encoding]::UTF8.GetBytes("404 - Archivo no encontrado: $urlPath")
                $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain; charset=utf-8`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
                $hb = [Text.Encoding]::ASCII.GetBytes($header)
                $stream.Write($hb,0,$hb.Length)
                $stream.Write($body,0,$body.Length)
                Write-Host "404  $urlPath" -ForegroundColor DarkRed
            }
        }
        catch {
            Write-Host "Error atendiendo solicitud: $($_.Exception.Message)" -ForegroundColor Red
        }
        finally {
            $client.Close()
        }
    }
}
finally {
    $listener.Stop()
}
