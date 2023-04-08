import React, { useState } from 'react';
import Detail from "./assets/detail.png"

const Modal = ({ data, updateData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setFormData(data);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    updateData(prevData => prevData.map(d => (d.id === data.id ? formData : d)));
    setIsOpen(false);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  return (
    <>
      <button className='w-8 h-8 translate-x-2' onClick={handleOpenModal}>
        <img src={Detail} alt="" />
      </button>
      {isOpen && (
        <div>
          <div>
            <button onClick={handleCloseModal}>Close Modal</button>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Save Changes</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Modal;