import 'swiper/swiper.min.css';
import './assets/boxicons-2.1.1/css/boxicons.min.css';
import './App.scss';

import Router from './config/Router';
import { render } from 'react-dom';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';

// import Home from './pages/Home';
// import Catalog from './pages/Catalog';
// import Details from './pages/Details';

function App() {
  return (
     render(
      <Router />,document.getElementById("root")
     )
    
  );
}

export default App;
