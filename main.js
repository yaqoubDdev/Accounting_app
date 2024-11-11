// console.log('Hello World!');

// console.log(result);

let currentEntryArray = [];
let storedDataArray = [];


function getInput(){
  
  let object = {};
  object.Name = itemName.value;
  object.Price = Number(itemPrice.value);
  object.Quantity = Number(itemQuantity.value);
  object.Total = object.Price * object.Quantity;
  clearInput()
  return object;
}

function clearInput() {
  itemName.value = '';
  itemPrice.value = '';
  itemQuantity.value = '';
}

function checkForInput() {
  return itemName.value && itemPrice.value && itemQuantity.value ? true : false;
}


submitBtn.onclick = () => {
  
  if(!checkForInput()) {
    window.alert('Complete inputs first')
    return;
  }
  
   

  currentEntryArray.push(getInput())
  renderHTML(makeTableRow(currentEntryArray))
  total.textContent = getTotal(currentEntryArray)
  
  
  
} 

clearBtn.onclick = () => clearInput();

saveBtn.onclick = () => {

  if(currentEntryArray.length == 0) {
    window.alert('No entry made');
    return;
  };

  let date = window.prompt('  Date??  DD/MM/YYYY');
  if (!date){
    window.alert('No date')
    return;
  }

  let object = {date: date, data: currentEntryArray}

  saveToStoredData(object);

  
}


function makeTableRow(arrayOfObjects){
  let array = []
  arrayOfObjects.forEach(obj => {
    array.push(
        `
        <tr>
          <td>${obj.Name}</td>
          <td>${obj.Price}</td>
          <td>${obj.Quantity}</td>
          <td>${obj.Total}</td>
        </tr>
        `
        );
  });
  return array
}


function getTotal(obj){
  let total = 0;
  obj.forEach(obj => total += obj.Total)
  return total
}



function renderHTML(array) {
  tableBody.innerHTML = array.join(' ');
}



function saveToStoredData(obj){
  storedDataArray.push({
    Date: obj.date,
    Data: obj.data
  });
  currentEntryArray = [];
  console.log(storedDataArray);
  console.log(currentEntryArray);
}





