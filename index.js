function wakeDog(name,breed){ return `Wake ${name} the ${breed}`}

function leashDog(name,breed) { return `Leash ${name} the ${breed}`}

function walkToPark(name,breed) { return `Walk to the park with ${name} the ${breed}`}

function throwFrisbee(name,breed) { return `Throw the frisbee for ${name} the ${breed}`}

function walkHome(name,breed) { return `Walk home with ${name} the ${breed}`}

function unleashDog(name,breed) {return `Unleash ${name} the ${breed}`}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]


function exerciseDog(name,breed){
    let array = []
    debugger
    routine.forEach(function(e){
      //  console.log(typeof e)
    //    debugger
    array.push(e(name,breed))
    })
    return array
//    routine[0]//(name,breed)
}

exerciseDog('foo','boo')