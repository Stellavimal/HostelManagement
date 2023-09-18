
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

function Payment() {
  const [data, setData] = useState({
    name: '',
    bank_name: '',
    payment_mode: '',
    card_no: '',
    mess_fees: '',
    establishment_fees: '',
    total_amount: '',
  });

  console.log(data)    
  const [getdata, setGetdata] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  // const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const form = event.currentTarget;

    // if (form.checkValidity() === false) {
    //   event.stopPropagation();  
      try {
        const response1 = await axios.post('/api/payment/', data);
        setGetdata([...getdata,response1.data])
        // setData({ name: '',
        // bank_name: '',
        // payment_mode: '',
        // card_no: '',
        // mess_fees: '',
        // establishment_fees: '',
        // total_amount: ''})      
        console.log('response:', getdata);

        // Reset the form fields
        setData({
          name: '',
          bank_name: '',
          payment_mode: '',
          card_no: '',
          mess_fees: '',
          establishment_fees: '',
          total_amount: '',
        });
        // setValidated(false);
        setShowAlert(true);
      } catch (error) {
        console.error('Error creating data:', error);
      }
      
    }

  
  

  return (
    <Container>
      <h2 className="mb-4">Hostel Payment Page</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form
            onSubmit={handleSubmit}
            className="p-4 border rounded"
            style={{ backgroundColor: '#bfefff' }}
          >
            <div className="text-center">
              <h2 className="fw-bold mb-3 text-uppercase">Payment Info</h2>
              <p>Please fill in your payment details.</p>
            </div>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={data.name}
                onChange={(event) =>
                  setData({ ...data, name: event.target.value })
                }
                placeholder="Enter Your Name"
                required
                minLength="3"
                maxLength="30"
                pattern="[A-Za-z\s]+"
                // isInvalid={validated && data.name.trim() === ''}
              />
              {/* <Form.Control.Feedback type="invalid">
                Name is required
              </Form.Control.Feedback> */}
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formPlaintextBankname">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control
                  type="text"
                  name="bank_name"
                  value={data.bank_name}
                  onChange={(event) =>
                    setData({ ...data, bank_name: event.target.value })
                  }
                  placeholder="Enter Your Bank Name"
                  required
                  // isInvalid={validated && data.bank_name.trim ===''}
                  />
  
                
{/* <Form.Control.Feedback type="invalid">
    bank Name is required
  </Form.Control.Feedback> */}
              </Form.Group>

            {/* ... (other form groups) ... */}
            <Form.Group className="mb-3" controlId="formpaymentmode">
  <Form.Label>Payment Mode</Form.Label>
  <Form.Select
    name="payment_mode"
    value={data.payment_mode}
    onChange={(event) =>
      setData({ ...data, payment_mode: event.target.value })
    }
    required
    // isInvalid={validated && data.payment_mode.trim() === ''}
  >
    <option value="" disabled>
      Select Payment Mode
    </option>
    <option value="Credit Card">Credit Card</option>
    <option value="Debit Card">Debit Card</option>
    <option value="Net Banking">Net Banking</option>
    {/* Add more options as needed */}
  </Form.Select>
  {/* <Form.Control.Feedback type="invalid">
    Payment Mode is required
  </Form.Control.Feedback> */}
</Form.Group>


              <Form.Group className="mb-3" controlId="formPlaintextCardNumber">
                <Form.Label>Card_No</Form.Label>
                <Form.Control
                  type="text"
                  name="card_no"
                  value={data.card_no}
                  onChange={(event) =>
                    setData({ ...data, card_no: event.target.value })
                  }
                  placeholder="Enter Your card number"
                  required
                  
                  // isInvalid={validated && data.card_no.trim ===''}
                  />
  
                
{/* <Form.Control.Feedback type="invalid">
    Card Number is required
  </Form.Control.Feedback> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessfees">
                <Form.Label>Mess Fees</Form.Label>
                <Form.Control
                  type="text"
                  name="mess_fees"
                  value={data.mess_fees}
                  onChange={(event) =>
                    setData({ ...data, mess_fees: event.target.value })
                  }
                  placeholder="Enter Your Mess fees"
                  required 
                  pattern='[0-4]{4}'
                  
                />
                {/* <Form.Control.Feedback type="invalid">
    Mess fees is required
  </Form.Control.Feedback> */}
              </Form.Group>
                
              <Form.Group className="mb-3" controlId="formEstablishment">
                <Form.Label>Establishment_Fees</Form.Label>
                <Form.Control
                  type="text"
                  name="establishment_fees"
                  value={data.establishment_fees}
                  onChange={(event) =>
                    setData({ ...data, establishment_fees: event.target.value })
                  }
                  placeholder="Enter Your Establishment Fees"
                  required

                />
                 {/* <Form.Control.Feedback type="invalid">
    Establishment is required
  </Form.Control.Feedback> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formtotalamount">
                <Form.Label>Total_amount</Form.Label>
                <Form.Control
                  type="text"
                  name="total_amount"
                  value={data.total_amount}
                  onChange={(event) =>
                    setData({ ...data, total_amount: event.target.value })
                  }
                  placeholder="Enter Your total amount"
                  required
                />
                 {/* <Form.Control.Feedback type="invalid">
    Total amount is required
  </Form.Control.Feedback> */}
              </Form.Group>

              <div className="text-center">
            <Button variant="primary" type="submit" className="button_center">
              Submit
            </Button>
           </div >

            {showAlert && (
              <Alert
                variant="success"
                onClose={() => setShowAlert(false)}
                dismissible
              >
                Payment submitted successfully!
              </Alert>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Payment;


