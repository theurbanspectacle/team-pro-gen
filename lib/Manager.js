const Employee = require('./Employee');

/** Represents a Manager */
class Manager extends Employee {
    /**
     * 
     * @param {string} id - ID of the employee
     * @param {string} name - Name of the employee
     * @param {string} email - Email of the employee
     * @param {string} officeNumber - Office number of the manager
     */
    constructor(id, name, email, officeNumber) {
        if (!officeNumber) {
            throw new Error('Manager contained invalid data');
        }

        super(id, name, email);
        this.officeNumber = officeNumber;
    }

    /** Get the managers office number */
    getOfficeNumber() {
        return this.officeNumber;
    }

    /** Get the current Role */
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;