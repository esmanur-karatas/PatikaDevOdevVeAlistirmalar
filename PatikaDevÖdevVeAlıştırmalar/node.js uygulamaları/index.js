// const { default: slugify } = require("slugify");

// console.log("Hello node"); //bunu terminale gidip node index.js yazıp enterlarsak eğer Hello node yazısı terminalde çıkar.
/*eğer  "scripts": {
   "start":"node index"
},
yerine "start":node index yazarsak node index.js yazmamıza gerek kalmadan npm start yazarsakta çalışır.
 */
// slugify modülü kelimelerdeki boşluk yerine - işaretini koyar

//slugify modülünü burada kullanmak için indirdiğimiz modülün sayfasında ki dokümanda lazım olan yerleri alabiliriz.


//slugify modül kullanımı:
// var slugify = require('slugify');
// const title=slugify('some string için indirdiğimiz modülün sayfa') ;
// console.log(title);



//kendi tanımladığımız modülü import etme:
// import Topla from "./my-module.js";
// console.log(Topla(10,6)); // bunun sonuç vermesi için package.json dosyamıza "type":"module", ü tanımlamamız lazım.



//export biz düz export ettiğimiz ifadeleri süslü parantezler içinde tanımlarız.
//ama default la export ettiğimiz ifadeleri süslü parantez dışına tanımlarız yoksa hata verir.
/*import hello ,{topla,cikar,text,user,users} from "./my-module.js";
console.log(topla(2,4));
console.log(cikar(90,39));
console.log(text);
console.log(user);
console.log(users);
hello("mehmet");*/