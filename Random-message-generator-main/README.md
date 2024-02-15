# Welcome to My Travel Generator

The idea of this project is to generate **random travel destination** from the listed array, giving you a **random price** and a **random temperature**

## The Travel Generator Object

    const  travelGenerator  =  {


	    destination:  ['Thaildand','Duabi',  'Hungary','Monaco','Miami','Norway'],

	    temp:  ['Hot','Very hot',  'Cold','Cool','Snowy'],

	    price:  ['Cheap','expensive','average']


    
	    destination:  ['Thaildand','Duabi',  'Hungary','Monaco','Miami','Norway'],
    
	    temp:  ['Hot','Very hot',  'Cold','Cool','Snowy'],
    
	    price:  ['Cheap','expensive','average']
    

    }

## The process

The steps that it takes to generate a random destination are as follows:
> 1. Create a random number generator function - this will help randomly select an array index.
> 
> 2. Create the **travelGenerator** object which includes - destination, temp, and price.
> 3. Declare an empty array called **destination**.
> 4. Create a **'for-in-loop'** to iterate through the travelGenerator object.
> 5. declare a **variable called options**. we use our randomNumber function to to assign a random option from the initial array. 
> 6. Using a **switch-statement**, determine which property is being processed. Based on the property name, we push an appropriate message to our empty const destination. 
> 7. Finally, creating a **function called 'format'** which takes an array as an argument and then formats it into a string that can be printed to the console. 
### Requirements 
>Visual Studio Code
>JavaScript 




## Example of final outputs. 

    Your destination is: Monaco
    The temperature will be: Cool
    The price will be: expensive


    Your destination is: Miami
    The temperature will be: Snowy
    The price will be: Cheap

 
    Your destination is: Miami
    The temperature will be: Snowy
    The price will be: Cheap

