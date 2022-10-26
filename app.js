console.log("Hello World!\n==========\n");

// Exercise 1
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for (i = 1; i <= count; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}
printOdds(9)
printOdds(25)


// Exercise 2
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait ${16 - age} more years until you're 16.`;
    if (age >= 16) {
        console.log(aboveSixteen);
    } else if (age < 16) {
        console.log(belowSixteen);
    }
}

checkAge("Bob", 85)
checkAge("Joe", 3)

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y) {
    if (x > 0 && y > 0) {
        console.log("Quadrant 1");
    } else if (x < 0 && y > 0) {
        console.log("Quadrant 2")
    } else if (x < 0 && y < 0) {
        console.log("Quadrant 3")
    } else if (x > 0 && y < 0) {
        console.log("Quadrant 4")
    }
}

whichQuadrant(5, 6)
whichQuadrant(-4,5)
whichQuadrant(-2,-9)
whichQuadrant(9,-7)

// Exercise 4
console.log("EXERCISE 4:\n==========\n");

function triangle(a, b, c) {
    if (a === b && b === c) {
        console.log("Equilateral")
    } else if (a === b || a === c || b === c) {
        console.log("Isosceles")
    } else {
        console.log("Scalene")
    }
}

triangle(1, 1, 1) //Equilateral
triangle(1, 2, 1) //Isosceles
triangle(1, 2, 3) //Scalene

// Exercise 5
console.log("EXERCISE 5:\n==========\n");
/*
function dataPlanStatus(planLimit, day, usage) {
    let timePeriod = 30;
    let daysLeft = 30 - day;
    let usageRemaining = planLimit - usage;
    console.log(daysLeft + ' days left' + " and " + usageRemaining + 'GB Remaining.')
}
//dataPlanStatus(planLimit, day, usage)
  dataPlanStatus(100, 15, 50)
*/
/*

30 day time frame
what day we are on in the time frame
data limit

let timePeriod = 30;
let daysLeft = 30 - day;
let usageRemaining = planLimit - usage
-----------------------------------------------
*/

function dataPlanStatus(planLimit, day, usage) {
    const avgDailyUse = usage/day;
    let roundedAvgDailyUse = avgDailyUse.toFixed(3);
    const daysLeft = 30 - day;
    let recommendedAmount = planLimit/30;
    let roundedRecommendedAmount = recommendedAmount.toFixed(3)
    let difference = roundedRecommendedAmount - roundedAvgDailyUse;
    let otherDifference = roundedAvgDailyUse - roundedRecommendedAmount;
    let result = `${day} days used, ${daysLeft} days remaining, Average Daily Use: ${roundedAvgDailyUse} GB/day`;
    if (roundedRecommendedAmount < roundedAvgDailyUse) {
        console.log(result + ". Your recommended daily amount is " + roundedRecommendedAmount, "You are exceeding your recommended use by " + difference.toFixed(3)*-1 + "GB")
    } else if (roundedRecommendedAmount > roundedAvgDailyUse) {
        console.log(result + ". Your recommended daily amount is " + roundedRecommendedAmount, "You are under your recommended use by " + otherDifference.toFixed(3) + "GB")
    }
    
}

dataPlanStatus(100, 15, 56)
dataPlanStatus(256, 5, 50)

/* 
Pseudo Code
How many days in total
how many days left
Average Daily use - how much in total and how much has been used
^ how much has been used so far divided by the plant limit

--
(usage is 56, 15 days have passed)
average daily use is equal to usage divided by how many days already passes

rounded average daily use - rounded daily recommended use = if positive, you are over, if negative you are under, if equal you're fine

if (roundedRecommendedAmount < roundedAvgDailyUse) {
    console.log("Your data usage is exceeding the recommended amount by " + roundedAvgDailyUse - roundedRecommendedAmount + ".");
}
--
*/