import { useEffect, useState } from "react";
import axios from "axios";

function Search(props) {
  const { onSearch } = props;

  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const handleEnterKeyPressed = (e) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  return (
    <div className="Search">
      <label style={{ display: "flex" }}>
        <h6 style={{ marginRight: "0.5rem" }}>Search: </h6>{" "}
        <input
          className="input"
          onChange={handleInput}
          onKeyPress={handleEnterKeyPressed}
          type="text"
          value={searchText}
          placeholder="Search your videos"
        />
      </label>
    </div>
  );
}

export { Search };
