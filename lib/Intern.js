const Employee = require('./Employee');

/** Represents an Intern */
class Intern extends Employee {
    /**
     * 
     * @param {string} id - ID of the employee
     * @param {string} name - Name of the employee
     * @param {string} email - Email of the employee
     * @param {string} school - School of the Intern
     */
    constructor(id, name, email, school) {
        if (!school) {
            throw new Error('Intern contained invalid data');
        }
        
        super(id, name, email);
        this.school = school;
    }

    /** Get the intern's school */
    getSchool() {
        return this.school;
    }

    /** Get the current Role */
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;