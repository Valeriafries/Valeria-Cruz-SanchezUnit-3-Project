/* Declare variables below to save the different sections (divs) of your story*/
let optionOne=document.querySelector(".option-one");
let optionTwo=document.querySelector(".option-two");
let optionOneScreen=document.querySelector(".option-one-screen");
let optionTwoScreen=document.querySelector(".option-two-screen");
let storyOpening=document.querySelector(".story-opening");
let buttons=document.querySelector(".buttons");
let buttonOne=document.querySelector(".button-one");
let buttonTwo=document.querySelector(".button-two");
let optionOneEnd=document.querySelector(".option-one-end");
let optionTwoEnd=document.querySelector(".option-two-end");
console.log=(optionOne);
console.log=(optionTwo);






optionOne.onclick=function(){
optionOneScreen.style.display = "block";
buttons.style.display = "none";
 storyOpening.style.display = "none";

};

optionTwo.onclick=function(){
optionTwoScreen.style.display = "block";
buttons.style.display = "none";
storyOpening.style.display = "none";

};

buttonOne.onclick=function(){
    optionOneEnd.style.display="block";
    buttons.style.display = "none";
optionOneScreen.style.display = "none";
};

buttonTwo.onclick=function(){
    optionTwoEnd.style.display="block";
    buttons.style.display = "none";
optionTwoScreen.style.display = "none";
};



