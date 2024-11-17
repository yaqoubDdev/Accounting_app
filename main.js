// console.log('Hello World!');

// console.log(result);

let currentEntryArray = [];
let storedDataArray = [];

// GEt data 
function getInput(){
  
  let object = {};
  object.Name = itemName.value;
  object.Price = Number(itemPrice.value);
  object.Quantity = Number(itemQuantity.value);
  object.Total = object.Price * object.Quantity;
  clearInput()
  return object;
}

//clear data entered in input boxes
function clearInput() {
  itemName.value = '';
  itemPrice.value = '';
  itemQuantity.value = '';
}

// check if all input field have been filled
function checkForInput() {
  return itemName.value && itemPrice.value && itemQuantity.value ? true : false;
}

// Add to curren data array and render in table
submitBtn.onclick = () => {
  
  if(!checkForInput()) {
    window.alert('Complete inputs first')
    return;
  }
  
   

  currentEntryArray.push(getInput())
  renderHTML(makeTableRow(currentEntryArray))
  total.textContent = getTotal(currentEntryArray)
  console.log(currentEntryArray);

  
  
  
} 

// clear button in for input fields
clearBtn.onclick = () => clearInput();

// save button on table
// ** To get a date and save it in
// ** stored data array
// ** and render html
saveBtn.onclick = () => {

  if(currentEntryArray.length == 0) {
    window.alert('No entry made');
    return;
  };

  let date = window.prompt('  Date??  DD/MM/YYYY');

  if (!date){
    window.alert('No date');
    return;
  }

  let object = {date: date, data: currentEntryArray};

  saveToStoredData(object);

  // currentEntryArray.push(getInput())
  renderHTML(makeTableRow(currentEntryArray));
  total.textContent = getTotal(currentEntryArray);

  
}

/* 
  These three functions bellow
  are for :
    make table == make a table row from data(currentDataArray)
    get total from data 
    push the table row into the DOM
    
 */
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


// to push data into storedDataArray
function saveToStoredData(obj){
  storedDataArray.push({
    Date: obj.date,
    Data: obj.data
  });
  currentEntryArray = [];
  console.log(storedDataArray);
  console.log(currentEntryArray);
}





