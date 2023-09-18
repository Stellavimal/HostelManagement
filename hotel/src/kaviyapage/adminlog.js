import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Adminlog() {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({
    Room_NO: "",
    Room_type: "single",
    Block: "Block-A",
    Price: ""
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/adminlog/');
      setRooms(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewRoom({ ...newRoom, [name]: value });
  };

  const handleAddRoom = async () => {
    try {
      const response1 = await axios.post('/api/adminlog/', newRoom);
      setRooms([...rooms, response1.data]);
      setNewRoom({
        Room_NO: "",
        Room_type: "single",
        Block: "Block-A",
        Price: ""
      });
    } catch (error) {
      console.error("Error adding room:", error);
    }
  };

  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="card">
          <div className="card-header bg-primary text-black">
            <h1 className="text-center">ROOM INFORMATION</h1>
          </div>
          <div className="card-body" style={{ backgroundColor: '#bfefff' }}>
            <form> {/* Add the custom class for background color */}
              <div className="mb-3">
                <label htmlFor="Room_NO" className="form-label">Room NO:</label>
                <input type="text" className="form-control" id="Room_NO" name="Room_NO" value={newRoom.Room_NO} onChange={handleInputChange} />
              </div>

                <div className="mb-3">
                  <label htmlFor="Room_type" className="form-label">Room type:</label>
                  <select className="form-select" id="Room_type" name="Room_type" value={newRoom.Room_type} onChange={handleInputChange}>
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="more">More</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="Block" className="form-label">Block:</label>
                  <select className="form-select" id="Block" name="Block" value={newRoom.Block} onChange={handleInputChange}>
                    <option value="Block-A">Block-A</option>
                    <option value="Block-B">Block-B</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="Price" className="form-label">Price:</label>
                  <select className="form-select" id="Price" name="Price" value={newRoom.Price} onChange={handleInputChange}>
                  <option value="5000">5000-Single</option>
                    <option value="4000">4000-Double</option>
                    <option value="3000">3000-More</option>
                    </select>
                  
                </div >
                     <div className="text-center">
                               <button type="button" className="btn btn-success" onClick={handleAddRoom}>SUBMIT</button>
                               </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8 mx-auto">
          <table className="table table-striped">
            <thead className="bg-primary text-white">
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">Room.No</th>
                <th scope="col">Room type</th>
                <th scope="col">Block</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{room.Room_NO}</td>
                  <td>{room.Room_type}</td>
                  <td>{room.Block}</td>
                  <td>{room.Price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Adminlog;
