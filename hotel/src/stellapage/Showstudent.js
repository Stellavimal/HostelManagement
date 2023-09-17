import { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';


const StudentDetails = () => {
    const [details, setDetails] = useState([])
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

    const design={
        backgroundColor:"cadetblue"
    }
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
                        <td><Button  variant="success">
                            <i className="fas fa-bed"></i>
                        </Button>
                            <Button  variant="danger">
                                <i className="fas fa-trash"></i>
                            </Button></td>
                    </tr>
                ))}


            </tbody>
        </table>
        
    </div >);
}

export default StudentDetails;