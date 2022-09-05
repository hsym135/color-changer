const hexcolor = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("buttonChanger");
const color = document.getElementById("color");

// color.textContent = 'hallo selamat datang'
``
function changeColor() {
  // alert('wadidaww')
  let warna = "#";
  for (let i = 1; i <= 6; i++) {
    warna += hexcolor[randomNumber()];
  }
  console.log(warna);
  color.textContent = warna;
  document.body.style.backgroundColor = warna;

  console.log(Math.floor(Math.random() * hexcolor.length))
}

function randomNumber(){
    return Math.floor(Math.random() * hexcolor.length)
}