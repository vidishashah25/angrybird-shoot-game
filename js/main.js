let bullet = 5;
let count = 0;
let lifeLine = 1;


function angryBirdShoot(bird) {
 if(bullet>=0)
 {
    bird.style.display = "none";
    document.getElementById("currentScore").innerHTML = ++count;
    if(count===4)
    {
        bird.style.display = "none";
        document.getElementById("currentScore").innerHTML = count;
        setTimeout(()=>{
            alert('Yuupiee won the game....')
        },1000)
        
    }
  
 }
    
  
}

function bombShoot(bird) {
    if(bullet>=0){
        bird.style.display = "none";
        if (!lifeLine) {
          alert("Game Over");
        }
        document.getElementById("currentScore").innerHTML = --count;
        lifeLine = 0;
        document.getElementById("currentlifeLine").innerHTML = lifeLine;
    }
        
    
  
}

// document.body.addEventListener("click",()=>{})
window.addEventListener("click",function(){
  
      //  this.document.getElementById("fire").play();
 
const fire =  new Audio("./audio/shot.mp3")
fire.play()
    bullet--;
    document.getElementById("currentBullet").innerHTML = bullet;
    if(bullet<0)
    {
        this.alert('No bullets available...')
    }
})

