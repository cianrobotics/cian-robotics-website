// Traducciones del sitio CIAN Robotics (español / inglés).
// Uso en HTML: <elemento data-i18n="clave">Texto en español</elemento>
// Atributos: data-i18n-alt="clave" (alt de imágenes), data-i18n-aria="clave" (aria-label).
// El idioma elegido se recuerda en el navegador y se puede forzar con ?lang=en o ?lang=es.

const CIAN_TEXTOS = {
  es: {
    // Comunes
    'meta.titulo.inicio': 'CIAN Robotics',
    'meta.titulo.cursos': 'Cursos y kits | CIAN Robotics',
    'meta.titulo.nosotros': 'Nosotros | CIAN Robotics',
    'nav.principal': 'Principal',
    'nav.cursos': 'Cursos y kits',
    'nav.nosotros': 'Nosotros',
    'nav.idioma': 'Cambiar idioma',
    'logo.alt': 'Logotipo de CIAN Robotics',
    'footer.derechos': '© 2025 CIAN Robotics - Todos los derechos reservados.',
    'whatsapp.flotante': 'Escríbenos por WhatsApp',

    // Principal
    'hero.titulo': 'Automatización Inteligente para la Industria',
    'hero.texto': 'CIAN Robotics: haciendo la automatización más fácil y eficiente.',
    'inicio.objetivos.titulo': 'Objetivos y Visión',
    'inicio.objetivos.h3': 'Objetivos',
    'inicio.objetivos.texto': 'Acercar la robótica y la automatización a estudiantes, makers y empresas con robots accesibles, kits educativos y cursos prácticos desarrollados en México.',
    'inicio.objetivos.alt': 'Brazo robótico CIAN',
    'inicio.vision.h3': 'Visión',
    'inicio.vision.texto': 'Ser un referente en robótica accesible en Latinoamérica: que cualquier persona pueda aprender, construir y automatizar, desde el salón de clases hasta la línea de producción.',
    'inicio.vision.alt': 'Brazos robóticos en una línea de producción',
    'inicio.oferta.titulo': 'Nuestras soluciones',
    'inicio.oferta.intro': 'Desarrollamos tecnología para automatizar procesos y enseñar robótica de forma práctica:',
    'inicio.oferta.cursos': 'Cursos y kits de robótica y control.',
    'inicio.oferta.carga': 'Estaciones de carga para autos eléctricos.',
    'inicio.oferta.baterias': 'Baterías para bicicletas eléctricas y scooters.',
    'inicio.oferta.brazos': 'Brazos robóticos.',
    'inicio.oferta.cnc': 'Máquinas CNC para corte láser y fresado.',
    'inicio.cta': 'Ver cursos y kits',

    // Cursos y kits
    'cursos.hero.titulo': 'Cursos y kits de robótica',
    'cursos.hero.texto': 'Aprende construyendo: elige tu kit, arma tu robot y domina su programación.',
    'cursos.filtro.todos': 'Todos',
    'cursos.filtro.brazo': 'Brazo robótico',
    'cursos.filtro.pid': 'Control PID',
    'cursos.brazo.titulo': 'Brazo robótico Neutrino',
    'cursos.brazo.texto': 'Un brazo robótico de escritorio con servomotores, ideal para aprender cinemática, programación en Arduino y control desde Python.',
    'cursos.brazo.alt': 'Brazo robótico Neutrino',
    'cursos.pid.titulo': 'Control PID de motor a pasos',
    'cursos.pid.texto': 'Controla con precisión un motor NEMA 17 usando un sensor magnético AS5600 y un controlador PID programado por ti.',
    'cursos.pid.alt': 'Kit de control PID con motor NEMA 17',
    'cursos.nota': 'Precios en pesos mexicanos (MXN). Todas las compras se realizan por WhatsApp.',
    'tienda.ver': 'Ver detalles',
    'tienda.cerrar': 'Cerrar',
    'tienda.incluye': 'Lo que incluye',
    'tienda.caracteristicas': 'Características',
    'tienda.comprar': 'Comprar',
    'tienda.whatsapp.titulo': 'Las compras se realizan por WhatsApp',
    'tienda.whatsapp.texto': 'Te atendemos personalmente para confirmar disponibilidad, envío y forma de pago. Al continuar se abrirá nuestro chat con tu pedido ya escrito.',
    'tienda.whatsapp.boton': 'Ir a WhatsApp',
    'tienda.whatsapp.volver': 'Seguir viendo',
    'tienda.whatsapp.mensaje': 'Hola CIAN Robotics, quiero comprar: {producto} ({precio}).',
    'tienda.moneda': 'MXN',

    // Nosotros
    'nosotros.hero.titulo': 'Nosotros',
    'nosotros.hero.texto': 'Somos un equipo de makers apasionados por la robótica, el control y la manufactura.',
    'nosotros.quienes.titulo': '¿Quiénes somos?',
    'nosotros.quienes.texto': 'CIAN Robotics nace de la curiosidad por construir: diseñamos, imprimimos y programamos nuestros propios robots, y compartimos lo que aprendemos a través de cursos y kits para que más personas puedan hacerlo también.',
    'nosotros.makers.titulo': 'Makers',
    'nosotros.makers.texto': 'Personas que ya construyeron con nuestros kits y cursos.',
    'nosotros.equipo.titulo': 'Nosotros con los robots',
    'nosotros.equipo.texto': 'Algunos momentos del taller y de nuestros prototipos.',
    'nosotros.foto.pendiente': 'Foto próximamente',
    'nosotros.foto.prototipo1': 'Prototipo de brazo robótico en el taller',
    'nosotros.foto.prototipo2': 'Prototipo de brazo robótico',
    'nosotros.foto.neutrino': 'Brazo robótico Neutrino',
    'nosotros.redes.titulo': 'Síguenos y escríbenos',
    'nosotros.redes.texto': 'Compartimos proyectos, avances y tutoriales en nuestras redes. Para compras o dudas, escríbenos por WhatsApp.',
    'nosotros.redes.whatsapp': 'WhatsApp',
    'nosotros.redes.instagram': 'Instagram',
    'nosotros.redes.tiktok': 'TikTok'
  },

  en: {
    // Common
    'meta.titulo.inicio': 'CIAN Robotics',
    'meta.titulo.cursos': 'Courses & kits | CIAN Robotics',
    'meta.titulo.nosotros': 'About us | CIAN Robotics',
    'nav.principal': 'Home',
    'nav.cursos': 'Courses & kits',
    'nav.nosotros': 'About us',
    'nav.idioma': 'Change language',
    'logo.alt': 'CIAN Robotics logo',
    'footer.derechos': '© 2025 CIAN Robotics - All rights reserved.',
    'whatsapp.flotante': 'Message us on WhatsApp',

    // Home
    'hero.titulo': 'Smart Automation for Industry',
    'hero.texto': 'CIAN Robotics: making automation easier and more efficient.',
    'inicio.objetivos.titulo': 'Goals and Vision',
    'inicio.objetivos.h3': 'Goals',
    'inicio.objetivos.texto': 'Bring robotics and automation closer to students, makers and companies through affordable robots, educational kits and hands-on courses developed in Mexico.',
    'inicio.objetivos.alt': 'CIAN robotic arm',
    'inicio.vision.h3': 'Vision',
    'inicio.vision.texto': 'Become a benchmark for accessible robotics in Latin America, so anyone can learn, build and automate, from the classroom to the production line.',
    'inicio.vision.alt': 'Robotic arms on a production line',
    'inicio.oferta.titulo': 'Our solutions',
    'inicio.oferta.intro': 'We develop technology to automate processes and teach robotics hands-on:',
    'inicio.oferta.cursos': 'Robotics and control courses and kits.',
    'inicio.oferta.carga': 'Charging stations for electric cars.',
    'inicio.oferta.baterias': 'Batteries for e-bikes and scooters.',
    'inicio.oferta.brazos': 'Robotic arms.',
    'inicio.oferta.cnc': 'CNC machines for laser cutting and milling.',
    'inicio.cta': 'See courses and kits',

    // Courses & kits
    'cursos.hero.titulo': 'Robotics courses and kits',
    'cursos.hero.texto': 'Learn by building: choose your kit, assemble your robot and master its programming.',
    'cursos.filtro.todos': 'All',
    'cursos.filtro.brazo': 'Robotic arm',
    'cursos.filtro.pid': 'PID control',
    'cursos.brazo.titulo': 'Neutrino robotic arm',
    'cursos.brazo.texto': 'A desktop robotic arm driven by servo motors, ideal for learning kinematics, Arduino programming and control from Python.',
    'cursos.brazo.alt': 'Neutrino robotic arm',
    'cursos.pid.titulo': 'Stepper motor PID control',
    'cursos.pid.texto': 'Precisely control a NEMA 17 motor using an AS5600 magnetic sensor and a PID controller you program yourself.',
    'cursos.pid.alt': 'PID control kit with NEMA 17 motor',
    'cursos.nota': 'Prices in Mexican pesos (MXN). All purchases are made through WhatsApp.',
    'tienda.ver': 'View details',
    'tienda.cerrar': 'Close',
    'tienda.incluye': "What's included",
    'tienda.caracteristicas': 'Features',
    'tienda.comprar': 'Buy',
    'tienda.whatsapp.titulo': 'Purchases are made through WhatsApp',
    'tienda.whatsapp.texto': 'We assist you personally to confirm availability, shipping and payment method. Continuing will open our chat with your order already written.',
    'tienda.whatsapp.boton': 'Go to WhatsApp',
    'tienda.whatsapp.volver': 'Keep browsing',
    'tienda.whatsapp.mensaje': 'Hi CIAN Robotics, I would like to buy: {producto} ({precio}).',
    'tienda.moneda': 'MXN',

    // About us
    'nosotros.hero.titulo': 'About us',
    'nosotros.hero.texto': 'We are a team of makers passionate about robotics, control and manufacturing.',
    'nosotros.quienes.titulo': 'Who we are',
    'nosotros.quienes.texto': 'CIAN Robotics was born from the urge to build: we design, 3D print and program our own robots, and we share what we learn through courses and kits so more people can do it too.',
    'nosotros.makers.titulo': 'Makers',
    'nosotros.makers.texto': 'People who have already built with our kits and courses.',
    'nosotros.equipo.titulo': 'Us with the robots',
    'nosotros.equipo.texto': 'Some moments from the workshop and our prototypes.',
    'nosotros.foto.pendiente': 'Photo coming soon',
    'nosotros.foto.prototipo1': 'Robotic arm prototype in the workshop',
    'nosotros.foto.prototipo2': 'Robotic arm prototype',
    'nosotros.foto.neutrino': 'Neutrino robotic arm',
    'nosotros.redes.titulo': 'Follow us and get in touch',
    'nosotros.redes.texto': 'We share projects, progress and tutorials on our social media. For purchases or questions, message us on WhatsApp.',
    'nosotros.redes.whatsapp': 'WhatsApp',
    'nosotros.redes.instagram': 'Instagram',
    'nosotros.redes.tiktok': 'TikTok'
  }
};

const CianIdioma = (function () {
  const IDIOMAS = ['es', 'en'];
  const CLAVE = 'cian-idioma';
  let actual = 'es';

  function leerGuardado() {
    try {
      const param = new URLSearchParams(window.location.search).get('lang');
      if (IDIOMAS.includes(param)) return param;
      const guardado = window.localStorage.getItem(CLAVE);
      if (IDIOMAS.includes(guardado)) return guardado;
    } catch (e) { /* almacenamiento no disponible */ }
    return 'es';
  }

  function t(clave, valores) {
    let texto = (CIAN_TEXTOS[actual] && CIAN_TEXTOS[actual][clave]) || CIAN_TEXTOS.es[clave] || clave;
    if (valores) {
      Object.keys(valores).forEach(k => { texto = texto.replace('{' + k + '}', valores[k]); });
    }
    return texto;
  }

  function aplicar() {
    document.documentElement.lang = actual;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.alt = t(el.dataset.i18nAlt); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    const titulo = document.body.dataset.titulo;
    if (titulo) document.title = t(titulo);
    document.querySelectorAll('.idioma-btn').forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === actual));
    });
    document.dispatchEvent(new CustomEvent('cian:idioma', { detail: { idioma: actual } }));
  }

  function cambiar(idioma) {
    if (!IDIOMAS.includes(idioma)) return;
    actual = idioma;
    try { window.localStorage.setItem(CLAVE, idioma); } catch (e) { /* sin almacenamiento */ }
    aplicar();
  }

  actual = leerGuardado();

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.idioma-btn').forEach(btn => {
      btn.addEventListener('click', () => cambiar(btn.dataset.lang));
    });
    aplicar();
  });

  return { t, cambiar, get actual() { return actual; } };
})();
