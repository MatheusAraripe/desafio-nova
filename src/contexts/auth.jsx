import {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const navigate = useNavigate();

    
    const getUsersFromLs = () => {
        const data = localStorage.getItem("users")
        if (data){
            return JSON.parse(data)
        }
        return [];
    };

    const getContactsFromLs = () => {
        const data = localStorage.getItem("contacts")
        if (data){
            return JSON.parse(data)
        }
        return [];
    };

    // atribui se o usuário está logado ou não
    const [user, setUser] = useState(null);

    const [users, setUsers] = useState(getUsersFromLs);

    const [contacts, setContacts] = useState(getContactsFromLs);

    // loading para esperar a aplicação recuperar user no local storage
    const [loading, setLoading] = useState(true);



    // useEffect checa toda vez que a pagina é recarregada se o usuário
    // ainda está logado ou não
    useEffect( () => {
        const recoveredUser = localStorage.getItem("user");

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    },[]);


    const login = (email, password) => {

        const usersArry = getUsersFromLs();

        const foundUser = usersArry.find(e => e.email === email && e.password === password)

        if(foundUser){

            const loggedUser = {
                id: "1",
                email: foundUser.email
            };
            
            localStorage.setItem("user", JSON.stringify(loggedUser));

            setUser(loggedUser);
            navigate("/");
        } else {
            alert("Credenciais incorretas!")
            navigate("/login");
        }
    };

    const signUp = (email, password) => {

        if (getUsersFromLs().find(e => e.email === email)) {
            alert("email já cadastrado!");
        } else {
            
            const newUser = {
                email,
                password
            }

            users.push(newUser)
            localStorage.setItem('users',JSON.stringify(users));

            console.log(localStorage.getItem('users'));

            // após o usuário criar a conta ele é automaticamente logado 
            localStorage.setItem("user", JSON.stringify({id: "1", email}));
            navigate("/");
        }
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUsers(null);
        navigate("/login");
    };


    // guarda usuários no localStorage
    const addUser = (name, email, uni, ramal, tel) =>{

        const newContact = {
            id: uuidv4(),
            name,
            email,
            uni,
            ramal,
            tel
        }

        contacts.push(newContact)
        localStorage.setItem('contacts',JSON.stringify(contacts));
    }


    const excludeUser = (id) => {
        const contactArry = getContactsFromLs();
        const updatedList = contactArry.filter(item => item.id !== id);
        // console.log(contactArry, updatedList, id);

        setContacts(updatedList)
        localStorage.setItem('contacts', JSON.stringify(updatedList));
    }

    return(
        <AuthContext.Provider value={{authenticated: !!user, users, loading, login, logout, signUp, addUser, getContactsFromLs, excludeUser}}>
            {children}
        </AuthContext.Provider>
    );
}