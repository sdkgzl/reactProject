import classNames from "classnames";

function Button({text,variant='default'}){    
return(
    <button className={classNames({
        "p-4 h-10 items-center rounded":true,
        "bg-gray-100":variant==="default",
        "bg-green-600 text-white":variant==="success",
        "bg-red-600 text-white":variant==="danger",
        "bg-yellow-600 text-white":variant==="warning",
    })}>{text}</button>

    
)
}

export default Button;