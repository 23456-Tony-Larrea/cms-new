export type Problem = {
  emoji: string
  title: string
  desc: string
}

export const problems: Problem[] = [
  {
    emoji: '🔋',
    title: 'Fatiga constante',
    desc: 'Te despiertas cansada y a media tarde la energía se te va por completo.',
  },
  {
    emoji: '⚖️',
    title: 'Aumento de peso',
    desc: 'Sientes que tu metabolismo se detuvo y todo lo que comes se queda.',
  },
  {
    emoji: '🌡️',
    title: 'Sofocos y cambios de humor',
    desc: 'Las hormonas en desequilibrio te provocan bochornos e irritabilidad.',
  },
  {
    emoji: '🧠',
    title: 'Niebla mental y olvido',
    desc: 'Te cuesta concentrarte y sientes que la cabeza no responde como antes.',
  },
  {
    emoji: '😴',
    title: 'Mal dormir',
    desc: 'Te despiertas en la madrugada y no logras volver a dormir profundamente.',
  },
  {
    emoji: '💔',
    title: 'Pérdida de deseo',
    desc: 'La libido baja y con ella tu confianza y conexión íntima.',
  },
]

export type Benefit = {
  icon: string
  title: string
  desc: string
}

export const benefits: Benefit[] = [
  {
    icon: '⚡',
    title: 'Energía que dura todo el día',
    desc: 'Shilajit y vitaminas del complejo B reactivan tus células para que rindas de mañana a noche sin altibajos.',
  },
  {
    icon: '🌸',
    title: 'Hormonas en equilibrio',
    desc: 'Ashwagandha y Dong Quai regulan cortisol y estrógenos, reduciendo sofocos, cambios de humor y bochornos.',
  },
  {
    icon: '🔥',
    title: 'Metabolismo acelerado',
    desc: 'Yodo, zinc y cromo ayudan a tu tiroides a quemar grasa de forma natural, incluso en reposo.',
  },
  {
    icon: '🧘‍♀️',
    title: 'Menos estrés, más calma',
    desc: 'La ashwagandha baja el cortisol y mejora tu respuesta al estrés, ayudándote a dormir mejor.',
  },
  {
    icon: '💪',
    title: 'Músculos y huesos fuertes',
    desc: 'Vitamina D3 + K2 + calcio mantienen tu masa ósea y muscular para moverte sin dolor.',
  },
  {
    icon: '✨',
    title: 'Piel, pelo y uñas radiantes',
    desc: 'Biotina, vitamina C y zinc nutren tu belleza desde adentro para verte y sentirte joven.',
  },
]

export type RoutineStep = {
  step: string
  title: string
  desc: string
  time: string
}

export const routineSteps: RoutineStep[] = [
  {
    step: '01',
    title: 'Toma 1 cápsula',
    desc: 'Con el primer vaso de agua de la mañana, acompañada de tu desayuno.',
    time: 'Mañana',
  },
  {
    step: '02',
    title: 'Mantén la constancia',
    desc: 'Todos los días a la misma hora. La fórmula acumula beneficios semana a semana.',
    time: 'Diario',
  },
  {
    step: '03',
    title: 'Siente los cambios',
    desc: 'De 2 a 4 semanas notarás más energía, mejor sueño y menos sofocos.',
    time: '2-4 semanas',
  },
  {
    step: '04',
    title: 'Disfruta tu nueva versión',
    desc: 'A los 3 meses tu metabolismo, hormonas y energía se reinician por completo.',
    time: '3 meses',
  },
]

export type Ingredient = {
  name: string
  tag: string
  desc: string
}

export const ingredients: Ingredient[] = [
  {
    name: 'Shilajit puro',
    tag: 'Energía celular',
    desc: 'Mineral rico en ácido fúlvico que recarga las mitocondrias y combate la fatiga crónica.',
  },
  {
    name: 'Ashwagandha KSM-66',
    tag: 'Equilibrio hormonal',
    desc: 'Adaptógeno que regula el cortisol, reduce el estrés y apoya la función tiroidea.',
  },
  {
    name: 'Dong Quai',
    tag: 'Salud femenina',
    desc: 'La "ginseng femenina" que equilibra los estrógenos y alivia los sofocos.',
  },
  {
    name: 'Vitaminas del complejo B',
    tag: 'Energía y metabolismo',
    desc: 'B12, B6 y ácido fólico que transforman los alimentos en energía real.',
  },
  {
    name: 'Vitamina D3 + K2',
    tag: 'Huesos fuertes',
    desc: 'Dueto perfecto para fijar el calcio en los huesos y proteger tu corazón.',
  },
  {
    name: 'Zinc + Selenio',
    tag: 'Inmunidad y tiroides',
    desc: 'Minerales clave para tu sistema inmune y la producción de hormonas tiroideas.',
  },
  {
    name: 'Biotina',
    tag: 'Belleza integral',
    desc: 'Fortalece el cabello, las uñas y aporta brillo natural a tu piel.',
  },
  {
    name: 'Cromo + Yodo',
    tag: 'Control de peso',
    desc: 'Regulan el azúcar y activan la tiroides para quemar grasa sin esfuerzo.',
  },
]

export type Testimonial = {
  name: string
  age: number
  city: string
  text: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    name: 'Marta R.',
    age: 47,
    city: 'Madrid',
    text: 'Llevaba meses agotada y con sofocos horribles. A las tres semanas empecé a sentirme yo otra vez. ¡Ahora duermo toda la noche!',
    rating: 5,
  },
  {
    name: 'Cristina L.',
    age: 52,
    city: 'Barcelona',
    text: 'Lo que más me gustó fue que no es un producto químico. Mi metabolismo cambió y bajé dos tallas sin hacer dietas extremas.',
    rating: 5,
  },
  {
    name: 'Lucía M.',
    age: 44,
    city: 'Valencia',
    text: 'La niebla mental desapareció. En el trabajo me siento enfocada y con energía para todo el día. Lo tomo hace 4 meses.',
    rating: 5,
  },
]

export type FAQ = {
  q: string
  a: string
}

export const faqs: FAQ[] = [
  {
    q: '¿Desde qué edad puedo tomar Vitacap G?',
    a: 'Está formulado para mujeres a partir de los 40 años, cuando empiezan los cambios hormonales, metabólicos y de energía. También es ideal para etapa de perimenopausia y menopausia.',
  },
  {
    q: '¿Cuánto tiempo tarda en hacer efecto?',
    a: 'Muchas mujeres notan más energía en la primera semana. Los beneficios completos sobre hormonas y metabolismo se consolidan entre 4 y 12 semanas de uso constante.',
  },
  {
    q: '¿Tiene contraindicaciones o efectos secundarios?',
    a: 'Su fórmula es natural y generalmente bien tolerada. Si estás embarazada, lactando o bajo tratamiento médico (especialmente para tiroides), consulta a tu médico antes de usarlo.',
  },
  {
    q: '¿Por cuánto tiempo debo tomarlo?',
    a: 'Recomendamos un uso mínimo de 3 meses para que tu cuerpo reciba todos los nutrientes y regule hormonas y metabolismo de forma sostenida.',
  },
  {
    q: '¿Es natural y libre de químicos?',
    a: 'Sí. Vitacap G se elabora con ingredientes naturales, sin azúcares añadidos, sin OMG y libre de colorantes o conservantes artificiales.',
  },
  {
    q: '¿Cómo se toma?',
    a: 'Una cápsula al día, por la mañana con el desayuno y un vaso de agua. No excedas la dosis recomendada.',
  },
]
