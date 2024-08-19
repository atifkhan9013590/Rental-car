
import { useState } from 'react';
import './App.css';
import AllCars from './components/AllCars';
import BookCar from './components/BookCar';

import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import Review from './components/Review';
import SelectCar from './components/SelectCar';
import Sidebar from './components/Sidebar';

function App() {
  const [showsidebar,setshowsidebar]= useState(false)
  return (
    <div className="App">
      <Header showsidebar={showsidebar} setshowsidebar={setshowsidebar} />
      <Sidebar showsidebar={showsidebar} setshowsidebar={setshowsidebar} />
      <div className="app-content">
        <Landing />
        <BookCar />
        <AllCars />
        <SelectCar />
        <Review />
        <Footer />
      </div>
    </div>
  );
}

export default App;
