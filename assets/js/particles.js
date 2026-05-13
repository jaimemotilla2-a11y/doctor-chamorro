const particlesContainer = document.querySelector(".particles");

for(let i = 0; i < 60; i++){

    const particle = document.createElement("span");

    let size = Math.random() * 6 + 2;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}%`;

    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;

    particle.style.animationDelay = `${Math.random() * 5}s`;

    particlesContainer.appendChild(particle);

}