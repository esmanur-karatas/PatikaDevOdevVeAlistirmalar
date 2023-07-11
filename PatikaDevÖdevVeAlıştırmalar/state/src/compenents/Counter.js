import {useState} from "react";

function Counter(){
    const [count, setCount]= useState(0);

    const Increase=()=>{
        setCount(count +1); //funksiyonla bu şekilde de yapabiliriz.
        //tanımlanması da aşağıdaki ikinci butondaki gibi yapabiliriz.
        //hem bu şekilde hem de ilk butondaki şekilde tanımlayabiliriz.
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count - 1)}>Decrease</button>
            <button onClick={Increase}>Increase</button> 
        </div>
    );
}

export default Counter;