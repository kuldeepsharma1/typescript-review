// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <div className='bg-red-50 bg-background bg-no-repeat bg-cover bg-center h-screen flex items-center justify-center'>
      <div className='w-full max-w-2xl  mx-auto   px-5'>
        <div className='rounded-lg bg-neutral-100/50 shadow-lg'>
        <Header />
        <App />
        <Footer />
        </div>
      </div>
    </div>
  // </StrictMode> 
);
