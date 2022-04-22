const Employee = require('./Employee')

class Manager extends Employee {
    constructor (role,name,id,email,officeNo) {
        super(role,name,id,email)
        this.officeNo = officeNo;
    }
    getRole() {
        return 'Manager';
    }
    getOfficeNo() {
        return this.officeNo;
    }
}

module.exports = Manager;