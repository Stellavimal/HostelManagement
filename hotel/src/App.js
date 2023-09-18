import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Allocateroom from './stellapage/allocatingroom';
import Payment from './paymentsalo/payment';
import Viewpay from './paymentsalo/showtable';
import Allocateroom from './stellapage/allocatingroom';
import StudentDetails from './stellapage/Showstudent';


function App() {
  return (
    <>
    <StudentDetails/>
    <Payment/>
    <Viewpay/>
    </>
    
  )
}

export default App;
