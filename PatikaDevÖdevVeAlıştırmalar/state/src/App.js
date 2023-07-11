///?State 
/*import{useState} from "react"; //state i import ettik.
//useState in içine parametre de tanımlayabiliyoruz.
//aşağıdaki butonlara basınca mehmet olan ismi ahmet diye değiştiriyor alttaki butonda ise 70 olan yaşı 20 ile değiştiriyoruz
//herhangi bir state güncellendiği zmn return un içindeki render baştan yapılır. yani o görüntü yeniden oluşur.
function App() {
  const [name, setName]=useState("Mehmet");
  const[age, setAge]=useState(70);

  console.log(age, name); //consola güncellenmeden önce ve güncellendikten sonraki halide alt alta yazdırır.
  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={()=>setName("Ahmet")}>Name</button> 
      <button onClick={()=>setAge(20)}>Age</button>
    </div>
  );
}

export default App; */



//?Array State
//statelerde tanımlama yaparken ilk dikkat etmemiz gereken şey o stati tanımlarken kullandığımız veri tipi neydi dizi miydi funksiyon mu ne yani buna uygun atama işlemi yapmamız lazım lazım arreyse array objeyse obje numbersa number gibi.
//...friends ile atama yaparsak click le birlite öndeki değerleri de korur ve üstüne ayşeyide ekler.
//eğer ayşeyi başa eklemek istersek o zaman da ...friendsi sona ayşeyi başa ekleriz.
/*import{useState} from "react"; 
function App() {
  const [name, setName]=useState("Mehmet");
  const[age, setAge]=useState(70);
  const[friends, setFriends]= useState(["ahmet", "Mehmet", "Hasan"]);

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={()=>setName("Ahmet")}>Name</button> 
      <button onClick={()=>setAge(20)}>Age</button>

      <hr />
        <br></br>
        <h2>friends</h2>
{friends.map((friend,index)=>(
<div key={index}>{friend}</div>
))}
<br></br>
<button onClick={()=>setFriends([...friends, "Ayşe"])}>add new friend</button>
    </div>
  );
}

export default App; */

//?Object State
//sadece title ya da sadece zip i değiştirmek isteseydik eğer yine ...address diye yazıp sonra değiştiemek istediğimiz yeri yazarız 
//örnk <button onClick={()=>setAddress({...address , title:"Elazığ"})}>
// Add New Address
// </button>  gibi.

/*import{useState} from "react"; 
function App() {
const[address, setAddress]=useState({title: "Istanbul", zip: 34756});

return(
  <div className="App">
    <h2>Address</h2>
    <div>
      {address.title} {address.zip}
    </div>
    <br/>

    <button onClick={()=>setAddress({title:"Elazığ", zip:73282})}>
      Add New Address
    </button>
  </div>

);
}
export default App; */

//? useEffect
// bir bileşenin yaşam döngüsünü yönrtmek için kullanılır.
// sınıf tabanlı react bileşenlerinde kullanılan compenentdipmount, 
// compenentDipUpdate, compenenWillUnmount yöntemlerinin amacına hizmet eder.
//state üzerinde herhangi bir şey güncellendiğinde bunu useEffect ile consola yazdırabiliriz.
//compenent mount olduğu anda o anı yakalamak için compenentDipmount kullanılır.
//ikinci useeffect kullanılan yerde de olduğu gibi eğer   useEffect(()=>{
//     console.log("Compenent mount edildi.");
//   }, []); //?burada olduğu gibi boş bir [] tanımlarsak bu compenentdipmount olduğu anlamına geliyor.
//eğer tek bir state için useeffect i çalıştırmak istersekte o zaman da yukarıdaki boş dizinin içine görmek istediğimiz
//state i yazarız. [number] bunun gibi number yazarsak sadece number güncellendiğinde konsola state güncellendi yazar.

/*import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('Mehmet');

  useEffect(() => {
    console.log("Number State Güncellendi..");
  });

  useEffect(() => {
    console.log("Compenent mount edildi.");
  }, [number]);

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      <hr/>
      <h1>{name}</h1>
      <button onClick={() => setName("mete")}>Click</button>

    </div>

    

  );
}

export default App; */

//? setInterval sayesinde tanımladığımız şeyler ayarladığımız saniyede bir çalışır

/*import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("mehmet");

  useEffect(() => {
    console.log("Compenent mount edildi.");

    setInterval(() => {
      setNumber((n) => n + 1);

    }, 1000)
  }, []);

  useEffect(() => {
    console.log("Number state güncellendi.");
  }, [number]);

  useEffect(() => {
    console.log("Name state güncellendi");
  }, [name]);

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      <hr />
      <h1>{name}</h1>
      <button onClick={() => setName("mete")}>Click</button>

    </div>



  );
}

export default App; */

//?Stil tanımı yapma
//süslü parantezler içinde stil tanımı verebiliriz htmldeki gibi
//obje verir gibi tanımlarsak olur. Buradaki gibi <div style={{color:"red"}}>
//background color verirken css deki gibi backgroun-color diyip araya - koyamayız.
// onun yerine camelCase kullanmalıyız. backgroundColor diye tanımlarız.
//eğer BOOTSTRAP tan kod alacaksak kodun linkini yani min.css kodlarını public altında index.html dosyasının içine tanımlayabiliriz.


/*import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{color:"red" , backgroundColor:"yellow"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium esse ea nostrum laudantium reprehenderit
          voluptatum maiores dicta ex, excepturi aspernatur,
          beatae cum amet dolore error atque. Provident odit id possimus?
        </div>
      </header>
    </div>
  );
}

export default App; */


//?MODÜLE CSS
/*import "./App.css";
import A from './compenents/A';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <A/>
      </header>
    </div>
  );
}

export default App;*/

/*import "./App.css";
import Users from "./compenents/Users";

function App() {
  return (
    <div className="App">
      <Users/>
    </div>
  );
}

export default App;*/

//? ROUTERRRRRRRR 
// VİDEODA ESKİ SÜRÜMÜ ANLATILIYORDU DİYE ESKİ SÜRÜMÜ KURDUM 
//npm install react-router-dom@5 KURULUM AŞAMASI

/*import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//BU ŞEKİLDE KULLANINCA HOME U LİNK İÇİNDE TANIMLAYINCA SAYFA YENİLENMİYOR EĞER BUNU İSTİYORSAK BUNU KULLANIRIZ
// YENİLENMESİNİ İSTİYORSAK EĞER A HREF ETİKETLERİYLE TANIMLARIZ HTML DEKİ GİBİ.
//SWİTCH KULLANMA NEDENİMİZ BUNA UYUYORSAK BUNUNLA EŞLEŞ BUNA UYUYORSAK BUNUNLA EŞLEŞ DEMEK İÇİN KULLANIYORUZ.


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link> 
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          {/*<Route path="/about"> 
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />  
          </Route>  
        Bu şekilde yazmak yerine aşağıdaki gibi de yazabilirz daha temiz bir şekilde*/
          /*<Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="/" component={Home} /> {/*bu home u başa alırsak eğer sorun çıkar bunu engellemek için exact tanımını ekleriz. güncel versiyonda bu propa gerek kalmamış*/
       /* </Switch>
      </div>
    </Router>
  );
} 
// burada fonksiyonları kullanmak yerine component dizini aççıp içine users.js home.js about.js adında dosya açıp yukarda import edersekte 
//aynı görevi yerine getirir.
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
*/

//?Context
//provider sğlayıcı demek neyi sağlıyacağız data sağlıyacağız.
import "./App.css";
import Container from "./compenents/Container";

import {ThemeProvider} from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

function App() {
return (
<ThemeProvider>
  <UserProvider>
    <Container/>
  </UserProvider>
</ThemeProvider>

);
}

export default App;


