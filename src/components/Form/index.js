import "./Form.css"
import InputArea from "../InputArea";
import DropDown from "../DropDown";
import Button from "../Button";
import { useState } from "react";

const Form = ({ onCollaboratorAdded, teams, createNewTeam }) => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('');

    const onSave = (event) => {
        event.preventDefault();
        onCollaboratorAdded({
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
        <section className="formulary-container">
            <form className="formulary" onSubmit={onSave}>
                <h2>Preencha os dados para adicionar os colaboradores</h2>
                <InputArea
                  label="Nome" 
                  placeholder="Digite seu nome" 
                  required={true}
                  valueInput={name}
                  onChanged={valueInput => setName(valueInput)}
                />
                <InputArea
                  label="Cargo" 
                  placeholder="Digite seu Cargo" 
                  required={true}
                  valueInput={job}
                  onChanged={valueInput => setJob(valueInput)}
                />
                <InputArea
                  label="Imagem" 
                  placeholder="Informe o caminho da imagem"
                  valueInput={image}
                  onChanged={valueInput => setImage(valueInput)}
                />
                <DropDown 
                  label="Times" 
                  itens={teams} 
                  required={true}
                  valueInput={team}
                  onChanged={valueInput => setTeam(valueInput)}
                />
                <Button>Criar Card</Button>
            </form>
            <form className="formulary" onSubmit={(event) => {
              event.preventDefault();
              createNewTeam({ name: teamName, color: teamColor })
            }}>
                <h2>Preencha os dados para adicionar um novo time</h2>
                <InputArea
                  label="Nome do Time" 
                  placeholder="Digite o nome do time" 
                  required
                  valueInput={teamName}
                  onChanged={valueInput => setTeamName(valueInput)}
                />
                <InputArea
                  type='color'
                  label="Cor do Time" 
                  placeholder="Passe a Cor Para o Time" 
                  required
                  valueInput={teamColor}
                  onChanged={valueInput => setTeamColor(valueInput)}
                />
                <Button>Criar Time</Button>
            </form>
        </section>
    );
}

export default Form;