let bullet = 5;
let count = 0;
let lifeLine = 1;

function angryBirdShoot(bird){
    bird.style.display = 'none';
    document.getElementById('currentScore').innerHTML = ++count;
}

function bombShoot(bird){
    bird.style.display = 'none';
    if(!lifeLine)
    {
        alert('Game Over')
    }
    document.getElementById('currentScore').innerHTML = --count;
    lifeLine = 0;
    
}