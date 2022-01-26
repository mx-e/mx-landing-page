import styled from "styled-components";

const AppWrap = styled.div`
  height: 100%;
  width: 100%;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Courier New', monospace;;
  user-select: none;
`

const CenterCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  border: #aaaaaa solid 0.5px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MenuItems = [
  {title: "blog"}, {title: "LinkedIn"}
]


function App() {
  return (
    <AppWrap>
      <CenterCircle>
        <p>
          mx-e
        </p>
      </CenterCircle>

    </AppWrap>
  );
}

export default App;
