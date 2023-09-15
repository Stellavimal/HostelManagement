import './allocate.css';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const Allocateroom = () => {
  const [showTable, setShowTable] = useState(false);
function handleshowTable(){
  setShowTable(!showTable)
}
  return (<>
    <div><Button variant='primary'  className="left-aligned-button" onClick={handleshowTable}>Show Details</Button> </div>


    <div style={{border:"2px solid"}} id="form">
    <Form  className="form-floating mb-3 mt-3" >
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label column sm="2" className='label-control'>
          Student Name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Student Name" required/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhoneNumber">
        <Form.Label column sm="2" className='label-control'>
          Phone Number
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Phone Number" pattern="[0-9]{10}" required title='10 Digits only'/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextRoomType">
        <Form.Label column sm="2" className='label-control'>
          Room Type
        </Form.Label>
        <Col sm="10">
          <Form.Select aria-label="Default select example" className="mb-3" >
            <option disabled style={{backgroundColor:"white"}}>Open this select menu</option>
            <option value="1" style={{backgroundColor:"white"}}>Single</option>
            <option value="2" style={{backgroundColor:"white"}}>Double</option>
            <option value="3" style={{backgroundColor:"white"}}>More(5 Members Only)</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextRoomNumber" >
        <Form.Label column sm="2" className='label-control'>
          Room Number
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Room Number" required/>
        </Col>
      </Form.Group>
      <Button type="submit" variant='success'>Submit</Button>
    </Form>
    </div>
    <div>
      {showTable&&
    <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                        </tr>
                </tbody>
            </table>
            }
    </div>
    </>
  );
}

export default Allocateroom;
