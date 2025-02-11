import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The World Oasis</Heading>
        <Heading as="h2">The World Oasis</Heading>
        <Button onClick={() => alert("check in")}>Check In</Button>
        <Button onClick={() => alert("check out")}>Check Out</Button>
        <Heading as="h3">The World Oasis</Heading>
        <Input type="number" placeholder="Number of guest"></Input>
      </StyledApp>
    </>
  );
}

export default App;
