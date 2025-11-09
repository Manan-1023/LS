const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const confetti = document.getElementById('confetti');

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '🌹';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.querySelector('.hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);

yesBtn.addEventListener('click', () => {
    document.querySelector('.hero-content').innerHTML = `
        <h1>Yay! 🎉💕</h1>
        <p>Enki araya ninkum inne ishta anu enn 💖</p>
        <button onclick="location.reload()" style="padding: 15px 40px; background: #ff1744; color: white; border: none; border-radius: 50px; font-size: 1.2rem; cursor: pointer; margin-top: 1rem;">Start Over 💕</button>
    `;
});

const noTexts = ['No 😢', 'Ntha bosse 🥺', 'Mella mathi 🥹', 'Give it a chance 🙄', 'Time edutho 😭', 'I promise to make you happy 🥰', 'Aloijcho tto 😰', 'Nth jadya di 😤', ];
let textIndex = 0;

noBtn.addEventListener('click', () => {
    const maxX = window.innerWidth > 768 ? (window.innerWidth * 0.4) : 200;
    const maxY = window.innerWidth > 768 ? (window.innerHeight * 0.3) : 300;
    const randomX = (Math.random() - 0.5) * maxX;
    const randomY = (Math.random() - 0.5) * maxY;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    textIndex = (textIndex + 1) % noTexts.length;
    noBtn.textContent = noTexts[textIndex];
});

function createConfetti() {
    const colors = ['#ff69b4', '#ff1744', '#e91e63', '#9c27b0', '#673ab7'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = Math.random() * 100 + 'vw';
            piece.style.background = colors[Math.floor(Math.random() * colors.length)];
            piece.style.animationDelay = Math.random() * 3 + 's';
            confetti.appendChild(piece);
            
            setTimeout(() => {
                piece.remove();
            }, 3000);
        }, i * 50);
    }
}