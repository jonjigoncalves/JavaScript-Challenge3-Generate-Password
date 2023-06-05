# JavaScript-Challenge3-Generate-Password
Below are the steps that i took to generate a random  password for the 03 challenge
1. i created an array of four different character sets (lowercase, uppercase, numbers and special characters)
 <!-- i also decided to combined them just for practice sake -->
2. create a funtion to get  the userinput for lenght of the password and the characters they want to include.
3. next is the generatePassword section that calls the getUserInput function  which contains the choices from the prompt
4. create conditional statements to create another array that only conists of the selected characters and concat them
5. create for loop to select a random character from the array frommthe conditional statments until the loop returns falsey
6. move html out of the develop folder so that it isnt in a folder