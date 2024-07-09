// import { useState } from "react"

function Input({ label, labels, type, setValue, value }) {

    return (
        <>
            <label htmlFor={label}>{labels}</label>
            <input value={value} onChange={(e) => setValue(e.target.value, label)} type={type} id={label} placeholder={label} />
        </>

    )
}

export default Input