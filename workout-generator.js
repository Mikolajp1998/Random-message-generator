//Declaring the workout object array
const workout = {
    exercises: ['Bench Press', 'Deadlift', 'Squat', 'Dumbell Press','Leg Press','Tricep Pull-Down','Bicep Curl','Curl Press','Inclince Dumbell Press'],
    quantity_reps: [8,10,15,20],
    quantity_set: [2,3,4,5],
}

//randomly generate a number which fits within the value of the total number 
function randomGenerator(num){
    return Math.floor(Math.random() * num)
};


//workout amount sets the minimum wourkouts between 1 and 10.
//loop through workout amount number and declare a variable called exercise
//store the workout in exercise which is randomly selected using the randomGenerator function then push exercise to workout2.
let workoutAmount = Math.ceil(Math.random() * 10)
const workout2 = [];

for (let i = 0; i < workoutAmount; i++){
  let exercise = workout.exercises[randomGenerator(workout.exercises.length)];

  workout2.push(exercise);
  
}


//function to remove duplicate arrays from the randomly generated list of exercises, loops through the array  and for checks if the element already exists
//if it doesnt exist it will add it to the new array, if it does it will not add it. 
function removeDuplicates(arr){
  let unique = [];
  arr.forEach(element => {
      if (!unique.includes(element)) {
          unique.push(element);
      }
  });
  return unique;
}

//here we use the function to assign newWorkout the value of workout2 but without any duplicates
let newWorkout = removeDuplicates(workout2);


/*
created a new const called complete workout which will contain the newWorkout along with the number of sets and exercises
we created a function for this called add text.
within the function we declared 2 variables called reps and sets. Each time the loop runs, they are assigned a new random value which is a part of the workout object within the quantity reps and sets.
we also declared a variable called a which is the exercise number we are on, which is increased for each iteration of the loop
Finally, we push a new array element for each iteration of the loop into completeWorkout. 
*/
const completeWorkout = [];
function addText(arr){
  let a = 1;
  for(let i = arr.length - 1; i >= 0; i--){
    
    let reps = workout.quantity_reps[Math.floor(Math.random() * workout.quantity_reps.length)]
    let sets = workout.quantity_set[Math.floor(Math.random() * workout.quantity_set.length)]
    completeWorkout.push(`Your workout number ${a} is: ${arr[i]}. You will do ${sets} sets of ${reps} reps.` );
   a++ 
  }
}
//we call the function on newWorkout to add the text to each element of our array,
addText(newWorkout);

//function to format the final array into a readable format for each iteration to be on a new line. 
function format (work){
    const formatted = completeWorkout.join('\n')
    console.log(completeWorkout)
};

format(completeWorkout);
