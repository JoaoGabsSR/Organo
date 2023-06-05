import Collaborator from "../Collaborator";
import "./Team.css";
import hexToRgba from "hex-to-rgba";

const Team = ({ collaborators, color, teamName, teamId, onDel, changeColor, onFavorite }) => {
    return (
        collaborators.length > 0 
        ? <section className="team" style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(color, '0.6') }}>
            <input onChange={event => changeColor(event.target.value, teamId)} type="color" className="input-color" value={color}/>
            <h3 style={{ borderColor: color }}>{teamName}</h3>
            <div className="collaborators">
                {collaborators.map((collaborator, i)=> <Collaborator 
                    key={i} 
                    id={collaborator.id}
                    name={collaborator.name} 
                    image={collaborator.image}
                    job={collaborator.job}
                    favorite={collaborator.favorite}
                    onFavorite={onFavorite}
                    backColor={color}
                    onDelete={onDel}
                />)}
            </div>
          </section>
        : ''
    );
}

export default Team;
