import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  
  const [isReserEditOpen, setIsReserEditOpen] = useState(false);
  const [isCustomersOpen, setIsCustomersOpen] = useState(false);
  const [isRoomsOpen, setIsRoomsOpen] = useState(false);
  

  const openModalReserEdit = () => {
    setIsReserEditOpen(true);
  };

  const closeModalReserEdit = () => {
    setIsReserEditOpen(false);
  };

  const openModalCustomers = () => {
    setIsCustomersOpen(true);
  };

  const closeModalCustomers = () => {
    setIsRoomsOpen(false);
  };



  return (
    <ModalContext.Provider value={{ 
        isReserEditOpen, 
        openModalReserEdit, 
        closeModalReserEdit, 
        isCustomersOpen, 
        openModalCustomers, 
        closeModalCustomers 
        }}>
      {children}
    </ModalContext.Provider>
  );
};