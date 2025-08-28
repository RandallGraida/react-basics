// Rendering from arrays
const proteinFoods = [
  'GOAT: Chicken',
  'A: Eggs',
  'B: Salmon',
  'C: Tofu',
  'D: Sausages',
  'F: Pork Belly'
];

function ProteinList() {
  const proteinList = proteinFoods.map(food => 
    <li>{food}</li>
  );

  return (
    <ul>{proteinList}</ul>
  );
}

// Filtering arrays
const agent = [{
  id: 0,
  name: 'Polygue',
  function: 'Agent to agent'
}, {
  id: 1,
  name: 'Helper',
  function: 'Agent to human' 
}, {
  id: 2,
  name: 'ChatGpt',
  function: 'Agent to human'
}];

function AgentList() {
  const agentToHuman = agent.filter(agent => 
    agent.function === 'Agent to agent'
  );

  const agentList = agentToHuman.map(agent =>
    <li key={agent.id}>
      <p>{agent.name}</p>
      <p>{agent.function}</p>
    </li>
  )

  return <ul>{agentList}</ul>
}

const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];

function Scientist() {
  const listChemist = people.filter(scientist => 
    scientist.profession === 'chemist'
  );

  const listEveryoneElse = people.filter(scientist => 
    scientist.profession !== 'chemist'
  );

  const chemistList = listChemist.map(scientist => 
    <ul>
      <p>{scientist.profession}</p>
      <p>{scientist.accomplishment}</p>
    </ul>
  );

  const everyoneElseList = listEveryoneElse.map(scientist => 
    <ul>
      <p>{scientist.profession}</p>
      <p>{scientist.accomplishment}</p>
    </ul>
  )

  return (
    <div className="mt-20">
      <h1 className="font-bold">Scientists</h1>
      
      <h2 className="font-bold">Chemists:</h2>
      <p>{chemistList}</p>

      <h2 className="mt-5 font-bold">Everyone Else</h2>
      <p>{everyoneElseList}</p>
    </div>
  );
}

export default function RenderRenderingList() {
  return(
  <div>
    <ProteinList />
    <AgentList />
    <Scientist />
  </div>
  )
}
