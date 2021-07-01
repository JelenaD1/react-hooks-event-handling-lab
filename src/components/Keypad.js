// Code Keypad Component Here
import React from "react"

const Keypad = () => {
    const handleChange = (event) => {
        console.log("Entering password...")
    }

    return (
        <div>
            <input
             type="password"
             onChange={handleChange}
             placeholder="Enter password here"
             />
        </div>
    )

}



export default Keypad 