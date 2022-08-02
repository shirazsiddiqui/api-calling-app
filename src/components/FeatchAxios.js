import axios from "axios";
import { useState,useEffect } from "react";

const FeatchAxios = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3006/users')
         .then(res=>setPosts(res.data))
        // .catch(err=> console.log(err))
    },[])



    
    return(
        <>
        <table border="1" cellSpacing="0" cellPadding="10">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>password</td>
                        <td>mobile</td>
                    
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((items, i) =>
                            <tr key={i}>
                                <td>{items.id}</td>
                                <td>{items.name}</td>
                                <td>{items.email}</td>
                                <td>{items.mobile}</td>
                                <td>{items.password}</td>
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default FeatchAxios;