
function distanceFromHqInBlocks(someValue) {
    return Math.abs(42 - someValue)
}

console.log(distanceFromHqInBlocks(50));


function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264;

}

function distanceTravelledInFeet(start, destination) { 
const blockNum = Math.abs(start - destination)
return blockNum * 264;
}

function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination)  
    if (feet <= 400) {
        return 0 
    }else if (feet <= 2000) {
    return (feet - 400) * 0.02
    }else if (feet <= 2500) { 
    return 25
    }else {
        return 'cannot travel that far'
    };
}
  