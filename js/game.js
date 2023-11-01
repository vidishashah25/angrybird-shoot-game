class Game {
  constructor() {
    this.bullet = 5;
    this.lifeLine = 1;
    this.counter = 0;
    this.start();
    this.audio = 0;
  }

  start() {
    const intervalId1 = setInterval(()=>{
        const newBird = new AngryBird();
        newBird.aBirdElm.addEventListener("click", (e) => {
          this.audio = 1;
          newBird.aBirdElm.style.display = "none";
          newBird.aBirdElm.remove();
          this.counter++;
          console.log(this.counter);
        });
    },1000)

    const intervalId2 = setInterval(()=>{
      const newBombBird = new BombBird();
      newBombBird.bBirdElm.addEventListener("click",(e)=>{   
        this.audio = 2;
        console.log(this.audio)
        newBombBird.bBirdElm.style.display = "none";
        newBombBird.bBirdElm.remove();
        this.counter--;
        console.log(this.counter);
      })
    },3000)
    
    setTimeout(()=>{
      clearInterval(intervalId1)
      clearInterval(intervalId2)
    },12000)
  
  }


}
let css = document.createElement("style");
const game = new Game();

document.addEventListener("click",()=>{
    const fire =  new Audio("./audio/shot.mp3")
    const death =  new Audio("./audio/death.mp3")

    if(game.audio === 1)
    {
      fire.play()
      console.log('bullet')
    }
    else if(game.audio === 2)
    {
      death.play()
      console.log('death')
    }  
    else{
      fire.play()
    } 
    
})



