import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import AddForms from './components/Forms/AddForms';
import Signin from './components/Login/AddLogin';
import Register from './components/Login/Register';
import Navigation from './components/Navigation';
import Admin from './components/Admin/Admin';
import ViewAdmin from './components/Admin/ViewAdmin';
import EditAdmin from './components/Admin/EditAdmin';
import Profile from './components/Profile/Profile';
import ViewProfile from './components/Profile/ViewProfile';
import { Route, Redirect } from 'react-router-dom';
import AddCategory from './components/Category/AddCategory';
import ViewCategory from './components/Category/ViewCategory';
import AddPublication from './components/Publication/AddPublication';
import ViewPublication from './components/Publication/ViewPublication';
import AddBooks from './components/Books/AddBooks';
import ViewBooks from './components/Books/ViewBooks';
import AddLogs from './components/Logs/AddLogs';
import ViewLogs from './components/Logs/ViewLogs';
import { AddEquipment } from './components/Equipments/AddEquipment';
import { ViewEquipment } from './components/Equipments/ViewEquipment';
import { Manufacturer } from './components/Manufacturer/Manufacturer';
import { ViewManufacturer } from './components/Manufacturer/ViewManufacturer';
import { AddCompany } from './components/Company/AddCompany';
import { ViewCompany } from './components/Company/ViewCompany';


class App extends Component {
  //   constructor() {
  //   super();
  //   this.state = {
  //     route: 'signin',
  //     isSignedIn: false,
  //   }
  
  // }


  // onRouteChange = (route) => {
  //   if (route === 'signout') {
  //     this.setState({isSignedIn: false})
  //   } else if (route === 'home') {
  //     this.setState({isSignedIn: true})
  //   }
  //   this.setState({route: route});
  // }
  


  
  
  render() {
    // const { isSignedIn, route } = this.state;
    
    return (
        <div>
          
        {/* <Header isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
        ?
        <div> */}
        <Header />
        <Sidebar />
        <Route path = "/" exact component = {Home} />
        <Route path = "/AddPublication" exact = {true} component = {AddPublication} />
        <Route path = "/ViewPublication" exact = {true} component = {ViewPublication} />
        <Route path = "/AddBooks" exact = {true} component = {AddBooks} />
        <Route path = "/ViewBooks" exact = {true} component = {ViewBooks} />
        <Route path = "/AddLogs" exact = {true} component = {AddLogs} />
        <Route path = "/ViewLogs" exact = {true} component = {ViewLogs} />
        <Route path = "/AddForms" exact = {true} component = {AddForms} />
        <Route path = "/Register" exact = {true} component = {Register} /> 
        <Route path = "/Admin" exact = {true} component = {Admin} />
        <Route path = "/ViewAdmin" exact = {true} component = {ViewAdmin} />
        <Route path = "/EditAdmin/edit/:id" exact = {true} component = {EditAdmin} />
        <Route path = "/Profile" exact = {true} component = {Profile} />
        <Route path = "/ViewProfile" exact = {true} component = {ViewProfile}/>
        <Route path = "/AddCategory" exact = {true} component = {AddCategory}/>
        <Route path = "/ViewCategory" exact = {true} component = {ViewCategory}/>
        <Route path = "/AddEquipment" exact = {true} component = {AddEquipment}/>
        <Route path = "/ViewEquipment" exact = {true} component = {ViewEquipment}/>
        <Route path = "/Manufacturer" exact = {true} component = {Manufacturer}/>
        <Route path = "/ViewManufacturer" exact = {true} component = {ViewManufacturer}/>
        <Route path = "/AddCompany" exact = {true} component = {AddCompany}/>
        <Route path = "/ViewCompany" exact = {true} component = {ViewCompany}/>

        {/* </div>
        : (
             route === 'signin'
             ? <Signin  onRouteChange={this.onRouteChange}/>
             : <Register onRouteChange={this.onRouteChange}/>
            )
        } */}
        
        <Footer />
          
          </div>
     
    );
  }
}

export default App;
