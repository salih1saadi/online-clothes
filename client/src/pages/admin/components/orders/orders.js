import React, { Fragment } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const Orders = () => {
  return (
    <Fragment>
      <h1>All Orders</h1>
      
    
    <MDBTable>
      <MDBTableHead color="primary-color" textWhite>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
         </MDBTableBody>
    </MDBTable>
    </Fragment>

  );
}

export default Orders;