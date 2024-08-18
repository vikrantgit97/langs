"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let cricketCoach = new CricketCoach_1.CricketCoach();
let golfCoach = new GolfCoach_1.GolfCoach();
//declare array of coaches initially empty
let coaches = [];
//add the coaches to the array
coaches.push(cricketCoach);
coaches.push(golfCoach);
for (let coach of coaches) {
    console.log(coach.getDailyWorkout());
}
