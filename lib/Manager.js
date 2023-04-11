// Import the Employee Class
const Employee = require('./Employee');

// Manager class is a child of the Employee class
class Manager extends Employee {
    constructor(name, id, email, phoneNumber) {
        super(name, id, email);
        this.phoneNumber = phoneNumber;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    getRole() {
        return "Manager";
    }
}
module.exports = Manager;