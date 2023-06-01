import "./Form.css"
import TextArea from "../TextArea";
import DropDown from "../DropDown";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const onSave = (event) => {
        event.preventDefault();
        props.onCollaboratorAdded({
          name,
          job,
          image,
          team
        });
        setName('');
        setJob('');
        setImage('');
        setTeam('');
    }

    return (
        <section className="formulary">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para adicionar os colaboradores</h2>
                <TextArea 
                  label="Nome" 
                  placeholder="Digite seu nome" 
                  required={true}
                  valueInput={name}
                  onChanged={valueInput => setName(valueInput)}
                />
                <TextArea 
                  label="Cargo" 
                  placeholder="Digite seu Cargo" 
                  required={true}
                  valueInput={job}
                  onChanged={valueInput => setJob(valueInput)}
                />
                <TextArea 
                  label="Imagem" 
                  placeholder="Informe o caminho da imagem"
                  valueInput={image}
                  onChanged={valueInput => setImage(valueInput)}
                />
                <DropDown 
                  label="Times" 
                  itens={props.teams} 
                  required={true}
                  valueInput={team}
                  onChanged={valueInput => setTeam(valueInput)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    );
}

export default Form;