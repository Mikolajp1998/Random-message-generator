const workout = {
    exercises: ['Bench Press', 'Deadlift', 'Squat', 'Dumbell Press','Leg Press','Tricep Pull-Down','Bicep Curl','Curl Press','Inclince Dumbell Press'],
    quantity_reps: [2,4,8,10,15,20],
    quantity_set: [1,2,3,4,5],
}
function randomGenerator(num){
    return Math.floor(Math.random() * num)
};

const workoutGenerated = [];
let workoutAmount = Math.ceil(Math.random() * workout.exercises.length)

for (let i = 1; i < workoutAmount; i++) {
    let exercise = workout.exercises[randomGenerator(workout.exercises.length)];
    if (exercise !== workoutGenerated[i]) {
      workoutGenerated.push(`Your workout number ${i} today will be: ${exercise}`);
    }
  
    for (let x in workout) {
      let options = randomGenerator(workout[x].length);
      switch (x) {
        case 'exercises':
          break;
        case 'quantity_reps':
          workoutGenerated.push(`You will do ${workout[x][options]} reps`);
          break;
        case 'quantity_set':
          workoutGenerated.push(`And You will do ${workout[x][options]} sets`);
          break;
        default:
          workoutGenerated.push('There is not enough info.');
      }
    }
  }

function format (work){
    const formatted = workoutGenerated.join('\n')
    console.log(formatted)
};

format(workoutGenerated);
