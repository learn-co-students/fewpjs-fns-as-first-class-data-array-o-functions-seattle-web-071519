// import { format } from "url";
// let dogName= "maddie"
// let dogBreed = "collie"
// console.log("Wake Byron the poodle");
// console.log("Leash Byron the poodle");
// console.log("Walk to the park with Byron the poodle");
// console.log("Throw the frisbee for Byron the poodle");
// console.log("Walk home with Byron the poodle");
// console.log("Unleash Byron the poodle");

// function wakeDog(dogName, dogBreed) {
//     console.log(`Wake ${dogName} the ${dogBreed}`);
//     let final = (`Wake ${dogName} the ${dogBreed}`);
//     return final;
//   }

// function leashDog(dogName, dogBreed) {
//     console.log(`Leash ${dogName} the ${dogBreed}`);
//     let final = (`Leash ${dogName} the ${dogBreed}`);
//     return final;
//   }
  
//   function walkToPark(dogName, dogBreed) {
//     console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
//     let final = (`Walk to the park with ${dogName} the ${dogBreed}`);
//     return final;
//   }

//   function throwFrisbee(dogName, dogBreed) {
//     console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
//     let final = (`Throw the frisbee for ${dogName} the ${dogBreed}`);
//     return final;
//   }

//   function walkHome(dogName, dogBreed) {
//     console.log(`Walk home with ${dogName} the ${dogBreed}`);
//     let final = (`Walk home with ${dogName} the ${dogBreed}`);
//     return final;
//   }

//    function unleashDog(dogName, dogBreed) {
//     console.log(`Unleash ${dogName} the ${dogBreed}`);
//     let final = (`Unleash ${dogName} the ${dogBreed}`);
//     return final;
//   }

// const routine = [wakeDog,
//     leashDog,
//     walkToPark,
//     throwFrisbee,
//     walkHome,
//     unleashDog];

// function exerciseDog(dogName, dogBreed, routine){
//     final=[]
//     for (i=0; i < routine.length-1; i++){
//         final.push(routine[i]);
//     }
//     return final;
// }






var wakeDog = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
  }
  
  var leashDog = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
  }
  
  var walkToPark = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
  }
  
  var throwFrisbee = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
  }
  
  var walkHome = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`
  }
  
  var unleashDog = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
  }
  
  const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
  
 function exerciseDog(dogName, dogBreed){
    let final=[];
    for (let i=0; i < routine.length; i++){
        final.push(routine[i](dogName, dogBreed));
    }
    return final;
}
