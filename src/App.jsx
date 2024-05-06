import React, { useState } from "react";
import Modal from "./modal";

const App = () => {

const [modalIsOpen , setIsOpen] = useState(true);
  return (
   <>
    <div className="modal-dialog">
      <div className="modal-content">
        <button type="button" className="btn btn-primary" onClick={()=>setIsOpen(true)}>
          Уведомления
        </button>
      </div>
    </div>
    <Modal modalIsOpen = {modalIsOpen} setIsOpen = {setIsOpen}/>
   </>
  );
};

export default App;

