/**
Creates a shopping list and displays it on shopping.innerHTML
*/

//
window.onload= function(){
//You will call the functions you wrote here
  let currList = itemArr();
  printList(currList);
  printTotal(currList);
}

function Item(name, price, count) {
  this.name = name;
  this.price = price;
  this.count = count;
}

function itemArr() {
  var shopList = [];

  while (true) {
    let name = prompt("What would you like to buy?");

    if (name == null)
      break;

    let price = prompt("What is its price?");

    if (price == null)
      break;

    let count = prompt("How many do you want?");

    if (count == null)
    break;

    let item = new Item(name, price, count);

    shopList.push(item);
  }

  return shopList;
}

function printTotal(list) {
  let total = 0;

  for (let i = 0; i < list.length; i++) {
    total += list[i].price * list[i].count;
  }

  document.getElementById("shoppingList").innerHTML += "<tr><td>Your total is $" + total + '</td></tr>';
}

//Prints the shopping list on the web page by changing the html code
//list: Array of items
function printList(list){
    for(let i = 0; i < list.length; i++){
        document.getElementById("shoppingList").innerHTML += "<tr><td>" + list[i].name  + "</td> <td>" + list[i].price  + "</td> <td>" + list[i].count  +'</td></tr>';
    }
}
