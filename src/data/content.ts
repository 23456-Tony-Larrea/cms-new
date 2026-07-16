export type Symptom = {
  icon: string
  title: string
  desc: string
}

export const symptoms: Symptom[] = [
  {
    icon: 'battery-low',
    title: 'Falta de energía',
    desc: 'Te cuesta arrancar por las mañanas y la fatiga te acompaña todo el día.',
  },
  {
    icon: 'brain-fog',
    title: 'Agotamiento mental',
    desc: 'Sientes la mente cargada, como si pensar costara un esfuerzo extra.',
  },
  {
    icon: 'stress',
    title: 'Estrés diario',
    desc: 'Las responsabilidades te rebasan y vives en estado de tensión constante.',
  },
  {
    icon: 'focus',
    title: 'Baja concentración',
    desc: 'Te distraes con facilidad y te cuesta mantener la atención en una tarea.',
  },
]

export type Benefit = {
  icon: string
  emoji: string
  title: string
  desc: string
  gradient: string
}

export const benefits: Benefit[] = [
  {
    icon: 'energy',
    emoji: '⚡',
    title: 'Energía',
    desc: 'El ginseng coreano y el ácido pantoténico contribuyen a la reducción del cansancio y la fatiga.',
    gradient: 'from-red-600 to-terracota-400',
  },
  {
    icon: 'memory',
    emoji: '🧠',
    title: 'Memoria',
    desc: 'El ginseng coreano mejora la memoria y el ácido pantoténico contribuye al rendimiento intelectual normal.',
    gradient: 'from-vino-700 to-red-600',
  },
  {
    icon: 'immunity',
    emoji: '🛡️',
    title: 'Inmunidad',
    desc: 'Las vitaminas A, C, D y el Zinc contribuyen al funcionamiento normal del sistema inmune.',
    gradient: 'from-durazno-500 to-sunrise-500',
  },
  {
    icon: 'antioxidant',
    emoji: '✨',
    title: 'Antioxidante',
    desc: 'El manganeso y las vitaminas C y E contribuyen a la protección frente al daño oxidativo.',
    gradient: 'from-sunrise-500 to-amarillo-400',
  },
  {
    icon: 'cognitive',
    emoji: '🎯',
    title: 'Función Cognitiva',
    desc: 'El hierro y el zinc contribuyen a una función cognitiva normal.',
    gradient: 'from-terracota-400 to-durazno-500',
  },
]

export type Ingredient = {
  name: string
  category: string
  color: string
}

export const ingredients: Ingredient[] = [
  { name: 'Ginseng Coreano', category: 'Activo natural', color: '#C3311D' },
  { name: 'Aloe', category: 'Extracto natural', color: '#D35844' },
  { name: 'Vitamina A', category: 'Vitamina', color: '#ECC057' },
  { name: 'Vitamina C', category: 'Vitamina', color: '#DA814C' },
  { name: 'Vitamina D', category: 'Vitamina', color: '#F1DF00' },
  { name: 'Vitamina E', category: 'Vitamina', color: '#D35844' },
  { name: 'Vitamina B6', category: 'Vitamina B', color: '#C3311D' },
  { name: 'Vitamina B12', category: 'Vitamina B', color: '#671225' },
  { name: 'Zinc', category: 'Mineral', color: '#D35844' },
  { name: 'Manganeso', category: 'Mineral', color: '#DA814C' },
  { name: 'Calcio', category: 'Mineral', color: '#ECC057' },
  { name: 'Fósforo', category: 'Mineral', color: '#D35844' },
  { name: 'Magnesio', category: 'Mineral', color: '#C3311D' },
  { name: 'Hierro', category: 'Mineral', color: '#671225' },
  { name: 'Cobre', category: 'Mineral', color: '#DA814C' },
]

export type RoutineStep = {
  step: string
  title: string
  desc: string
  icon: string
}

export const routineSteps: RoutineStep[] = [
  {
    step: '01',
    title: 'Desayuno',
    desc: 'Toma una cápsula de Vitacap G con tu desayuno y un vaso de agua.',
    icon: '☕',
  },
  {
    step: '02',
    title: 'Energía',
    desc: 'Los nutrientes comienzan a trabajar, dándote energía sostenida durante la mañana.',
    icon: '⚡',
  },
  {
    step: '03',
    title: 'Productividad',
    desc: 'Mantén el enfoque y el rendimiento mental en tu trabajo o estudio sin altibajos.',
    icon: '📈',
  },
  {
    step: '04',
    title: 'Bienestar',
    desc: 'Al final del día, sientes vitalidad y bienestar para disfrutar con los tuyos.',
    icon: '🌙',
  },
]

export type FAQ = {
  q: string
  a: string
}

export const faqs: FAQ[] = [
  {
    q: '¿Qué es Vitacap G?',
    a: 'Vitacap G es un suplemento alimenticio en cápsulas elaborado con ginseng coreano natural, extracto de aloe, vitaminas y minerales. Está diseñado para ayudar a combatir el cansancio físico y mental, aportando energía y bienestar diario.',
  },
  {
    q: '¿Cómo se consume?',
    a: 'Se recomienda tomar una cápsula al día, preferiblemente con el desayuno y un vaso de agua. No excedas la dosis diaria recomendada.',
  },
  {
    q: '¿Quiénes pueden consumirlo?',
    a: 'Adultos activos con rutinas exigentes: profesionales, estudiantes, emprendedores y personas con jornadas multitarea que buscan mantener su energía y bienestar físico y mental. Si estás embarazada, lactando o bajo tratamiento médico, consulta a tu médico antes de consumirlo.',
  },
  {
    q: '¿Cuáles son sus beneficios?',
    a: 'Vitacap G contribuye a reducir el cansancio y la fatiga, mejora la memoria y el rendimiento intelectual, apoya el sistema inmune, aporta acción antioxidante y favorece una función cognitiva normal.',
  },
  {
    q: '¿Dónde puedo adquirirlo?',
    a: 'Vitacap G está disponible en farmacias y tiendas naturistas seleccionadas. Próximamente también podrás adquirirlo a través de nuestra tienda online.',
  },
]

export const activities = [
  { emoji: '💻', label: 'Trabajando' },
  { emoji: '🏃', label: 'Ejercicio' },
  { emoji: '📚', label: 'Estudiando' },
  { emoji: '👨‍👩‍👧', label: 'Familia' },
  { emoji: '🎯', label: 'Metas' },
]
