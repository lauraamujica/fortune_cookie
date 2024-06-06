// Array of fortune cookie messages
const fortuneMessages = [
    "A journey of a thousand miles begins with a single step.",
    "Your hard work will pay off.",
    "Good things come to those who wait.",
    "Embrace change and you'll be rewarded.",
    "Believe in yourself and others will too.",
    "Your kindness will lead to great opportunities.",
    "Success is in your future.",
    "Don't be afraid to take risks.",
    "The best is yet to come.",
    "Your creativity will bring you joy.",
    "You will find happiness in the simplest things.",
    "Your talents will be recognized and appreciated.",
    "The sun always shines after the rain.",
    "A wise person is often silent.",
    "Your efforts will make a difference.",
    "Love is the key to happiness.",
    "Your dreams are within reach.",
    "Your determination will lead you to success.",
    "Today is a lucky day for you.",
    "Patience is a virtue; practice it.",
    "Success is not the key to happiness; happiness is the key to success.",
    "You are capable of great things.",
    "Your positive attitude will attract success.",
    "Learn from your mistakes and grow stronger.",
    "Generosity will bring you good fortune.",
    "You have the power to shape your destiny.",
    "You will make a lasting impact on others.",
    "Your optimism will lead you to greatness.",
    "Your hard work will open new doors.",
    "Believe in your dreams and they will come true.",
    "A smile is the best accessory you can wear.",
    "Your passion will lead you to success.",
    "Your kindness will be repaid in unexpected ways.",
    "Trust your instincts; they will guide you well.",
    "Your efforts will be rewarded in due time.",
    "Keep moving forward, no matter the obstacles.",
    "Your creativity knows no bounds.",
    "Stay true to yourself and success will follow.",
    "Take time to appreciate the little things.",
    "Your dedication will bring you success.",
    "Challenges make you stronger; embrace them.",
    "Your positive energy is contagious.",
    "Your future looks bright and promising.",
    "Your hard work will shine brightly.",
    "Opportunities are on the horizon; seize them.",
    "Your perseverance will lead to victory.",
    "You have the ability to overcome any obstacle.",
    "Your potential is limitless; believe in yourself.",
    "Kindness will bring positivity into your life.",
    "Your dreams are the blueprints of your success.",
    "Success is a journey, not a destination.",
    "Your resilience will lead you to triumph.",
    "Embrace change; it brings growth.",
    "Your determination will yield great results.",
    "Your actions speak louder than words.",
    "Your integrity will guide you to success.",
    "Your dreams are worth pursuing.",
    "Your positive attitude attracts positive outcomes.",
    "Challenges are opportunities in disguise.",
    "Your kindness will open doors for you.",
    "Your hard work will lead to prosperity.",
    "Believe in yourself and others will believe in you too.",
    "Your efforts will make a lasting impact.",
    "The best is yet to come; keep moving forward.",
    "Your commitment to excellence will pay off.",
    "Your enthusiasm is contagious; spread it.",
    "Success is not final, failure is not fatal; it's the courage to continue that counts.",
    "Your patience will bring you good fortune.",
    "Your dedication will pave the way to success.",
    "Your positive outlook will attract positive results.",
    "Your dreams are the compass to your success.",
    "Your perseverance will lead to achievements.",
    "Your optimism will lead you to victory.",
    "Your kindness will lead to abundance.",
    "Your hard work will lead to prosperity.",
    "Trust your instincts; they won't steer you wrong.",
    "Your positive energy will attract success.",
    "Your potential is boundless; unlock it.",
    "Your efforts will be rewarded tenfold.",
    "Believe in the power of your dreams.",
    "Your determination will overcome all obstacles.",
    "Embrace change; it's the path to growth.",
    "Your kindness will bring you happiness.",
    "Your success is a reflection of your dedication.",
    "Your hard work will open new doors.",
    "Your dreams are the seeds of your future.",
    "Your resilience will lead to triumph.",
    "Your passion will lead you to greatness.",
    "Your actions will shape your destiny.",
    "Your perseverance will lead to success.",
    "Your positivity will attract positive outcomes.",
    "Your potential is limitless; harness it.",
    "Your kindness will lead to good fortune.",
    "Your dedication will bring you rewards.",
    "Your optimism will lead you to victory.",
    "Your dreams are worth pursuing.",
    "Your hard work will yield great results.",
    "Believe in yourself and the world will too.",
    "Your efforts will make a difference.",
    "Your determination will pave the way.",
    "Embrace change; it's a stepping stone to success.",
    "Your kindness will create lasting bonds.",
    "Your dreams are the blueprints of success.",
    "Your persistence will lead to triumph.",
    "Your positivity will bring you joy.",
    "Your hard work will lead to prosperity.",
    "Believe in the magic within you.",
    "Your determination will conquer all challenges.",
    "Your kindness will be repaid tenfold.",
    "Your dreams are the roadmap to your goals.",
    "Your dedication will be recognized.",
    "Your optimism will attract success.",
    "Your efforts will lead to greatness.",
    "Your potential is limitless; unleash it.",
    "Your hard work will open doors of opportunity.",
    "Your kindness will bring you happiness.",
    "Your perseverance will overcome obstacles.",
    "Believe in yourself and your dreams will come true.",
    "Your determination will lead you to victory.",
    "Your positive attitude will attract positive outcomes.",
    "Your kindness will be remembered.",
    "Your hard work will pave the path to success.",
    "Your dreams are the keys to your future.",
    "Your dedication will yield fruitful results.",
    "Your optimism will lead to achievements.",
    "Your efforts will bring you success.",
    "Your resilience will lead you to triumph.",
    "Your kindness will bring you blessings.",
    "Your dreams are worth the journey.",
    "Your determination will overcome any obstacle.",
    "Your positive energy will attract positivity.",
    "Your potential is boundless; embrace it.",
    "Your hard work will yield great benefits.",
    "Believe in your abilities; they are remarkable.",
    "Your kindness will create a ripple effect.",
    "Your dreams are the foundation of your success.",
    "Your perseverance will lead to victory.",
    "Your optimism will lead you to prosperity.",
    "Your dedication will open doors for you.",
    "Your efforts will lead to positive change.",
    "Your resilience will conquer challenges.",
    "Believe in yourself; you are capable.",
    "Your kindness will bring you abundance.",
    "Your dreams are the stars guiding you.",
    "Your determination will lead you to greatness.",
    "Your positive outlook will attract success.",
    "Your hard work will result in fulfillment.",
    "Your potential is limitless; explore it.",
    "Your efforts will shape your destiny.",
    "Your kindness will lead to a brighter future."
];

// Obtener el botón y el elemento de texto de la fortuna
const generateButton = document.querySelector('.generate-phrase');
const fortuneText = document.getElementById('fortune-text');
const modal = document.getElementById('fortuneModal');
const closeModal = document.querySelector('.close');

// Función para generar y mostrar una fortuna aleatoria
function generateRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortuneMessages.length);
    const randomFortune = fortuneMessages[randomIndex];
    fortuneText.textContent = randomFortune;
    localStorage.setItem('lastFortune', randomFortune);

    // Mostrar las imágenes de sparks
    showSparks();
}

// Función para mostrar las imágenes de sparks
function showSparks() {
    const buttonRect = generateButton.getBoundingClientRect(); // Obtener la posición del botón
    const bodyRect = document.body.getBoundingClientRect(); // Obtener los límites del body

    for (let i = 0; i < 50; i++) { // Ajusta el número de sparks según sea necesario
        const spark = document.createElement('img');
        spark.src = 'img/spark2.png'; // Reemplaza con la ruta correcta de tu imagen de spark
        spark.classList.add('spark');
        document.body.appendChild(spark);

        // Colocar el spark en la posición del botón
        spark.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
        spark.style.top = `${buttonRect.top + buttonRect.height / 2}px`;

        // Mover el spark a una posición aleatoria alrededor del botón dentro de los límites del body
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 300 + 50; // Ajusta el radio según sea necesario
        const offsetX = radius * Math.cos(angle);
        const offsetY = radius * Math.sin(angle);

        const targetX = buttonRect.left + buttonRect.width / 2 + offsetX;
        const targetY = buttonRect.top + buttonRect.height / 2 + offsetY;

        // Asegurarse de que el spark no se salga de los límites del body
        const maxX = bodyRect.width - spark.width;
        const maxY = bodyRect.height - spark.height;

        spark.style.left = `${Math.min(Math.max(targetX, 0), maxX)}px`;
        spark.style.top = `${Math.min(Math.max(targetY, 0), maxY)}px`;

        // Animar el spark a la nueva posición
        spark.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

        // Eliminar el spark después de la animación
        spark.addEventListener('animationend', () => {
            spark.remove();
        });
    }
}

// Función para comprobar si la galleta de la fortuna ya fue abierta hoy
function checkFortuneOpenedToday() {
    const lastOpened = localStorage.getItem('fortuneLastOpened');
    if (!lastOpened) {
        return false;
    }

    const lastOpenedDate = new Date(lastOpened);
    const today = new Date();

    return lastOpenedDate.toDateString() === today.toDateString();
}

// Función para registrar la fecha de apertura de la galleta de la fortuna
function setFortuneOpenedToday() {
    const today = new Date();
    localStorage.setItem('fortuneLastOpened', today.toString());
}

// Función para manejar el clic en el botón
function handleButtonClick() {
    // Verificar si la página se ha visitado antes
    if (!localStorage.getItem('fortuneVisitedBefore')) {
        // Si es la primera visita, abrir el modal con una nueva fortuna
        generateRandomFortune();
        setFortuneOpenedToday();
        localStorage.setItem('fortuneVisitedBefore', true);
    } else {
        // Si la página ya se ha visitado antes, verificar si la galleta de la fortuna ya fue abierta hoy
        if (checkFortuneOpenedToday()) {
            const lastFortune = getLastRevealedFortune();
            fortuneText.textContent = lastFortune;
            modal.style.display = 'flex';
            return; // Salir de la función si la galleta ya fue abierta hoy
        }
    }

    // Si no hay registros en el almacenamiento local o la galleta no fue abierta hoy, generar una nueva fortuna
    generateRandomFortune();
    setFortuneOpenedToday();
}

// Función para obtener la última fortuna revelada
function getLastRevealedFortune() {
    return localStorage.getItem('lastFortune');
}

// Añadir un evento de escucha al botón
generateButton.addEventListener('click', handleButtonClick);

// Función para cerrar el modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal si se hace clic fuera de él
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Comprobar si la galleta de la fortuna ya fue abierta hoy al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    if (checkFortuneOpenedToday()) {
        const lastFortune = getLastRevealedFortune();
        fortuneText.textContent = lastFortune;
        modal.style.display = 'flex';
    }
});
