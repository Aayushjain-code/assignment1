import "./Card.css";

function Card(props) {
  console.log("props", props);

  return (
    <div class="m1 card vertical-card2-container">
      <div class="p1">
        <h4 class="card-header">{props.item.heading}</h4>
        <p class="card-text break-word">{props.item.text}</p>
        <div class="card-btns">
          <button class="btn btn-primary">
            <a className="break-word link" href={`${props.item.video}`}>
              Video Link{" "}
            </a>
          </button>
        </div>
        <div className="tags">
          {props.item.tags.map((item) => {
            return <span class="text-badge">{item}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

export { Card };
