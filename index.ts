#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//your name
let Name_players=await inquirer.prompt({

    name:"name",
    message:"Enter your name",
    type:"input"

})
//lets play
let play=await inquirer.prompt({
    name:"play",
    message:"lets play",
    type:"input"
})
//now questions
const questions = ([
{
    question:"who is the father of computer?",
    choices:["Charles Babbage", "Nikola Tesla", "Dennis Ritchie", "James Gosling"],
    correctanswer:"Charles Babbage"

},
{
    question:"Who wrote 'To Kill a Mockingbird'?",
    choices:["Harper Lee", "J.K. Rowling", "Stephen King" , "Charles Dickens"],
    correctanswer:"Harper Lee"
},
{
    question:"Who was the first President of the United States?",
    choices:["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
    correctanswer:"George Washington"
},
{
    question:"What does HTML stand for?",
    choices:["Hyper text Markup Language", "High Tech Machine Learning", "Home Tool Management Language", "Hyperlink and Text Management Language"],
    correctanswer:"Hyper text Markup Language"
},
{
    question:"Which programming language is known for its use in developing dynamic web applications?",
    choices:["Python", "Java", "JavaScript", "C++"],
    correctanswer:"JavaScript"
},
{
    question:"In which sport is the term 'ace' commonly used?",
    choices:["Tennis", "Soccer", "Golf", "Basketball"],
    correctanswer:"Tennis"
},
{
    question:"Who holds the record for the most Olympic gold medals of all time?",
    choices:["Serena Williams", "Usain Bolt", "Michael Phelps", "Simone Biles"],
    correctanswer:"Michael Phelps"
},
{
    question:"Which sport is renowned for its popularity in Pakistan and is often referred to as the 'national sport' of the country?",
    choices:["Cricket", "Field Hockey", "Polo", "Squash"],
    correctanswer:"Cricket"
},
{
    question:"what is the capital of India?",
    choices:["NewDelhi", "Beijing", "Tokyo", "Mumbai"],
    correctanswer:"NewDelhi"
},
{
    question:"What is the chemical symbol for gold?",
    choices:["Au", "Ag", "Fe", "Cu"],
    correctanswer:"Au"
},
{
    question:"which of the following is not a programming language?",
    choices:["Python", "Java", "JavaScript", "C++","Ruby"],
    correctanswer:"Ruby"
},
{
    question: "who is the best football player in the world?",
    choices:["messi", "ronaldo", "neymar", "mbappe"],
    correctanswer:"ronaldo"
}
]);

let score=0;

async function askQuestion(question: string, choices: string[], correctanswer: string) {
    const styledChoices = choices.map(choice => chalk.greenBright(choice));
    const answer = await inquirer.prompt({
        name: "userAnswer",
        message: question,
        type: "list",
        choices: styledChoices
    });

    const correctIndex = styledChoices.findIndex(option => option === chalk.greenBright(correctanswer));
//green for correct ans
    if (answer.userAnswer === styledChoices[correctIndex]) {
        console.log(chalk.green("Correct!"));
        score++;
//red for incorrect
    } else {
        console.log(chalk.red("Incorrect!"));
    }
}
//a welcoming message
async function runQuiz() {
    console.log(chalk.yellow("Welcome To The Quiz Game!")); // Style welcome message with yellow color

    for (const { question, choices, correctanswer } of questions) {
        await askQuestion(question, choices, correctanswer);
    }
//your rel,with your name ans score
    console.log(chalk.cyan(`Quiz completed! \n"${Name_players.name}" Your score is:`), chalk.bold(score)); // Style score with cyan color
}

runQuiz();

//ans the codes ends..