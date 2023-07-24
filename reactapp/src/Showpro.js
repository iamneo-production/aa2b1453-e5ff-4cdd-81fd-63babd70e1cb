import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './show.css'
function ShowPro() {
  const [dataList, setDataList] = useState([]); // Fix variable name here

  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
        const response = await axios.get('http://localhost:8081/api/v1/user/showpro', {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`, // Add the token to the request headers
          },
        });

        setDataList(response.data);
        console.log("response.data",response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);

  useEffect(() => {
    console.log(dataList); // This will log the updated dataList whenever it changes.
  }, [dataList]);

  return (
    <div>
      {/* <div className="backbutton">
        <Link to="/AdminHome">&#8592;Back</Link>
      </div> */}
      <center>
      <table className="ttable">
        <div className="scontainer">
          <thead>
          <tr className="stitle">
              <th className="theading">PRODUCT ID</th>
              <th className="theading">PRODUCT NAME</th>
              <th className="theading">PRODUCT PRICE</th>
              <th className="theading">PRODUCT DESCRIPTION</th>
              <th className="theading">PRODUCT IMAGEURL</th>
            </tr>          </thead>
          <tbody>
            {dataList.map((product) => (
               <tr key={product.pid}>
               <td>{product.pid}</td>
               <td>{product.pname}</td>
               <td>Rs.{product.pprice}</td>
               <td>{product.pdescription}</td>
               <td>{product.pimageurl}</td>
             </tr>
            ))}
          </tbody>
        </div>
      </table>
      </center>
    </div>
  );
}

export default ShowPro;