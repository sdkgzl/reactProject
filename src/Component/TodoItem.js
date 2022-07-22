import {memo} from "react";
function TodoItem(todo){
    console.log("TODOITEM REndered");
    return(
        <li >{todo}</li>
    )
}

export default memo(TodoItem);