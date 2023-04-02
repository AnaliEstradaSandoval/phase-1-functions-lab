
function distanceFromHqInBlocks(someValue){ 
    let blocks = someValue - 42;
    if (someValue < 42)
    return 42 % someValue;
    else
    return blocks;
 }


 function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    let feet = distanceFromHqInBlocks(someValue) * 264;
    return feet;
 }


 function distanceTravelledInFeet(start, destination) {
    let distanceTravelled = (start - destination) *  264;
    if (destination > start){
    return (destination % start) * 264;
     } else
    return distanceTravelled;
 }



 function calculatesFarePrice(start, destination) {
 let feet =  distanceTravelledInFeet(start, destination);
    if (feet <= 400){
      return 0
    } else if (feet <= 2000){
      return (feet - 400) * 0.02
    } else if (feet > 2000 && feet < 2500){
      return 25
    } else if (feet > 2500){
      return 'cannot travel that far'
    }
 }