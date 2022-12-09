/** Represents an Employee */
class Employee {
    /**
     * 
     * @param {string} id - ID of the employee
     * @param {string} name - Name of the employee
     * @param {string} email - Email of the employee
     */
    constructor(id, name, email) {
        if (!id || !name) {
            throw new Error('Employee contained invalid data');
        }
        
        if (!this.isValidEmail(email)) {
            throw new Error('Employee email is invalid');
        }

        this.id = id;
        this.name = name;
        this.email = email;
    }

    /**
     * Check if email is valid. Used internally by class.
     * 
     * @param {string} email - email to test
     * 
     * @returns {boolean} - indicating if valid email using standard regex
     */
    isValidEmail(email) {
        const validEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        return validEmail.test(email);
    }

    /** Get the employee's name */
    getName() {
        return this.name;
    }

    /** Get the employee's ID */
    getId() {
        return this.id;
    }

    /** Get the employee's email */
    getEmail() {
        return this.email;
    }

    /** Get the current Role */
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee