import React, { Component } from 'react';
import axios from 'axios';
import ClientsList from './ClientsList';
import NewClientForm from './NewClientForm';
import EditClientForm from './EditClientForm';
import {Card, CardBody, Table, Row, Col} from 'reactstrap';

class ClientsContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      clients: [],
      editingClientId: null
    }
    this.addNewClient = this.addNewClient.bind(this)
    this.removeClient = this.removeClient.bind(this)
    this.editingClient = this.editingClient.bind(this)
    this.editClient = this.editClient.bind(this)
  }

//  client_params = {first_name, last_name, company, address, city, state, zipcode, email, phone, project_id};

  componentDidMount(){
    axios.get('api/clients.json')
    .then(response =>{
      this.setState({
        clients: response.data
        
      })
      console.log(response.data)
    })
    .catch(error => console.log(error))
  }

  
addNewClient(first_name, last_name, company, address, city, state, zipcode, email, phone, project_id){
  axios.post('api/clients', { client: {first_name, last_name, company, address, city, state, zipcode, email, phone, project_id}
  })
  .then(response => {
    console.log(response)
    const clients = [ ...this.state.clients, response.data ]
    this.setState({clients})
  })
  .catch(error => {
    console.log(error)
  })
}

removeClient(id){
  axios.delete('api/clients' + id)
  .then (response => {
    const clients = this.state.clients.filter(
      client => client.id !==id
    )
    this.setState({clients})
  })
  .catch(error => console.log(error))
}

editingClient(id) {
  this.setState({
    editingClientId: id
  })
}
editClient(id, first_name, last_name, company, address, city, state, zipcode, email, phone, project_id){
  axios.put( 'api/clients' + id, {
    client: {
      first_name, 
      last_name, 
      company, 
      address, 
      city, 
      state, 
      zipcode, 
      email, 
      phone, 
      project_id
    }
  })
  .then(response => {
    console.log(response);
    const clients = this.state.clients;
    clients[id-1] = {id, first_name, last_name, company, address, city, state, zipcode, email, phone, project_id}
    this.setState(() => ({
      clients,
      editingClientId: null
    })
  )
  })
  .catch(error => console.log(error));
}


  render (){
    return (
      <div className = "clients-container">
      <Row>
      <Col md={10}>
        <h4 className="card-title"> Clients List</h4>
      </Col>
      <Col md={2}>
       
      </Col>
      </Row>  
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Company</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Project ID</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.clients.map( client =>{
                    if ( this.state.editingClientId === client.id ){
                      return(
                        <EditClientForm 
                        client={client} 
                        key={client.id} 
                        editClient={this.editClient}/>)
                    } else {
                    return (
                    <ClientsList 
                    client={client} 
                    key={client.id} 
                    onRemoveClient={this.removeClient}/>)
                  }
                  })}
                   <NewClientForm onNewClient={this.addNewClient} />
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      </div>
    )
  }
  
}

export default ClientsContainer;