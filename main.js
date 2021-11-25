let products = [
  {
    category: "konyhai",
    name: "turmix2000",
    price: 5000,
    stock: 3,
    attachments: ["fej", "motor"]
  },
  {
    category: "Pancsi",
    name: "Sampon",
    price: 700,
    stock: 100,
    attachments: ["Head", "Shoulders"]
  },
  {
    category: "Pancsi",
    name: "tusfürdő",
    price: 650,
    stock: 10,
    attachments: ["kókusz", "szagtalanító"]
  }
];

let customer = "Ádám";

function main() {
  console.log("it works");
  let product = products[2];
  let answer = window.confirm("Do you want a " + product.name);
  if (answer != true){
    let answer = window.confirm("But it jas " + product.attachments.join("."));
    if(answer ===true){
      console.log(product);
    }
  }
}

function displayDetails(product) {
  let stock = product.stock;
  let price = product.price;
  let value = stock * price;
  let name = product.name;
  let attachments = product.attachments;
  let productDetailsDiv = document.createElement("div");
  productDetailsDiv.innerText= name + " : " + value + " " + attachments.join(',');
  productDetailsDiv.className = "products-details";
  document.getElementById("container").append(productDetailsDiv);
  
  
  let available = stock >= 5;
  let stockInfoDiv = document.createElement("div");
  stockInfoDiv.className = "stock-info";
  if(available){
    stockInfoDiv.innerText = name + " elérhető :D";
  } else {
    stockInfoDiv.innerText = name + "nem elérhető :'c";
  }
  productDetailsDiv.append(stockInfoDiv);

  let special = customer === "Ádám";
  if (!available && special) {
    stockInfoDiv.innerText = stockInfoDiv.innerText + "(de neki mégis)!";
  }
}

function invetory() {
  for (let item of products){
    displayDetails(item);
  }
  
  
}


window.addEventListener("load", invetory);