
export default function input({label, name, dValue, inputFi}) {
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <input onChange={(event) => inputFi(name, event.target.value)} value={dValue} name={name} type="number" />
        </div>
    )
}