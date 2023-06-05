import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57C278'
      },
      {
        id: uuidv4(),
        name: 'Front End',
        color: '#82CFFA'
      },
      {
        id: uuidv4(),
        name: 'Data Science',
        color: '#A6D157'
      },
      {
        id: uuidv4(),
        name: 'Devops',
        color: '#E06B69'
      },
      {
        id: uuidv4(),
        name: 'UX e Design',
        color: '#D86EBF'
      },
      {
        id: uuidv4(),
        name: 'Mobile',
        color: '#FEBA05'
      },
      {
        id: uuidv4(),
        name: 'Inovação e Gestão',
        color: '#FF8A29'
      }
    ]);
    
    const [collaborators, setCollaborator] = useState([]);
    
    const onNewCollaboratorAdded = (collaborator) => {
      setCollaborator([...collaborators, collaborator]);
    }
    
    const delCollaborator = (id) => {
    setCollaborator(collaborators.filter(collaborator => collaborator.id !== id));
  }

  const changeTeamColor = (color, id) => {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.color = color;
      }
      return team;
    }));
  }

  const createNewTeam = (newTeams) => {
    setTeams([...teams, {  id: uuidv4(), ...newTeams }]);
  }

  const resolvedFavorite = (id) => {
    setCollaborator(collaborators.map(collaborator => {
        if(collaborator.id === id) collaborator.favorite = !collaborator.favorite;
        return collaborator;
    }));
  }
  
  return (
    <div className="App">
      <Banner />
      <Form 
        createNewTeam={createNewTeam}
        teams={teams.map(team => team.name)} 
        onCollaboratorAdded={collaborator => onNewCollaboratorAdded(collaborator)} 
      />
      
      {teams.map((team, i) => 
        <Team
          onFavorite={resolvedFavorite}
          changeColor={changeTeamColor}
          key={i} 
          teamName={team.name}
          teamId={team.id}
          color={team.color}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
          onDel={delCollaborator}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
