import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Allocateroom from './stellapage/allocatingroom';
import Payment from './paymentsalo/payment';
import Viewpay from './paymentsalo/showtable';

function App() {
  return (
    <>
    {/* // <><Allocateroom/> */}
    <Payment/>
    <Viewpay/>
    </>
    
  );
}

export default App;
