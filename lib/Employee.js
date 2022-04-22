class Employee {
    constructor (role,name,id,email) {
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getRole() {
        return this.role;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
}

module.exports = Employee;