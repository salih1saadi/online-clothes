import React from "react";


const Table = ({item}) => {

  return (
   


      
  
        <tr key = {item._id}>
          <td>{item._id}</td>
          <td>{item.title}</td>
          <td>{item.routeName}</td>
          
        </tr>


         
   

  );
}

export default Table;