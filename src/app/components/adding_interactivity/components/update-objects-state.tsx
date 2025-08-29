import { useState } from "react";

export default function UpdateObjectsState() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 30
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person, 
      lastName: e.target.value
    });
  }

  function handleAgeChange(e) {
    setPerson({
      ...person,
      age: e.target.value
    });
  }

  return (
    <div className="space-y-4 max-w-xl bg-white p-6 rounded-2xl shadow">
      <label className="flex items-center space-x-4">
        <span className="w-32 text-sm font-medium text-gray-700">
          First name:
        </span>
        <input
          className="flex-1 rounded-xl border border-gray-300 px-3 py-2 text-gray-800 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition"
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>

      <label className="flex items-center space-x-4">
        <span className="w-32 text-sm font-medium text-gray-700">
          Last name:
        </span>
        <input
          className="flex-1 rounded-xl border border-gray-300 px-3 py-2 text-gray-800 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition"
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>

      <label className="flex items-center space-x-4">
        <span className="w-32 text-sm font-medium text-gray-700">
          Age:
        </span>
        <input
          className="flex-1 rounded-xl border border-gray-300 px-3 py-2 text-gray-800 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition"
          value={person.age}
          onChange={handleAgeChange}
        />
      </label>

      <p className="text-gray-600 font-medium">
        {person.firstName} {person.lastName} is {person.age} years old.
      </p>
    </div>
  );
}