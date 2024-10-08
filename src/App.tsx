import React from "react";
import "./App.css";
import styled from "styled-components";
import { RecursiveList } from "./features/RecursiveList/ui/RecursiveList";

function App() {
  return (
    <Main>
      <p>Рекурсивный список</p>
      <p>Без адаптива</p>
      <RecursiveList nesting={0} index={0} />
    </Main>
  );
}

const Main = styled.main`
  border: 4px solid green;
  margin: 15px;
`;

export default App;
