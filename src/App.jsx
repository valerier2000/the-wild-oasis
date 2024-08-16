import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";

const H1 = styled.h1`
  font-size: 2em;
  color: red;
`;

const StyledApp = styled.div`
  background-color: green;
  color: var(--color-grey-800);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Welcome to The Wild Oasis</H1>
        <Button>Check In</Button>
      </StyledApp>
    </>
  );
}

export default App;
