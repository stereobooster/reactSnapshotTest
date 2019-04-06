
import React, { Component } from 'react';



class Users extends Component {

    state = {
        data: null
    }
  
    
    componentDidMount() {
  
        // fetch("/api/users")

        // .then(response => {
        //     return response.json()
        // })
        
        // .then((data) => {
        //     console.log(data)
        //     this.setState({data: data})
        // });

        setTimeout(() => {
            console.log("aaaa")
            this.setState(
                {
                    data: [
                       2, 3, 4, 2, 3, 4,2, 3, 4,2, 3, 4,2, 3, 4,2, 3, 4,2, 3, 4,2, 3, 4,2, 3, 4,2, 3, 4,2, 3, 4,2, 3, 4,2, 3, 4
                    ]
                })
        }, 1000);
        
    }
   
  
   render() {

        const dataParas = this.state.data ? this.state.data.map(function (ele) {
            return <p>{ele}</p>
        }) : null;
        
        return (
            <div>
                <p>Users page !!!</p>
                {dataParas}
            </div>
        )
   }
    
}

export default Users;
