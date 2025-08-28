/**
 * useReducer - takes a reducer function and an initial state.
 * 
 * useContext - passing data down the component tree without 
 * having to pass props through components.
 * 
 * 
 */
'use client'
import { useReducer } from "react";
import { createContext, useContext, useState } from "react";

// useReducer
interface State {
  count: number
};

type CounterAction = 
| { type: "reset" }
| { type: "setCount"; value: State["count"] }

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return {...state, count: action.value};
    default:
      throw new Error("Unknown action");
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addFive = () => dispatch({ type: "setCount", value: state.count + 5});
  const reset = () => dispatch({ type: "reset" });

  return (
    <div>
      <h1 className="mt-10">Welcome to my counter</h1>

      <p>Count: {state.count}</p>
      <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" 
       onClick={addFive}>Add 5</button>

      <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" 
       onClick={reset}>Reset</button>
    </div>
  );
}

// useContext
type Theme = "light" | "dark" | "system";
const ThemeContext = createContext<Theme>("light");

const useGetTheme = () => useContext(ThemeContext);

function UserContext() {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext value={theme}>
      <MyComponent />
    </ThemeContext>
  )
}

function MyComponent() {
  const theme = useGetTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  )
}

// useCallback
function Form() {
  const [value, setValue] = useState("Change me");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }

  return (
    <div>
      <input
        className="mt-10  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        value={value} 
        onChange={handleChange} 
        placeholder="Change me"
      />
      <p>Value: {value}</p>
    </div>
  );
}
 
// Render function
export default function ReactBasics() {
  return (
    <div>
      <p className="text-xl font-medium text-black">Hello World</p>
      <p className="text-gray-500">You have a new message!</p>

    <UseReducer />
    <UserContext />
    <Form />
    </div>
  );
}


