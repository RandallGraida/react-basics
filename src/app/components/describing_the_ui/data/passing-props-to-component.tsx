import { bryanJohnson } from "./utils/passing_props";

// Props inside components
export function GpuImage() {
  return (
    '/images/download.jpg'
  );
}

export function BryanJohnson({ person }) {
  return (
    <img 
      src={bryanJohnson()} 
      alt={person.name} 
    />
  );
}

