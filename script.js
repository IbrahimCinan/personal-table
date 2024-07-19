const tableBody = document.querySelector("tbody");
const adinput=document.getElementById('ad-cel');
const soyadinput=document.getElementById('soyad-cel');
const tcinput=document.getElementById('tc-cel');
const telinput=document.getElementById('telefon-cel');
const idinput=document.getElementById('id-cel');

const buttonartırıcı = document.getElementById('buton1');
let currentNumber = 1000;
let nosayısı=0;

function rastgelesayı(){
    //const randomNumber = Math.floor(Math.random() * 100);
    currentNumber++;
    idinput.textContent=` ${currentNumber}`;
}

  
function addRow() {
    
    if(adinput.value != "" && soyadinput.value!=""){ 
  
  const row = tableBody.insertRow();
  const noCell = row.insertCell();
  const idCell = row.insertCell();
  const adCell = row.insertCell();
  const soyadCell = row.insertCell();
  const tcCell = row.insertCell();
  const telefonCell = row.insertCell();
  //currentNumber++;
 // idinput.textContent=` ${currentNumber}`;
 
const taskText=adinput.value;
const taskText2=soyadinput.value;
const taskText3=tcinput.value;
const taskText4=telinput.value;
const taskText5=idinput.textContent;

    nosayısı++;

  noCell.innerHTML = nosayısı;
  idCell.innerHTML = `${taskText5}`;
  adCell.innerHTML = ` ${taskText} `;
  soyadCell.innerHTML = `${taskText2}`;
  tcCell.innerHTML = `${taskText3}`;
  telefonCell.innerHTML = `${taskText4} <button <button onclick="duzenle(this.parentNode.parentNode)" class ="düzenleme">Düzenle</button> <button onclick="sil(this.parentNode.parentNode)" class ="silmeişlemi">sil</button>`;
}
}

function deleteRow() {
    const id = document.getElementById("delete-row-id").value;
    for (let i = 0; i < tableBody.rows.length; i++) {
      const row = tableBody.rows[i];
      const cellContent = row.cells[1].textContent.trim();
      if (row.cells[0].innerHTML === id || cellContent === id )  {
        tableBody.deleteRow(i); 
        break;
      }
    }
  }
  

  function deleteAllRows() {
    tableBody.innerHTML = "";
  }

  function sil(row) {
   
    row.parentNode.removeChild(row);
  }

  function duzenle(row) {
    // Satırın bilgilerini al
    const id = row.cells[1].innerHTML;
    const ad = row.cells[2].innerHTML.trim();
    const soyad = row.cells[3].innerHTML.trim();
    const tc = row.cells[4].innerHTML.trim();
    const telefon = row.cells[5].innerHTML.trim().split(' ')[0]; 

  
    document.getElementById('id2').textContent = id;
    document.getElementById('ad2').value = ad;
    document.getElementById('soyad2').value = soyad;
    document.getElementById('tc2').value = tc;
    document.getElementById('telefon2').value = telefon;

 
    const button = document.getElementById('buton2');
    button.textContent = 'Güncelle';
    button.onclick = function() {
      
        updateRow(row);
    };
}

function updateRow(row) {
    // Güncellenecek bilgileri al
    const id = document.getElementById('id2').textContent;
    const ad = document.getElementById('ad2').value;
    const soyad = document.getElementById('soyad2').value;
    const tc = document.getElementById('tc2').value;
    const telefon = document.getElementById('telefon2').value;

    // Tablodaki ilgili satırı güncelle
    row.cells[1].innerHTML = id;
    row.cells[2].innerHTML = ad;
    row.cells[3].innerHTML = soyad;
    row.cells[4].innerHTML = tc;
    row.cells[5].innerHTML = `${telefon} <button onclick="duzenle(this.parentNode.parentNode)" class="düzenleme">Düzenle</button> <button onclick="sil(this.parentNode.parentNode)" class="silmeişlemi">sil</button>`;


    const button = document.getElementById('buton2');
    button.textContent = 'Düzenle';
      /* button.onclick = function() {
        addRow();
    };  */

  
    document.getElementById('ad2').value = '';
    document.getElementById('soyad2').value = '';
    document.getElementById('tc2').value = '';
    document.getElementById('telefon2').value = '';
}


