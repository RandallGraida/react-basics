import { useState } from "react";
import { sculptureList } from "../data/State";

function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }
 
  let sculpture = sculptureList[index];

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-left">
          <div className="max-w-s">
            <h1 className="text-5xl font-bold mb-5">
              State: A Component's Memory
            </h1>
            <h2>
              <i>{sculpture.name}</i>
              by {sculpture.artist}
            </h2>

            <button 
              onClick={handleNextClick}
              className="btn btn-outline mt-8 mb-5">
                Next
            </button>

            <h3 className="mb-5">
              ({index + 1} of {sculptureList.length})
            </h3>

            <button 
              onClick={handleMoreClick}
              className="btn btn-neutral btn-outline mb-6">
                {showMore ? 'Hide' : 'Show'} details
            </button>
              {showMore && <p>{sculpture.description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RenderState() {
  return (
    <div>
      <Gallery />
    </div>
  )
}