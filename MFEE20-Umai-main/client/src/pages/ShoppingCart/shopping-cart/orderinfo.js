import React, { useState, useEffect } from "react";

function Orderinfo(props){
    //存取訂購者資料
    let [OrderData, setOrderData] = useState({
        first_name: "",
        last_name: "",
        telephone: "",
        birthday: "",
        email: ""
      });
    //更改訂購者資料
    const handleInputChange = (e) => {
        setOrderData({...OrderData,[e.target.name]: e.target.value})
    }
    useEffect(()=>{
        props.changeorderdata(OrderData)
      },[OrderData])
      
    return(
        <table className="Orderer-info">
            <tr>
                <td>
                    <label>名字</label>
                    <input 
                    type="text"
                    name="first_name"
                    onChange={handleInputChange}
                    />
                </td>
                <td>
                    <label>姓氏</label>
                    <input 
                    type="text"
                    name="last_name"
                    onChange={handleInputChange}
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <label>連絡電話</label>
                    <input 
                    type="text"
                    name="telephone" 
                    maxlength="10"
                    onChange={handleInputChange}
                    />
                </td>
                <td>
                    <label>生日</label>
                    <input 
                    type="date"
                    name="birthday"
                    onChange={handleInputChange}
                    />
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <label>Email</label>
                    <input 
                    type="text"
                    name="email"
                    onChange={handleInputChange}
                    />
                </td>
            </tr>
        </table>
    )
}
export default Orderinfo;