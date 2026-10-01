window.PREDICCIONES = [
  {
    titulo: "AUGURIO DE LA PAUSA",
    serio: "Hoy algo podría molestarte más rápido de lo que esperabas.",
    gracioso: "Tecnohtemoch culpa a una alineación cósmica. Brayan probablemente sólo tiene hambre.",
    consejo: "Ritual recomendado: espera diez segundos antes de responder y nombra lo que estás sintiendo."
  },
  {
    titulo: "AUGURIO DEL MENSAJE CORTO",
    serio: "Un mensaje breve podría parecer más frío o importante de lo que realmente es.",
    gracioso: "El temible “ok” ha confundido civilizaciones enteras.",
    consejo: "Hechizo de claridad: pregunta qué quiso decir la otra persona antes de completar la historia por tu cuenta."
  },
  {
    titulo: "AUGURIO DE LA PRIMERA IMPRESIÓN",
    serio: "Hoy podrías formarte una opinión de alguien demasiado pronto.",
    gracioso: "Tecnohtemoch también lo hace. Por eso todavía cree que el gato paga renta.",
    consejo: "Poder del día: separa lo que observaste de lo que interpretaste."
  },
  {
    titulo: "AUGURIO DEL LÍMITE",
    serio: "Es posible que hoy necesites decir que no a algo.",
    gracioso: "No requiere invocar espíritus ni sacrificar tacos.",
    consejo: "Protección ancestral: expresa tu límite con claridad, sin justificarte más de lo necesario."
  },
  {
    titulo: "AUGURIO DEL ERROR",
    serio: "Podrías descubrir que estabas equivocado sobre algo.",
    gracioso: "Las runas confirman que esto le pasa incluso a Tecnohtemoch. Él niega la evidencia.",
    consejo: "Ritual de sabiduría: corregir una idea no te hace perder; te permite aprender."
  },
  {
    titulo: "AUGURIO DEL CANSANCIO",
    serio: "Una emoción intensa quizá tenga más que ver con cansancio que con el problema frente a ti.",
    gracioso: "El oráculo recomienda dormir. Tecnología ancestral de eficacia sorprendente.",
    consejo: "Diagnóstico del trompo: revisa primero sueño, hambre, estrés y necesidad de espacio."
  },
  {
    titulo: "AUGURIO DE LA DISCUSIÓN",
    serio: "Una conversación puede ponerse tensa si todos intentan responder y nadie intenta entender.",
    gracioso: "Tecnohtemoch domina esa técnica desde hace años.",
    consejo: "Conjuro menor: resume lo que entendiste antes de defender tu postura."
  },
  {
    titulo: "AUGURIO DE LO INCONTROLABLE",
    serio: "Hoy algo podría no salir como esperabas.",
    gracioso: "El universo no recibió tu itinerario. Turismo confirma que suele pasar.",
    consejo: "Poder del día: distingue qué puedes modificar y qué sólo puedes decidir cómo afrontar."
  },
  {
    titulo: "AUGURIO DE LA COMPARACIÓN",
    serio: "Quizá te compares con alguien que parece llevar ventaja.",
    gracioso: "Recuerda: nadie publica la foto donde se le cae el taco.",
    consejo: "Protección ancestral: compara tu progreso con tu propio punto de partida."
  },
  {
    titulo: "AUGURIO DEL SILENCIO",
    serio: "No toda pausa significa rechazo, enojo o indiferencia.",
    gracioso: "A veces la otra persona simplemente está viendo reels.",
    consejo: "Hechizo de precisión: no conviertas la ausencia de información en una certeza negativa."
  },
  {
    titulo: "AUGURIO DE LA EMOCIÓN INCÓMODA",
    serio: "Puede aparecer una emoción que preferirías no sentir.",
    gracioso: "Tecnohtemoch intentó prohibirlas por decreto. No funcionó.",
    consejo: "Ritual recomendado: reconoce la emoción antes de decidir si necesitas actuar sobre ella."
  },
  {
    titulo: "AUGURIO DE LA BROMA",
    serio: "Algo dicho como broma podría incomodar a alguien.",
    gracioso: "Que Brayan se ría no constituye evidencia científica de que estuvo chistoso.",
    consejo: "Poder del día: si alguien marca un límite, escucha el efecto antes de explicar tu intención."
  },
  {
    titulo: "AUGURIO DE LA EXPECTATIVA",
    serio: "Alguien podría no comportarse como esperabas.",
    gracioso: "El oráculo tampoco esperaba perder un dedo haciendo tacos.",
    consejo: "Ritual de realidad: diferencia entre lo que la persona prometió y lo que tú esperabas sin haberlo hablado."
  },
  {
    titulo: "AUGURIO DEL ENOJO",
    serio: "El enojo puede avisarte que algo te importa o que percibes un límite cruzado.",
    gracioso: "También puede avisarte que llevas cuatro horas sin comer. Las runas no distinguen.",
    consejo: "Hechizo de enfoque: identifica qué necesidad o valor hay debajo del enojo antes de actuar."
  },
  {
    titulo: "AUGURIO DE LA ESCUCHA",
    serio: "Hoy alguien podría necesitar ser escuchado más que recibir una solución.",
    gracioso: "Sí, incluso si Tecnohtemoch ya preparó un discurso de cuarenta minutos.",
    consejo: "Poder del día: pregunta “¿quieres que te escuche o quieres ideas?”"
  },
  {
    titulo: "AUGURIO DE LA VERGÜENZA",
    serio: "Un error pequeño podría sentirse mucho más grande de lo que realmente es.",
    gracioso: "El gato ha visto cosas peores. Y sigue juzgando en silencio.",
    consejo: "Protección ancestral: describe el error concreto sin convertirlo en una definición de quién eres."
  },
  {
    titulo: "AUGURIO DEL CAMBIO DE OPINIÓN",
    serio: "Nueva información podría hacerte reconsiderar algo que defendías.",
    gracioso: "Tecnohtemoch llama a eso “recalibración profética”.",
    consejo: "Ritual recomendado: cambiar de opinión con evidencia es flexibilidad, no derrota."
  },
  {
    titulo: "AUGURIO DEL BUEN MOMENTO",
    serio: "Hoy también puede ocurrir algo sencillo que te haga sentir bien.",
    gracioso: "El oráculo no descarta tacos, pero se niega a revelar la taquería.",
    consejo: "Poder del día: cuando algo agradable ocurra, detente unos segundos para notarlo en vez de pasar inmediatamente a lo siguiente."
  }
];

window.elegirPrediccion = function() {
  const lista = window.PREDICCIONES || [];
  return lista[Math.floor(Math.random() * lista.length)];
};