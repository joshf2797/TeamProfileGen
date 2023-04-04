const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('/.lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'index.html');

