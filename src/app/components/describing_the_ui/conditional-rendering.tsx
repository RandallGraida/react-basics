// Ex 1
function Item({ name, isPacked }) {
  return (
    <li>
      {name} {isPacked && '✅'}
    </li>
  )
}

// Ex 2
function MyItem({ name, importance }) {
  return (
    <li>
      {name} 
      {importance > 0 && 
        <i>(Importance: {importance})</i>
      }
    </li>
  );
}

// Ex 3
function List() {
  return (
    <div>
      <h1>Hello world</h1>
      <ul>
        <MyItem
          importance={10}
          name="Sleep" 
        />
        <MyItem 
          importance={0}
          name='Smoking and Drinking'
        />
      </ul>
    </div>
  )
}

function Drink({ name }) {
  let part, caffeine, age;

  if (name === 'tea') {
    part = 'leaf';
    caffeine = '15-70 mg/cup';
    age = '4,000+ years';
  } else if (name === 'coffee') {
    part = 'bean';
    caffeine = '80-185 mg/cup';
    age = '1,000+ years';
  }

  return (
    <section className="mt-30">
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

function DrinkList() {
  return (
    <div>
      <Drink name='tea' />
      <Drink name='coffee' />
    </div>
  );
}

export default function PackingList() {
  return (
    <div>
      <h1>My morning routine</h1>
      <ul>
        <Item 
          isPacked={true}
          name={'Shower'}
        />
        <Item 
          isPacked={true}
          name={'Workout'}
        />
        <Item 
          isPacked={false}
          name={'Breakfast'}
        />
      </ul>

      <List />

      <DrinkList />
    </div>
  )
}