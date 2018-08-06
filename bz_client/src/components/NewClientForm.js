import React from 'react';
import {Input} from 'reactstrap';

const NewClientForm = ({ onNewClient = f => f}) => {
  let first_name, last_name, company, address, city, state, zipcode, email, phone, project_id
  const submit = e => {
    e.preventDefault()
    onNewClient(first_name.value, last_name.value,  company.value, address.value, city.value, state.value, zipcode.value, email.value, phone.value, project_id.value)  
    first_name.value = ''
    last_name.value = ''
    company.value = ''
    address.value = ''
    city.value = ''
    state.value = ''
    zipcode.value = ''
    email.value = ''
    phone.value = ''
    project_id.value = ''
    first_name.focus ()
  }

  return (
    <form onSubmit={submit}>
      <input ref={input => first_name = input}
             type="text"
             placeholder="First Name" required />
      

      <input ref={input => last_name = input}
             type="text"
             placeholder="Last Name" required />
      

      <input ref={input => company = input}
             type="text"
             placeholder="Company" required />
      

      <input ref={input => address = input}
             type="text"
             placeholder="Address" required />
      

      <input ref={input => city = input}
             type="text"
             placeholder="City" required />
      

      <input ref={input => state = input}
             type="text"
             placeholder="State" required />
      

      <input ref={input => zipcode = input}
             type="text"
             placeholder="Zipcode" required />
      

      <input ref={input => email = input}
             type="text"
             placeholder="Email" required />
      

      <input ref={input => phone = input}
             type="text"
             placeholder="Phone" required />
      

      <input ref={input => project_id = input}
             type="text"
             placeholder="Project ID" required />
      
      <button>Add Client </button>
    </form>
  )
}
export default NewClientForm;