const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter manager member name',
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
       console.log(answers)
       team();
    })

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
                message: 'Enter engineer member name',
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
                message: 'Enter intern member name',
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
    console.log('finished')
}

