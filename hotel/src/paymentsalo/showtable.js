import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function Viewpay() {
  const [value, setValue] = useState([]); // Initialize as an empty array

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/payment/');
        setValue(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const design = {
    backgroundColor: "cadetblue"
}


  return (
    <>
     <h1 className="text-center" >Payment Data</h1>
      <Table striped bordered hover className="cadetblue-table">
      <thead >
          <tr>
            <th style={design}>Id</th>
            <th style={design}>Name</th>
            <th style={design}>Bank_name</th>
            <th style={design}>Payment_Mode</th>
            <th style={design}>Card_No</th>
            <th style={design}>Mess_fees</th>
            <th style={design}>Establishment_fees</th>
            <th style={design}>Total_amount</th>
          </tr>
        </thead>
        <tbody>
          {value.map((data1, index) => (
            <tr key={data1.id}>
              <td>{index}</td>
              <td>{data1.name}</td>
              <td>{data1.bank_name}</td>
              <td>{data1.payment_mode}</td>
              <td>{data1.card_no}</td>
              <td>{data1.mess_fees}</td>
              <td>{data1.establishment_fees}</td>
              <td>{data1.total_amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Viewpay;
