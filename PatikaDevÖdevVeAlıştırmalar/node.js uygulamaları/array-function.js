/*const users = ["mehmet", "ahmet", "murat", "esma"];
EN ÇOK KULLSNILAN ARRAY FONKSİYONLARI
PUSH:arrayin sonuna yeni eleman ekler.
MAP:yaptığı işi array içinde tek tek dönüyor.
FİND:arrayin içinde verdiğimiz koşullara göre bir arama işlemi yapar.
FİLTER: filtreleme yapıyor.
SOME:arrayin içinde ki herhangi bir koşul uyuyorsa true döner uymuyorsa false döner.
EVERY:some ın tam tersi arrayin bütün elemanlarının tanımlanan şarta uyması gerekiyor.
İNCLUDES:bir arrayin içerisinde girmiş olsuğumuz verinin var mı yok mu olduğunu kontrol ediyor. varsa true yoksa false döner.

//push
/*users.push("Ayşe");
users.push("Nur");
console.log(users);

//map
//normalde bunu böyle yaparız ama map le daha kolay 
for (let i = 0; i <= users.length; i++) {
    console.log(users[i]);
}
//maple bunu yapmak.
users.map((item) => {
    console.log(item);
}); 

//find
const result = users.find((item) => item === "Mehmet");
console.log(result);

//filter
const users = [
    {
        name: "Mehmet",
        age: 30,
    },
    {
        name: "Mehmet",
        age: 19,
    },
    {
        name: "nur",
        age: 20,
    },
];
const filtered = users.filter(({name,age}) =>name === "Mehmet" && age < 20);
console.log(filtered);

//some
const some=users.some((item)=>item.age===19);
console.log(some);

//every
const every=users.every((item)=>item.age>5);
console.log(every);


//includes
const meyveler=["elma","armut","muz"];
const isIncluded=meyveler.includes("portakal");
console.log(isIncluded);
*/