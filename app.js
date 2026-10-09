/**
 * EDISON MONTOYA, Ph.D. — EXECUTIVE CV & PORTFOLIO
 * High-performance bilingual interactive application
 */

// --- DATA DICTIONARY (SPANISH & ENGLISH) ---
const cvData = {
  es: {
    nav: {
      brandTitle: "CTO & Líder de IA",
      modeSummary: "⚡ Resumen Ejecutivo",
      modeFull: "📄 CV Detallado",
      printCV: "Imprimir / PDF",
      contact: "Contacto"
    },
    hero: {
      statusBadge: "Disponible para Roles Ejecutivos & Asesoría",
      roleBadge: "PhD en Física • Ex-CEO & CTO",
      name: "Edison Montoya",
      title: "Chief Technology Officer (CTO) & AI Technical Strategist",
      lead: "Líder tecnológico y PhD con más de 14 años de trayectoria en arquitectura de soluciones basadas en datos, computación científica de alto rendimiento y dirección tecnológica. Con la evolución del ecosistema hacia la Inteligencia Artificial moderna, he liderado el diseño y puesta en producción de sistemas de IA aplicada (LLMs para soporte técnico, Visión por Computador, Gemelos Digitales), arquitecturas cloud en AWS y soluciones de trazabilidad en blockchain. Ex-CEO y CTO con experiencia dirigiendo equipos multidisciplinarios, asesorando al Foro Económico Mundial (WEF) en políticas de tecnología y captando más de $310,000 USD en subvenciones de infraestructura tecnológica.",
      pills: [
        { text: "🤖 LLMs & GenAI para Soporte", class: "glow-royal" },
        { text: "👁️ Visión por Computador & Video Analytics", class: "glow-habano" },
        { text: "🏢 Liderazgo CTO & Estrategia C-Level", class: "glow-royal" },
        { text: "☁️ Arquitectura Cloud AWS & Microservicios", class: "glow-slate" },
        { text: "🌐 Gemelos Digitales (Oil & Energy)", class: "glow-habano" },
        { text: "🔗 Blockchain & Trazabilidad Crítica", class: "glow-royal" },
        { text: "⚡ Cómputo Científico de Alto Rendimiento (HPC)", class: "glow-slate" }
      ],
      btnContact: "Contactar por Email",
      btnLinkedIn: "Perfil de LinkedIn",
      btnViewCV: "Ver CV Completo",
      btnCharts: "Ver Gráficas de Experiencia"
    },
    metrics: [
      {
        val: "14+",
        color: "gradient-royal",
        label: "Años de Experiencia",
        sub: "En sistemas de datos, cómputo avanzado y dirección tech"
      },
      {
        val: "$310K+",
        color: "gradient-habano",
        label: "Grants Tecnológicos",
        sub: "AWS ($100k), IBM ($110k), Google ($100k), NVIDIA"
      },
      {
        val: "10+",
        color: "gradient-royal",
        label: "Sistemas Desplegados",
        sub: "IA aplicada, analítica, OCR, LLMs y Trazabilidad"
      },
      {
        val: "PhD",
        color: "gradient-slate",
        label: "Grado con Honores",
        sub: "Cosmología y Física Numérica Computacional"
      }
    ],
    chartsSection: {
      eyebrow: "Métricas de Experiencia",
      title: "¿En qué áreas tengo más experiencia?",
      desc: "Distribución visual de más de 14 años liderando iniciativas de innovación tecnológica, gobernanza de datos y productos de misión crítica."
    },
    chart1: {
      title: "Dominio Tecnológico & Liderazgo",
      subtitle: "Enfoque de dedicación en proyectos y soluciones de software",
      centerLabel: "Enfoque Principal",
      segments: [
        {
          id: "ai",
          label: "Inteligencia Artificial & Deep Learning",
          pct: 35,
          color: "#2563eb",
          desc: "LLMs, Computer Vision (OCR, facial, video), Gemelos Digitales, PyTorch/TensorFlow, Beca NVIDIA y acceso temprano ChatGPT (2022)."
        },
        {
          id: "cto",
          label: "Dirección Tecnológica (CTO) & Cloud",
          pct: 25,
          color: "#c5a880",
          desc: "Arquitectura en AWS, liderazgo de ingeniería, alineación con negocio, gestión de $310k+ en infraestructura y equipos ágiles."
        },
        {
          id: "blockchain",
          label: "Blockchain & Trazabilidad Empresarial",
          pct: 20,
          color: "#1d4ed8",
          desc: "Líder Blockchain en WEF C4IR, Tribe Singapur, contratos inteligentes Ethereum, trazabilidad médica, agroindustrial y de hidrógeno verde."
        },
        {
          id: "hpc",
          label: "Computación de Alto Rendimiento (HPC) & Física",
          pct: 20,
          color: "#64748b",
          desc: "Doctorado y postdoctorados, programación paralela con CUDA en GPUs, MPI, C/C++, simulaciones masivas y modelos matemáticos complejos."
        }
      ]
    },
    chart2: {
      title: "Impacto por Sector de Negocio",
      subtitle: "Distribución de proyectos desplegados y clientes atendidos",
      centerLabel: "Sectores Clave",
      segments: [
        {
          id: "enterprise",
          label: "Startups & Software B2B / SaaS",
          pct: 35,
          color: "#2563eb",
          desc: "CEO en BCFort (6+ años), CTO en Cornerstone, Senior Scientist en FASTechMedia (San Diego), Country Manager en Tribe."
        },
        {
          id: "industry",
          label: "Energía, Salud & Cadena de Suministro",
          pct: 25,
          color: "#c5a880",
          desc: "Gemelos digitales para plataformas petroleras (UFRJ), trazabilidad de insumos médicos y trazabilidad de hidrógeno verde."
        },
        {
          id: "policy",
          label: "Políticas Públicas & Organismos Globales",
          pct: 20,
          color: "#1d4ed8",
          desc: "World Economic Forum (WEF - C4IR), Alcaldía de Medellín (Soporte con LLMs), CONPES de IA en Colombia y MinCIT."
        },
        {
          id: "academy",
          label: "Investigación Avanzada & Docencia Superior",
          pct: 20,
          color: "#64748b",
          desc: "Profesor en Universidad de Antioquia y EIA, investigador postdoctoral en UNAM, UIS y UFRJ, formación de cientos de ingenieros en IA."
        }
      ]
    },
    pillarsSection: {
      eyebrow: "Capacidades Estratégicas para Empresas",
      title: "¿Por qué Edison Montoya como CTO o Líder de Tecnología e IA?",
      desc: "Una combinación excepcional de rigor científico, mentalidad ejecutiva de producto y capacidad práctica para llevar modelos de IA del laboratorio a producción masiva."
    },
    pillars: [
      {
        icon: "brain",
        title: "Arquitectura e Implementación de IA & LLMs",
        desc: "Capacidad demostrada para diseñar y poner en producción soluciones basadas en Large Language Models para soporte técnico empresarial, analítica semántica y modelos fundacionales con integración segura de datos corporativos.",
        tags: ["LLMs", "RAG", "Prompt Engineering", "Fine-Tuning", "Python / PyTorch"]
      },
      {
        icon: "eye",
        title: "Visión por Computador & Analítica de Video",
        desc: "Amplia trayectoria desarrollando modelos de reconocimiento facial, lectura automatizada OCR, compresión de video optimizada en San Diego y procesamiento de datos geoespaciales para la industria.",
        tags: ["OpenCV", "Deep Learning", "Video Compression", "OCR", "Geospatial Data"]
      },
      {
        icon: "cloud",
        title: "Liderazgo CTO & Arquitectura Cloud Escalable",
        desc: "Dirección integral de equipos de ingeniería, diseño de arquitecturas cloud nativas en AWS, microservicios, DevOps y gestión de presupuestos tecnológicos con más de $310k USD asegurados en infraestructura.",
        tags: ["AWS Cloud", "Docker / K8s", "Microservicios", "CI/CD", "Cost Optimization"]
      },
      {
        icon: "twin",
        title: "Gemelos Digitales & Sistemas de Alta Complejidad",
        desc: "Desarrollo de Gemelos Digitales (Digital Twins) para plataformas petroleras e infraestructura crítica (UFRJ Brasil), acoplando simulación física, sensores en tiempo real y modelos predictivos de datos.",
        tags: ["Digital Twins", "IoT Data", "Simulaciones Numéricas", "Oil & Gas", "UFRJ"]
      },
      {
        icon: "chain",
        title: "Trazabilidad Crítica & Criptografía Empresarial",
        desc: "Liderazgo como Chief Blockchain Officer en WEF y CTO en startups Web3: desarrollo de soluciones de trazabilidad para insumos médicos, hidrógeno verde, votaciones seguras y cadenas de suministro complejas.",
        tags: ["Ethereum", "Smart Contracts", "Supply Chain", "Green Hydrogen", "WEF Guide"]
      },
      {
        icon: "briefcase",
        title: "Gobernanza, Políticas Públicas & Visión C-Suite",
        desc: "Co-creador del AI C-Suite Toolkit del Foro Económico Mundial, autor de recomendaciones de política pública de IA y datos para el gobierno de Colombia y asesor de juntas directivas internacionales.",
        tags: ["WEF AI Toolkit", "CONPES IA", "Data Governance", "Advisory Board", "Tech Policy"]
      }
    ],
    experienceSection: {
      eyebrow: "Trayectoria Profesional",
      title: "Experiencia en Liderazgo y Tecnología",
      desc: "Historial de roles de alto impacto en dirección tecnológica, startups, aceleradoras globales y formulación de políticas internacionales."
    },
    filterTabs: [
      { id: "all", label: "Todas las Posiciones" },
      { id: "cto", label: "CTO & Liderazgo Ejecutivo" },
      { id: "ai", label: "IA & Ciencia de Datos" },
      { id: "blockchain", label: "Blockchain & Web3" },
      { id: "research", label: "Investigación & Academia" }
    ],
    experiences: [
      {
        category: "cto",
        role: "Director Ejecutivo (CEO & Co-fundador)",
        org: "BCFort",
        location: "Medellín, Colombia",
        period: "Nov 2018 - Dic 2024 (6+ años)",
        desc: "Empresa de base tecnológica especializada en el desarrollo de productos de software de última generación en Inteligencia Artificial, Blockchain, Big Data, Cloud y Analítica Avanzada.",
        bullets: [
          "Liderazgo integral de la estrategia tecnológica, equipo de desarrolladores y entrega de proyectos para sectores de energía, agroindustria, salud y minería.",
          "Desarrollo y puesta en producción de sistemas propietarios de IA para Reconocimiento Facial, Lectura OCR automatizada, procesamiento de datos geoespaciales y Analítica de Video.",
          "Implementación de soluciones de trazabilidad empresarial de tokens y documentos en Ethereum, así como sistemas de votación electrónica segura en blockchain.",
          "Atracción y gestión de más de $310,000 USD en subsidios de infraestructura tecnológica de AWS ($100k), IBM ($110k) y Google Startups ($100k)."
        ],
        stack: ["Inteligencia Artificial", "AWS Cloud", "Visión por Computador", "Ethereum", "Big Data", "Liderazgo de Equipos"]
      },
      {
        category: "ai",
        role: "Asesor Técnico en Inteligencia Artificial y Datos",
        org: "Distrito Especial de Ciencia, Tecnología e Innovación de Medellín (Alcaldía)",
        location: "Medellín, Colombia",
        period: "Feb 2024 - May 2024",
        desc: "Asesoría estratégica a la Secretaría de Innovación Digital en la modernización de servicios ciudadanos y plataformas de datos.",
        bullets: [
          "Diseño e implementación de proyectos de Modelos de Lenguaje Grande (LLMs) orientados al soporte técnico automatizado y atención inteligente a los usuarios.",
          "Formulación de arquitecturas de analítica de datos institucionales para la toma de decisiones basada en evidencia en la administración pública.",
          "Liderazgo técnico en la estructuración de iniciativas de adopción de IA generativa."
        ],
        stack: ["LLMs", "Procesamiento de Lenguaje Natural", "Analítica de Datos", "Estrategia de Innovación"]
      },
      {
        category: "research",
        role: "Investigador - Gemelos Digitales (Digital Twins)",
        org: "Universidade Federal do Rio de Janeiro (UFRJ)",
        location: "Río de Janeiro, Brasil",
        period: "Oct 2024 - Ene 2025",
        desc: "Investigación aplicada de vanguardia en plataformas marinas de petróleo en Brasil.",
        bullets: [
          "Desarrollo y modelado de Gemelos Digitales (Digital Twins) para plataformas petroleras costa afuera, integrando simulación numérica y monitoreo en tiempo real.",
          "Optimización de modelos predictivos y algoritmos de alta fidelidad para mantenimiento predictivo y monitoreo de integridad estructural."
        ],
        stack: ["Digital Twins", "Simulación Numérica", "Oil & Gas", "Modelado Predictivo", "HPC"]
      },
      {
        category: "cto",
        role: "Country Manager - Región LATAM",
        org: "Tribe Accelerator",
        location: "Singapur / LATAM",
        period: "Ene 2022 - Sep 2023",
        desc: "Aceleradora global de tecnologías de vanguardia respaldada por entidades gubernamentales de Singapur y compañías Fortune 500.",
        bullets: [
          "Supervisión integral de las operaciones de la oficina regional en LATAM: desarrollo de negocios, programas de aceleración, marketing/RR.PP. y relaciones con inversionistas.",
          "Desarrollo e implementación de estrategias de posicionamiento para escalar la adopción de tecnologías de frontera en ecosistemas emergentes.",
          "Gestión del desempeño y metas comerciales con fondos de inversión internacionales y corporaciones multinacionales."
        ],
        stack: ["Gestión Internacional", "Venture Capital", "Ecosistema Blockchain", "Desarrollo de Negocios"]
      },
      {
        category: "cto",
        role: "Chief Technology Officer (CTO)",
        org: "CORNERSTONE Blockchain Solutions S.A.S",
        location: "Medellín, Colombia",
        period: "Jun 2021 - Dic 2021",
        desc: "Firma especializada en desarrollo de soluciones corporativas descentralizadas.",
        bullets: [
          "Dirección técnica del equipo de desarrollo, arquitectura de software y gobernanza de código.",
          "Administración de infraestructura en la nube bajo Amazon Web Services (AWS) con estándares de alta disponibilidad.",
          "Diseño y despliegue de una plataforma blockchain para la trazabilidad y certificación inmutable de insumos y suministros médicos durante la pandemia."
        ],
        stack: ["Liderazgo CTO", "AWS Cloud", "Arquitectura de Software", "Trazabilidad Médica", "Blockchain"]
      },
      {
        category: "blockchain",
        role: "Chief Blockchain Officer & Consultor de Políticas de IA",
        org: "World Economic Forum (WEF) - Centro para la Cuarta Revolución Industrial (C4IR)",
        location: "Medellín, Colombia",
        period: "Nov 2019 - Dic 2020",
        desc: "Organismo internacional de referencia global en políticas de tecnología y transformación digital.",
        bullets: [
          "Chief Blockchain Officer (Jul 2020 - Dic 2020): Liderazgo técnico en la revisión del estado del arte, elaboración de protocolos y recomendaciones de políticas públicas para gobiernos e industrias.",
          "Autor de la 'Guía para la Adopción de Blockchain en las Cadenas de Suministro' y la 'Herramienta para Medir el Nivel de Preparación para Usar Blockchain'.",
          "Consultor de Políticas de IA (Nov 2019 - Dic 2019): Autor único del documento de recomendaciones de política pública para MinCIT: 'Tecnologías 4.0 y Uso de Datos: Nueva economía para la productividad y competitividad en mipymes'.",
          "Colaborador en el toolkit global 'Empowering AI Leadership: An AI C-Suite Toolkit' del World Economic Forum, orientado a tomadores de decisión C-Level."
        ],
        stack: ["Políticas Públicas de IA", "Gobernanza de Datos", "WEF C-Suite Toolkit", "Blockchain", "Cadena de Suministro"]
      },
      {
        category: "blockchain",
        role: "Business Intelligence Lead & Blockchain Architect",
        org: "Weenjoy Sharing Community",
        location: "Morelia, México",
        period: "Feb 2018 - Oct 2019",
        desc: "Compañía de tecnología de impacto en fidelización y servicios colaborativos.",
        bullets: [
          "Liderazgo en el desarrollo de tableros avanzados de Inteligencia de Negocios (BI) para analítica de comportamiento de usuarios.",
          "Diseño arquitectónico y desarrollo del core de dos soluciones blockchain: trazabilidad de documentos y sistema de puntos de fidelidad."
        ],
        stack: ["Business Intelligence", "Arquitectura Blockchain", "Smart Contracts", "Analítica de Datos"]
      },
      {
        category: "ai",
        role: "Senior Scientist - Algoritmos de Video",
        org: "FASTechMedia Inc",
        location: "Greater San Diego Area, EE. UU.",
        period: "Mar 2017 - May 2018",
        desc: "Empresa de I+D enfocada en algoritmos de compresión y transmisión ultra-eficiente de video.",
        bullets: [
          "Investigación y desarrollo de modelos de analítica de video y optimización de compresión matemática.",
          "Desarrollo de software y gestión de pipelines de procesamiento masivo en Amazon Web Services (AWS).",
          "Liderazgo de iniciativas técnicas de codificación y streaming adaptativo."
        ],
        stack: ["Compresión de Video", "Video Analytics", "AWS", "Algoritmos Numéricos", "Python / C++"]
      },
      {
        category: "research",
        role: "Profesor Universitario (IA, Blockchain, Algoritmos, HPC)",
        org: "Universidad de Antioquia & Universidad EIA",
        location: "Medellín & Envigado, Colombia",
        period: "Feb 2017 - Presente",
        desc: "Formación de ingenieros y científicos en tecnologías de vanguardia e investigación en IA y sistemas complejos.",
        bullets: [
          "Cursos impartidos: Inteligencia Artificial, Redes Neuronales Artificiales, Algoritmos, Computación de Alto Rendimiento (HPC), Computación Paralela (CUDA), Blockchain, Bases de Datos, Relatividad General.",
          "Investigador principal en IA: Acceso privilegiado de investigación a ChatGPT previo a su lanzamiento público (inicios de 2022).",
          "Receptor de Beca de Investigación NVIDIA (2017) en arquitecturas de cómputo en GPUs.",
          "Investigación en comprensión de sistemas financieros tradicionales y cripto mediante Teoría de Grafos en Universidad EIA (2025)."
        ],
        stack: ["Docencia Superior", "NVIDIA GPU Grant", "Deep Learning", "Sistemas Complejos", "Teoría de Grafos"]
      }
    ],
    researchSection: {
      eyebrow: "Investigación Avanzada & Postdoctorados",
      title: "Rigor Científico y Cómputo de Alto Rendimiento",
      desc: "3 Postdoctorados y trayectoria en instituciones de prestigio internacional resolviendo problemas físicos y matemáticos altamente complejos.",
      postdocs: [
        {
          inst: "Universidade Federal do Rio de Janeiro (UFRJ), Brasil (2024 - 2025)",
          topic: "Gemelos Digitales (Digital Twins) para Plataformas Petroleras",
          desc: "Modelado numérico y monitoreo predictivo de estructuras costa afuera acopladas a sensores de datos."
        },
        {
          inst: "Universidad Industrial de Santander (UIS), Colombia (2015 - 2017)",
          topic: "Física Numérica & Astrofísica Relativista",
          desc: "Investigación sobre formación, evolución y estabilidad en acreción de agujeros negros supermasivos en Anti de Sitter mediante relatividad numérica."
        },
        {
          inst: "Universidad Nacional Autónoma de México (UNAM), México (2013 - 2015)",
          topic: "Ecuación de Vlasov y Halos de Materia Oscura",
          desc: "Estudio analítico-numérico de no homogeneidades de materia oscura y paralelización con MPI para simulación de nubes moleculares galácticas."
        }
      ]
    },
    grantsSection: {
      eyebrow: "Financiamiento de Infraestructura",
      title: "Subvenciones y Grants de Tecnología Ganados",
      desc: "Más de $310,000 USD asegurados en competencia directa con los gigantes tecnológicos globales para respaldar proyectos de IA y Cloud.",
      grants: [
        { provider: "AWS (Amazon Web Services)", amount: "$100,000 USD", label: "Cloud Infrastructure & Compute Grant" },
        { provider: "IBM Cloud", amount: "$110,000 USD", label: "Enterprise AI & Cloud Resources Grant" },
        { provider: "Google for Startups", amount: "$100,000 USD", label: "AI Cloud Infrastructure & Scale Grant" },
        { provider: "NVIDIA Research", amount: "GPU Hardware Grant", label: "High Performance AI & Deep Learning Grant" }
      ]
    },
    educationSection: {
      eyebrow: "Formación de Posgrado",
      title: "Educación & Especializaciones",
      degrees: [
        {
          degree: "Doctor en Ciencias (Ph.D.) en Física",
          honors: "Grado con Mención de Honor",
          inst: "Universidad Michoacana de San Nicolás de Hidalgo (UMSNH), México",
          year: "2009 - 2013",
          focus: "Resolución numérica de la singularidad del Big Bang mediante Cosmología Cuántica de Lazos (Loop Quantum Cosmology)."
        },
        {
          degree: "Maestría en Física (M.Sc.)",
          honors: "",
          inst: "Universidad Michoacana de San Nicolás de Hidalgo (UMSNH), México",
          year: "2009 - 2011",
          focus: "Estudios de estabilidad de objetos astrofísicos mediante simulaciones numéricas avanzadas."
        },
        {
          degree: "Diploma de Posgrado en Física Teórica y Matemática",
          honors: "Beca de Excelencia ICTP-CLAF",
          inst: "Instituto Balseiro, Centro Atómico Bariloche, Argentina",
          year: "2007 - 2008",
          focus: "Formación de élite en física matemática, métodos analíticos y mecánica cuántica avanzada."
        },
        {
          degree: "Licenciatura / Pregrado en Física",
          honors: "Grado con Honores & Mejor Estudiante",
          inst: "Universidad de Antioquia, Colombia",
          year: "2001 - 2007",
          focus: "Bases sólidas en matemáticas, programación científica y modelado físico."
        }
      ]
    },
    publicationsSection: {
      eyebrow: "Producción Intelectual",
      title: "Publicaciones Científicas & Políticas Públicas",
      desc: "Artículos en revistas científicas indexadas de alto impacto y documentos estratégicos de política pública multilateral.",
      papers: [
        {
          tag: "ENERGÍA & BLOCKCHAIN (2024)",
          title: "Green Hydrogen Traceability Using Blockchain",
          journal: "Revista de Energía de Latinoamérica y el Caribe (ISSN 2631-2522)"
        },
        {
          tag: "DEEP LEARNING (2022)",
          title: "Subaging in underparametrized Deep Neural Networks",
          journal: "Machine Learning: Science and Technology (IOP Publishing)"
        },
        {
          tag: "POLÍTICAS PÚBLICAS WEF (2019)",
          title: "Tecnologías 4.0 Y Uso De Datos: Nueva economía para la productividad y competitividad en pymes",
          journal: "World Economic Forum - C4IR & MinCIT (Autor Único)"
        },
        {
          tag: "ESTRATEGIA C-SUITE WEF (2020)",
          title: "Empowering AI Leadership: An AI C-Suite Toolkit",
          journal: "World Economic Forum (Colaborador con líderes ejecutivos de IA)"
        },
        {
          tag: "CADENAS DE SUMINISTRO WEF (2019)",
          title: "Guía Para La Adopción De Blockchain En Las Cadenas De Suministro & Herramienta de Preparación",
          journal: "World Economic Forum - C4IR (Líder de Equipo)"
        },
        {
          tag: "FÍSICA COMPUTACIONAL (2017)",
          title: "Description of the evolution of inhomogeneities on a Dark Matter halo with the Vlasov equation",
          journal: "General Relativity and Gravitation (Springer)"
        },
        {
          tag: "COSMOLOGÍA CUÁNTICA (2011)",
          title: "Coherent semiclassical states for loop quantum cosmology",
          journal: "Physical Review D (American Physical Society)"
        }
      ]
    },
    awardsSection: {
      eyebrow: "Reconocimientos",
      title: "Premios, Distinciones & Becas",
      list: [
        { year: "2019", name: "Tercer Lugar - Pitch Competition", entity: "Academia-Industry Training, Suiza" },
        { year: "2014-2016", name: "Distinción 'Investigador Nacional'", entity: "Sistema Nacional de Investigadores (SNI-CONACyT), México" },
        { year: "2015", name: "Profesor Ad Honorem", entity: "Universidad Industrial de Santander, Colombia" },
        { year: "2013", name: "Tesis Doctoral con Mención de Honor", entity: "Universidad Michoacana de San Nicolás de Hidalgo, México" },
        { year: "2007", name: "Tesis de Licenciatura con Mención de Honor", entity: "Universidad de Antioquia, Colombia" },
        { year: "2006", name: "Matrícula de Honor (Mejor Estudiante de la Carrera)", entity: "Universidad de Antioquia, Colombia" },
        { year: "2007-2015", name: "Becas de Posgrado y Posdoctorales", entity: "Balseiro (Argentina), CONACYT (México), Colciencias (Colombia)" }
      ]
    },
    advisorySection: {
      eyebrow: "Liderazgo en la Comunidad",
      title: "Juntas Asesoras & Charlas Magistrales",
      desc: "Participación activa en consejos estratégicos de startups, mentorías de negocios y conferencista internacional en IA y tecnologías emergentes.",
      advisoryCards: [
        { role: "Asesor Técnico CONPES IA", org: "Gobierno de Colombia / DNP / MinTIC", desc: "Revisión técnica del documento de política pública CONPES de IA para Colombia." },
        { role: "Miembro del Consejo Asesor", org: "Weenjoy.com (México) & Circolo.life (Dubái)", desc: "Orientación en arquitectura de datos, tokenización y estrategias tecnológicas." },
        { role: "Mentor de Startups", org: "Incubadora StartUPC (Lima, Perú)", desc: "Mentoría a fundadores en viabilidad técnica de IA y modelos descentralizados." },
        { role: "Árbitro Científico (Referee)", org: "Classical and Quantum Gravity (IOP)", desc: "Evaluador de artículos de investigación física y computacional de frontera." }
      ]
    },
    cta: {
      title: "¿Buscando un CTO o Líder de Tecnología e Inteligencia Artificial?",
      desc: "Disponible para conversar sobre retos de arquitectura, adopción de IA empresarial, escalamiento de producto y posiciones de liderazgo tecnológico.",
      btnEmail: "Enviar Correo a eamonto@gmail.com",
      btnLinkedIn: "Conectar en LinkedIn",
      btnCopy: "Copiar Correo",
      copiedNotice: "¡Correo copiado al portapapeles! (eamonto@gmail.com)"
    },
    footer: {
      text: "Edison Montoya, Ph.D. • Chief Technology Officer & AI Strategist • Medellín, Colombia",
      rights: "Sitio web profesional optimizado con Antigravity & Vibe Coding."
    }
  },

  // -------------------------------------------------------------------
  // ENGLISH DATA DICTIONARY
  // -------------------------------------------------------------------
  en: {
    nav: {
      brandTitle: "CTO & AI Leader",
      modeSummary: "⚡ Executive Summary",
      modeFull: "📄 Full CV",
      printCV: "Print / PDF",
      contact: "Contact"
    },
    hero: {
      statusBadge: "Available for Executive Roles & Advisory",
      roleBadge: "Ph.D. in Physics • Former CEO & CTO",
      name: "Edison Montoya",
      title: "Chief Technology Officer (CTO) & AI Technical Strategist",
      lead: "Technology executive and Ph.D. with 14+ years of experience in data-driven solutions, high-performance scientific computing, and technology leadership. As the ecosystem evolved into modern Artificial Intelligence, I have spearheaded the design and deployment of applied AI systems (LLMs for user support, Computer Vision, Digital Twins), scalable cloud architectures on AWS, and verifiable blockchain traceability. Proven former CEO & CTO with extensive experience leading cross-functional engineering teams, advising the World Economic Forum (WEF) on tech policy, and securing over $310,000 USD in competitive infrastructure grants.",
      pills: [
        { text: "🤖 LLMs & Generative AI for Support", class: "glow-royal" },
        { text: "👁️ Computer Vision & Video Analytics", class: "glow-habano" },
        { text: "🏢 CTO Leadership & C-Suite Strategy", class: "glow-royal" },
        { text: "☁️ AWS Cloud & Microservices", class: "glow-slate" },
        { text: "🌐 Digital Twins (Oil Platforms)", class: "glow-habano" },
        { text: "🔗 Enterprise Blockchain & Traceability", class: "glow-royal" },
        { text: "⚡ High-Performance Scientific Computing (HPC)", class: "glow-slate" }
      ],
      btnContact: "Get in Touch via Email",
      btnLinkedIn: "LinkedIn Profile",
      btnViewCV: "View Full Comprehensive CV",
      btnCharts: "Explore Expertise Charts"
    },
    metrics: [
      {
        val: "14+",
        color: "gradient-royal",
        label: "Years of Experience",
        sub: "In data-driven systems, computing & tech leadership"
      },
      {
        val: "$310K+",
        color: "gradient-habano",
        label: "Technology Grants Won",
        sub: "AWS ($100k), IBM ($110k), Google ($100k), NVIDIA"
      },
      {
        val: "10+",
        color: "gradient-royal",
        label: "Production Systems",
        sub: "Applied AI, data analytics, OCR, LLMs & Traceability Shipped"
      },
      {
        val: "PhD",
        color: "gradient-slate",
        label: "Degree with Honors",
        sub: "Cosmology & Computational Numerical Physics"
      }
    ],
    chartsSection: {
      eyebrow: "Experience Breakdown",
      title: "Where is My Core Expertise Focused?",
      desc: "Visual distribution of over 14 years driving technology innovation, data governance, and high-concurrency production systems."
    },
    chart1: {
      title: "Technical Domain & Leadership Focus",
      subtitle: "Effort and production delivery across technical domains",
      centerLabel: "Core Focus",
      segments: [
        {
          id: "ai",
          label: "Applied AI & Deep Learning",
          pct: 35,
          color: "#2563eb",
          desc: "LLMs, Computer Vision (OCR, facial recognition, video analytics), Digital Twins, PyTorch/TensorFlow, NVIDIA GPU Grant, and early ChatGPT research access (2022)."
        },
        {
          id: "cto",
          label: "CTO Leadership & Cloud Architecture",
          pct: 25,
          color: "#c5a880",
          desc: "AWS enterprise architecture, engineering leadership, business alignment, and managing $310k+ in cloud infrastructure."
        },
        {
          id: "blockchain",
          label: "Enterprise Blockchain & Traceability",
          pct: 20,
          color: "#1d4ed8",
          desc: "Chief Blockchain Officer at WEF C4IR, Tribe Singapore Country Manager, Ethereum smart contracts, medical supplies & green hydrogen traceability."
        },
        {
          id: "hpc",
          label: "High Performance Computing & Physics",
          pct: 20,
          color: "#64748b",
          desc: "Ph.D. & Postdoctoral research, parallel computing with CUDA GPUs, MPI, C/C++, high-order numerical simulations and complex systems."
        }
      ]
    },
    chart2: {
      title: "Business & Industry Impact Sectors",
      subtitle: "Deployment sectors and client footprint",
      centerLabel: "Key Sectors",
      segments: [
        {
          id: "enterprise",
          label: "Tech Startups & B2B SaaS",
          pct: 35,
          color: "#2563eb",
          desc: "CEO at BCFort (6+ yrs), CTO at Cornerstone, Senior Scientist at FASTechMedia (San Diego), Country Manager at Tribe Singapore."
        },
        {
          id: "industry",
          label: "Energy, Healthcare & Supply Chain",
          pct: 25,
          color: "#c5a880",
          desc: "Digital Twins for offshore oil platforms (UFRJ), medical supplies traceability, and green hydrogen cryptographic verification."
        },
        {
          id: "policy",
          label: "Public Policy & Global Organizations",
          pct: 20,
          color: "#1d4ed8",
          desc: "World Economic Forum (WEF C4IR), Medellín City Innovation Dept (LLMs for user support), National AI CONPES & MinCIT Colombia."
        },
        {
          id: "academy",
          label: "Advanced Research & Tech Talent Training",
          pct: 20,
          color: "#64748b",
          desc: "Professor at Universidad de Antioquia & EIA, Postdoc at UNAM, UIS, UFRJ, educating hundreds of software engineers in AI & HPC."
        }
      ]
    },
    pillarsSection: {
      eyebrow: "Strategic Value for Enterprises",
      title: "Why Edison Montoya as CTO or Head of Technology & AI?",
      desc: "An exceptional blend of scientific mathematical rigor, product mindset, and hands-on ability to take AI models from proof-of-concept to resilient production."
    },
    pillars: [
      {
        icon: "brain",
        title: "AI & LLM Architecture & Deployment",
        desc: "Demonstrated ability to design and ship Large Language Model systems for enterprise user support, semantic analytics, and private corporate data integrations.",
        tags: ["LLMs", "RAG", "Prompt Engineering", "Fine-Tuning", "Python / PyTorch"]
      },
      {
        icon: "eye",
        title: "Computer Vision & Video Analytics",
        desc: "Extensive background building facial recognition systems, high-accuracy OCR readers, video compression algorithms in San Diego, and geospatial data analytics.",
        tags: ["OpenCV", "Deep Learning", "Video Compression", "OCR", "Geospatial Data"]
      },
      {
        icon: "cloud",
        title: "CTO Leadership & Resilient Cloud Architecture",
        desc: "Full leadership of engineering teams, cloud-native AWS architectures, microservices, DevOps pipelines, and securing over $310k USD in tech infrastructure funding.",
        tags: ["AWS Cloud", "Docker / K8s", "Microservices", "CI/CD", "Cost Optimization"]
      },
      {
        icon: "twin",
        title: "Digital Twins & High-Stakes Complex Systems",
        desc: "Engineering digital twins for offshore petroleum platforms (UFRJ Brazil), coupling numerical simulations, live sensor telemetry, and predictive maintenance models.",
        tags: ["Digital Twins", "IoT Telemetry", "Numerical Physics", "Oil & Gas", "UFRJ"]
      },
      {
        icon: "chain",
        title: "Mission-Critical Traceability & Cryptography",
        desc: "Leadership as Chief Blockchain Officer at WEF and CTO at Web3 startups: built traceability platforms for medical supplies, green hydrogen, and verified supply chains.",
        tags: ["Ethereum", "Smart Contracts", "Supply Chain", "Green Hydrogen", "WEF Framework"]
      },
      {
        icon: "briefcase",
        title: "Data Governance & C-Suite Executive Toolkit",
        desc: "Collaborator on the World Economic Forum's AI C-Suite Toolkit, author of national AI and data policy recommendations, and trusted advisor to international corporate boards.",
        tags: ["WEF AI Toolkit", "CONPES AI", "Data Governance", "Advisory Board", "Tech Policy"]
      }
    ],
    experienceSection: {
      eyebrow: "Professional Track Record",
      title: "Executive & Engineering Experience",
      desc: "Proven timeline of leadership across technology corporations, startups, global accelerators, and multilateral policy institutions."
    },
    filterTabs: [
      { id: "all", label: "All Positions" },
      { id: "cto", label: "CTO & Executive Leadership" },
      { id: "ai", label: "AI & Data Science" },
      { id: "blockchain", label: "Blockchain & Web3" },
      { id: "research", label: "Research & Academia" }
    ],
    experiences: [
      {
        category: "cto",
        role: "Chief Executive Officer (CEO & Co-founder)",
        org: "BCFort",
        location: "Medellín, Colombia",
        period: "Nov 2018 - Dec 2024 (6+ years)",
        desc: "Advanced software engineering company specializing in artificial intelligence, blockchain, cloud architectures, big data, and high-impact analytics.",
        bullets: [
          "Led strategic technology roadmap, developer squads, and end-to-end delivery for clients in energy, mining, healthcare, and agribusiness.",
          "Architected and deployed production AI solutions: Facial Recognition, automated OCR pipelines, geospatial data ingestion, and Video Analytics.",
          "Engineered Ethereum-based token and document verification platforms and transparent electronic voting architectures.",
          "Secured and managed over $310,000 USD in competitive infrastructure grants from AWS ($100k), IBM Cloud ($110k), and Google for Startups ($100k)."
        ],
        stack: ["Artificial Intelligence", "AWS Cloud", "Computer Vision", "Ethereum", "Big Data", "Engineering Leadership"]
      },
      {
        category: "ai",
        role: "Technical Advisor - Artificial Intelligence & Data",
        org: "Distrito Especial de Ciencia, Tecnología e Innovación de Medellín",
        location: "Medellín, Colombia",
        period: "Feb 2024 - May 2024",
        desc: "Strategic advisory for the Digital Innovation Secretariat on modernizing civic technical support and data infrastructure.",
        bullets: [
          "Architected and deployed Large Language Models (LLMs) to provide automated, 24/7 technical support and guidance to citizen platforms.",
          "Designed comprehensive data analytics architectures to enable evidence-based public resource allocation.",
          "Provided technical leadership in evaluating generative AI platforms and data privacy compliance."
        ],
        stack: ["LLMs", "Natural Language Processing", "Data Analytics", "AI Policy", "Leadership"]
      },
      {
        category: "research",
        role: "Postdoctoral Researcher - Digital Twins",
        org: "Federal University of Rio de Janeiro (UFRJ)",
        location: "Rio de Janeiro, Brazil",
        period: "Oct 2024 - Jan 2025",
        desc: "Cutting-edge applied research for offshore oil platforms in Brazil.",
        bullets: [
          "Developed high-fidelity Digital Twin architectures for petroleum platforms, integrating continuous telemetry data with real-time physical models.",
          "Optimized simulation routines and predictive analytics for early detection of structural anomalies."
        ],
        stack: ["Digital Twins", "Numerical Simulation", "Oil & Gas", "Predictive Analytics", "HPC"]
      },
      {
        category: "cto",
        role: "Country Manager - LATAM Region",
        org: "Tribe Accelerator",
        location: "Singapore / LATAM",
        period: "Jan 2022 - Sep 2023",
        desc: "Global frontier technology accelerator backed by international government agencies, Fortune 500 enterprises, and premier venture funds.",
        bullets: [
          "Directed all operations in the LATAM regional office including business development, accelerator cohort execution, PR, and investor relations.",
          "Executed high-impact market entry strategies establishing Tribe as a foremost institutional leader in frontier technology.",
          "Tracked and exceeded regional targets connecting enterprise sponsors with high-potential tech founders."
        ],
        stack: ["Global Management", "Venture Acceleration", "Blockchain Ecosystem", "Business Development"]
      },
      {
        category: "cto",
        role: "Chief Technology Officer (CTO)",
        org: "CORNERSTONE Blockchain Solutions S.A.S",
        location: "Medellín, Colombia",
        period: "Jun 2021 - Dec 2021",
        desc: "Enterprise blockchain engineering and verifiable infrastructure provider.",
        bullets: [
          "Executive leadership of the engineering division, software development lifecycles, and code audits.",
          "Cloud management and resilient infrastructure setup on Amazon Web Services (AWS).",
          "Architected and deployed a blockchain-backed solution for the immutable traceability and audit trail of essential medical supplies."
        ],
        stack: ["CTO Leadership", "AWS Cloud", "System Architecture", "Medical Traceability", "Smart Contracts"]
      },
      {
        category: "blockchain",
        role: "Chief Blockchain Officer & AI Policy Consultant",
        org: "World Economic Forum (WEF) - Centre for the Fourth Industrial Revolution (C4IR)",
        location: "Medellín, Colombia",
        period: "Nov 2019 - Dec 2020",
        desc: "Premier international forum for public-private technological cooperation and digital transformation frameworks.",
        bullets: [
          "Chief Blockchain Officer (Jul 2020 - Dec 2020): Spearheaded review of frontier technologies, drafting public policy protocols and strategic roadmaps for governments and industries.",
          "Author of the 'Guide for Blockchain Adoption in Supply Chains' and the 'Readiness Assessment Tool for Supply Chain Blockchain'.",
          "AI Policy Consultant (Nov 2019 - Dec 2019): Sole author of the public policy recommendations for the Ministry of Commerce: '4.0 Technologies & Data Utilization: New Economy for SME Productivity'.",
          "Contributed to the WEF's 'Empowering AI Leadership: An AI C-Suite Toolkit', guiding C-level decision makers on responsible AI deployment."
        ],
        stack: ["AI Public Policy", "Data Governance", "WEF AI Toolkit", "Blockchain Frameworks", "Supply Chains"]
      },
      {
        category: "blockchain",
        role: "Business Intelligence Lead & Blockchain Architect",
        org: "Weenjoy Sharing Community",
        location: "Morelia, Mexico",
        period: "Feb 2018 - Oct 2019",
        desc: "Collaborative loyalty and verified data sharing ecosystem.",
        bullets: [
          "Led development of real-time Business Intelligence dashboards for executive KPIs and user retention analytics.",
          "Architected and built the core protocols for document traceability and cryptographic reward point distribution."
        ],
        stack: ["Business Intelligence", "Blockchain Architecture", "Smart Contracts", "Analytics"]
      },
      {
        category: "ai",
        role: "Senior Scientist - Video Compression Algorithms",
        org: "FASTechMedia Inc",
        location: "Greater San Diego Area, USA",
        period: "Mar 2017 - May 2018",
        desc: "R&D corporation pioneering high-efficiency video compression and streaming analytics.",
        bullets: [
          "Researched and implemented advanced video analytics and mathematical compression algorithms.",
          "Developed cloud-native scalable data processing pipelines on Amazon Web Services (AWS).",
          "Provided technical leadership in high-throughput video processing workflows."
        ],
        stack: ["Video Compression", "Video Analytics", "AWS Cloud", "Mathematical Physics", "Python / C++"]
      },
      {
        category: "research",
        role: "University Professor (AI, Blockchain, Algorithms, HPC)",
        org: "Universidad de Antioquia & Universidad EIA",
        location: "Medellín & Envigado, Colombia",
        period: "Feb 2017 - Present",
        desc: "Educating upcoming software architects while driving applied research in artificial intelligence and complex networks.",
        bullets: [
          "Courses taught: Artificial Intelligence, Artificial Neural Networks, Algorithms, High Performance Computing (HPC), Parallel Computing (CUDA), Blockchain, Databases, General Relativity.",
          "AI Research: Early research access to ChatGPT prior to public release (early 2022).",
          "Recipient of NVIDIA GPU Research Grant (2017) for accelerated computing.",
          "Researching traditional and crypto financial market dynamics using Graph Theory at EIA University (2025)."
        ],
        stack: ["Higher Education", "NVIDIA GPU Grant", "Deep Learning", "Complex Systems", "Graph Theory"]
      }
    ],
    researchSection: {
      eyebrow: "Advanced Research & Postdocs",
      title: "Scientific Rigor & High-Performance Computing",
      desc: "3 Postdoctoral appointments solving computationally intensive physical and mathematical problems.",
      postdocs: [
        {
          inst: "Federal University of Rio de Janeiro (UFRJ), Brazil (2024 - 2025)",
          topic: "Digital Twins for Petroleum Platforms",
          desc: "Real-time telemetry and numerical physics modeling for structural integrity of offshore oil rigs."
        },
        {
          inst: "Industrial University of Santander (UIS), Colombia (2015 - 2017)",
          topic: "Numerical Physics & Relativistic Astrophysics",
          desc: "Numerical relativity investigation of supermassive black hole formation and accretion in Anti de Sitter space-time."
        },
        {
          inst: "National Autonomous University of Mexico (UNAM), Mexico (2013 - 2015)",
          topic: "Vlasov Equation & Dark Matter Inhomogeneities",
          desc: "Large-scale MPI parallelization for molecular cloud radiation feedback and dark matter halo dynamics."
        }
      ]
    },
    grantsSection: {
      eyebrow: "Infrastructure Funding",
      title: "Technology Grants & Infrastructure Won",
      desc: "Over $310,000 USD secured competitively from top cloud and AI infrastructure providers.",
      grants: [
        { provider: "AWS (Amazon Web Services)", amount: "$100,000 USD", label: "Cloud Infrastructure & Compute Grant" },
        { provider: "IBM Cloud", amount: "$110,000 USD", label: "Enterprise AI & Cloud Resources Grant" },
        { provider: "Google for Startups", amount: "$100,000 USD", label: "AI Cloud Infrastructure & Scale Grant" },
        { provider: "NVIDIA Research", amount: "GPU Hardware Grant", label: "High Performance AI & Deep Learning Grant" }
      ]
    },
    educationSection: {
      eyebrow: "Academic Foundation",
      title: "Education & Post-Graduate Degrees",
      degrees: [
        {
          degree: "Doctor of Philosophy (Ph.D.) in Physics",
          honors: "Degree with Honors",
          inst: "University of Michoacan (UMSNH), Mexico",
          year: "2009 - 2013",
          focus: "Numerical singularity resolution of the Big Bang via Loop Quantum Cosmology techniques."
        },
        {
          degree: "Master's Degree in Physics (M.Sc.)",
          honors: "",
          inst: "University of Michoacan (UMSNH), Mexico",
          year: "2009 - 2011",
          focus: "Stability analysis of astrophysical bodies using high-precision numerical simulations."
        },
        {
          degree: "Postgraduate Diploma in Theoretical & Mathematical Physics",
          honors: "ICTP-CLAF Fellowship",
          inst: "Balseiro Institute, Bariloche Atomic Center, Argentina",
          year: "2007 - 2008",
          focus: "Elite training in mathematical physics, analytical mechanics, and quantum theory."
        },
        {
          degree: "Bachelor's Degree in Physics",
          honors: "Degree with Honors & Best Student Award",
          inst: "University of Antioquia, Colombia",
          year: "2001 - 2007",
          focus: "Foundations in computational physics, scientific programming, and advanced mathematics."
        }
      ]
    },
    publicationsSection: {
      eyebrow: "Intellectual Contributions",
      title: "Refereed Publications & Global Policy Guidelines",
      desc: "Peer-reviewed research in top journals alongside multilateral policy papers with the World Economic Forum.",
      papers: [
        {
          tag: "ENERGY & BLOCKCHAIN (2024)",
          title: "Green Hydrogen Traceability Using Blockchain",
          journal: "Revista de Energía de Latinoamérica y el Caribe (ISSN 2631-2522)"
        },
        {
          tag: "DEEP LEARNING (2022)",
          title: "Subaging in underparametrized Deep Neural Networks",
          journal: "Machine Learning: Science and Technology (IOP Publishing)"
        },
        {
          tag: "WEF PUBLIC POLICY (2019)",
          title: "4.0 Technologies and Data Utilization: New Economy for SME Productivity and Competitiveness",
          journal: "World Economic Forum - C4IR & MinCIT (Sole Author)"
        },
        {
          tag: "WEF C-SUITE TOOLKIT (2020)",
          title: "Empowering AI Leadership: An AI C-Suite Toolkit",
          journal: "World Economic Forum (Collaborator with C-Level AI leaders)"
        },
        {
          tag: "WEF SUPPLY CHAIN (2019)",
          title: "Guide for Blockchain Adoption in Supply Chains & Readiness Assessment Tool",
          journal: "World Economic Forum - C4IR (Team Lead)"
        },
        {
          tag: "COMPUTATIONAL PHYSICS (2017)",
          title: "Description of the evolution of inhomogeneities on a Dark Matter halo with the Vlasov equation",
          journal: "General Relativity and Gravitation (Springer)"
        },
        {
          tag: "QUANTUM COSMOLOGY (2011)",
          title: "Coherent semiclassical states for loop quantum cosmology",
          journal: "Physical Review D (American Physical Society)"
        }
      ]
    },
    awardsSection: {
      eyebrow: "Recognition",
      title: "Awards, Honors & Fellowships",
      list: [
        { year: "2019", name: "Third Place - Pitch Competition", entity: "Academia-Industry Training, Switzerland" },
        { year: "2014-2016", name: "National Researcher Distinction (SNI)", entity: "National System of Researchers, Mexico" },
        { year: "2015", name: "Professor Ad Honorem", entity: "Industrial University of Santander, Colombia" },
        { year: "2013", name: "Ph.D. Dissertation Award with Honors", entity: "University of Michoacan (UMSNH), Mexico" },
        { year: "2007", name: "Bachelor Dissertation with Honors", entity: "University of Antioquia, Colombia" },
        { year: "2006", name: "Best Student Recognition (Top Academic Honor)", entity: "University of Antioquia, Colombia" },
        { year: "2007-2015", name: "Postdoctoral & Doctoral Fellowships", entity: "Balseiro (Argentina), CONACYT (Mexico), Colciencias (Colombia)" }
      ]
    },
    advisorySection: {
      eyebrow: "Industry & Community Leadership",
      title: "Advisory Boards & Keynotes",
      desc: "Active advisor to technology startups, mentor for founders, and international keynote speaker in applied AI.",
      advisoryCards: [
        { role: "National AI CONPES Advisor", org: "Government of Colombia / DNP / MinTIC", desc: "Technical review team for Colombia's National AI public policy framework." },
        { role: "Advisory Board Member", org: "Weenjoy.com (Mexico) & Circolo.life (Dubai)", desc: "Guiding enterprise data strategies, decentralized architectures, and venture growth." },
        { role: "Startup Mentor", org: "StartUPC Incubator (Lima, Peru)", desc: "Mentoring high-growth startups on scalable AI architecture and technology roadmaps." },
        { role: "Scientific Peer Referee", org: "Classical and Quantum Gravity (IOP)", desc: "Peer reviewer for international computational and theoretical physics papers." }
      ]
    },
    cta: {
      title: "Looking for an Executive CTO or AI Strategic Leader?",
      desc: "Available to discuss enterprise AI architecture, high-performance systems, technology turnarounds, and executive technical leadership.",
      btnEmail: "Email eamonto@gmail.com",
      btnLinkedIn: "Connect on LinkedIn",
      btnCopy: "Copy Email Address",
      copiedNotice: "Email copied to clipboard! (eamonto@gmail.com)"
    },
    footer: {
      text: "Edison Montoya, Ph.D. • Chief Technology Officer & AI Strategist • Medellín, Colombia",
      rights: "Executive portfolio engineered with Antigravity & Vibe Coding."
    }
  }
};

// --- APPLICATION STATE ---
let currentLang = localStorage.getItem('cv_lang') || 'es';
let currentMode = 'summary'; // 'summary' or 'full'
let activeFilter = 'all';

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initViewModes();
  initCopyActions();
  renderAll();
});

// --- LANGUAGE CONTROLS ---
function initLanguage() {
  const btnEs = document.getElementById('lang-es');
  const btnEn = document.getElementById('lang-en');

  btnEs.addEventListener('click', () => switchLanguage('es'));
  btnEn.addEventListener('click', () => switchLanguage('en'));
}

function switchLanguage(lang) {
  if (currentLang === lang) return;
  currentLang = lang;
  localStorage.setItem('cv_lang', lang);

  document.getElementById('lang-es').classList.toggle('active', lang === 'es');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');

  // Smooth re-render
  document.body.style.opacity = '0.9';
  setTimeout(() => {
    renderAll();
    document.body.style.opacity = '1';
  }, 100);
}

// --- VIEW MODE CONTROLS ---
function initViewModes() {
  const btnSummary = document.getElementById('mode-summary');
  const btnFull = document.getElementById('mode-full');

  if (btnSummary) {
    btnSummary.addEventListener('click', (e) => {
      e.preventDefault();
      switchMode('summary');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (btnFull) {
    btnFull.addEventListener('click', (e) => {
      e.preventDefault();
      switchMode('full');
    });
  }
}

function switchMode(mode) {
  currentMode = mode;
  const btnSummary = document.getElementById('mode-summary');
  const btnFull = document.getElementById('mode-full');
  if (btnSummary) btnSummary.classList.toggle('active', mode === 'summary');
  if (btnFull) btnFull.classList.toggle('active', mode === 'full');

  const detailedOnlySections = document.querySelectorAll('.detailed-cv-only');
  detailedOnlySections.forEach(sec => {
    sec.style.display = (mode === 'full') ? 'block' : 'none';
  });

  const summaryBtnIndicator = document.getElementById('hero-view-cv-btn');
  if (summaryBtnIndicator) {
    summaryBtnIndicator.style.display = (mode === 'full') ? 'none' : 'inline-flex';
  }

  // Re-render timeline to adjust count (top strategic in summary, all in full)
  renderExperienceTimeline();

  // Scroll smoothly according to mode
  if (mode === 'full') {
    const expSec = document.getElementById('experience-section');
    if (expSec) expSec.scrollIntoView({ behavior: 'smooth' });
  } else if (mode === 'summary') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// --- CLIPBOARD ACTIONS ---
function initCopyActions() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast-notice');

  if (copyBtn && toast) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('eamonto@gmail.com').then(() => {
        const text = cvData[currentLang].cta.copiedNotice;
        document.getElementById('toast-text').textContent = text;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3200);
      });
    });
  }

  // Print button
  const printBtn = document.getElementById('print-cv-btn');
  if (printBtn) {
    printBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Ensure all sections are visible for printing
      const detailedOnly = document.querySelectorAll('.detailed-cv-only');
      detailedOnly.forEach(sec => sec.style.display = 'block');
      window.print();
      // Restore previous state if needed
      if (currentMode === 'summary') {
        detailedOnly.forEach(sec => sec.style.display = 'none');
      }
    });
  }
}

// --- MAIN RENDER DISPATCHER ---
function renderAll() {
  const data = cvData[currentLang];

  // 1. Navbar
  document.getElementById('nav-brand-title').textContent = data.nav.brandTitle;
  document.getElementById('mode-summary-text').textContent = data.nav.modeSummary;
  document.getElementById('mode-full-text').textContent = data.nav.modeFull;
  document.getElementById('print-cv-text').textContent = data.nav.printCV;

  // 2. Hero Section
  document.getElementById('hero-status-text').textContent = data.hero.statusBadge;
  document.getElementById('hero-role-badge').textContent = data.hero.roleBadge;
  document.getElementById('hero-name').textContent = data.hero.name;
  document.getElementById('hero-title').textContent = data.hero.title;
  document.getElementById('hero-lead').textContent = data.hero.lead;

  const heroPillsContainer = document.getElementById('hero-pills');
  heroPillsContainer.innerHTML = data.hero.pills.map(p => `
    <span class="pill-item ${p.class}">${p.text}</span>
  `).join('');

  document.getElementById('hero-contact-btn').textContent = data.hero.btnContact;
  document.getElementById('hero-linkedin-btn').textContent = data.hero.btnLinkedIn;
  const heroViewCvBtn = document.getElementById('hero-view-cv-btn');
  if (heroViewCvBtn) {
    heroViewCvBtn.textContent = data.hero.btnViewCV;
    heroViewCvBtn.onclick = () => switchMode('full');
  }

  // 3. Metrics Bar
  const metricsContainer = document.getElementById('metrics-container');
  metricsContainer.innerHTML = data.metrics.map(m => `
    <div class="metric-card">
      <div class="metric-header">
        <div class="metric-value ${m.color}">${m.val}</div>
      </div>
      <div class="metric-label">${m.label}</div>
      <div class="metric-sub">${m.sub}</div>
    </div>
  `).join('');

  // 4. Charts Section Headers
  document.getElementById('charts-eyebrow').textContent = data.chartsSection.eyebrow;
  document.getElementById('charts-title').textContent = data.chartsSection.title;
  document.getElementById('charts-desc').textContent = data.chartsSection.desc;

  // Render SVG Donut Charts
  renderDonutChart('chart-1-wrapper', 'chart-1-legend', 'chart-1-detail', data.chart1);
  renderDonutChart('chart-2-wrapper', 'chart-2-legend', 'chart-2-detail', data.chart2);

  // 5. CTO & AI Strategic Pillars
  document.getElementById('pillars-eyebrow').textContent = data.pillarsSection.eyebrow;
  document.getElementById('pillars-title').textContent = data.pillarsSection.title;
  document.getElementById('pillars-desc').textContent = data.pillarsSection.desc;

  const pillarsContainer = document.getElementById('pillars-container');
  pillarsContainer.innerHTML = data.pillars.map(p => `
    <div class="pillar-card">
      <div class="pillar-icon-box">
        ${getPillarIconSvg(p.icon)}
      </div>
      <h3 class="pillar-title">${p.title}</h3>
      <p class="pillar-desc">${p.desc}</p>
      <div class="pillar-tags">
        ${p.tags.map(t => `<span class="pillar-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');

  // 6. Experience Timeline & Filters
  document.getElementById('exp-eyebrow').textContent = data.experienceSection.eyebrow;
  document.getElementById('exp-title').textContent = data.experienceSection.title;
  document.getElementById('exp-desc').textContent = data.experienceSection.desc;

  renderExperienceFilters(data.filterTabs);
  renderExperienceTimeline();

  // 7. Research & Postdocs (Detailed CV)
  document.getElementById('res-eyebrow').textContent = data.researchSection.eyebrow;
  document.getElementById('res-title').textContent = data.researchSection.title;
  document.getElementById('res-desc').textContent = data.researchSection.desc;

  const resContainer = document.getElementById('postdocs-container');
  resContainer.innerHTML = data.researchSection.postdocs.map(pd => `
    <div class="edu-item">
      <div class="edu-degree">${pd.topic}</div>
      <div class="edu-institution">${pd.inst}</div>
      <div class="edu-focus">${pd.desc}</div>
    </div>
  `).join('');

  // 8. Grants Section
  document.getElementById('grants-eyebrow').textContent = data.grantsSection.eyebrow;
  document.getElementById('grants-title').textContent = data.grantsSection.title;
  document.getElementById('grants-desc').textContent = data.grantsSection.desc;

  const grantsContainer = document.getElementById('grants-container');
  grantsContainer.innerHTML = data.grantsSection.grants.map(g => `
    <div class="grant-item">
      <div class="grant-provider">
        <span>${g.provider}</span>
        <span class="grant-amount">${g.amount}</span>
      </div>
      <div class="grant-label">${g.label}</div>
    </div>
  `).join('');

  // 9. Education Section
  document.getElementById('edu-eyebrow').textContent = data.educationSection.eyebrow;
  document.getElementById('edu-title').textContent = data.educationSection.title;

  const eduContainer = document.getElementById('edu-container');
  eduContainer.innerHTML = data.educationSection.degrees.map(d => `
    <div class="edu-item">
      <div class="edu-degree">
        ${d.degree}
        ${d.honors ? `<span class="edu-honors">${d.honors}</span>` : ''}
      </div>
      <div class="edu-institution">${d.inst}</div>
      <div class="edu-year">${d.year}</div>
      <div class="edu-focus">${d.focus}</div>
    </div>
  `).join('');

  // 10. Publications Section
  document.getElementById('pub-eyebrow').textContent = data.publicationsSection.eyebrow;
  document.getElementById('pub-title').textContent = data.publicationsSection.title;
  document.getElementById('pub-desc').textContent = data.publicationsSection.desc;

  const pubContainer = document.getElementById('publications-container');
  pubContainer.innerHTML = data.publicationsSection.papers.map(p => `
    <div class="pub-item">
      <span class="pub-tag">${p.tag}</span>
      <div class="pub-title">${p.title}</div>
      <div class="pub-journal">${p.journal}</div>
    </div>
  `).join('');

  // 11. Honors & Awards
  document.getElementById('awards-eyebrow').textContent = data.awardsSection.eyebrow;
  document.getElementById('awards-title').textContent = data.awardsSection.title;

  const awardsContainer = document.getElementById('awards-container');
  awardsContainer.innerHTML = data.awardsSection.list.map(a => `
    <div class="pub-item">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="pub-title">${a.name}</span>
        <span class="timeline-period" style="font-size:0.75rem;">${a.year}</span>
      </div>
      <div class="pub-journal">${a.entity}</div>
    </div>
  `).join('');

  // 12. Advisory & Keynotes
  document.getElementById('adv-eyebrow').textContent = data.advisorySection.eyebrow;
  document.getElementById('adv-title').textContent = data.advisorySection.title;
  document.getElementById('adv-desc').textContent = data.advisorySection.desc;

  const advContainer = document.getElementById('advisory-container');
  advContainer.innerHTML = data.advisorySection.advisoryCards.map(c => `
    <div class="grant-item">
      <div class="grant-provider" style="color:var(--secondary-light); font-size:0.95rem;">
        ${c.role}
      </div>
      <div style="font-size:0.9rem; font-weight:600; color:#fff; margin:0.25rem 0;">${c.org}</div>
      <div class="grant-label">${c.desc}</div>
    </div>
  `).join('');

  // 13. CTA Section
  document.getElementById('cta-title').textContent = data.cta.title;
  document.getElementById('cta-desc').textContent = data.cta.desc;
  document.getElementById('cta-email-btn').textContent = data.cta.btnEmail;
  document.getElementById('cta-linkedin-btn').textContent = data.cta.btnLinkedIn;
  document.getElementById('copy-email-btn').textContent = data.cta.btnCopy;

  // 14. Footer
  document.getElementById('footer-text').textContent = data.footer.text;
  document.getElementById('footer-rights').textContent = data.footer.rights;

  // Apply current mode visibility
  switchMode(currentMode);
}

// --- RENDER DYNAMIC SVG DONUT CHARTS ---
function renderDonutChart(wrapperId, legendId, detailId, chartConfig) {
  const wrapper = document.getElementById(wrapperId);
  const legend = document.getElementById(legendId);
  const detail = document.getElementById(detailId);
  if (!wrapper || !legend || !detail) return;

  const segments = chartConfig.segments;
  const radius = 80;
  const circumference = 2 * Math.PI * radius; // ~502.65

  let accumulatedPercent = 0;
  let svgPaths = [];

  segments.forEach((seg, index) => {
    const strokeDasharray = `${(seg.pct / 100) * circumference} ${circumference}`;
    const strokeDashoffset = -((accumulatedPercent / 100) * circumference);
    accumulatedPercent += seg.pct;

    svgPaths.push(`
      <circle 
        class="donut-segment" 
        id="${wrapperId}-seg-${index}"
        cx="110" 
        cy="110" 
        r="${radius}" 
        stroke="${seg.color}" 
        style="stroke-dasharray: ${strokeDasharray}; stroke-dashoffset: ${strokeDashoffset};"
        data-index="${index}"
      />
    `);
  });

  wrapper.innerHTML = `
    <svg class="svg-donut" viewBox="0 0 220 220">
      ${svgPaths.join('')}
    </svg>
    <div class="chart-center-info">
      <div class="center-percent" id="${wrapperId}-pct">${segments[0].pct}%</div>
      <div class="center-label" id="${wrapperId}-lbl">${segments[0].label}</div>
    </div>
  `;

  // Render Legend
  legend.innerHTML = segments.map((seg, index) => `
    <div class="legend-item ${index === 0 ? 'highlighted' : ''}" id="${wrapperId}-leg-${index}" data-index="${index}">
      <span class="legend-color-dot" style="background-color: ${seg.color}; box-shadow: 0 0 8px ${seg.color}"></span>
      <div class="legend-content">
        <div class="legend-top">
          <span class="legend-title">${seg.label}</span>
          <span class="legend-pct">${seg.pct}%</span>
        </div>
        <div class="legend-desc">${seg.desc.substring(0, 75)}...</div>
      </div>
    </div>
  `).join('');

  // Initial Detail Card Content
  detail.innerHTML = `
    <strong style="color:${segments[0].color};">${segments[0].label} (${segments[0].pct}%)</strong>: 
    ${segments[0].desc}
  `;

  // Interactive Hover Handler
  function highlightSegment(idx) {
    segments.forEach((s, i) => {
      const segElem = document.getElementById(`${wrapperId}-seg-${i}`);
      const legElem = document.getElementById(`${wrapperId}-leg-${i}`);
      if (segElem) segElem.classList.toggle('highlighted', i === idx);
      if (legElem) legElem.classList.toggle('highlighted', i === idx);
    });

    const target = segments[idx];
    document.getElementById(`${wrapperId}-pct`).textContent = `${target.pct}%`;
    document.getElementById(`${wrapperId}-lbl`).textContent = target.label;
    detail.style.borderLeftColor = target.color;
    detail.innerHTML = `
      <strong style="color:${target.color};">${target.label} (${target.pct}%)</strong>: 
      ${target.desc}
    `;
  }

  // Attach event listeners
  segments.forEach((_, index) => {
    const segElem = document.getElementById(`${wrapperId}-seg-${index}`);
    const legElem = document.getElementById(`${wrapperId}-leg-${index}`);

    if (segElem) {
      segElem.addEventListener('mouseenter', () => highlightSegment(index));
    }
    if (legElem) {
      legElem.addEventListener('mouseenter', () => highlightSegment(index));
      legElem.addEventListener('click', () => highlightSegment(index));
    }
  });
}

// --- EXPERIENCE FILTER TABS ---
function renderExperienceFilters(tabs) {
  const container = document.getElementById('experience-filters');
  if (!container) return;

  container.innerHTML = tabs.map(tab => `
    <button 
      class="filter-tab ${activeFilter === tab.id ? 'active' : ''}" 
      data-filter="${tab.id}"
      type="button"
    >
      ${tab.label}
    </button>
  `).join('');

  container.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.getAttribute('data-filter');
      container.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderExperienceTimeline();
    });
  });
}

// --- EXPERIENCE TIMELINE RENDER ---
function renderExperienceTimeline() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  const data = cvData[currentLang];
  let items = data.experiences;

  if (activeFilter !== 'all') {
    items = items.filter(item => item.category === activeFilter);
  }

  // In summary mode, show top high-impact roles, in full mode show all
  if (currentMode === 'summary') {
    items = items.slice(0, 5);
  }

  container.innerHTML = items.map(exp => `
    <article class="timeline-card" data-category="${exp.category}">
      <div class="timeline-top">
        <div class="timeline-role-info">
          <h3 class="timeline-role">${exp.role}</h3>
          <div class="timeline-org">${exp.org}</div>
        </div>
        <div class="timeline-meta">
          <span class="timeline-period">${exp.period}</span>
          <span class="timeline-location">${exp.location}</span>
        </div>
      </div>
      <p class="timeline-desc">${exp.desc}</p>
      <ul class="timeline-bullets">
        ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
      <div class="timeline-stack">
        ${exp.stack.map(s => `<span class="stack-pill">${s}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

// --- ICONS HELPER ---
function getPillarIconSvg(name) {
  switch (name) {
    case 'brain':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-4.54z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-4.54z"/></svg>`;
    case 'eye':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`;
    case 'cloud':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`;
    case 'twin':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="8" x="2" y="2" rx="2"/><rect width="8" height="8" x="14" y="2" rx="2"/><rect width="8" height="8" x="8" y="14" rx="2"/><path d="M6 10v4"/><path d="M18 10v4"/></svg>`;
    case 'chain':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="m14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
    case 'briefcase':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`;
    default:
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
  }
}
