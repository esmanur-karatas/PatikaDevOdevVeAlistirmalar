/*setTimeout(()=>{ //vereceğimiz parametrenin süresi dolduktan sonra bir kere çalıştırır. iki parametre alır biri funksiyon diğeri milisaniye cinsinde değer alır.
console.log("merhaba")
}, 2000);*/

//const { default: axios } = require("axios");



/*setInterval(()=>{ //verilen saniye parametresi dolduğu her saniye çalışır
console.log("Merhaba ben her saniye çalışacağım.")
}, 1000);  */



/*const sayHi = (cb) =>{ //cb callback kısaltması
cb();
};
sayHi(() =>{
    console.log("Hello");
}); */



//fetch herhangi bir veri kaynağına gidip veriyi çekmek için kullanırız.
//fake api yazınca https://jsonplaceholder.typicode.com/ buradan fake api çekebilirz.
// bunun için fetch kütüphanesi yoksa eğer onu kurmamız lazım 
/*import fetch from "node-fetch";
//bunu yazdıktan sonra terminale npm i node-fetch yazınca yüklenir.
fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
    console.log(data)
);*/


/*import fetch from "node-fetch";
fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>data.json())
.then((users)=>{
    console.log("Users Yüklendi!",users);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((data)=>data.json())
    .then((post)=>console.log("Post Yüklendi!",post));
}); //eğer bu süslü parantezden bağımsız alta yazsaydık 
ikinci fetch o zaman sırayla değil karışık gelirdi veriler
mesela ilk çalıştırmada postlar önce gelebilir kullanıcılar 
sonra ya da ikinci çalıştırmada ise kullanıcılar önce gelip 
postlar sonra gelebilir.*/


//fetch daha temiz kodla yazma şekli. async asenkron kısaltması
//await koymazsak o satırın dönmesini beklemez diğer satırdaki koda geçer.

/*async function getData(){
    const users=await(
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const post1=await(
        await fetch("https://jsonplaceholder.typicode.com/post/1")
    ).json();

    const post2=await(
        await fetch("https://jsonplaceholder.typicode.com/post/2")
    ).json();

    console.log("users",users);
    console.log("post1",post1);
    console.log("post2",post2);
}
getData(); */



//ANONİM FONKSİYON KURMAK
/*(async()=>{
    const users=await(
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const post1=await(
        await fetch("https://jsonplaceholder.typicode.com/post/1")
    ).json();

    const post2=await(
        await fetch("https://jsonplaceholder.typicode.com/post/2")
    ).json();

    console.log("users",users);
    console.log("post1",post1);
    console.log("post2",post2);
})(); */


//fetc yerine axios kütüphanesinide kullanabiliriz onun kullanımı daha kolay.
// kurulumu için consola npm i axios yazıp kurabiliriz.
/* import axios from "axios";
(async()=>{
    const {data:users}=await axios(
        "https://jsonplaceholder.typicode.com/users"
    );

    const {data:post1}=await axios(
        "https://jsonplaceholder.typicode.com/post/1"
    );

    const {data:post2}=await axios(
        "https://jsonplaceholder.typicode.com/post/2"
    );

    console.log("users",users);
    console.log("post1",post1);
    console.log("post2",post2);
})(); */


//PROMİSES
//resolve bu işlem başarıyla gerçekleştirildi.
//reject kod çalışırken bir problem oluştu reddettim.
//bir promise resolve olduğunda then e düşer reject olduğunda ise catch e düşer.
/*const getComments=(number)=>{
    return new Promise((resolve, reject)=>{
        if(number===1){
            resolve({text:"selam"});
        }
        reject("Bir problem oluştu!");
    });
};

getComments(1)
.then((data)=>console.log(data))
.catch((e)=>console.log(e));
//burada eğer getcomments a girdiğimiz değer 1 e eşitse resolve döner ve then e düşer consola yazdırır.
//eğer sayı 1 e eşit değilse o zaman da reject döner ve consola bir problem oluştu yazar. */

 


//VERİLERİ ÇEKTİKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
/*import axios from "axios";
const getUsers=()=>{
    return new Promise(async(resolve,reject)=>{
        const{data}=await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);
        //reject("Bir sorun oluştu")
    });
};

const getPost=(post_id)=>{
    return new Promise(async(resolve,reject)=>{
        const{data}=await axios(
            "https://jsonplaceholder.typicode.com/post/1" + post_id
        );
        //resolve(data);
        reject("Bir sorun daha oluştu");
    });
};

(async()=>{
    try{
        const users=await getUsers();
        const post=await getPost(1);

        console.log(users);
        console.log(post);
    }catch(e){
        console.log(e);
    }
})(); */

//PROMİSE ALL İLE BÜTÜN PROMİSELARI ÇALIŞTIRABİLİRİZ.
/*
import axios from "axios";
const getUsers=()=>{
    return new Promise(async(resolve,reject)=>{
        const{data}=await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);
        //reject("Bir sorun oluştu")
    });
};

const getPost=(post_id)=>{
    return new Promise(async(resolve,reject)=>{
        const{data}=await axios(
            "https://jsonplaceholder.typicode.com/post/1" + post_id
        );
        resolve(data);
        //reject("Bir sorun daha oluştu");
    });
};
//birden fazla promise listesi varsa eğer bunu kullanabiliriz
Promise.all([getUsers(),getPost(1)])
.then(console.log)
.catch(console.log); */









