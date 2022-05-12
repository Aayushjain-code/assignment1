import { Card } from "./SubComponents/Card";

export default function Body({ results }) {
  let data = [];
  if (results.data) {
    data = results.data.results || [];
  }
  console.log("data:", data);

  return (
    <div className="Body">
      {data.map((item) => (
        <Card key={item.heading} item={item} />
      ))}
    </div>
  );
}
