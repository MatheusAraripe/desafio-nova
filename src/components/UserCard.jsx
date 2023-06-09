import React from 'react'
import {FaPencilAlt, FaTrashAlt, FaUserCircle} from "react-icons/fa"
import "../styles/user_card.scss"

function UserCard({index,id, name, unidade, ramal, tel, tel2, email, 
  setDeleteModalOpen, 
  setOpenModal, 
  setIdToDelete, 
  setContactName, 
  setContactRamal, 
  setContactEmail, 
  setContactTel,
  setContactTel2,
  setContactUni,
  setIdToEdit
}) {

  const handleClickToEdit = () =>{
    setOpenModal(true);
    setContactName(name);
    setContactRamal(ramal);
    setContactEmail(email);
    setContactTel(tel);
    setContactTel2(tel2);
    setContactUni(unidade);
    setIdToEdit(id);
  }

  const handleClick = () => {
    setDeleteModalOpen(true);
    setIdToDelete(id)
  }

  return (
    <div className='user-card-container' style={{'--delay': `${index + 1}00ms`}}>
        <div className="user-card-image">
            <FaUserCircle className='user-image-icon'/>
        </div>
        <div className="user-card-body">
            <div className="card-head">
                <h2 className="user-name">
                    {name}
                </h2>
                <div className="interactive-icons">
                    <FaPencilAlt className='interactive-icon' onClick={() => handleClickToEdit()}/>
                    <FaTrashAlt className='interactive-icon' onClick={() => handleClick()}/>
                    
                </div>
            </div>
            <div className="card-content">
                <p className="user-unidade">Unidade {unidade}</p>
                <h4 className='user-ramal'>Ramal {ramal}</h4>
                {tel2?
                <p className='user-tel'>{tel} / {tel2}</p>:
                <p className='user-tel'>{tel}</p>
                }
                <p className='user-email'>{email}</p>
            </div>
        </div>
    </div>
  )
}

export default UserCard