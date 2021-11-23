let products = [
  "sampon",
  "tusfürdő",
  {
    category: "konyhai",
    name: "turmix2000",
    price: 5000,
    inStock: true,
    attachment: ["fej", "motor"]
  }
];

function main() {
  console.log("it works");
  let product = products[2];
  let answer = window.confirm("Do you want a " + product.name);
  if (answer != true){
    let RUsure = window.confirm("Do you want a ");
  }
}

window.addEventListener("load", main);