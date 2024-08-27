// var randomVariable1 = Math.random();
// randomVariable1 *= 6;
// randomVariable1 = Math.floor(randomVariable1) + 1;
// console.log(randomVariable1);


var randomVariable1 = Math.floor(Math.random() * 6) + 1;
var randomVariable2 = Math.floor(Math.random() * 6) + 1;

var randomImgSource1 = "./images/dice"+ randomVariable1 + ".png";
var randomImgSource2 = "./images/dice"+ randomVariable2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImgSource1);
document.querySelector(".img2").setAttribute("src", randomImgSource2);

if(randomVariable1 > randomVariable2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩"
}
else if(randomVariable1 < randomVariable2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩"
}
else
{
    document.querySelector("h1").innerHTML = "DRAWS"
}