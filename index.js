const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('/.lib/Manager');
const Developer = require('./lib/Developer');
const JrDev = require('./lib/Jrdev');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'index.html');

const tempHTML = require('.//src/tempHTML');

const team = [];

function newTeamMember () {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'team_member',
                message: 'Would you like to add a Developer or a Jr Developer?',
                choices: ['Developer', 'JrDev', 'Assemble New Team'];
            },
        ])
        .then((val) => {
            if(val.team_member === 'Developer') {
                addDeveloper();
            } else if(val.team_member === 'JrDev') {
                addJrDev();
            } else {
                createTeam();
            }
        })
}

function addManager() {
    inquirer
        .prompt([
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

function addDeveloper() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the new Developer?'
            },
            {
                type: 'input',
                name: 
            }
        ])
}