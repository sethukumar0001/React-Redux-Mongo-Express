import React, {Component} from 'react';
import { connect } from "react-redux";
import store from '../../Redux/store/store'

class Display extends Component{
    constructor(props) {
        super(props);
        this.state = {
             data:[]
        }
    }
    
    render(){
        store.subscribe(() => {
            // When state will be updated(in our case, when items will be fetched), 
            // we will update local component state and force component to rerender 
            // with new data.
      
            this.setState({
              data: [store.getState().addData.data.data]
            });
          });
          console.log(this.state.data)

        return(
           <div>
            <table>
                <th>
                    <td>email</td>
                </th>
                {this.state.data.map((data,i)=>{
                    return <td>{data.email}</td>
               })}
            </table>
           </div>

        );

    }

}
const mapStateToProps = state => ({
    addData:state.data


});

export default connect(mapStateToProps)(Display);