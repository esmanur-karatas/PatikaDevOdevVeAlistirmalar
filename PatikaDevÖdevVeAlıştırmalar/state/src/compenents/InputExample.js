import { useState } from "react";

function InputExample() {
    const [name, setName] = useState("");
    const [surnamme, setSurname] = useState("");

    const onChangeName = (event) => setName(event.target.value);
    const onChangeSurname = (event) => setSurname(event.target.value);

    return (
        <div>
            Name <br />
            <input value={name} onChange={onChangeName} />

            <br />
          
            <br />
            Surname <br/>

            <input value={surnamme} onChange={onChangeSurname}/>
            <br/>
            {name} {surnamme}
        </div>
    );
}
export default InputExample;