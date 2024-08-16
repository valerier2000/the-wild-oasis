import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: green;
  color: var(--color-grey-800);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Welcome to The Wild Oasis</Heading>
        <Heading as="h2">The Wild Oasis</Heading>
        <Button>Check In</Button>
      </StyledApp>
    </>
  );
}

export default App;
