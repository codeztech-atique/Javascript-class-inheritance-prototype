//Function wiht ProtoType Example and Inheritance Admin inside function User
function User(email, name) {
   this.email = email;
   this.name = name;
   this.online = false;
}

User.prototype.login = function() {
    this.online = true;
    console.log(this.email, ' is logged inn');
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, ' is logged inn');
}

function AdminInheritace(...args) {
   User.apply(this, args);
   this.role = "Super Admin";
} 

//If we want to append all the login and logout function inside admin we can say 
//Inheritance Here
AdminInheritace.prototype = Object.create(User.prototype);

//If we want to chain function inside admin not user 
//Prototype chaining
AdminInheritace.prototype.deleteUser = function (u) {
    users = users.filter(e => {
        e.email !== u.email;
    })
}

var userOne = new User("atique1201@gmail.com", 'Atique Ahmed');
var userTwo = new User("atique1224@gmail.com", 'Sunny Ahmed');
var admin = new AdminInheritace("codeztech@gmail.com", 'Codez Tech');

var users = [userOne, userTwo, admin];

userOne.login();

console.log(admin);
admin.login();


