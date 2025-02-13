// Heart button scroll to envelope section
const heartButton = document.querySelector('.heart-button');
heartButton.addEventListener('click', () => {
    const envelopeSection = document.querySelector('.envelope-section');
    envelopeSection.scrollIntoView({ behavior: 'smooth' });
});

// Envelope interaction
const envelope = document.querySelector('.envelope');
const letter = document.querySelector('.letter');

envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
});

// Falling hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.style.cssText = `
        position: fixed;
        top: -20px;
        left: ${Math.random() * 100}vw;
        font-size: ${Math.random() * (30 - 15) + 15}px;
        animation: fall ${Math.random() * (8 - 4) + 4}s linear;
        z-index: 0;
        color: var(--primary-color);
        pointer-events: none;
    `;
    heart.innerHTML = '❤';
    document.querySelector('.falling-hearts').appendChild(heart);

    // Remove heart after animation
    heart.addEventListener('animationend', () => heart.remove());
}

// Create falling hearts at intervals
setInterval(createHeart, 300);

// Add CSS animation for falling hearts
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    const title = document.querySelector('.title');
    
    header.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    title.style.transform = `translateY(${scrolled * 0.3}px)`;
}); 