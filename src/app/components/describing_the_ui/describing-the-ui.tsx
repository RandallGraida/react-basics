'use client'
import { people } from "./data/rendering-data";
import GetImageUrl from "./data/rendering-lists";
// import { RenderProps } from "./data/passing-props-to-component";

// My first component
function DescribingUi() {
  return (
    <h1 className="font-serif mt-10 text-[40px]">**Describing the UI</h1>
  )
}

function Profile() {
  return (
    <div>
      <img 
        className="w-[400px] rounded-lg border"
        src="/images/download.jpg" 
        alt="Image of Nvidia RTX 5090" 
      />
    </div>
  );
}

// Writing markup
function WritingMarkup() {
  return (
    <div>
      <h1 className="font-serif mt-10 text-[40px]">*Writing Markup</h1>
      <h1>Bryan Johnson</h1>
      <img src="/images/Bryan-Johnson.jpg" alt="Image of Bryan Johnson" />

      <ul className="list-disc list-inside space-y-1 pl-4">
        <li>The man who does not want to die</li>
        <li>Vampire</li>
        <li>Billionaire</li>
      </ul>
    </div>
  );
}

// Markup with curly braces
const person = {
  name: 'Jensen Huang',
  theme: {
    backgroundColor: 'green',
    color: 'black'
  }
};

function WithCurlyBraces() {
  return (
    <div
      className="w-130 mt-20" 
      style={person.theme}
    >
      <h1 className="font-serif mt-10 text-[40px]">*With Curly Brackets</h1>
      <h1 
        className="font-serif text-[30px]">
        {person.name}
      </h1>
      <img 
        className="rounded-full w-96 h-96 mt-10"
        src="/images/jensen-huang.jpg" 
        alt="Image of Jensen Huang" 
      />
      <ul className="list-disc list-inside space-y-1 pl-4 mt-5">
        <li>The more you buy the more you save</li>
        <li>Ai ai ai ai ai ai ai ai ai</li>
        <li>I am here at Computex</li>
      </ul>
    </div>
  );
}

// ----------------------Passing props to component(to be followed)------------- //
/*
function Picture() {
  return (
    <div>
      <Avatar
        person={{
          name: 'RTX 5090',
        }}
      />
    </div>
  );
}

function Avatar({ person }) {
  return (
    <img 
      src={GetProps(person)}
      alt={person.name} 
    />
  );
}
*/

// Conditional rendering
function Item({ name, isPacked }) {
  return (
    <li>
      {name} {isPacked && '✅'}
    </li>
  );
}

function PackingList() {
  return (
    <section className="max-w-lg mx-auto my-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">*Conditional rendering</h1>
      <ul className="space-y-2">
        <Item 
          isPacked={true}
          name="Space suit"
        />
        <Item 
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item 
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}

// Rendering lists
function List() {
  const listItems = people.map(person => 
    <li key={person.id}>
      <img 
        src={GetImageUrl(person)} 
        alt={person.name} 
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  
  return (
    <article>
      <h1 className="font-serif mt-10 text-[40px]">*Rendering lists</h1>
      <h1>Scientist</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

// Keeping components pure
function Cup({ guest }) {
  return (
    <h2>Tea cup for guest #{guest}</h2> 
  );
}

function TeaSet() {
  return (
    <div>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </div>
  );
}

export default function DescribingTheUi() {
  return (
    <div>
      <DescribingUi />
      <h1 className="font-serif text-[40px]">*First Component</h1>
      <h1>Nvidia GOAT GPU's</h1>
      <Profile />
      <Profile />
      <Profile />

      <WritingMarkup />
      <WithCurlyBraces />

      <PackingList />
      
      <List />

      <TeaSet />

      <Profile />
    </div>
  );
}