class Transportation {
    constructor(brand, model, productionTime) {
        this.brand = brand;
        this.model = model;
        this.productionTime = productionTime;
    }

    write() {
        console.log(`Marka : ${this.brand}, Model : ${this.model}, Üretim Zamanı : ${this.productionTime}`);
    }
}


class Car extends Transportation {

    constructor(brand, model, productionTime, tireType) {
        super(brand,model,productionTime); //super() Default bir şekilde yapılıyor ama Car sınıfında tireType diye miras aldığımız sınıftan farklı bir property tanımlandığı zaman kullanılması gerek!.
        this.tireType = tireType;
    }

    write() {
        super.write(); // super
        console.log(`Lastik Tipi : ${this.tireType}`);
    }
}

const car1 = new Car("Renault", "Clio", 2017, "Winter");
car1.write();