import { GpuImage } from "./data/passing-props-to-component";
import { BryanJohnson } from "./data/passing-props-to-component";

function NvidiaRTX({ brand }) {
  return (
    <img 
      src={GpuImage()} 
      alt={brand.model} 
    />
  );
}

function Card({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

export default function RenderPassingProps() {
  return (
    <div>
      <h1 className="font-serif mt-10 text-[40px]">*Read  props inside child</h1>
      <NvidiaRTX 
        brand={{
          model: 'RTX 5090'
        }}
      />

      <Card>
        <BryanJohnson 
          person={{
            name: 'Bryan Johnson'
          }}
        />
      </Card>
    </div>
  );
}