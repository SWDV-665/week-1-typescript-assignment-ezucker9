// This is used to create class
class Grocery {
    // this declares properties and corresponding data type
    Name: string;
    Quantity: number;
    Price: number;

    // This adds a constructor
    constructor(n: string, q: number, p: number){
        this.name = n;
        this.quantity = q;
        this.price = p;
    }
}

// This creates a list of grocery items
let list_of_items = [
    new Grocery("Soy Milk", 4, 12),
    new Grocery("Gluten Free Bread", 8, 30),
    new Grocery("Grass-Fed Beef", 12, 18)
]

// This accesses the html element with id app
const ele = document.getElementById("app");

// This creates and apends a <p> element for each item in the grocery list
list_of_items.forEach(e => {
    const p = document.createElement("p");
    p.textContent = `${e.name} ${e.quantity} -> $${e.price}`;
    ele.appendChild(p);
});
