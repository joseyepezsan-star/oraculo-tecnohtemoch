@echo off
cd /d "%~dp0"
title Oraculo de Tecnohtemoch - Servidor local
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0servidor_local.ps1"
pause
