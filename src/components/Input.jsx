/* eslint-disable react/prop-types */


export default function Input({ value, onChange, placeholder, name, type }){
    return (
        <>
        <label>{placeholder}</label>
        <input 
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        </>
    )
}