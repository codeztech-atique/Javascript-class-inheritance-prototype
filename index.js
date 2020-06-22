//Class with Method Chaining and Inheritance

class User {
    constructor(email, name) {
       this.email = email;
       this.name = name;
    }
    login() {
        console.log(this.email, ' is logged inn');
        return this;
    }
    logout() {
        console.log(this.email, ' is logged out');
        return this;
    }
}

class AdminInheritace extends User {
    deleteUser(user) {
        users = users.filter(e => {
            return e.email !== user.email;
        })
    }
}

var userOne = new User("atique1201@gmail.com", 'Atique Ahmed');
var userTwo = new User("atique1224@gmail.com", 'Sunny Ahmed');
var admin = new AdminInheritace("codeztech@gmail.com", 'Codez Tech');
//Method Channing
userOne.login().logout();


//Inheritance
var users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);

console.log(users);

