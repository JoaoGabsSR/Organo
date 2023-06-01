import "./DropDown.css";

const DropDown = (props) => {
    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select onChange={event => props.onChanged(event.target.value)} value={props.valueInput} required={props.required}>
                <option value="" disabled>------</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default DropDown;
