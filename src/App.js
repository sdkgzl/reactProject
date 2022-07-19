import { useEffect,useState } from "react";
// import {createElement} from "react";
import "./tailwind.css";
import Button from "./Component/Button";
import Tab from "./Component/Tab";

// function Button(props){
//   return <button>{props.text}</button>
// }

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      //bilgilendir.
    }
  }, []);

  const searchFunction = () => {
    alert("hello");
  };

  const name = "Sadık";
  const todos = ["todo1", "todo2", "todo3"];
  const style = {
    color: "red",
    backgroundColor: "yellow",
    justifyContent: "between",
  };

  const [activeTab,setActiveTab] = useState(1);

  // todo olmadan nasıl yapılacağını aşağıda ki gibi gösterildi

  // const h1=createElement('h1',null,"Sadık");
  // const ul=createElement('ul',null,todos.map(todo=>createElement('li',null,todo)))
  // return createElement('main',{
  //   className:'test',
  //   id:'main'
  // },h1,ul)

  return (
    <main id="main" className="test">
      <div style={{ padding: 20 }}>
        <button onClick={()=>setActiveTab(2)}>Aktif Tabı Değiştir</button>
        <Tab activeTab={activeTab} onChange={tabIndex=>setActiveTab(tabIndex)}>
          <Tab.Panel title="Profil">Tab Panel 1</Tab.Panel>
          <Tab.Panel title="Hakkında"> Tab Panel 2</Tab.Panel>
          <Tab.Panel title="Ayarlar">Tab Panel 3</Tab.Panel>
        </Tab>
      </div>

      <div style={{ padding: 20 }}>
        <Button text="Button Örneği" variant="default"></Button>
        <Button text="Button Örneği" variant="success"></Button>
        <Button text="Button Örneği" variant="danger"></Button>
        <Button text="Button Örneği" variant="warning"></Button>
      </div>
      <h1 tabIndex="3" style={style}>
        Sadık
      </h1>
      <label htmlFor="search" tabIndex="2" onClick={searchFunction}>
        Arama
      </label>
      <input type="text" id="search" tabIndex="1" />
      <ul>
        {4 + 4}
        {name.toUpperCase()}
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </main>
  );
}
export default App;
