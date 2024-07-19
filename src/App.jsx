import { useState } from "react";
import "./styles.scss";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <MainContent></MainContent>
    </>
  );
}

export default App;
