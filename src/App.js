import styled from "styled-components";

const AppWrap = styled.div`
  height: 100%;
  width: 100%;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Courier New", monospace;
  user-select: none;
`;

const CenterCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  border: #aaaaaa solid 0.5px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuItems = [
  { title: "blog", href: "https://blog.mx-e.net", deactivated: true },
  { title: "projects", href: "/projects", deactivated: true },
  { title: "github", href: "https://github.com/mx-e" },
  {
    title: "linked_in",
    href: "https://www.linkedin.com/in/maximilian-eißler-b51b9213b/",
  },
];

const MenuList = () => (
  <ul>
    {MenuItems.map(({ title, href, deactivated }) => {
      const item = <li>{title + (deactivated ? "\t(in progress)" : "")}</li>;
      return <>{!deactivated ? <a href={href}>{item}</a> : <>{item}</>}</>;
    })}
  </ul>
);

function App() {
  return (
    <AppWrap>
      <CenterCircle>
        <p>mx-e</p>
      </CenterCircle>
      <MenuList />
    </AppWrap>
  );
}

export default App;
