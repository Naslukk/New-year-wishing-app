import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FormProvider } from './context/FormContext';

import Home from './pages/Home';

function App() {
  return (
    <FormProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </FormProvider>
  );
}

export default App
