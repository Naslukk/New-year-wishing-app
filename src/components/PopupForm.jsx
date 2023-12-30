import React, { useState } from "react";
import "./PopupForm.css"; 
import { useForm } from "../context/FormContext";

const PopupForm = () => {
  const { showForm, setShowForm } = useForm();
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('');
  const [url, setUrl] = useState('');
  const [copy,setCopy] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`https://nashappynewyear.netlify.app/?from=${from}&to=${to}`);

    setCopy(false)
  };

  const handleCopyToClipboard = (e) => {
    e.preventDefault();
  
    const textField = document.createElement('textarea');
    textField.innerText = url;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    setCopy(true);
  };


  const onClose = ()=>{
    setShowForm(false);
    console.log(showForm)
  }

  return (
    <div className={`popup-container ${showForm ? "active" : ""}`}>
      <div className="popup">
        <h2>Create Your</h2>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <form>
          <label htmlFor="from">From:</label>
          <input
            type="text"
            id="from"
            name="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />

          <label htmlFor="to">To:</label>
          <input
            type="text"
            id="to"
            name="to"
            value={to}
            onChange={(e) =>{ 
              setTo(e.target.value);
              setUrl('')
            }}
            required
          />

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
          {url && (

          <div className="url-diplay">
            <label htmlFor="url">Your Url:</label>
            <div className="url-wrapper">
              <input
                type="text"
                id="url"
                name="url"
                value={url}
                readOnly
                onChange={(e) => {
                  setTo(e.target.value)
                  setUrl('')
                }}
                required
              />
              <button className="btn-copy" onClick={handleCopyToClipboard}>
                {copy ? (
                  <span
                    class="material-symbols-outlined small-icon"
                  >
                    done
                  </span>
                ) : (
                  <span class="material-symbols-outlined  small-icon">content_copy</span>
                )}
              </button>
            </div>
          </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
