const dino = document.querySelector('.dino');
const obstacle = document.querySelector('.obstacle');

function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump');

        setTimeout(() => {
            dino.classList.remove('jump');
        }, 300);
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === ' ' || event.key === 'ArrowUp') {
        jump();
    }
});

function checkCollision() {
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

    if (obstacleLeft < 50 && obstacleLeft > 0 && dinoTop >= 100) {
        alert('Game Over!');
        location.reload(); // Reload the page to restart the game
    }
}

setInterval(checkCollision, 10);
