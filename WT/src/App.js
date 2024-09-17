import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import { Link } from 'react-router-dom';
import ArrayTable from './Components/ArrayTable';
import Layout from './Layout';

function App(props) {
  return (
   <>
   <Link to={'/Layout/Home'} element={<Home/>}>Home  </Link>
   <Link to={'/Layout/Contact'} element={<Contact/>}>Contact  </Link>
   <Link to={'/Layout/About'} element={<About/>}>About  </Link>
   <Link to={'/Layout/Student'} element={<ArrayTable/>}>Student</Link>
   <div>{props.name}</div>
   </>
  );
}
export default App;