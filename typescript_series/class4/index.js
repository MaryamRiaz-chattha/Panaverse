"use strict";
//tsc --init
//tsc for index.js
//conditional statments
//if else
let isRaining = false; //variable intialize
//i will go with 
//if (condition){
//
//}
//else {
//}
if (isRaining) {
    console.log("Take an umbrella.");
}
else {
    //otherwise
    console.log("Go without one.");
}
//example 2 
let isWeekday = false;
if (isWeekday) {
    console.log("Set an alarm for 7 AM.");
}
else {
    console.log("No alarm needed.");
}
//example 3
let numbers = 80;
if (numbers > 90) {
    console.log("student grade is A");
}
else {
    console.log("student grade is lower");
}
//if esle-if else
let day = "raining";
if (day === "sunny") {
    console.log("wear sunglasses");
}
else if (day === "raining") {
    console.log("use umberlla");
}
else {
    console.log("go outside in a normal way");
}
