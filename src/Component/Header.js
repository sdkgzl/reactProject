import {memo} from "react";

function Header(){
    console.log("header rendered");
return (
    <header>HEADER</header>
)
}

//memo her state değiştiğinde tekrardan render edilmesini engelliyor.
export default memo(Header);