import React from 'react';


const ClientsList = ({client, onRemoveClient=f=>f, editingClient=f=>f}) =>

            <tr className="client" key={client.id}>
              <td>{ client.id }</td>
              <td>{ client.first_name }</td>
              <td>{ client.last_name }</td>
              <td>{ client.company }</td>
              <td>{ client.address }<br/>{ client.city }{ client.state } { client.zipcode }</td>
              <td>{ client.email }</td>
              <td>{ client.phone }</td>
              <td>{ client.project_id }</td>
              <td><button onClick={() => onRemoveClient(client.id)}>Delete</button></td>
              <td><button onClick={() => editingClient(client.id)}>Edit</button></td>
            </tr>
          
export default ClientsList;