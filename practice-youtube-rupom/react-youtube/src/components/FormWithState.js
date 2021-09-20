import React, { useState } from "react";

const FormWithState = () => {
    const [nickName,setName] = useState("");
    const [mobileNumber,setMobile] = useState("");
    const ShowChange = (event) => {
        const textName = event.target.name;
        const numberText = textName.value;
        setName(event.target.value);
        setMobile(event.target.value);
    }

    return(
        <div>
            <p>Display Name: {nickName}</p>
            <p>Display Number: {mobileNumber}</p>
            <input name="nickName" onChange={ShowChange} type="text"  placeholder="Write Name"/>
            <br />
            <input name="mobileNumber" onChange={ShowChange} type="number" placeholder="Phone Number" />
            <br />
            <button>Submit</button>
        </div>
    )
}

export default FormWithState;