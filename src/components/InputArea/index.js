import "./InputArea.css";

const InputArea = ({ type = 'text', onChanged, label, placeholder, valueInput, required = false }) => {
    const onTyped = (event) => {
        onChanged(event.target.value)
    }

    return (
        <div className={"input-area"}>
            <label>{label}</label>
            <input type={type} value={valueInput} onChange={onTyped} placeholder={placeholder} required={required}/>
        </div>
    );
}

export default InputArea;
