// Q_1. You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data.

let data = "secret information";

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Data =",data);
    }
}




// Q_2. Create a new class called Admin which inherits from User. Add a new method called editData that allows it to edit website data.

class Admin extends User {
    constructor(name, email){
        super(name, email);
    }
    editData(){
        data = "some new value";
    }
}

let student1 = new User("Babita","babita@email.com");
let student2 = new User("Aman","aman@email.com");

let teacher1 = new User("Dean","dean@college.com");

let admin1 = new Admin("admin","admin@college.com");
