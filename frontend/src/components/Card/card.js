import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './card.css'
import {addDataCreator} from '../../Redux/Actions/actionCreators'
import {connect} from 'react-redux';  


class SimpleCard extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    // this.props.dispatch({type:ADD_DATA})
   this.props.dispatch(addDataCreator(this.state));    
  }
render(){
 
    
  return (
    <Card className="card" >
      <CardContent>
      <form  onSubmit={this.handleSubmit.bind(this)} > {/* form tag started &  column class for  input groups */}
 
 <div className="name">
<input type="text"
            placeholder="Username"
            value={this.state.email}
            onChange={e=>this.setState({email:e.target.value})}
            name="email"
className="mb-3 mr-3  form-control "
          />
</div>
<div className="password">
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e=>this.setState({password:e.target.value})}
            name="password"
            className="mb-3 mr-3 form-control"
          />
          
          </div>
        
       <center><input type="submit" value="Submit"  className="bg-primary mb-3 mr-3 "/></center>

      </form>
      </CardContent>
     
    </Card>
  );
}

}

export default connect(null)(SimpleCard)

