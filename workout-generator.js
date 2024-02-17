const workout = {
    exercises: ['Bench Press', 'Deadlift', 'Squat', 'Dumbell Press','Leg Press','Tricep Pull-Down','Bicep Curl','Curl Press','Inclince Dumbell Press'],
    quantity_reps: [10,15,20],
    quantity_set: [3,4,5],
}
function randomGenerator(num){
    return Math.floor(Math.random() * num + 1)
};

let workoutAmount = Math.ceil(Math.random() * workout.exercises.length)
const workout2 = [];
for (let i = 0; i < workoutAmount; i++){
  let exercise = workout.exercises[randomGenerator(workout.exercises.length)];
  workout2.push(exercise);
  
}
const reps = [];
const sets = [];
for(let x in workout){
  let options = randomGenerator(workout[x].length);
  switch (x){
    case 'quantity_reps':
      reps.push(workout[x][options]);
      break;
    case 'quantity_set':
      sets.push(workout[x][options]);
      break;
  }
}
////function to remove duplicate arrays from the randomly generated list of exercises 
function removeDuplicates(arr){
  let unique = [];
  arr.forEach(element => {
      if (!unique.includes(element)) {
          unique.push(element);
      }
  });
  return unique;
}


let newWorkout = removeDuplicates(workout2);

const completeWorkout = [];
function addText(arr){
 
  for(let i = 1; i < arr.length; i++){
    completeWorkout.push(`Your workout number ${i} is: ${arr[i]}. You will do ${randomGenerator(sets)} sets of ${randomGenerator(reps)} reps.` );
  }
}
addText(newWorkout);
function format (work){
    const formatted = completeWorkout.join('\n')
    console.log(completeWorkout)
};
format(completeWorkout);
