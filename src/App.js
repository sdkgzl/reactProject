import {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useReducer,
  useCallback,
  useMemo,
} from "react";
// import {createElement} from "react";
import "./tailwind.css";
import Button from "./Component/Button";
import Tab from "./Component/Tab";
import Test from "./Component/Test";
import todoReducer from "./Reducers/todoReducer";
import Header from "./Component/Header";
import AddTodo from "./Component/AddTodo";
import Todos from "./Component/Todos";

//useCallBack:Bir Methodu prop olarak geçiyorsan ve parent component render
//olduğunda prop geçtiklerini render etmiyosan bu fonksiyonu kullanmamız gerekmektedir.

// function Button(props){
//   return <button>{props.text}</button>
// }

// function Input(props,ref){
// return <input ref={ref} type="text" {...props}/>
// }
//Input =forwardRef(Input);

const Input = forwardRef((props, ref) => {
  return <input ref={ref} type="text" {...props} />;
});

//useRef jsx Elemanlarını Reflemek
//forwardRef Componentleri Reflemek için kullanılır.

function App() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos2: [],
    todo: "",
    search: "",
  });

  const [show, setShow] = useState(false);

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

  const [activeTab, setActiveTab] = useState(1);

  // todo olmadan nasıl yapılacağını aşağıda ki gibi gösterildi

  // const h1=createElement('h1',null,"Sadık");
  // const ul=createElement('ul',null,todos.map(todo=>createElement('li',null,todo)))
  // return createElement('main',{
  //   className:'test',
  //   id:'main'
  // },h1,ul)

  const inputRef = useRef();
  const focusInput = () => {
    console.log();
    inputRef.current.focus();
  };

  // const [todos2,setTodos] = useState([]);
  // const [todo,setTodo] = useState();

  const submitHandle = useCallback(
    (e) => {
      e.preventDefault(); //kendi içerisinde bir yere istek atmasını engelliyoruz
      dispatch({
        type: "ADD_TODO",
        todo: state.todo,
      });
    },
    [state.todo]
  );

  const onChange = useCallback((e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  }, []);

  const [countTodo, setCountTodo] = useState(0);

  const searchHandle = (e) => {
    dispatch({
      type: "SEARCH_TODO",
      value: e.target.value,
    });
  };

  const filteredTodos = useMemo(() => {
    state.todos2.filter((todo) =>
      todo
        .toLocaleLowerCase("TR")
        .includes(state.search.toLocaleLowerCase("TR"))
    );
  }, [state.todos2, state.search]);

  //form değişkenleri
  const genders = [
    { key: 1, value: "erkek" },
    { key: 2, value: "kadın" },
  ];
  const categoryList = [
    { key: 1, value: "PHP" },
    { key: 2, value: "Js" },
    { key: 3, value: "Css" },
    { key: 4, value: "Html" },
  ];

  const levels = [
    {key:"beginner",value:"Başlangıç"},
    {key:"jr_developer",value:"Jr. Developer"},
    {key:"sr_developer",value:"Sr. Developer"}
  ]


  const [nameForm, setNameForm] = useState("SAdık");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("1");
  //multi selectbox
  const [categories, setCategories] = useState([2, 4]);
  const [rule,setRule] = useState(true);
  const [avatar,setAvatar] = useState(false);
  const [image,setImage] = useState(false);

  useEffect(()=>{
    if(avatar){
      const fileReader = new FileReader();
    fileReader.addEventListener('load',function(){
      setImage(this.result);
    })
    fileReader.readAsDataURL(avatar);
    }
  },[avatar])


  const [rules,setRules] = useState([
    {key:1,value:"1.Kuralları Kabul Ediyorum",checked:false},
    {key:2,value:"2.Kuralları Kabul Ediyorum",checked:false},
    {key:3,value:"2.Kuralları Kabul Ediyorum",checked:true}
  ]);

  const [level,setLevel] = useState('jr_developer');

  const checkRule=(key,checked)=>{
    setRules(rules=>rules.map(rule=>{
      if(key==rule.key){
        rule.checked = checked;
      }
      return rule;
    }))
  }

  const enabled = rules.every(rule=>rule.checked);
  const selectedGender = genders.find((g) => g.key == gender);
  const selectedLevel = levels.find((g) => g.key == level);

  const selectedCategories =
    categories && categoryList.filter((c) => categories.includes(c.key));


    const submitHandleFile=()=>{
      const formData = new FormData();
      formData.append('avatar',avatar);
      formData.append('name',name);
      fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:formData
      })
    }

  return (
    <main id="main" className="test">
      <div>
      <div style={{ padding: 20 }}>
        <button onClick={() => setActiveTab(2)}>Aktif Tabı Değiştir</button>
        <Tab
          activeTab={activeTab}
          onChange={(tabIndex) => setActiveTab(tabIndex)}
        >
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

      <button onClick={() => setShow((show) => !show)}>
        {show ? "Gizle" : "Göster"}
      </button>
      {show && <Test />}

      <h1>userRef() - forwardRef()</h1>

      <input type="text" ref={inputRef} />
      <Input ref={inputRef}></Input>
      <button onClick={focusInput}>Focusla</button>

      <div style={{ height: "25px" }}></div>
      <div style={{ height: "25px" }}></div>
      <div style={{ height: "25px" }}></div>
      <div style={{ height: "25px" }}></div>

      <Header></Header>
      <h3>{countTodo}</h3>
      <button onClick={() => setCountTodo((count) => count + 1)}>Artır</button>
      <h1>Todo App</h1>
      <input
        type="text"
        value={state.search}
        placeholder="Todolarda Ara"
        onChange={searchHandle}
      />
      {state.search}
      <AddTodo
        onChange={onChange}
        submitHandle={submitHandle}
        todo={state.todo}
      />
      {/* <Todos todos={filteredTodos}/> */}
      {/* sonra bakılacak */}

      <h3>Form Elemanları</h3>
      </div>
      <div>
        <button onClick={() => setNameForm("ahmet")}>Adı Değiştir</button>
        <input
          type="text"
          value={nameForm}
          onChange={(e) => setNameForm(e.target.value)}
        />
        {nameForm}
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {description}
      </div>
      <div>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Seçiniz</option>
          {/* <option value="1">Erkek</option>
          <option value="2">Kadın</option> */}
          {genders.map((gender, index) => (
            <option value={gender.key} key={gender.key}>
              {gender.value}
            </option>
          ))}
        </select>
        {JSON.stringify(selectedGender)}
      </div>
      <div>
        <button onClick={() => setCategories([2, 3, 4])}>
          Kategorileri Seç
        </button>

        <select
          value={categories}
          multiple={true}
          onChange={(e) =>
            setCategories(
              [...e.target.selectedOptions].map((option) => +option.value)
            )
          }
        >
          <option value="">Seçiniz</option>
          {categoryList.map((category, index) => (
            <option value={category.key} key={category.key}>
              {category.value}
            </option>
          ))}
        </select>
        <pre>{JSON.stringify(selectedCategories, null, 2)}</pre>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={rule} onChange={e=>setRule(e.target.checked)}/>Kuralları Kabul Ediyorum
        </label>

        <button disabled={!rule}>Devam et</button>
      </div>

      <div>

        {rules.map(rule=>(
          <label key={rule.key}>
          <input type="checkbox" checked={rule.checked} onChange={e=>checkRule(rule.key,e.target.checked)} />{rule.value}
        </label>
        ))};

        <pre>{JSON.stringify(rules,null,2)}</pre>            

        <button disabled={!enabled}>Devam et</button>
      </div>

      <div>
      {levels.map((l,index)=>(
            <label key={index}>
              <input type="radio" value={l.key} checked={l.key === level} onChange={e=>setLevel(e.target.value)}/>
              {l.value}
            </label>
          ))}
          {JSON.stringify(selectedLevel)}
      </div>
      
      <div>
      <label>
        <input type="file" onChange={e=>setAvatar(e.target.files[0])}/>
      </label>

        {avatar && (
          <>
          <h3>{avatar.name}</h3>
          {image && <img src={image}/>}
          </>
        )}

        <button onClick={submitHandleFile} disabled={!enabled}>Devam Et</button>

      </div>

    </main>
  );
}
export default App;
