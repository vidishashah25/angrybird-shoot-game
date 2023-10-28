let bullet = 5;
let count = 0;

function angryBirdShoot(bird){
    bird.style.display = 'none';
    document.getElementById('score').innerHTML = ++count;
}

function bombShoot(bird){
    bird.style.display = 'none';
    document.getElementById('score').innerHTML = --count;
}