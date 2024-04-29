import './App.css';
import AddUser from './components/AddUser'
import NavBar from './components/NavBar'
import AllUsers from './components/AllUser'
import UpdateUser from './components/UpdateUser';
import CodeForUserData from './components/CodeForUserData'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CodeForUserData />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
