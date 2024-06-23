//Assignment no 26
/*Alien colors#2: Choose a color for an allien as you did in exercise no 25,ans write an if-else chain.
If the alien's color is green, print a statement that the  player just earned 5 points for shooting the alien.
If the alien's color is not green, print a statement  that  the player just earned 10 points.
Write one version of this program that runs the if block and another that runs the else block.*/
var alienCOlor = "green";
if (alienCOlor = "green") {
    console.log("The player just earned 5 points for shooting the alien.");
}
if (alienCOlor != "green") {
    console.log("The player just earned 10 points.");
}
var version = 'a5';
var version2 = "a7";
if (version = 'a5') {
    console.log(version);
}
else {
    console.log(version2);
}
//Assignment no 27
/*Alien color#3: Turn your if-else chain from  Exercise 5-4 into an if-else chain.
If the alien is green ,print the message that the player earned 5 points.
If the alien is yellow ,print the message that  the player earned 10 points.
If the alien is red ,print a message that the player earned 15 points.
Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
var alien_color = ["green", "yellow", "red"];
var versionofProgram = ['A4', 'A6', 'A8'];
if (alien_color[0]) {
    console.log("The player just earned 5 points");
    console.log("the version is:", versionofProgram[0]);
}
else if (alien_color[1]) {
    console.log("the player earned 10 points");
    console.log("the version is:", versionofProgram[1]);
}
else if (alien_color[2]) {
    console.log("The player earned 15 points");
    console.log("the version is:", versionofProgram[2]);
}
else {
    console.log("none");
}
//Assignment no 28
/*Stages of life:Write an if-else chain that determines a person's stage of life.Set a value for the variable
 age,and then:
 If the person is less than 2 years old,print a message that the person is a baby.
 If the person is at least 2 years old but less than 4,print a message that the person is atoddler.
 If the person is at least 4 years old but less than 13,print a message that the person is a kid.
 If the person is at leas13 years old but less than 20,print a mesage that the person is a teenager.
 If the person is at least 20 years old but less than 65,print a message that the person is an adult.
 If the person is age 65 or older,print the message that the person is an elder.*/
var age = 25;
if (age < 2) {
    console.log("The person is a baby");
}
else if (age < 4) {
    console.log("The person is a toodler");
}
else if (age < 13) {
    console.log("The person is akid");
}
else if (age < 20) {
    console.log("The person is a teenager");
}
else if (age < 65) {
    console.log("The person is adult");
}
else {
    console.log("The person is elder");
}
age = 12;
if (age < 2) {
    console.log("Age is ".concat(age, ", The person is a baby."));
}
else if (age < 4) {
    console.log("Age is ".concat(age, ", The person is a toodler."));
}
else if (age < 13) {
    console.log("Age is ".concat(age, ", The person is a kid."));
}
else if (age < 20) {
    console.log("Age is ".concat(age, ", The person is a teenager."));
}
else if (age < 65) {
    console.log("Age is ".concat(age, ", The person is an  adult."));
}
else {
    console.log("Age is ".concat(age, ", The person is elder."));
}
//Assignment no 29
/*Favorite fruit:Make an array of favorite fruits,and then write a series of  independent if statements
that check for certain fruits in your array.
Make a array of your three favorite fruits and call it favorite_fruits.
Write five if statements.Each should check wether a certain kind of fruits is in your array.If the fruit
is in your array ,the if block should print a statement, such as You really like bananas! */
var favourite_fruits = ["apple", "mango", "bananas"];
if (favourite_fruits.includes("apple")) {
    console.log("I like apple!");
}
if (favourite_fruits.includes("mango")) {
    console.log("I enjoy mango!");
}
if (favourite_fruits.includes("bananas")) {
    console.log("I really like bananas!");
}
if (favourite_fruits.includes("orange")) {
    console.log("oranges are delicious!");
}
if (favourite_fruits.includes("papaya")) {
    console.log("I don't like papaya!");
}
//Assignment no 30
/*Hello admin:Make a array of five or more usernames,including the name "admin". Imagine  you are
writing code that will print a greeting to each user after they log in to a website.Look through the array
and print a greeting to each user.
If the user name is "admin",print a special greeting,such as Hello admin,would you like to see a status
report.
Otherwise print a generic greeting,such as Hello Eric,thank you for logging in again. */
var userName = ["riha", "fija", "admin", "minha", "saba"];
function greetUsers() {
    for (var i in userName) {
        if (userName[i].toLowerCase() === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(userName[i], ", thank you for logging in again."));
        }
    }
}
greetUsers();
