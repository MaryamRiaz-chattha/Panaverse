//tsc --init
//tsc for index.js
//conditional statments
//if else
let isRaining :boolean=false ;//variable intialize
//i will go with 
//if (condition){
//
//}
//else {
//}
//Example 1
//If it's raining, then I'll take an umbrella.otherwise, I'll go without one. 


    if (isRaining) {
        console.log("Take an umbrella.");
        } else {
            //otherwise
        console.log("Go without one.");
        }
//example 2 
//Alarm Clock:
//•If it's a weekday, then I will set 
//an alarm for 7 AM.
//•Else, I won’t set an alarm.

let isWeekday: boolean = false;
if (isWeekday) {
console.log("Set an alarm for 7 AM.");
} else {
console.log("No alarm needed.");
}
//example 3
//Student Grading:
//If a student's score is above 90, then
//they will get an A.
//Else, they will get a lower grade.

let numbers:number=80;
if (numbers>90){
    console.log("student grade is A")
}
else{
    console.log("student grade is lower")

}

//if esle-if else

//Weather Check (Multiple 
//Conditions):
//•If it's sunny, then I'll wear sunglasses.
//•Else if it's raining, then I'll take an umbrella.
//•Else, I'll dress normally
let day:string= "raining";
if (day==="sunny"){
    console.log("wear sunglasses")
}
    else if (day==="raining"){
        console.log("use umberlla")
    }
    else{
        console.log("go outside in a normal way")
    }
    