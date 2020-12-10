var read = require("readline-sync");
var clk = require("chalk");

var user=read.question("What is your name ? ")

console.log(clk.cyanBright("Welcome ")+clk.red(user) +clk.cyanBright(". Let's see how big of a fan you are of ")+clk.white("F"+clk.red(".")+"R"+clk.blue(".")+"I"+clk.yellow(".")+"E"+clk.red(".")+"N"+clk.blue(".")+"D"+clk.yellow(".")+"S"))
const log=console.log;
var count=0;
log(" ")

log("Ready for a quick Quiz..  ;)")
log(" ")

var questions=[{q:"In which city is Friends set? ",a:"New York"},{q:"What's the name of the coffee shop used by the characters? ",a:"Central Perk"},{q:"What instrument does Phoebe Buffay play ? ",a:"Guitar"},{q:"Who used to say Oh...My...God ? ",a:"Janice"},{q:"Who dosn't share food ? ",a:"Joey"},{q:"What is Chandler's middle name ? ",a:"Muriel"}]

function game(que,ans){
  var userAns=read.question(clk.cyanBright(que),{hideEchoBack:true});
  if(userAns.toLowerCase() === ans.toLowerCase()){
    log(ans);
    log(clk.green("You are right  :)"));
    count++;
    log(clk.green("Your Score is "+ count));
    
    log("---------------------------------");
    log(" ");
  }
  else{
    log(clk.redBright("You are wrong  :("));
    log(clk.green("The right answer is "+ans));
    
    log("---------------------------------");
    log(" ");
  }
}

for(var i=0;i<questions.length;i++){
var currQue=questions[i];
game(currQue.q,currQue.a);
}
log(clk.cyanBright("**********************************"))
log(clk.green("Your final Score is "+ count+" out of 6 "));
if(count==6){
log(clk.red("You sure are a superFan  ;)"))

}
log("***********************************")

