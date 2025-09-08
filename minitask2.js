//built-in method

//1. at()
// Mengambil dan mengembalikan item pada indeks
const text = "Belajar";

console.log(text.at(0));
console.log(text.at(3));  



//2. concat()
//Menggabungkan 2 array atau lebih. metode ini tidak mengubah array yang sudah ada.

let array1 = [1,2,3]
let array2 = [4,5,6]
const array3 = array1.concat(array2)

console.log(array3)

// 3. copyWithin() 
//Menyalin elemen array dari satu posisi ke posisi lain dalam array yang di berikan

let words = ["apel", "gunting", "kucing"]
words.copyWithin(0, 2)
console.log(words)

// 4. entries()
//Mengembalikan serangkaian pasangan kunci atau nilai dari properti enumerable suatu objek

const obj ={nama: "Yoga", age: "23", asal: "Bekasi"}
console.log(Object.entries(obj))

//5. every()
// Menguji apakah semua elemen dalam array lulus uji yang diterapkan oleh fungsi yang disediakan. Metode ini mengembalikan nilai Boolean.

let numbers = [1,2,3,4,5]

let lebihDari = numbers.every(function(number){
    return number > 8
}) 
console.log(lebihDari)

//6. fill()
//Mengembalikan array dengan mengisi semua elemen dengan nilai yang di tentukan

let f = ["ayam", "rendang","ikan"]
f.fill("Telur Goreng");
console.log(f)

//7. filter()
//Menyaring isi array sesuai kondisi tertentu

let items = ["Apel", "Anggur", "Pisang", "Rambutan", "Pir"];

const buah = items.filter(function (buahA) {
  return buahA[0] === "A";
});

console.log(buah);

//8. find()
//Mengembalikan elemen pertama dalam array yang memenuhi fungsi pengujian yang di sediakan, jika tidak ada nilai yang memenuhi fungsi pengujian makan undefined

let h = [1,10,23,5,130,2,288,11,3]
const hasil = h.find(function(n){
return n > 11
})

console.log(hasil)

//9.findIndex()
//Mengembalikan index dari elemen pertama yang memenuhi kondisi tertentu. Kalau nggak ada yang cocok, akan balikin -1

let i = [5, 12, 8, 130, 44, 1000, 127];
let index = i.findIndex(function (n) {
  return n > 130;
});

console.log(index); 
console.log(i[index]);

//10. findLast()
//Mengambil elemen terakhir dalam array yang memenuhi kondisi tertentu.

let j = [50,10,5,14,90,15,100,3]
let indexJ = j.findLast(function(n){
    return n > 50
})

console.log(indexJ)

//11. push()
// Menambahkan elemen yang ditentukan ke akhir array dan mengembalikan panjang array yang baru.
let k = ["Yoga", "Fiki", "Ari"]
k.push("Ghifar")

console.log(k)

//12. join()
//Menggabungkan semua elemen array menjadi satu string dengan pemisah yang bisa kita tentukan.
let l = ["Yoga", "Fiki", "Ari"];
console.log(l.join("-"));
console.log(l.join(", "));

//13. forEach()
// Digunakan untuk melakukan pengulangan pada setiap elemen dalam array
let m = ["Yoga", "Fiki", "Ari"];

m.forEach(function (nama) {
  console.log(nama);
});

//14. indexOf()
//Menacari posisi index dari elemen pertama dalam sebuah array, kalau tidak ketemu maka hasilnya -1

let o = ["Yoga", "Fiki", "Ari"];
console.log(o.indexOf("Dimas"))

//15. includes()
//Menentukan apakah sebuah array menyertakan nilai tertentu di antara entri-entrinya, mengembalikan true atau false 

let p = ["Ayam", "Kucing", "Bebek"]
console.log(p.includes("Bebek"))

//16. map()
//Membuat array baru yang diisi dengan hasil pemanggilan fungsi yang disediakan pada setiap elemen dalam array pemanggil

let q = [1,2,3,4,5]
let kali = q.map(function(n){
    return n * 2
})

console.log(kali)

//17.pop()
//Menghapus elemen terakhir dari array dan mengembalikan elemen tersebut. Metode ini mengubah panjang array.

let r = [
    {nama: "Yoga", umur: 23},
    {nama: "Fiki", umur: 20},
    {nama: "Ari", umur: 20},
]

console.log(r)
r.pop()
console.log(r)

//18. slice()
//Mengembalikan salinan dari sebagian array ke dalam objek array baru yang dipilih dari awal hingga akhir (akhir tidak termasuk), di mana awal dan akhir mewakili indeks item dalam array tersebut. Array asli tidak akan diubah.

let s = ["Pisang", "Apel", "Pir", "Anggur"]
console.log(s)
console.log(s.splice(1,3))

//19. reduce()
//Digunakan untuk mereduksi array menjadi satu nilai tunggal dengan meneruskan fungsi panggilan balik pada setiap elemen array

let t = [1, 2, 3, 4, 5];

let total = t.reduce(function(acc, curr) {
  return acc + curr;
}, 0);

console.log(total); 

//20. sort()
// Mengurutkan element dalam array

let u = ["Z","T","O","A","G","B","C"]
console.log(u)
u.sort()
console.log(u)

//built-in function

//1. parseInt
//Mengubah nilai string menjadi bilangan bulat
console.log(parseInt("123"))
console.log(parseInt(3.7))

//2. toFixed()
//Untuk membulatkan angka
let bulat = 98.7909

console.log(bulat.toFixed(1))

//3. Boolean()
//Mengonversikan suatu nilai kedalam tipe data boolean
console.log(Boolean(""))
console.log(Boolean("Test"))

//4. Number()
//Mengonversikan suatu nilai kedalam tipe data number

console.log(Number("123"));

//5. String()
//Menciptakan objek String. Ketika dipanggil sebagai fungsi, ia mengembalikan nilai primitif bertipe String.
console.log(String(123))
console.log(String([1,2,3]))



