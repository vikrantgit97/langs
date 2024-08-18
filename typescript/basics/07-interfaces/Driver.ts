import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let cricketCoach = new CricketCoach();
let golfCoach = new GolfCoach();

//declare array of coaches initially empty
let coaches: Coach[] = [];

//add the coaches to the array
coaches.push(cricketCoach);
coaches.push(golfCoach);

for (let coach of coaches) {
    console.log(coach.getDailyWorkout());
}