// Reading props in event handlers
function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
      {children}
    </button>
  );
}

// Preventing default behavior
function Signup() {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert('Submitting!');
    }} 
    >
      <input type="text" name="Input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-60" />
      <button className="btn btn-neutral btn-outline">Send</button>
    </form>
  );  
}

export default function RenderRespondingTE() {
  return (
    <div>
      <AlertButton message='Battlefield 6 is already starting'>
        Battlefield 6
      </AlertButton>

      <AlertButton message='Closing Battlefield 6' >
        Close Battlefield 6
      </AlertButton>

      <Signup />
    </div>
  );
}