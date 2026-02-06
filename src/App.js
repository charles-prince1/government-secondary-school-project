import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './Components/landingPage/CONTENT'
import Header from './Components/landingPage/Header'
import './App.css'
import Footer from './Components/landingPage/footer';
import History from './Components/landingPage/History';
import Anthem from './Components/landingPage/Anthem';
import Login from './Components/Students/Login'
import { useState } from 'react';
import Home from './Components/landingPage/HomePage';
import StudentsData from './Components/Students/studentsTest';
import Test from './Components/test';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/* Route for Home page */}
        <Route exact path='/' element={<Home />} />
        {/* Route for history page */}
        <Route exact path='/history' element={<>
          <Header />
          <History />
          <Footer />
        </>} />
        {/* Route for School Anthem page*/}
        <Route exact path='/Anthem' element={
          <>
            <Header />
            <Anthem />
            <Footer />
          </>
        } />
        {/* Route for Login page */}
        <Route exact path='/Login' element={<Login />} />
        {/* Route for student Dashboard */}
        <Route exact path='/Dashboard' element={<StudentsData />} />
        <Route exact path='/Test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;