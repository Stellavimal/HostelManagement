import { useState,useEffect } from "react";
import axios from "axios";
const ViewBooking = () => {
  const [details, setDetails] = useState([])
  useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get('/api/Booking/');
            setDetails(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

   
    fetchData();
   
}, [])
const design = {
  backgroundColor: "cadetblue"
}

  return (  <>
 
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th style={design}>S.NO</th>
                    <th style={design}>Name</th>
                    <th style={design}>RoomType</th>
                    <th style={design}>No.of Months</th>
                    <th style={design}>Booking</th>
                </tr>
            </thead>
            <tbody>{
                details.map((item, index) => (
                    < tr key={index} >
                        <td>{index + 1}</td>
                        <td>{item.student_name}</td>
                        <td>{item.room_type}</td>
                        <td>{item.room_no}</td>
                        <td>Booked</td>
                        
                        
                    </tr>
                ))}
            </tbody>
        </table>
        </>
   

);
  }
 
export default ViewBooking;