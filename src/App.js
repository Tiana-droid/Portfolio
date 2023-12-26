import Index from './Pages/Index';
import './App.css';
import { styled } from 'styled-components';

const Wrapper = styled.div`
 background-color: #141414;
  color: #cfcfcf;
  overflow: auto !important;
  height: fit-content;
  box-sizing: border-box;
  width: 100%;
  padding: 5px 0px;
  font-family: 'Open Sans', sans-serif;
 


  a {
    text-decoration: none;
    color: #ddd;
  }
`

function App() {
  return (
    <body>

    <Wrapper>
      <Index/>
    </Wrapper>
    </body>
  );
}

export default App;
