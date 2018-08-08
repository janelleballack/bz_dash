import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import dashboardRoutes from './routes/dashboard.jsx';


class Dashboard extends React.Component{

  render(){
    return(
      <div className="wrapper">
                <Sidebar {...this.props} routes={dashboardRoutes}/>
      </div>          
    )
  }
}


export default Dashboard;