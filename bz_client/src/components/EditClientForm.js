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
      projects: this.props.client.projects.map((project) =>{
        return project.name
       }) 
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id, first_name, last_name, company, address, city, state, zipcode, email, phone, projects } = this.state;
    this.props.editClient(id, first_name, last_name, company, address, city, state, zipcode, email, phone, projects);
  }

  render(){
    return(
      <tr>
        <td>
      <form onSubmit={this.handleSubmit}>
        <ul>
          <li><input name="first_name"
                type="text"
                placeholder="First Name" 
                value={this.state.first_name}
                onChange={this.handleChange} />
          </li>
            
          <li>
            <input name="last_name"
                  type="text"
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={this.handleChange}  />
          </li>

          <li>
          <input name="company"
                type="text"
                placeholder="Company" 
                value={this.state.company}
                onChange={this.handleChange} />
          </li>

          <li>
            <input name="address"
                  type="text"
                  placeholder="Address" 
                  value={this.state.address}
                  onChange={this.handleChange} />
          </li>

          <li>
            <input name="city"
                  type="text"
                  placeholder="City" 
                  value={this.state.city}
                  onChange={this.handleChange} />
          </li>
          <li>
            <input name="state"
                  type="text"
                  placeholder="State" 
                  value={this.state.state}
                  onChange={this.handleChange} />
          </li>
          
          <li>
            <input name="zipcode"
                  type="text"
                  placeholder="Zipcode" 
                  value={this.state.zipcode}
                  onChange={this.handleChange} />
          </li>

          <li>
            <input name="email"
                  type="text"
                  placeholder="Email" 
                  value={this.state.email}
                  onChange={this.handleChange} />
          </li>

          <li>
            <input name="phone"
                  type="text"
                  placeholder="Phone" 
                  value={this.state.phone}
                  onChange={this.handleChange} />
          </li>

          <li>
            <textarea name="projects"
                  type="text"
                  placeholder="ProjecTs" 
                  value={this.state.projects}
                  onChange={this.handleChange} />
          </li>

          <li>
            <button>Update Client </button>
          </li>
          
        </ul>
      
    </form>
    </td>
    </tr>
    )
  }
}
export default EditClientForm;