import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Card from "../components/Card";
import PopupForm from "../components/PopupForm";
import { useForm } from "../context/FormContext";

function Home() {
  const { showForm, setShowForm } = useForm();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowForm(true);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  const bodyStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#073b4c',
    overflow: 'hidden',
    fontFamily: 'Poppins, sans-serif',
    width: '100vw',
  };

  const handleShowForm = () => {
    setShowForm(true);
  }

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get('from');
  const to = params.get('to');

  return (
    <div className="app-container" style={bodyStyle}>
      <Card to={to} from={from}/>
      {showForm ? (<PopupForm/>) : ""}
      <button className="create-btn" onClick={handleShowForm}>Create Your now !!</button>
    </div>
  );
}

export default Home;
