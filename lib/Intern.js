// Import Employee parent class
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.jobTitle = 'Intern';
    }

    getSchool() {
        return this.school;
    }
}
module.exports = Intern;