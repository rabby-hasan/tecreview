import React from 'react';
import Privacy from './components/Privacy/Privacy';

import TermsCondition from './components/TermsCondition/TermsCondition';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import {BrowserRouter } from 'react-router-dom'
import AppRoute from './router/AppRoute'
import MobileDetails from './components/MobileDetails/MobileDetails'
import LaptopDetails from './components/LaptopDetails/LaptopDetails';
import AccessoriesDetails from './components/AccessoriesDetails/AccessoriesDetails';

function App() {
  return (
    <BrowserRouter>
    <AppRoute/>
    
    </BrowserRouter>
  );
}

export default App;
