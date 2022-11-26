// Code your solution in this file!
function distanceFromHqInBlocks(dist) {
    if(dist<42){
    return (42 - dist);
    }
    else{
        return(dist - 42);
    }
}
function distanceFromHqInFeet(someValue) 
{
 return distanceFromHqInBlocks(someValue)*264;   
}

function distanceTravelledInFeet(start,end) {
    if(start>end){
        return ((start - end)*264);
    }
    else{
        return ((end - start)*264);
    }
    
}
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet (start,destination)
    if (distance<=400){
        return 0;
    }
    if (distance>=400 && distance <=2000){
        return(distance - 400)*0.02; 
    }
    if(distance> 2000 && distance <= 2500){
        return 25;
    }
    if(distance>2500){
        return "cannot travel that far";
    }
}

