
import React, { Component } from 'react';
import User from './User';



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
            console.log(JSON.parse(data))
            this.setState({data: JSON.parse(data).users})
        });

        // setTimeout(() => {
        //     console.log("aaaa")
        //     this.setState(
        //         {
        //             data: [
        //                2, 3, 4, 2, 3, 4,2, 3, 4,2, 3, 4,2, 3, 4,2, 3, 4,2, 3, 4,2, 3, 4,2, 3, 4,2, 3, 4,2, 3, 4,2, 3, 4,2, 3, 4
        //             ]
        //         })
        // }, 1000);
        
    }
   
  
   render() {

    
        console.log("state", this.state)
        const dataParas = this.state.data ? this.state.data.map(function (ele) {
            return (<User name={ele.name}/>)
        }) : null;

        console.log(dataParas)
        console.log(Array.isArray(dataParas))
        
        
        return (
            <div>
                <p>Users page !!!</p>
                {dataParas}
            </div>
        )
   }
    
}

export default Users;
