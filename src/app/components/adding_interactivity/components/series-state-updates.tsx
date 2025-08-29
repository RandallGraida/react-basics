import { useState } from "react"

export default function SeriesStateUpdates() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <div className="stats shadow">
      <div className="stat">
        <div className="stat-title text-lg text-black">{number}</div>
        <div className="stat-value">
          <button 
            className="btn btn-neutral"
            onClick={() => {
              setNumber(number + 5);
            }}>Increase the number
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}