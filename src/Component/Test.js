import { useEffect, useState } from "react";
//useEffect hook unu 4 farklı şekilde kullanabiliyorum  
//1.Componentin ilk yüklendiğinde
//2.Componentler de herhangi bir değişiklik olduğunda yani render olduğunda
//3.Component destroy olduğunda
//4.
export default function Test(){


    const [count,setCount] = useState(0);

    const [postId,setPostId] = useState(1);

    const [post,setPost] = useState(false);

    //ikinci parametre boş bırakırsam component her render olduğunda çalışacak
    useEffect (()=>{
        console.log("Component Render oldu");

        
    })

    //ikinci parametre boş bir array alır bu da component ilk yüklendiğinde çalışır.
    useEffect (()=>{
        console.log("Component İlk Yüklendiğinde Çalışır");
        //üçüncü parametre component destroy olduğunda
        let interval = setInterval(()=>console.log('interval çalıştı'),1000);
        return()=>{
            console.log("Component Destroy oldu");
            clearInterval(interval);
        }
    },[])


    //hem component render oldu hem de değer değişti,count değerini array içinde dinlemek istedik
    //bir yere istek atacağız
    useEffect (()=>{
        console.log("count değeri değişti = ",count);
    },[count])


    useEffect (()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[postId])



    return(
        <>
        <h3>{count}</h3>
        <h3>{postId}</h3>

        {post && JSON.stringify(post)}
        <button onClick={()=>setCount(count=>count+1)}>Artır</button>
        <button onClick={()=>setPostId(postId=>postId+1)}>Sonraki Konu</button>
        <hr/>
        Test Componenti
        </>
    )

}