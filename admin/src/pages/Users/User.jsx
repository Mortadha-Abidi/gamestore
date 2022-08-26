import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import '../../pages/maincontainer.css'

export const User = () => {
  return (
    <>
  <h1 stye={{color:'white'}}>User list</h1>
    <div className="maincontainer">
        
        <main>
        <Table striped bordered hover >
<thead>
<tr>
  <th style={{color:"white"}}>#</th>
  <th style={{color:"white"}}>First Name</th>
  <th style={{color:"white"}}>Last Name</th>
  <th style={{color:"white"}}>Username</th>
  <th style={{color:"white"}}>email</th>
</tr>
</thead>
<tbody>
<tr>
  <td style={{color:"white"}}> 1</td>
  <td style={{color:"white"}}>Hamdi</td>
  <td style={{color:"white"}}>abdallah</td>
  <td style={{color:"white"}}>@hamdi</td>
  <td style={{color:"white"}}>hamdi@gmail.com</td>
</tr>
<tr>
  <td style={{color:"white"}}>2</td>
  <td style={{color:"white"}}>Aziz</td>
  <td style={{color:"white"}}>aziza</td>
  <td style={{color:"white"}}>@aziz</td>
  <td style={{color:"white"}}>aziz@gmail.com</td>
</tr>
<tr>
  <td style={{color:"white"}}>3</td>
  <td style={{color:"white"}}>ayoub</td>
  <td style={{color:"white"}}>zaibi</td>
  <td style={{color:"white"}}> @ayoub</td>
  <td style={{color:"white"}}>ayoub@gmail.com</td>
</tr>
<tr>
  <td style={{color:"white"}}> 4</td>
  <td style={{color:"white"}}>sami</td>
  <td style={{color:"white"}}>mdhaffer</td>
  <td style={{color:"white"}}>@sami</td>
  <td style={{color:"white"}}>sami@gmail.com</td>
</tr>


</tbody>
</Table>
</main>
    </div>
    </>
  )
}
