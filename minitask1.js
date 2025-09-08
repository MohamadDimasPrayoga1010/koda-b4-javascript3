let items = ["Apel","Anggur", "Pisang", "Rambutan", "Pir"];

const buah = items.filter(function(buahA){
    return buahA[0] === "a"
})

console.log(buah)