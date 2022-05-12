import "./styles.css";
import Header from "./Components/Header/index";
import Body from "./Components/Body/Index";
import { useState } from "react";
import videoSource from "./videoSource";

export default function App() {
  const [state, setState] = useState({
    results: []
  });

  const onSearch = async (text) => {
    const results = await videoSource.get("/", {
      params: { q: text, numResults: "10" }
    });

    setState((prevState) => {
      return { ...prevState, results: results };
    });
  };
  return (
    <div className="App">
      <Header onSearch={onSearch} />
      <Body results={state.results} />
    </div>
  );
}
