import React from 'react'

export default function Caracteres (props: any) {
  const { users } = props;
  console.log(users)
  return (
    <div>
      <h1>Usuarios</h1>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Nombre </th>
            <th scope="col">Apellidos</th>
            <th scope="col">Correo</th>
            <th scope="col">Avatar</th>
          </tr>
        </thead>


        <tbody>

          {users.map((user: any) =>
          (<div>
            
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td><img src={user.avatar} alt={user.first_name} /></td>
          </div>))}

        </tbody>


      </table>

    </div>
  )
}
