# Welcome to My Random Generator Project

The idea of this project is to generate **randomly** from the listed array, giving you a **random workout** at the end
## Table of contents

- [Workout Generator](#the-workout-generator)

	-[What is does?](#what-it-does)
  
	-[Main Functions](#main-functions)

	-[Example Outputs](#examples-of-random-workout-generations)


## Projects
### The Workout Generator
#### The Workout Generator Object

       const  workout  =  {
    
    exercises:  ['Bench Press',  'Deadlift',  'Squat',  'Dumbell Press','Leg Press','Tricep Pull-Down','Bicep Curl','Curl Press','Inclince Dumbell Press'],
    
    quantity_reps:  [8,10,15,20],
    
    quantity_set:  [2,3,4,5],
    
    }

 



#### What it does
Simply speaking, the workout generator will randomly generate  workouts for you with a random number of sets and reps.

#### Main Functions 
Inside workout generator, there are 4 main functions. 
>1. The first function is the random generator. This is 
>2. Then another function is to check for any duplicates in that array and delete them.
>3. Third function is to add the text such as the workout number, the amount of sets and  reps (which are also randomly generated).
>4. Finally, there is the format function. This takes one parameter, which is the final array after calling the addText function on it and formats it into a readable format.]

#### Examples of Random Workout Generations

    [
    
    'Your workout number 1 is: Dumbell Press. You will do 2 sets of 20 reps.',
    
    'Your workout number 2 is: Curl Press. You will do 5 sets of 10 reps.',
    
    'Your workout number 3 is: Tricep Pull-Down. You will do 4 sets of 20 reps.',
    
    'Your workout number 4 is: Deadlift. You will do 5 sets of 15 reps.',
    
    'Your workout number 5 is: Bench Press. You will do 3 sets of 10 reps.',
    
    'Your workout number 6 is: Bicep Curl. You will do 5 sets of 10 reps.'
    
    ]

#### Built with
Visual Studio Code
JavaScript 
