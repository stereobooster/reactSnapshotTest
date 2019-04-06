
import React, { Component } from 'react';



class Users extends Component {

    state = {
        data: null
    }
  
    
    componentDidMount() {
  
        fetch("/api/users")

        .then(response => {
            return response.json()
        })
        
        .then((data) => {
            console.log(data)
            this.setState({data: data})
        });
        
    }
   
  
   render() {

        return (
            <div>
                <p>Users page !!!</p>
                {this.state.data}
            </div>
        )
   }
    
}

export default Users;
