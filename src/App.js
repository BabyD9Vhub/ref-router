import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from 'react-bootstrap';
import { BrowserRouter, Route, Router, Routes, NavLink } from 'react-router-dom';
import Contact from './Contact';


export function Layout() {
  return (
    <nav className='bg-secondary p-2 mb-3 text-center '>
      <NavLink to="/" className="link" style={({ isActive }) => {
        return {
          textDecoration: isActive ? "none" : "underline",

        };
      }}>Main</NavLink>
      <NavLink to="/product" className="link"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",

          };
        }}>Product</NavLink>

      <NavLink to="/contact" className="link"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",

          };
        }}
      >
        Contact Us

      </NavLink>

    </nav >
  );

}
function Index() {
  return (
    <>
      <Layout />
      <h3>Hello</h3>
      <Button>Click Me</Button>
    </>
  );
}

function Product() {
  return (
    <>
      <Layout />
      <h3>Product</h3>
      <button>Let's สีข้าว</button>
    </>
  );
}
function App() {
  return (

    <BrowserRouter>
      {/*  //if you wanna use URL you should create this Element and cover this Element all */}
      <Container className='bg-light p-2 my-3' >
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/main' element={< Index />} />
          <Route path='/product' element={< Product />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>



  );
}

export default App;
