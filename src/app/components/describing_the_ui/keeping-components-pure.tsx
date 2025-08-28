function NvidiaNaming({ number }) {
  return <h2>Nvidia RTX 50{number}</h2>;
}

function Nvidia() {
  const naming = [];

  for (let i = 0; i <= 3; i++) {
    naming.push(<NvidiaNaming key={i} number={60 + i * 10} />)
  }

  return <div>{naming}</div>;
}

export default function RenderKCP() {
  return (
    <div>
      <Nvidia />
    </div>
  );
}