import Collaborator from "../Collaborator";
import "./Team.css";

const Team = (props) => {
    return (
        props.collaborators.length > 0 
        ? <section className="team" style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.teamName}</h3>
            <div className="collaborators">
                {props.collaborators.map(collaborator => <Collaborator 
                    key={collaborator.name} 
                    name={collaborator.name} 
                    job={collaborator.job}
                    backColor={props.primaryColor}
                />)}
            </div>
          </section>
        : ''
    );
}

export default Team;
