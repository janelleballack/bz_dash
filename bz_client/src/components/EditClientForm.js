import React, { Component } from 'react';

class EditClientForm extends Component{
  constructor (props) {
    super(props)
    this.state ={
      id: this.props.client.id,
      first_name: this.props.client.first_name,
      last_name: this.props.client.last_name,
      company: this.props.client.company,
      address: this.props.client.address,
      city: this.props.client.city,
      state: this.props.client.state,
      zipcode: this.props.client.zipcode,
      email: this.props.client.email,
      phone: this.props.client.phone,
      project_id: this.props.client.project_id
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id, first_name, last_name, company, address, city, state, zipcode, email, phone, project_id } = this.state;
    this.props.EditClient(id, first_name, last_name, company, address, city, state, zipcode, email, phone, project_id);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <input name="first_name"
             type="text"
             placeholder="First Name" 
             value={this.state.first_name}
             onChange={this.handleChange} />
      

      <input name="last_name"
             type="text"
             placeholder="Last Name"
             value={this.state.last_name}
             onChange={this.handleChange}  />
      

      <input name="company"
             type="text"
             placeholder="Company" 
             value={this.state.company}
             onChange={this.handleChange} />
      

      <input name="address"
             type="text"
             placeholder="Address" 
             value={this.state.address}
             onChange={this.handleChange} />
      

      <input name="city"
             type="text"
             placeholder="City" 
             value={this.state.city}
             onChange={this.handleChange} />
      

      <input name="state"
             type="text"
             placeholder="State" 
             value={this.state.state}
             onChange={this.handleChange} />
      

      <input name="zipcode"
             type="text"
             placeholder="Zipcode" 
             value={this.state.zipcode}
             onChange={this.handleChange} />
      

      <input name="email"
             type="text"
             placeholder="Email" 
             value={this.state.email}
             onChange={this.handleChange} />
             
      

      <input name="phone"
             type="text"
             placeholder="Phone" 
             value={this.state.phone}
             onChange={this.handleChange} />
      

      <input name="project_id"
             type="text"
             placeholder="Project ID" 
             value={this.state.project_id}
             onChange={this.handleChange} />
      
      <button>Update Client </button>
    </form>
    )
  }
}
export default EditClientForm;