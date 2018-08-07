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
      editingClientId: null,
      update: false
    }
    this.addNewClient = this.addNewClient.bind(this)
    this.removeClient = this.removeClient.bind(this)
    this.editingClient = this.editingClient.bind(this)
    this.editClient = this.editClient.bind(this)
    this.update = this.update.bind(this)
  }

 
update()  {
  axios.get('api/clients')
  .then(response => {
      console.log(response)
    this.setState({
        clients: response.data, 
        NewClientForm:false, 
        EditClientForm: false, 
        ClientsList: false, 
        isLoaded: true, 
        update: false, 
        first_name: '', 
        last_name:'',
        company:'',
        address:'',
        city: '', 
        state:'',
        zipcode:'',
        email:'',
        phone:'',
        project_id:''
      })
  })
  .catch(error => console.log(error))
}

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
    this.setState({
      clients,
      update: true
    })
  })
  .catch(error => {
    console.log(error)
  })
}

removeClient(id){
  axios.delete('api/clients/' + id)
  .then (response => {
    const clients = this.state.clients.filter(
      client => client.id !==id
    )
    this.setState({
      clients,
      update: true})
  })
  .catch(error => console.log(error))
}

editingClient(id) {
  this.setState({
    editingClientId: id
  })
}
editClient(id, first_name, last_name, company, address, city, state, zipcode, email, phone, project_id){
  axios.put( 'api/clients/' + id, {
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
      editingClientId: null,
      update: true
    })
  )
  })
  .catch(error => console.log(error));
}


  render (){
    if (this.state.update) {
      this.update()
    }
    return (
      <div className = "clients-container">
      <Row>
      <Col md={10}>
        <h4 className="card-title"> Clients List</h4>
        
      </Col>
      <Col md={2}>
      <NewClientForm onNewClient={this.addNewClient} />
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
                {this.state.clients.map( (client, i) => {
                if ( this.state.editingClientId === client.id ) {
                    return (<EditClientForm 
                                client={client} 
                                key={i} 
                                editClient={this.editClient} 
                    />)
                } else {
                    return (<ClientsList 
                                client={client} 
                                key={i} 
                                onRemoveclient={this.removeclient}
                                editingClient={this.editingClient} 
                    />)
                }
            })}
                  
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