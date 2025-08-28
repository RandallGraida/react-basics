// Passing strings with quotes
function RTX() {
  const gpu = '/images/download.jpg';
  const description = 'RTX 5090';
  
  return (
    <div>
      <h1 className="font-serif text-[40px]">*Curly braces</h1>
      <img 
        src={gpu} 
        alt={description}
      />
    </div>
  );
}

const today = new Date();

// Get date today
function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date)
}

function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  )
}

export default function RenderCurlyBraces() {
  return (
    <div>
      <RTX />
      <TodoList />
    </div>
  )
}