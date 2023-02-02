import React, { useState, useEffect } from 'react';
// function useUsers() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       setLoading(true);
//       const response = await fetch("https://reqres.in/api/users");
//       const data = await response.json();
//       setUsers(data.data);
//       setLoading(false);
//     }

//     fetchData();
//   }, []);

//   return [users, loading];
// }

// function UsersTable() {
//   const [users, loading] = useUsers();

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Nombre</th>
//           <th>Apellidos</th>
//           <th>Correo</th>
//           <th>Avatar</th>
//         </tr>
//       </thead>
//       <tbody>
//         {loading ? (
//           <tr>
//             <td colSpan={4}>Cargando...</td>
//           </tr>
//         ) : (
//           users.map(user => (
//             <tr key={user.id}>
//               <td>{user.first_name}</td>
//               <td>{user.last_name}</td>
//               <td>{user.email}</td>
//               <td>
//                 <img src={user.avatar} alt={user.first_name} />
//               </td>
//             </tr>
//           ))
//         )}
//       </tbody>
//     </table>
//   );
// }

// export default UsersTable;

