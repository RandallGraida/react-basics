import RenderAndCommitImage from "../data/Render-And-Commit";
export default function RenderAndCommit() {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <RenderAndCommitImage />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Macbook Pro M4</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    </div>
  );
}


