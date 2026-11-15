// Catálogo de la tienda "Cursos y kits".
// Para cambiar precios, textos o imágenes solo edita la lista PRODUCTOS.
// Cada texto tiene versión en español (es) y en inglés (en).

const WHATSAPP_NUMERO = '526463877829'; // https://wa.me/+526463877829

const CATEGORIAS = {
  brazo: { es: 'Brazo robótico', en: 'Robotic arm' },
  pid: { es: 'Control PID', en: 'PID control' }
};

// Contenido que se repite entre productos
const CURSO_BRAZO = {
  es: 'Curso en video con las matemáticas más importantes de un brazo robótico (espacio de trabajo, cinemática directa e inversa, matrices de rotación) y cómo programar esas ecuaciones en Arduino y Python',
  en: 'Video course on the most important math of a robotic arm (workspace, forward and inverse kinematics, rotation matrices) and how to program those equations in Arduino and Python'
};
const KIT_BRAZO = {
  es: 'Brazo robótico Neutrino (piezas impresas en 3D)',
  en: 'Neutrino robotic arm (3D printed parts)'
};
const MOTORES_BRAZO = { es: '4 servomotores', en: '4 servo motors' };
const ARDUINO = { es: 'Arduino UNO R3 (compatible) con cable USB', en: 'Arduino UNO R3 (compatible) with USB cable' };
const ELIMINADOR = { es: 'Eliminador de voltaje de 5 V / 3 A con conector USB-C', en: '5 V / 3 A USB-C power adapter' };
const JUMPERS = { es: 'Jumpers (cables de conexión)', en: 'Jumper wires' };
const TORNILLOS = { es: 'Tornillos', en: 'Screws' };
const PIEZAS_BRAZO = [KIT_BRAZO, MOTORES_BRAZO, ELIMINADOR, JUMPERS, TORNILLOS];

const CURSO_PID = {
  es: 'Curso en video "Control PID de motor a pasos": la matemática detrás de un controlador PID aplicada a la vida real, para controlar la posición de un motor y convertirlo en un servomotor robusto de 360°',
  en: '"Stepper motor PID control" video course: the math behind a PID controller applied to real life, to control a motor\'s position and turn it into a robust 360° servo motor'
};
const MOTOR = { es: 'Motor a pasos NEMA 17', en: 'NEMA 17 stepper motor' };
const DRIVER = { es: 'Driver TB6600', en: 'TB6600 driver' };
const SENSOR = { es: 'Sensor magnético AS5600 (encoder)', en: 'AS5600 magnetic sensor (encoder)' };
const FUENTE = { es: 'Fuente de voltaje', en: 'Power supply' };
const PIEZAS_PID = [MOTOR, SENSOR, DRIVER, FUENTE];

const SPECS_BRAZO = [
  { es: ['Servomotores', '2× MG996R (engranes metálicos), 1× MG90S y 1× SG90'], en: ['Servo motors', '2× MG996R (metal gears), 1× MG90S and 1× SG90'] },
  { es: ['Estructura', 'Piezas impresas en 3D'], en: ['Structure', '3D printed parts'] },
  { es: ['Giro de la base', '180°'], en: ['Base rotation', '180°'] },
  { es: ['Alimentación', '5 V / 3 A'], en: ['Power', '5 V / 3 A'] },
  { es: ['Programación', 'Arduino (C++) y Python'], en: ['Programming', 'Arduino (C++) and Python'] }
];
const TEMARIO_BRAZO = { es: ['Temario', 'Espacio de trabajo · Cinemática directa · Cinemática inversa · Matrices de rotación · Programación de las ecuaciones en Arduino y Python'], en: ['Syllabus', 'Workspace · Forward kinematics · Inverse kinematics · Rotation matrices · Programming the equations in Arduino and Python'] };

const SPECS_PID = [
  { es: ['Motor', 'NEMA 17 a pasos'], en: ['Motor', 'NEMA 17 stepper'] },
  { es: ['Driver', 'TB6600'], en: ['Driver', 'TB6600'] },
  { es: ['Sensor', 'AS5600, encoder magnético de 12 bits'], en: ['Sensor', 'AS5600, 12-bit magnetic encoder'] },
  { es: ['Control', 'PID de posición en lazo cerrado'], en: ['Control', 'Closed-loop PID position control'] },
  { es: ['Resultado', 'Servomotor robusto de 360°'], en: ['Result', 'Robust 360° servo motor'] },
  { es: ['Interfaz', 'Arduino y Python'], en: ['Interface', 'Arduino and Python'] }
];
const TEMARIO_PID = { es: ['Temario', 'La matemática del controlador PID · Motor NEMA 17 · Sensor AS5600 · Control de posición del motor · Interfaz en Arduino y Python'], en: ['Syllabus', 'The math of the PID controller · NEMA 17 motor · AS5600 sensor · Motor position control · Arduino and Python interface'] };

const PRODUCTOS = [
  {
    id: 'brazo-curso-arduino', categoria: 'brazo', precio: 2400, curso: true, arduino: true,
    imagen: 'img/cursos/brazo-curso-arduino.webp',
    nombre: { es: 'Curso + kit Brazo robótico + Arduino', en: 'Course + Robotic arm kit + Arduino' },
    descripcion: { es: 'El paquete completo: arma tu brazo robótico, aprende sus matemáticas (cinemática directa e inversa) y prográmalas en Arduino y Python.', en: 'The complete bundle: build your robotic arm, learn its math (forward and inverse kinematics) and program it in Arduino and Python.' },
    incluye: [CURSO_BRAZO, ...PIEZAS_BRAZO, ARDUINO],
    specs: [...SPECS_BRAZO, TEMARIO_BRAZO]
  },
  {
    id: 'brazo-curso', categoria: 'brazo', precio: 2350, curso: true, arduino: false,
    imagen: 'img/cursos/brazo-curso.webp',
    nombre: { es: 'Curso + Brazo robótico', en: 'Course + Robotic arm' },
    descripcion: { es: 'El brazo robótico con su curso. Ideal si ya tienes un Arduino UNO.', en: 'The robotic arm with its course. Ideal if you already own an Arduino UNO.' },
    incluye: [CURSO_BRAZO, ...PIEZAS_BRAZO],
    nota: { es: 'No incluye Arduino.', en: 'Arduino not included.' },
    specs: [...SPECS_BRAZO, TEMARIO_BRAZO]
  },
  {
    id: 'brazo-arduino', categoria: 'brazo', precio: 2150, curso: false, arduino: true,
    imagen: 'img/cursos/brazo-arduino.webp',
    nombre: { es: 'Brazo robótico + Arduino', en: 'Robotic arm + Arduino' },
    descripcion: { es: 'El brazo robótico listo para programar, con su Arduino incluido.', en: 'The robotic arm ready to program, with its Arduino included.' },
    incluye: [...PIEZAS_BRAZO, ARDUINO],
    nota: { es: 'No incluye curso.', en: 'Course not included.' },
    specs: SPECS_BRAZO
  },
  {
    id: 'brazo', categoria: 'brazo', precio: 2100, curso: false, arduino: false,
    imagen: 'img/cursos/brazo.webp',
    nombre: { es: 'Brazo robótico', en: 'Robotic arm' },
    descripcion: { es: 'Solo el brazo robótico Neutrino, para quien ya tiene su electrónica y experiencia.', en: 'Just the Neutrino robotic arm, for those who already have their electronics and experience.' },
    incluye: PIEZAS_BRAZO,
    nota: { es: 'No incluye Arduino ni curso.', en: 'Arduino and course not included.' },
    specs: SPECS_BRAZO
  },
  {
    id: 'pid-curso-kit-arduino', categoria: 'pid', precio: 1400, curso: true, arduino: true,
    imagen: 'img/cursos/pid-curso-kit-arduino.webp',
    nombre: { es: 'Curso Control PID + kit Motor + Arduino', en: 'PID Control course + Motor kit + Arduino' },
    descripcion: { es: 'Todo para aprender control PID en un motor real y convertirlo en un servomotor robusto de 360°: curso, kit de motor y Arduino.', en: 'Everything to learn PID control on a real motor and turn it into a robust 360° servo motor: course, motor kit and Arduino.' },
    incluye: [CURSO_PID, ...PIEZAS_PID, ARDUINO],
    specs: [...SPECS_PID, TEMARIO_PID]
  },
  {
    id: 'pid-curso-kit', categoria: 'pid', precio: 1350, curso: true, arduino: false,
    imagen: 'img/cursos/pid-curso-kit.webp',
    nombre: { es: 'Curso Control PID + kit Motor', en: 'PID Control course + Motor kit' },
    descripcion: { es: 'El curso de control PID con el kit de motor. Ideal si ya tienes un Arduino UNO.', en: 'The PID control course with the motor kit. Ideal if you already own an Arduino UNO.' },
    incluye: [CURSO_PID, ...PIEZAS_PID],
    nota: { es: 'No incluye Arduino.', en: 'Arduino not included.' },
    specs: [...SPECS_PID, TEMARIO_PID]
  },
  {
    id: 'kit-motor', categoria: 'pid', precio: 940, curso: false, arduino: false,
    imagen: 'img/cursos/kit-motor.webp',
    nombre: { es: 'Kit motor', en: 'Motor kit' },
    descripcion: { es: 'El kit de motor a pasos con sensor para tus propios proyectos de control.', en: 'The stepper motor kit with sensor for your own control projects.' },
    incluye: PIEZAS_PID,
    nota: { es: 'No incluye Arduino ni curso.', en: 'Arduino and course not included.' },
    specs: SPECS_PID
  }
];

// ---------------- Lógica de la tienda ----------------
(function () {
  const t = (clave, valores) => CianIdioma.t(clave, valores);
  const idioma = () => CianIdioma.actual;
  const txt = obj => obj[idioma()] || obj.es;
  const precioTexto = p => '$' + p.toLocaleString('en-US') + ' ' + t('tienda.moneda');

  let productoAbierto = null;

  function crearEl(tag, clase, texto) {
    const el = document.createElement(tag);
    if (clase) el.className = clase;
    if (texto !== undefined) el.textContent = texto;
    return el;
  }

  function etiquetas(p) {
    const cont = crearEl('div', 'producto-etiquetas');
    if (p.curso) cont.appendChild(crearEl('span', 'etiqueta', idioma() === 'en' ? 'Course' : 'Curso'));
    if (p.arduino) cont.appendChild(crearEl('span', 'etiqueta', 'Arduino'));
    return cont;
  }

  function tarjeta(p) {
    const btn = crearEl('button', 'producto');
    btn.type = 'button';
    btn.dataset.id = p.id;

    const marco = crearEl('div', 'producto-imagen');
    const img = crearEl('img');
    img.src = p.imagen;
    img.alt = txt(p.nombre);
    img.loading = 'lazy';
    img.width = 800; img.height = 1000;
    marco.appendChild(img);

    const info = crearEl('div', 'producto-info');
    info.appendChild(crearEl('span', 'producto-categoria', txt(CATEGORIAS[p.categoria])));
    info.appendChild(crearEl('h3', 'producto-nombre', txt(p.nombre)));
    info.appendChild(etiquetas(p));
    const pie = crearEl('div', 'producto-pie');
    pie.appendChild(crearEl('span', 'producto-precio', precioTexto(p.precio)));
    pie.appendChild(crearEl('span', 'producto-ver', t('tienda.ver') + ' →'));
    info.appendChild(pie);

    btn.append(marco, info);
    btn.addEventListener('click', () => abrir(p.id));
    return btn;
  }

  function renderCatalogo() {
    document.querySelectorAll('[data-catalogo]').forEach(grid => {
      grid.replaceChildren(...PRODUCTOS.filter(p => p.categoria === grid.dataset.catalogo).map(tarjeta));
    });
  }

  // ----- Ficha del producto (modal) -----
  const modal = document.getElementById('modal-producto');

  function renderModal() {
    const p = PRODUCTOS.find(x => x.id === productoAbierto);
    if (!p || !modal) return;
    modal.querySelector('.modal-imagen img').src = p.imagen;
    modal.querySelector('.modal-imagen img').alt = txt(p.nombre);
    modal.querySelector('.modal-titulo').textContent = txt(p.nombre);
    modal.querySelector('.modal-categoria').textContent = txt(CATEGORIAS[p.categoria]);
    modal.querySelector('.modal-precio').textContent = precioTexto(p.precio);
    modal.querySelector('.modal-descripcion').textContent = txt(p.descripcion);

    const lista = modal.querySelector('.modal-incluye');
    lista.replaceChildren(...p.incluye.map(i => crearEl('li', '', txt(i))));
    const nota = modal.querySelector('.modal-nota');
    nota.textContent = p.nota ? txt(p.nota) : '';
    nota.hidden = !p.nota;

    const tabla = modal.querySelector('.modal-specs');
    tabla.replaceChildren(...p.specs.map(s => {
      const [k, v] = txt(s);
      const fila = crearEl('div', 'spec');
      fila.append(crearEl('dt', '', k), crearEl('dd', '', v));
      return fila;
    }));

    const mensaje = t('tienda.whatsapp.mensaje', { producto: txt(p.nombre), precio: precioTexto(p.precio) });
    modal.querySelector('.btn-whatsapp-ir').href =
      'https://wa.me/' + WHATSAPP_NUMERO + '?text=' + encodeURIComponent(mensaje);
  }

  function mostrarAviso(visible) {
    modal.querySelector('.aviso-whatsapp').hidden = !visible;
    modal.querySelector('.btn-comprar').hidden = visible;
    if (visible) modal.querySelector('.btn-whatsapp-ir').focus();
  }

  function abrir(id) {
    productoAbierto = id;
    renderModal();
    mostrarAviso(false);
    modal.showModal();
    modal.querySelector('.modal-cuerpo').scrollTop = 0;
    document.body.classList.add('sin-scroll');
  }

  function cerrar() {
    modal.close();
  }

  if (modal) {
    modal.addEventListener('close', () => {
      productoAbierto = null;
      document.body.classList.remove('sin-scroll');
    });
    modal.querySelector('.modal-cerrar').addEventListener('click', cerrar);
    modal.querySelector('.btn-comprar').addEventListener('click', () => mostrarAviso(true));
    modal.querySelector('.btn-whatsapp-volver').addEventListener('click', () => mostrarAviso(false));
    // Cerrar al hacer clic fuera de la ficha
    modal.addEventListener('click', e => { if (e.target === modal) cerrar(); });
  }

  // ----- Filtros -----
  function filtrar(cat) {
    document.querySelectorAll('.filtro').forEach(f => f.setAttribute('aria-pressed', String(f.dataset.filtro === cat)));
    document.querySelectorAll('.categoria-tienda').forEach(sec => {
      sec.hidden = cat !== 'todos' && sec.dataset.categoria !== cat;
    });
  }
  document.querySelectorAll('.filtro').forEach(f => f.addEventListener('click', () => filtrar(f.dataset.filtro)));

  // Abrir un producto directamente con cursos.html#brazo-curso-arduino
  function abrirDesdeHash() {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (PRODUCTOS.some(p => p.id === id)) abrir(id);
  }

  document.addEventListener('cian:idioma', () => {
    renderCatalogo();
    if (productoAbierto) renderModal();
  });

  document.addEventListener('DOMContentLoaded', () => {
    renderCatalogo();
    abrirDesdeHash();
  });
})();
