import React, { useState } from 'react';

const App = ()=> {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guests, setGuests] = useState([]);

  const handleFirstName = (e)=>{    
    setFirstName(e.target.value)
  }

  const handleLastName = (e)=>{   
    setLastName(e.target.value)
  }

  const handleOnSubmit = (e)=>{
    e.preventDefault()


    let guest = {}
    guest.firstName = firstName
    guest.lastname = lastName

    setGuests([...guests, guest]) 

  }
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={handleOnSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">Nombre</label>
                <input type="text" value={firstName} onChange={handleFirstName} className="form-control" name="first-name" />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Apellido</label>
                <input type="text" value={lastName} onChange={handleLastName} className="form-control" name="last-name" />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>                
              </thead>              
              <tbody>
                {
                guests.map((guest, index)=>
                <tr key={index}>
                  <td>{guest.firstName}</td>
                  <td>{guest.lastname}</td>
                </tr>            
                )}                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  
}

export default App

// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-6 col-sm-offset-3">
//             <form>
//               <div className="form-group">
//                 <label htmlFor="first-name">Nombre</label>
//                 <input type="text" className="form-control" name="first-name" />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="last-name">Apellido</label>
//                 <input type="text" className="form-control" name="last-name" />
//               </div>

//               <div className="action">
//                 <button type="submit" className="btn btn-primary">Agregar Invitado</button>
//               </div>
//             </form>

//             <table className="table bordered-table table-striped">
//               <thead>
//                 <tr>
//                   <th>Nombre</th>
//                   <th>Apellido</th>
//                 </tr>
//               </thead>
//               <tbody>

//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default App



