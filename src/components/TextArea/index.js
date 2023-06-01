import "./TextArea.css";

const TextArea = (props) => {
    const onTyped = (event) => {
        props.onChanged(event.target.value)
    }

    return (
        <div className="text-area">
            <label>{props.label}</label>
            <input value={props.valueInput} onChange={onTyped} placeholder={props.placeholder} required={props.required}/>
        </div>
    );
}

export default TextArea;
