const Employee = require('./Employee')

class Intern extends Employee {
    constructor (role,name,id,email,internSchool) {
        super(role,name,id,email)
        this.internSchool = internSchool;
    }
    getRole() {
        return 'Intern';
    }
    getGithub() {
        return this.internSchool;
    }
}

module.exports = Intern;