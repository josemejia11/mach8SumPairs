# Code test for Mach8

Hello guys my name is **Jose Miguel Mejia Chaverra**, this little project is the solution to find all the pairs of numbers that sum a target value, the function I created iterates through the given array, looking for a element that already exist in the `checkArray`, if it doesn't exist it add the `target - currentNum` ( example if 8 doesn't exist and the target is 12 it will add a 4 to the `checkArray`) so if the next element in the array exist in the `checkArray` it means it found a couple of numbers that sums the target ( going back to the previous example if 4 already exist in `checkArray` and the value we are checking is 4, it's because an 8 is in the array and 8+4 equals 12 that is the target number)

# TO RUN THE PROJECT:
the project takes 2 parameters along side the run command, so you need to add the values after the node app.js
## For example:
### node app.js  "[1,9,5,0,20,-4,12,16,7,6,6]" 12

### you can use the previous example and change the numbers as you like, just be sure to follow the same pattern "[num1,num2,num3,num4...]" targetNum