/*function topla(a,b){
    return a+b;
}
export default topla;*/

/*yukarıdaki fonsiyon bu şekilde de tanımlanabilir.
const topla=function topla(a,b){
    return a+b;
}
export default topla;*/

/*arrow functionla da bu şekilde tanımlayabiliriz yukarıdaki fonsiyonu:
const topla=(a,b)=>a+b;;
export default topla; */
/*
const hello=(name)=>{
    console.log(`hello ${name}`);
};

export const topla=(a,b)=>a+b;
export const cikar= (a,b)=> a-b;
export const text= "Text";
export const user={
    name:"mehmet",
    surname:"seven",
};

export const users=[
    {
        name:"Ahmet",
        surname:"Tarık",
    },
    {
        name:"Tayfun",
        surname:"Erbilen",
    },
];
export default hello; */

// tek tek hepsinin başına export yazmak yerine 
// exportları başından silip şu şekilde de tanımlayabiliriz.
// export {topla,cikar,text,user,users};
