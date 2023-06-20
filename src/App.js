import { Routes, Route } from 'react-router-dom'
import './App.css';

import Error from './Components/errorPage/Error';
import Navbar from './Components/navbar/Navbar';
import Addperson from './Components/addPerson/Addperson';
import RetriveInformation from './Components/retriveInformation/RetriveInformation';

function App() {
  return (
    <>
      <div className="container-fluid">

        <div className="row">
          <div className="col headpart">
            <h3>Venky's Directory App</h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <Navbar />
          </div>
        </div>

          </div>

            <Routes>
              <Route path='/' element={ <Addperson /> }></Route>
              <Route path='addnewperson' element={<Addperson/>}></Route>
              <Route path='retriveInfo' element={<RetriveInformation/>}></Route>
              <Route path='/*' element={<Error/>}></Route>
            </Routes>
       
    </>
  );
}

export default App;