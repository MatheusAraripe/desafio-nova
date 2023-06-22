// eslint-disable-next-line no-unused-vars
import React ,{useContext, useState} from 'react'
import { AuthContext } from '../../contexts/auth';
import NavBar from '../../components/NavBar';
import {BsEnvelopePaperHeartFill} from "react-icons/bs"
import AddModal from '../../components/AddModal';
import Baner from "../../components/Baner"
import NeedEmailModal from '../../components/NeedEmailModal';
import DeleteModal from '../../components/DeleteModal';
import './homepage.scss'
import UserCard from '../../components/UserCard';

function HomePage() {

  const users = [
    {
      name: "Matheus Araripe",
      unidade: "Rio de Janeiro",
      ramal: "Ramal 282",
      tel: "(21)XXXXX-XXXX",
      email: "email@ntendencia.com"
    },
    {
      name: "Matheus Araripe",
      unidade: "Rio de Janeiro",
      ramal: "Ramal 282",
      tel: "(21)XXXXX-XXXX",
      email: "email@ntendencia.com"
    },
    {
      name: "Matheus Araripe",
      unidade: "Rio de Janeiro",
      ramal: "Ramal 282",
      tel: "(21)XXXXX-XXXX",
      email: "email@ntendencia.com"
    },
    {
      name: "Matheus Araripe",
      unidade: "Rio de Janeiro",
      ramal: "Ramal 282",
      tel: "(21)XXXXX-XXXX",
      email: "email@ntendencia.com"
    },
    

  ]

  const [modalOpen, setModalOpen] = useState(false);
  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  // const {logout} = useContext(AuthContext);
  // const handleLogout = () => {
  //   logout()
  // };

  return (
    <>
      {/*modal de deletar card*/}
      {deleteModalOpen && <DeleteModal 
      setOpenDeleteModal = {setDeleteModalOpen}
      title = {"Excluir card?"}/>
      }

      {/*modal de adicionar usuário*/}
      {modalOpen && <AddModal setOpenModal={setModalOpen} />}

      {/*modal de convidar usuário*/}
      {inviteModalOpen && <NeedEmailModal 
      setOpenInviteModal={setInviteModalOpen}
      icon={<BsEnvelopePaperHeartFill className='invite-icon'/>} 
      title={"Convide um colaborador"}
      text={"Informe o email de um colaborador para que ele receba um convite de cadastro"}
      btnText={"ENVIAR CONVITE"}/>
      }

      <div className='home-body'>
          <NavBar />
          <div className="social-button-container">
            <button className='social-button add' onClick={()=>setModalOpen(true)}>ADD CONTATO</button>
            <button className='social-button invite' onClick={()=>setInviteModalOpen(true)}>ENVIAR CONVITE</button>
          </div>

          <Baner />

          {/* <h1 className='home-page-title'>
              Home page privada!
          </h1>
          <button onClick={handleLogout}>Logout</button> */}
          <div className="cards-section">
            {users.map((item, index) => {
              return(
                <UserCard key={index} 
                name={item.name}
                unidade={item.unidade}
                ramal={item.ramal}
                tel={item.tel}
                email={item.email}
                setDeleteModalOpen = {setDeleteModalOpen}
                />
              )
            })}
          </div>
      </div>
    </>
  )
}

export default HomePage
