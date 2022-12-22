//your code here
let itemInput = document.getElementById("item-name-input")
let priceInput = document.getElementById("item-price-input")
let table = document.getElementById("table")
let add = document.getElementById("add")
let total = document.getElementById("total")
let pricearr = [];

function grandTotal(){
  let item = itemInput.value
  let price = (priceInput.value) 
  pricearr.push( parseInt(price))
  let sum = 0;
  if((item !== "") && (price !== "")){
  let row = document.createElement("tr")
  row.innerHTML = `<td> ${item} </td> <td> ${price} </td> `
  table.append(row);
for(let i=0;i<pricearr.length;i++){
    sum = sum + pricearr[i];
}
  
  total.innerText = "Grandtotal :" + sum
}
}
add.addEventListener('click', grandTotal)