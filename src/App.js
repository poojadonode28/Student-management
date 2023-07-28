import logo from './logo.svg';

import './App.css';
import NavBar from './components/NavBar';
import StudentManagement from './components/StudentManagement';

import AllStudent from './components/AllStudent';
import AddStudent from './components/AddStudent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EditStudent from './components/EditStudent';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={ <StudentManagement/>}/>
          <Route path="/all" element={<AllStudent/>}/> 
          <Route path="/add" element={<AddStudent/>}/> 
          <Route path="/edit/:id" element={<EditStudent/>}/> 
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
