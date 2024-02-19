class MigrosBase {
    discountRate = 20;

    constructor(firstName, lastName, haveACard, products) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.haveACard = haveACard;
        this.products = products;
    }

    calculate() {
        let payableAmount = 0;

        if (this.ısThereProduct(this.products)) {
            if (this.haveACard) {
                this.products.forEach((product) => {
                    payableAmount  += (product.price * (100 - this.discountRate) / 100);
                })
            } else {
                this.products.forEach((product) => {
                    payableAmount += product.price;
                })
            }

        } else {
            alert("En az bir tane ürün satın almalısınız.");
        }
        
        return payableAmount;
    }

    ısThereProduct(products) {
        return products != null && products.length > 0
    }
}