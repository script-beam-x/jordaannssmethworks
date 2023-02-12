// script to generate random greetings

function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}


var say = [];
say[0] = "Rare subtitle (real)";
say[1] = "Hello!";
say[2] = "Does this even work?";
say[3] = "I hate you man.";
say[4] = "Made with Replit!";
say[5] = "Ae you an NPC?";
say[6] = "You get a cookie!";
say[7] = "Remember your manners!";
say[8] = "Go Back now!";
say[9] = "Ok, and I know your address now!";
say[10] = "Beep boop! Are you a robot?";
say[11] = "Did you know I have a discord server?";
say[12] = "How many sides does a circle have?";
say[13] = "My disappointment is immeasurable and my day is ruined.";
say[14] = "You can read btw";
say[15] = "Imagine using chromebooks!";
say[16] = "HEHEHEHA.";
say[17] = "Redbull gives you wings...";
say[18] = "Can't play jenga in ohio";
say[19] = "Since 2018!";
say[20] = "This is a 404!";
say[21] = "Nice.";
say[22] = "This took to long to make";
say[23] = "69 hehe funny number";
say[24] = "Ahhhhhhhhh";
say[25] = "Awesome!";
say[26] = "Down in ohio!";
say[27] = "noot noot!";
say[28] = "100% Fresh!";
say[29] = "LOL";
say[30] = "How did you get to a 404 man?";
say[31] = "Hacking your pc...";
say[32] = "E!";
say[33] = "Help!!! I've fallen, and i can't get up!!!";
say[34] = "Reload the page NOW!";
say[35] = "Downloading your passwords...";


// pick a random greeting
var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;

function changeSplash(num) {
  document.getElementById("subtitle").innerText = say[num];
  var ret = "Set current splash to splash " + num + ", " + say[num];
  return ret;
}
// credit to 3kh0 for the code :)