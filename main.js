let products = [
  {
    category: "konyhai",
    name: "turmix2000",
    price: 5000,
    stock: 3,
    attachment: ["fej", "motor"]
  },
  {
    category: "Pancsi",
    name: "Sampon",
    price: 700,
    stock: 100,
    attachment: ["Head", "Shoulders"]
  },
  {
    category: "Pancsi",
    name: "tusfürdő",
    price: 650,
    stock: 10,
    attachment: ["kókusz", "szagtalanító"]
  }
];

let customer = "Ádám";

function main() {
  console.log("it works");
  let product = products[2];
  let answer = window.confirm("Do you want a " + product.name);
  if (answer != true){
    let answer = window.confirm("But it jas " + product.attachment.join("."));
    if(answer ===true){
      console.log(product);
    }
  }
}
function invetory() {
  let stock = products[2].stock;
  let price = products[2].price;
  let value = stock * price;
  let div = document.createElement("div");
  div.innerText= products[2].name + " : " + value;
  document.body.append(div);

  stock = products[1].stock;
  price = products[1].price;
  value = stock * price;
  div = document.createElement("div");
  div.innerText= products[1].name + " : " + value;
  document.body.append(div);

  stock = products[0].stock;
  price = products[0].price;
  value = stock * price;
  div = document.createElement("div");
  div.innerText= products[0].name + " : " + value;
  document.body.append(div);
  
  stock = products[0].stock;
  let available = stock >= 5;
  div = document.createElement("div");
  if(available){
    div.innerText = products[0].name + " elérhető :D";
  } else {
    div.innerText = products[0].name + "nem elérhető :'c";
  }
  document.body.append(div);

  let special = customer === "Ádám";
  if (!available && special) {
    div.innerText = div.innerText + "(de neki mégis)!";
  }
}


window.addEventListener("load", invetory);