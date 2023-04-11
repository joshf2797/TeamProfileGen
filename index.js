const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'index.html');

const tempHTML = require('.//src/tempHTML');

const team = [];

function newTeamMember () {
    inquirer.prompt([
            {
                type: 'list',
                name: 'team_member',
                message: 'Would you like to add a Engineer or a Jr Engineer?',
                choices: ['Engineer', 'Intern', 'Assemble New Team'],
            },
        ])
        .then((val) => {
            if(val.team_member === 'Engineer') {
                addEngineer();
            } else if(val.team_member === 'Intern') {
                addIntern();
            } else {
                createTeam();
            }
        })
}

function addManager() {
    inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Name of new team manager?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the managers Id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the managers email?'
            },
            {
                type: 'input',
                name: 'phoneNumber',
                message: 'What is the managers work phone number?'
            },
        ])
        .then((val) => {
            const manager = new Manager(val.name, val.id, val.email, val.phoneNumber);
            console.table(manager);
            team.push(manager);
            newTeamMember();
        });
}

function addEngineer() {
    inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the new Engineer?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the new Engineers ID?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the new Engineers email address?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the new Engineers Github?'
            },
        ])
        .then((val) => {
            const engineer = new Engineer(val.name, val.id, val.email, val.github);
            team.push(engineer);
            newTeamMember();
        });
}

function addIntern() {
    inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the Intern's name`,
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the Intern's employee ID?`,
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the Intern's email address?`,
            },
            {
                type: 'input',
                name: 'school',
                message: `What school did the new Intern attend?`,
            },
        ])
        .then((val) => {
            const intern = new Intern(val.name, val.id, val.email, val.school);
            console.table(intern);
            team.push(intern);
            newTeamMember();
        });
}

function createTeam() {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    } else {
        fs.writeFileSync(distPath, tempHTML(team), 'utf-8');
        console.log('HTML file created in the dist folder');
    }
}

function startApp() {
    addManager();
}

startApp();