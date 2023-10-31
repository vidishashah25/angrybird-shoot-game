class Game {
  constructor() {
    this.bullet = 5;
    this.lifeLine = 1;
    this.counter = 0;
    //this.birdsArr = [];
    this.start();
  }

  start() {
    setInterval(()=>{
        const newBird = new AngryBird();
       // this.birdsArr.push(newBird);
        newBird.aBirdElm.addEventListener("click", (e) => {
          newBird.aBirdElm.style.display = "none";
          this.counter++;
          console.log(this.counter);
        });
    },1000)
  
  }


}
let css = document.createElement("style");
const game = new Game();

document.addEventListener("click",()=>{
    const fire =  new Audio("./audio/shot.mp3")
    fire.play()
})



