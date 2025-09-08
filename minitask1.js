let items = ["Apel","Anggur", "Pisang", "Rambutan", "Pir"];


//built-in
const buah = items.filter(function(buahA){
    return buahA[0] === "A"
})

//tanpa built-in
const buah2 = [];
let index = 0;

for (let i = 0; i < items.length; i++) {
  const buahA = items[i];
  if (buahA[0] === "A") {
    buah2[index] = buahA; 
    index++;
  }
}

console.log(buah)
console.log(buah2)
