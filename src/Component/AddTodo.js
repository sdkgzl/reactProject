import {memo} from "react";

function AddTodo({submitHandle,onChange,todo}){
console.log("ADDTODO RENDER EDİLDİ")
    return(
        <form onSubmit={submitHandle}>
        <input type="text" value={todo} onChange={onChange}></input>
        <button disabled={!todo} type="submit">
          Ekle
        </button>
      </form>
    )
}

export default memo(AddTodo);