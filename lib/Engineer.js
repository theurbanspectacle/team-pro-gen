const Employee = require('./Employee');

/** Represents an Engineer */
class Engineer extends Employee {
    /**
     * 
     * @param {string} id - ID of the employee
     * @param {string} name - Name of the employee
     * @param {string} email - Email of the employee
     * @param {string} github - Github of the engineer
     */
    constructor(id, name, email, github) {
        if (!github) {
            throw new Error('Engineer contained invalid data');
        }

        super(id, name, email);
        this.github = github;
    }

    /** Get the engineers github */
    getGithub() {
        return this.github;
    }

    /** Get the current Role */
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;