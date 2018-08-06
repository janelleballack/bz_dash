import React from 'react';


const ClientsList = ({client, onRemoveClient=f=>f, editingClient=f=>f}) =>
  
            <ul className="client" key={client.id}>
              <li>{ client.id }</li>
              <li>{ client.first_name }</li>
              <li>{ client.last_name }</li>
              <li>{ client.company }</li>
              <li>{ client.address }<br/>{ client.city }{ client.city } { client.zipcode }</li>
              <li>{ client.email }</li>
              <li>{ client.phone }</li>
              <li>{ client.project_id }</li>
              <li><button onClick={() => onRemoveClient(client.id)}>Delete</button></li>
              <li><button onClick={() => editingClient(client.id)}>Edit</button></li>
            </ul>
          

export default ClientsList;