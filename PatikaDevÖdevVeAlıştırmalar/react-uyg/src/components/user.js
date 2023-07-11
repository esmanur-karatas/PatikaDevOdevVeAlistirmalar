/*function User() {
    console.log(props);
    return (
        <h1>
            {props.isLoggenIn
                ? `${props.name} ${props.surname}`
                : "Giriş Yapmadınız."}
        </h1> //app.js in içine name ve surname parametrelerinin içine yazdığımız değerleri görmek için props.parametre adı yazmamız gerekiyor
    );
}
export default User;

//? her seferinde props yazmak yerine bu şekilde de kullanılır.
function User({ name, surname, isLoggenIn }) {
    return <h1> {isLoggenIn ? `${name} ${surname}` : "Giriş yapmadınız."} </h1>;
} */

//?döngülerde key propu
//döngüler içerisinde return ettiğimiz ifadedelerin performans kaybetmemesi için kulllanırız.
//key prop dediğimiz şey aslında benzersiz bir ifade

/*function User({ name, surname, age, isLoggedIn, friends }) {
    return (
        <>
            <h1>
                {isLoggedIn ? `${name} ${surname} ${age}` : "Giriş yapmadınız."}
            </h1>
            {friends.map((friend, index => (
                <div key={index}>
                    {index} - {friend}
                </div>
            )))}
        </>
    );
}
export default User; */

//?Prop types: propların türlerini belirliyor.
/*function User({ name, surname, age, isLoggedIn, friends, address }) {
    return (
        <>
            <h1>
                {isLoggedIn ? `${name} ${surname} ${age}` : "Giriş yapmadınız."}
            </h1>
            {address.title} {address.zip}
            {friends.map((friend, index => (
                <div key={index}>
                    {index} - {friend}
                </div>
            )))}
        </>
    );
}

User.propTypes={
    name: propTypes.string.isRequired, //prop tiplerini yazarken zorunlu alanları isRequired ile belirtebiliyoruz.
    surname:propTypes.string,
    isLoggedIn:propTypes.bool,
    age:propTypes.oneOfType([propTypes.number, propTypes.string]), //oneOfType ile birden fazla veri tipini kabul edebiliriz.
    address:propTypes.shape({ //obje olarak gönderdiğimiz şeylerde shape i kullanırız.
        title:propTypes.string,
        zip:propTypes.number,
    }),
}; 
//herhangi bir değer tanımlanmamış propa varsayılan bir değer de verebiliyoruz.
User.defaultProps={
    isLoggedIn:false,
};
export default User;
*/