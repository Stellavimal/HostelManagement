import { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button,Row,Col,Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const StudentDetails = () => {
    const [details, setDetails] = useState([])
   // const [newEntry, setNewEntry] = useState({ });
    const [showModal, setShowModal] = useState(false); // pop up wondow
    const [editIndex, setEditIndex] = useState(null);
    const[input,setInput]=useState({ name: '', Roomtype: ''})

    const handleEdit = (details, index) => {
       
        setEditIndex(index); // Set the index being edited
        setInput({ ...input, name: details.name,Roomtype: details.Roomtype,});
       
    };
    // const input = (event) => {
    //     const { name, value } = event.target;
    //     setNewEntry({ ...newEntry, [name]: value });
    // };
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/api/rooms/');
                setDetails(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    })

    const design = {
        backgroundColor: "cadetblue"
    }
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (<div>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th style={design}>S.NO</th>
                    <th style={design}>Name</th>
                    <th style={design}>Check-In Date</th>
                    <th style={design}>Check-Out Date</th>
                    <th style={design}>RoomType</th>
                    <th style={design}>Booking</th>
                </tr>
            </thead>
            <tbody>{
                details.map((item, index) => (
                    < tr key={index} >
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.checkin}</td>
                        <td>{item.checkout}</td>
                        <td>{item.Roomtype}</td>
                        <td><Button variant="success"  onClick={() => {handleEdit(item, index); openModal();}}>
                            <i className="fas fa-bed"></i>
                        </Button>
                            <Button variant="danger">
                                <i className="fas fa-trash"></i>
                            </Button></td>
                    </tr>
                ))}


            </tbody>
        </table>
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton style={{backgroundColor:"cadetblue"}}>
                <Modal.Title> Booking Details</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{border:"2px solid #007bff"}}>
            <Form  className="form-floating mb-3 mt-3" >
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label column sm="2" className='label-control'>
          Student Name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Student Name" required value={input.name}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextRoomType">
        <Form.Label column sm="2" className='label-control'>
          Room Type
        </Form.Label>
        <Col sm="10">
        <Col sm="10">
          <Form.Control type="text" placeholder="Room Type" required value={input.Roomtype}/>
        </Col>
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
     
    </Form>
            </Modal.Body>
            <Modal.Footer style={{border:"2px solid #007bff"}}>
                (<Button variant="primary">
                    Book</Button>)
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>

            </Modal.Footer>
        </Modal>

    </div >);
}

export default StudentDetails;