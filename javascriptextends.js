class Abc {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    login() {
        console.log("I am login");
    }
}

class News extends Abc {
    logout() {
        console.log("logout");
    }
}

var first = new Abc('sunny', 'sunny@gmail.com');
var second = new News('sunny', 'sunny@gmail.com');
first.login();

second.logout();
