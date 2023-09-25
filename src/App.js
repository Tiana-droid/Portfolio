import Index from './Pages/Index';
import './App.css';
import { styled } from 'styled-components';

const Wrapper = styled.div`
 background-color: #141414;
  color: #ddd;
  /* overflow-x: hidden; */
  height: fit-content;
  box-sizing: border-box;
  width: 100%;
  padding: 5px 0px;
  font-family: 'Open Sans', sans-serif;
`

function App() {
  return (
    <Wrapper>
      <Index/>
    </Wrapper>
  );
}

export default App;
