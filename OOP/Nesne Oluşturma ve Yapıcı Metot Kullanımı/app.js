class People {
    constructor(name,lastname,age,livingCity){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.livingCity = livingCity;
    }

    showInformation(){
        const container = document.querySelector(".container");
        const p = document.createElement("p");
        p.textContent = `İsim : ${this.name} Soyisim : ${this.lastname} Yaş : ${this.age} Yaşadığı Şehir : ${this.livingCity}`;
        container.appendChild(p);
    }
}

const person1 = new People("Furkan","Gökoluk","22","Adana");
person1.showInformation();

const person2 = new People("Ayşe","Semerci","30","Osmaniye");
person2.showInformation();

console.log(person1.name);
console.log(person2.name);