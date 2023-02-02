import React, { useState } from 'react'
import Characters from './Caracteres';

const Examen = () => {

  const [users, setUsers] = useState([null]);
  const reqApi = async () => {
    const api = await fetch("https://reqres.in/api/users");
    const data = await api.json();
    
    setUsers(data.data)

  }
  

  return (
    <div>

      <div>Examen</div>
      <hr />
      <header>
        <h1>Lista de Personas</h1>

        <Characters users={users} />

        <button onClick={reqApi} className="btn-search">Buscar personas</button>
      </header>
    </div>
  )
}

export default Examen