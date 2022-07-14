// class Clock{
//   constructor(){
//      let today = new Date();
//      this.hours = today.getHours();
//      this.minutes = today.getMinutes();
//      this.seconds = today.getSeconds();
//      this.printTime();
//      setInterval(this._tick.bind(this), 1000);
     
//   }
//   printTime(){
//     let time = [this.hours, this.minutes, this.seconds].join(":");
//     console.log(`${time}`);  
    
//   }
//   _tick(){
//     this.seconds += 1;

//     if (this.seconds === 60) {
//       this.minutes += 1;
//       this.seconds = 0;
//     }

//     if (this.minutes === 60) {
//       this.hours += 1;
//       this.minutes = 0;
//     }

//     if (this.hours === 24) {
//       this.hours = 0;
//     }
//     this.printTime();
//   }
// };

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft > 0){
    reader.question("Enter a number", function (number))
      const thisNumber = parseInt(number);
    
    
  }

};

