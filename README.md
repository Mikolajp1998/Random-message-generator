# Welcome to My Random Generator Projects

The idea of these projects is to generate **randomly** from the listed array, giving you a **random message** at the end
## Table of contents
- [The Travel Generator](#the-travel-generator-project)
-[The process](#the-process)
-[Example Outputs](#example-final-outputs)

- [Workout Generator](#the-workout-generator)
--[What is does?](#what-it-does)
--[Main Functions](#main-functions)
--[Example Outputs](#examples-of-random-workout-generations)


## Projects
### The Travel Generator Project
#### The Travel Generator Object

    const  travelGenerator  =  {
    
	    destination:  ['Thaildand','Duabi',  'Hungary','Monaco','Miami','Norway'],
    
	    temp:  ['Hot','Very hot',  'Cold','Cool','Snowy'],
    
	    price:  ['Cheap','expensive','average']
    
    }

#### The process

The steps that it takes to generate a random destination are as follows:
> 1. Create a random number generator function - this will help randomly select an array index.
> 
> 2. Create the **travelGenerator** object which includes - destination, temp, and price.
> 3. Declare an empty array called **destination**.
> 4. Create a **'for-in-loop'** to iterate through the travelGenerator object.
> 5. declare a **variable called options**. we use our randomNumber function to to assign a random option from the initial array. 
> 6. Using a **switch-statement**, determine which property is being processed. Based on the property name, we push an appropriate message to our empty const destination. 
> 7. Finally, creating a **function called 'format'** which takes an array as an argument and then formats it into a string that can be printed to the console. 

#### Example of final outputs. 

    Your destination is: Monaco
    The temperature will be: Cool
    The price will be: expensive
 
    Your destination is: Miami
    The temperature will be: Snowy
    The price will be: Cheap

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
