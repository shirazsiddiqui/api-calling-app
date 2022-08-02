import { useEffect, useState } from "react";


const FetchApi = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3006/users')
            // .then((response) => console.log(response) )
            .then((response) => response.json())
            .then(result => setData(result))
        
    }, [])

    return (
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
                        data.map((items, i) =>
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

export default FetchApi;