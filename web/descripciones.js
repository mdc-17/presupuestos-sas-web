// Textos divulgativos de la web (web/index.html), escritos a mano.
// No contienen cifras. Explican, en lenguaje llano, qué es cada elemento del presupuesto.
// - Ámbitos, fases, lecturas y capítulos: explicación propia del proyecto (texto divulgativo,
//   basado en la clasificación económica del gasto y en docs/METODOLOGIA.md).
// - Programas: resumen de la memoria oficial de cada programa (campo "fuente": id de
//   data/catalogo_fuentes.csv y página). Si no se ha localizado la memoria, "fuente" es null
//   y el texto se limita a lo que dice el propio nombre del programa.
// Revisado por auditor-neutralidad: ver docs/MEMORIA_PROYECTO.md.
window.DESCRIPCIONES = {
  fases: {
    inicial: "El dinero que se prevé gastar en el año según la Ley de Presupuestos aprobada por el Parlamento o, si el presupuesto está prorrogado, según los créditos prorrogados del año anterior.",
    definitivo: "El dinero disponible al final del año, después de los cambios aprobados durante el ejercicio (ampliaciones, traspasos entre partidas, etc.).",
    obligaciones: "El gasto ejecutado: importes que la Administración ha reconocido que debe pagar (nóminas, facturas, servicios recibidos), estén ya pagados o no.",
    grado: "Qué parte del dinero disponible (crédito definitivo) se ha ejecutado (obligaciones reconocidas).",
  },
  lecturas: {
    corr: "Euros de cada año, tal como figuran en los documentos oficiales.",
    const: "Euros corregidos por la variación de los precios (IPC de Andalucía) y expresados en euros de 2025, para poder comparar años distintos.",
    hab: "El importe dividido entre el número de habitantes de Andalucía ese año (padrón del INE).",
    habc: "El importe por habitante, corregido además por la variación de los precios (euros de 2025).",
    pct: "Qué parte del presupuesto total de la Junta de Andalucía representa este importe.",
  },
  capitulos: {
    total: "La suma de todos los tipos de gasto.",
    "1": "Sueldos y cotizaciones sociales del personal (profesionales sanitarios, personal técnico, administrativo, etc.).",
    "2": "Compras y servicios para el funcionamiento diario: material sanitario y productos farmacéuticos de los centros, suministros (luz, agua), limpieza, mantenimiento y servicios contratados con entidades externas, incluidos los conciertos para prestar servicios (por ejemplo, atención temprana o asistencia dental infantil, según la memoria de la Consejería 2025).",
    "3": "Intereses de préstamos y deudas, incluidos los intereses de demora (por ejemplo, por sentencias).",
    "4": "Dinero que se entrega a otras entidades o personas, sin contrapartida directa, para sus gastos ordinarios. En sanidad incluye el pago de los medicamentos dispensados con receta en las farmacias y el dinero que la Consejería pasa al SAS.",
    "5": "Reserva para gastos imprevistos.",
    "6": "Obras, reformas y equipamiento: construcción de centros de salud y hospitales, aparatos médicos, sistemas informáticos.",
    "7": "Dinero que se entrega a otras entidades para que hagan inversiones (obras o equipos).",
    "8": "Préstamos concedidos, compra de acciones o depósitos.",
    "9": "Devolución de préstamos (amortización de deuda).",
  },
  ambitos: {
    sanidad_programas: "El gasto sanitario de la Junta de Andalucía con el mismo criterio de perímetro todos los años (con las limitaciones descritas en las notas): el SAS, la parte sanitaria de la Consejería y otras entidades sanitarias, sin contar dos veces el dinero que la Consejería pasa al SAS. Es la serie principal del proyecto para comparar 2010-2025.",
    sanidad_consolidado: "La suma de todas las entidades sanitarias tal como aparecen en las cuentas oficiales consolidadas de 2020-2025. A diferencia de la serie principal, incluye también los programas no sanitarios de la Consejería (como Consumo).",
    sas: "El Servicio Andaluz de Salud, el organismo que gestiona la mayor parte de los centros de salud y hospitales públicos de Andalucía.",
    consejeria: "La Consejería de Salud, el departamento del Gobierno andaluz que planifica, financia e inspecciona la sanidad. Aquí sin el dinero que pasa al SAS, para no contarlo dos veces.",
    consejeria_sin_consolidar: "La Consejería de Salud con todo su presupuesto, incluido el dinero que pasa al SAS. Por eso no se puede sumar al SAS: ese dinero se contaría dos veces.",
    agencias_sanitarias: "Empresas públicas sanitarias (hospitales de Poniente, Costa del Sol, Alto y Bajo Guadalquivir, y Empresa Pública de Emergencias Sanitarias). Tienen sección propia en el consolidado en 2021; desde el 1 de enero de 2022 su actividad está integrada en el SAS y en 2022 sus secciones figuran con 0 €.",
    consorcio_aljarafe: "Consorcio Sanitario Público del Aljarafe, entidad con sección propia en el presupuesto.",
    instituto_salud_andalucia: "Instituto de Salud de Andalucía, entidad con sección propia en el presupuesto desde 2025.",
    total_junta_consolidado: "Todo el presupuesto de la Junta de Andalucía. Sirve de referencia para ver qué parte representa la sanidad.",
    consejeria_programas: "El presupuesto de la Consejería de Salud separado por programas, es decir, por la finalidad del gasto. Incluye el dinero que pasa al SAS.",
    sas_programas: "El presupuesto del SAS separado por programas, es decir, por la finalidad del gasto.",
    sin_fondos: "El gasto sanitario realizado sin contar lo pagado por el SAS con fondos extraordinarios (COVID-19 y fondos europeos REACT-UE y MRR). No se restan el Fondo COVID-19 no finalista ni los fondos extraordinarios de la Administración General (INC-021, INC-023).",
    fondos: "Dinero extraordinario gastado por el SAS en 2020-2025: fondos COVID-19, REACT-UE (fondos europeos para la recuperación tras la pandemia) y MRR (Mecanismo de Recuperación y Resiliencia de la Unión Europea).",
  },
  // Programas: resumen llano de la memoria oficial (Presupuesto de la Junta de Andalucía).
  // Clave "<ámbito>:<programa>" cuando el mismo código tiene distinto contenido en la
  // Consejería y en el SAS; si no, solo "<programa>". Páginas: PDF (impresa).
  programas: {
    "consejeria_programas:DSG": {
      texto: "Dirección y Servicios Generales de la Consejería. En 2019-2022 (programa 12O), los gastos de funcionamiento de los órganos directivos de la Consejería, en los servicios centrales y en las delegaciones territoriales. Desde 2023 es el programa 12S. Según la memoria de 2025, ese año recoge los recursos para la actividad del SAS y del Instituto de Salud de Andalucía, los de la fundación FAISEM (integración social de personas con enfermedad mental) y el presupuesto del Consorcio Sanitario Público del Aljarafe, y sigue dando soporte a los órganos directivos de la Consejería.",
      fuente: "Memoria 2021, 2021-HAC-007, pág. 9 (impr. 551); memoria 2025, 2025-HAC-007, pág. 10 (impr. 343)",
    },
    "sas_programas:DSG": {
      texto: "Dirección y Servicios Generales del SAS: el personal que presta los servicios generales y las tareas de dirección y planificación del propio Servicio Andaluz de Salud.",
      fuente: "Memoria 2025 del SAS, 2025-HAC-008, pág. 14 (impr. 66)",
    },
    "31B": {
      texto: "Plan sobre adicciones: prevención, atención sociosanitaria, incorporación social de las personas afectadas y gestión del conocimiento sobre adicciones.",
      fuente: "Memoria 2025, 2025-HAC-007, pág. 10 (impr. 343)",
    },
    "31P": {
      texto: "Programa de apoyo a las familias, compartido por varios centros directivos de la Junta de Andalucía. La parte de salud incluye el Plan de Salud Bucodental, el Plan Andaluz de Alzheimer y el Plan de Atención Infantil Temprana. Existe hasta 2022.",
      fuente: "Memoria 2021, 2021-HAC-007, pág. 21 (impr. 563)",
    },
    "41B": {
      texto: "Formación continuada de los profesionales del SAS, gestión del conocimiento y desarrollo profesional.",
      fuente: "Memoria 2025 del SAS, 2025-HAC-008, pág. 14 (impr. 66)",
    },
    "sas_programas:41C": {
      texto: "La asistencia sanitaria que presta el SAS en atención primaria y comunitaria (centros de salud) y en atención hospitalaria, incluidas la prevención de la enfermedad y la promoción de la salud.",
      fuente: "Memoria 2025 del SAS, 2025-HAC-008, pág. 14 (impr. 66)",
    },
    "consejeria_programas:41C": {
      texto: "En la Consejería, y solo en 2020: el dinero para la actividad sanitaria especializada y las urgencias y emergencias de las agencias públicas empresariales sanitarias. Desde 2021 ese objetivo pasa al programa 41H.",
      fuente: "Memoria 2020, 2020-HAC-007, pág. 21 (impr. 526); memoria 2021, 2021-HAC-007, pág. 48 (impr. 590)",
    },
    "41D": {
      texto: "Salud pública: prevenir enfermedades y proteger, promover y recuperar la salud de la población.",
      fuente: "Memoria 2025, 2025-HAC-007, pág. 10 (impr. 343)",
    },
    "41E": {
      texto: "Hemoterapia: cubrir en los hospitales de Andalucía las necesidades de transfusiones de componentes de la sangre y de tejidos humanos para trasplante.",
      fuente: "Memoria 2025 del SAS, 2025-HAC-008, pág. 14 (impr. 66)",
    },
    "41F": {
      texto: "Donación y trasplante de órganos y tejidos para los pacientes en lista de espera.",
      fuente: "Memoria 2025 del SAS, 2025-HAC-008, pág. 14 (impr. 66)",
    },
    "41G": {
      texto: "Medicamentos con receta dispensados en las farmacias (prestación farmacéutica) y prestación ortoprotésica, que se hace efectiva en ortopedias, ópticas y gabinetes de audioprótesis.",
      fuente: "Memoria 2025 del SAS, 2025-HAC-008, pág. 14 (impr. 66)",
    },
    "41H": {
      texto: "Planificación y financiación: el dinero que la Consejería pasa a las entidades que dependen de ella (SAS, fundación FAISEM y Escuela Andaluza de Salud Pública) y, desde 2021, la actividad de las agencias públicas empresariales sanitarias. Existe hasta 2022; desde 2023 esas transferencias figuran en el programa 12S (INC-015).",
      fuente: "Memoria 2021, 2021-HAC-007, pág. 47 (impr. 589) y pág. 48 (impr. 590)",
    },
    "41J": {
      texto: "Inspección de servicios sanitarios: proteger los derechos de los ciudadanos y vigilar que se cumpla la normativa sanitaria.",
      fuente: "Memoria 2025, 2025-HAC-007, pág. 11 (impr. 344)",
    },
    "41K": {
      texto: "Investigación, calidad y modernización para mejorar la salud de la población. Hasta 2024 se llama «Política de calidad y modernización». Según la memoria de 2025, ese año pasa al Instituto de Salud de Andalucía con el nombre «Generación y gestión del conocimiento en salud y salud pública». En la liquidación de 2025 sigue figurando en la sección de la Consejería (INC-026).",
      fuente: "Memoria 2021, 2021-HAC-007, pág. 8 (impr. 550); memoria 2025, 2025-HAC-007, pág. 10 (impr. 343); memoria 2025 del Instituto, 2025-HAC-009, pág. 7 (impr. 117)",
    },
    "44H": {
      texto: "Consumo: protección e información de las personas consumidoras sobre sus derechos y vías para resolver conflictos de consumo.",
      fuente: "Memoria 2025, 2025-HAC-007, pág. 11 (impr. 344)",
    },
    total: { texto: "La suma de todos los programas.", fuente: null },
    "COVID-19": { texto: "Gasto del SAS financiado con fondos asignados a la COVID-19.", fuente: null },
    "REACT-UE": { texto: "Gasto del SAS financiado con REACT-UE, ayuda europea para la recuperación tras la pandemia.", fuente: null },
    "MRR": { texto: "Gasto del SAS financiado con el Mecanismo de Recuperación y Resiliencia de la Unión Europea.", fuente: null },
  },
};
