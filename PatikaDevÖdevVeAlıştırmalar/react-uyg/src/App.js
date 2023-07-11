
// import './App.css'; //css dosyasını import etme.
// import Header from './components/header';//header dosyasını import etme.
// import React from 'react'

//reactle html kod yazma bununla yüzlerce binlerce kod yazmak istersek bir sürü js kodu ortaya çıkacağı için geliştiriciler jsx i bulmuş.
// function App(){
//   return React.createElement("div",null,"hello");
// }

//jsx yapısıyla yüzlerce div vs yazmak istersek eğer bunu kullanırız buradaki kodlar bir html değildir html görünümlü js kodlarıdır.
// function App() {
//   return 
//     <div className="App">
//       <Header/>//Headerı ekledik. birden çok bunu yaparsak alt alta headerın içindekileri gösterir.
//       </div>
// }

// export default App;

//?jsx temel kuralları
// bir compenet oluştururken baş harfleri büyük yazılır Header gibi.
// baş harfi küçük olanlar html kodları olduğu için react bunu ayırt etsin diye 
// compenentleri büyük harfle yazmaya başlarız kodları küçük.
// html de kullandığımı class kelimesi js de özel olduğu için html kullanacağımız 
//yerlerde class yerine className kullanırız.
// for yerinede htmlFor kullanırız.

//?Compenentlerde değişkeni sabiti render etme
/*
import "./App.css";
const name="mehmet";
const surname="seven";

function App(){
  return(
    <>
    <h1>{`benim adım ${name}, soyadım ${surname}`}</h1> 
    </>
  );
}
export default App; */


//?KOŞULLU RENDER 
/* import "./App.css";

const name="mehmet";
const surname="kiraz";
const isLoggedIn=true; //buraya true ya da false verebiliriz.

function App(){
  return(
    <>
    <h1>{isLoggedIn && `Benim adım ${name}, soyadım ${surname}`}</h1> //eğer true ise burası döner.
    {!isLoggedIn && "Giriş yapmadınız."} //eğer false ise burası döner.
    </>
  );
}

export default App;
// yukarıdaki yapının kısa hali ise 
{isLoggedIn 
  ? `Benim adım ${name}, soyadım ${surname}`
  :"Giriş yapmadınız."} */


  //?PROPS OLUŞTURMA
  //oluşturduğumuz compenentlerde bir parametre vermek isteyebiliriz.bu durumlarda kullanabileceğimiz bir yapı
  /*import "./App.css";
  import User from "./components/user";

  function app(){
    return(
      <>
      <User name="Mehmet" surname="seven" isLoggeIn={12} /> //eğer boolen ya da number tipinde değişken tanımlıyacaksak süslü parantez içinde yazmamız lazım. stringde de bunu yapabiliriz ama bu şekilde sadece tırnak içinde de tanımlayabiliriz.
      </>
    );
  }

  export default App; */

  //?Döngülerde key propu
  /*import "./App.css";
  import User from "./components/user";
  
  function App() {
    return (
      <>
      <User
      name="Mehmet"
      surname="Seven"
      isLoggedIn={true}
      age={29}
      friends={["ahmet", "tayfun","gökhan", "ayşe", "yasemin"]}
      address={{
        title: 'Ataşehir/İstanbul',
        zip:34755
      }}
      />
      </>
    );
  }

  export default App; */


