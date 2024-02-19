class Person{
    firstName;

    constructor(firstName){
        this.firstName = firstName;
    }

    write(){
        console.log("Person Write : " + this.firstName);
    }
}

class Student extends Person{ // extends keyword'ü le miras alıyoruz. 
    write(){
        console.log("Student Write : " + this.firstName);
        super.write(); // Anasınıfdaki fonksiyone erişmemizi sağlıyor!.
    }
}

const student1 = new Student("Furkan");
student1.write();