import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Help from './Components/Help';
import { Link , Outlet } from 'react-router-dom';
import ArrayTable from './Components/ArrayTable';

function App(props) {
  return (
   <>
   <div className='d-flex justify-content-end'>
    <Link className='btn btn-outline-primary flex-fill' to={'/Home'} element={<Home/>}>Home </Link>
    <Link className='btn btn-outline-secondary flex-fill' to={'/Contact'} element={<Contact/>}>Contact </Link>
    <Link className='btn btn-outline-success flex-fill' to={'/About'} element={<About/>}>About </Link>
    <Link className='btn btn-outline-danger flex-fill' to={'/Help'} element={<Help/>}>Help </Link>
    {/* <Link className='btn btn-outline-warning flex-fill' to={'/Student'} element={<ArrayTable/>}>Student</Link> */}
   </div>
   {/* <div>{props.name}</div> */}
   <Outlet/>
   </>
  );
}
export default App;