'use strict';

const cart = {
    items: [],
    count: 0,

    get totalPrice() {
        return this.calculateItemPrice();
    },

    calculateItemPrice() {
        let price = this.items.reduce((accumulator, curr) => {
            return accumulator + curr.price * curr.quant;
        }, 0);
        return price;
    },
    increaseCount(num) {
        this.count += num;
    },
    add(name, price, quant = 1) {
        this.items.push({name, price, quant});
        this.increaseCount(quant);
    },
    clear() {
        this.items.length = 0;
        this.count = 0;
    },
    print() {
        console.log(JSON.stringify(this.items));
        console.log(this.totalPrice);
        console.log(this.count);
    }
};

cart.add("Огурец", 5, 2);
cart.add("Машина", 200);
cart.add("Курительная Трубка", 10, 20);
cart.print();

cart.clear();
cart.print();