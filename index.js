const inquirer = require('inquirer');
const teamSomething = [];
const fs = require('fs');
const teamProfile = require('./src/teamProfile')
const teamStyle = require('./src/teamStyle')
const Manager = require('./lib/Manager')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter manager name',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'Enter manager ID',
            name: 'managerID',
        },
        {
            type: 'input',
            message: 'Enter email address',
            name: 'managerEmailAddress',
        },
        {
            type: 'input',
            message: 'Enter office number',
            name: 'officeNo',
        },
    ])

    .then(answers => {
       const manager = new Manager('Manager', answers.managerName, answers.managerID, answers.managerEmailAddress, answers.officeNo);
        teamSomething.push(manager);
       team();
    });

function team(){
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Choose team member title',
                choices: 
                [
                    'Engineer',
                    'Intern',
                    'Done',
                ],
                name: 'role',
            }
        ])

    .then(answers => {
        console.log(answers);
        answers.role==='Engineer' ? engineer() : 
        answers.role==='Intern' ? intern() : 
        done();       
    })
}

function engineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter engineer name',
                name: 'engineerName',
            },
            {
                type: 'input',
                message: 'Enter engineer ID',
                name: 'engineerID',
            },
            {
                type: 'input',
                message: 'Enter email address',
                name: 'engineerEmailAddress',
            },
            {
                type: 'input',
                message: 'Enter GitHub username',
                name: 'engineerGitHub',
            },
    ])

    .then(answers => {
       console.log(answers)
       team();
    })
}

function intern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter intern name',
                name: 'internName',
            },
            {
                type: 'input',
                message: 'Enter employee ID',
                name: 'internID',
            },
            {
                type: 'input',
                message: 'Enter email address',
                name: 'internEmailAddress',
            },
            {
                type: 'input',
                message: 'Enter school name',
                name: 'internSchool',
            },
    ])

    .then(answers => {
       console.log(answers)
       team();
    })
}


function done() {
    console.log('Finished!')
    let generateHTML = teamProfile(teamSomething);
    fs.writeFile('./dist/index.html', generateHTML, (error)=>{
        if (error) {
            console.log (error);
        } else {
            console.log('index.html written')
        }
    })

    // let generateCSS = teamStyle();
    // fs.writeFile('./dist/style.css', generateCSS, (error)=>{
    //     if (error) {
    //         console.log (error);
    //     } else {
    //         console.log('style.css written')
    //     }
    // })
}

