import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Complaint.css';

class Complaint extends Component {
  
  constructor(props)
  {
      super(props)
      this.state = {
        token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk",
          // customer_id: "",
          companylistdata : [],
          sitelistdata : [],
         };

  }
  componentWillUpdate(nextProps, nextState) {
		localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk')
	}
  componentWillMount ()
  {
    this.handleClick();
  //   this.supervisorclick();
  }
  // componentDidMount()
  // {
  //   this.sitechange();
  // }
  // sitechange() {
  //   fetch('list/siteoncompany')
  //   .then((res) => {
  //     res.json().then((resp) => { 
  //       console.log(resp.sitedata)
  //       this.setState({ sitelistdata:resp.sitedata})
  //       // this.parseJSON(this.state)
  //     })
  //   }
  // )
  // }
  
  siteclick = e =>  
  {
    e.preventDefault();
    console.log('hi');
    // console.log(this.state.customer_id);
    // this.setState ({
      
    //     customer_id: e.target.value
   
    // //  customer_id : ""
    // })
    console.log('hi');
    console.log(this.state.customer_id);
    // console.log(this.state.value);
    const sitemeet = this.state.customer_id;
     fetch('list/siteoncompany?company_id='+sitemeet,{
      method : 'GET',
      headers : {
        'Authorization': 'Bearer ' + this.state.token,
        "Content-Type" : "application/json"
    }
    })
    .then((res) => {
      res.json().then((resp) => { 
        console.log(resp.sitedata)
        this.setState({ sitelistdata:resp.sitedata})
        // this.parseJSON(this.state)
      })
    }
  )

  }

 
  handleClick () {
    fetch('list/companylist',{
      method : 'GET',
      headers : {
        'Authorization': 'Bearer ' + this.state.token,
        "Content-Type" : "application/json"
    }
    })
      .then((res) => {
        res.json().then((resp) => { 
          console.log(resp.companydata)
          this.setState({ companylistdata:resp.companydata})
          // this.parseJSON(this.state)
        })
      }
    )
    }
  
    change  = e => {
      this.setState ({
        [e.target.name]: e.target.value
      });
    };
    getWebsite = () =>
    {
        fetch('/').then(console.log(this.state));
    }
//     datepicker = () => {$("#from-datepicker").datepicker({ 
//       format: 'yyyy-mm-dd'
//   });
// }
    onSubmit = e =>
    {
        e.preventDefault();
        console.log(this.state);
        this.setState ({
          site_id :"",
          description: ""
        })
        fetch('complaint/add',{

          method : "POST",
          headers : {
            'Authorization': 'Bearer ' + this.state.token,
              "Content-Type" : "application/json"
          },
          body: JSON.stringify(this.state)
        })
         //   .then(console.log(this.state));
      .then(function(response){ 
          return response.json();})
      .then(function(json){
           if(json.success===true){
          //   console.log(json);
          alert("your data has been submitted");
      }
      else{
        console.log(json);
    }
  })
    };

render() {
  return (
      <div className="skin-blue fixed-layout">
      <div className="page-wrapper">

           <div className="container-fluid">
             
             <div className="row page-titles">
                 <div className="col-md-5 align-self-center">
                     {/* <h4 className="text-themecolor">Forms</h4> */}
                     <nav aria-label="breadcrumb">
                          <ol class="breadcrumb">
                              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                              <li className="breadcrumb-item active" aria-current="page">Add Complaint</li>
                          </ol>
                          </nav>
                 </div>
                
             </div>


          </div>

  {/*Form content begin */}
 
<div className = "product-form-upper">
  <div className = "container">
  <div className = "below-custom-form">
      <div className = "row">
         <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
                 <h3>Add Complaint</h3>
         </div>
      </div>
      <form className="custom-content-form" autoComplete = 'no'>
<div class="form-row">
<div class="form-group col-md-6">
  <label for="inputCategory">Enter company list</label>
  <select className="form-control" name="customer_id" value={this.state.customer_id}  onClick={e => this.siteclick(e)} onChange={(e) => this.setState({customer_id: e.target.value})} >
  <option>Choose ....</option>
  {
            this.state.companylistdata ?
            this.state.companylistdata.map(function(item, id) {
              return(
                  
      <option key ={id} value={item.customer_id}>{item.company}</option>
    )
            }
    )
            :
            <span>Data is loading....</span>
          }

  </select>
  </div>

   <div class="form-group col-md-6">
   <label for="inputCategory">Enter site list</label>
  <select className="form-control" name="site_id" value={this.state.site_id} onChange={e => this.change(e)}>
          <option>chose....</option>
  {
            this.state.sitelistdata ?
            this.state.sitelistdata.map(function(item, id) {
              return(
                  
      <option key ={id} value={item.site_id}>{item.location}</option>
    )
            }
    )
            :
            <span>Data is loading....</span>
          }

  </select>
  </div>

   <div class="form-group col-md-12">
   <label for="inputCategory">Enter Description</label>
 <textarea className="form-control" rows="10" name="description" placeholder="Equipment is malfunctioning" value={this.state.description} onChange={e => this.change(e)}></textarea>
  </div>
</div>

<button class="btn btn-primary" onClick = {e => this.onSubmit(e)}>Submit</button>
</form>
  </div>
  </div>
</div>






      </div>
      </div>

  )
}
}

export default Complaint;