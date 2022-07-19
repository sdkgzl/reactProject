
import logo from "./logo.svg";
import styles from './App.module.css';
import Test from "./test";
import {Title} from "./Components";
import Bootstrap from "./Bootstrap";
import Tailwind from "./TailwindComponent";
//import './tailwind.css';
import './style.scss';
function Styles(){
    return(
        <div className={styles.App}>
      <h3>{process.env.NODE_ENV}</h3>
      <p>{process.env.REACT_APP_API_URL}</p>
      <Test></Test>
      {/* <Title>Deneme</Title> */}
      <Title theme="dark">Deneme</Title>
      <p className="env">
        <span>test</span>
      </p>

      <Bootstrap></Bootstrap>
      <Tailwind></Tailwind>
      {process.env.NODE_ENV === 'production' &&(
        <>
        <img src="/logo192.png" alt=""/>
        <img src={logo} alt=""/>
        </>
      )}
    </div>
    )
}

export default Styles;