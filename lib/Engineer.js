const Employee = require('./Employee')

class Engineer extends Employee {
    constructor (role,name,id,email,engineerGitHub) {
        super(role,name,id,email)
        this.engineerGitHub = engineerGitHub;
    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.engineerGitHub;
    }
}

module.exports = Engineer;