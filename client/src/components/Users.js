
import React, { Component } from 'react';
import User from './User';
import axios from 'axios';



class Users extends Component {

    state = {
        data: null
    }
  
    
    componentDidMount() {
  

        // Fetch attempt



            // fetch("/api/users")

            // .then(response => {
            //     return response.json()
            // })
            
            // .then((data) => {
            //     // console.log(data)
            //     this.setState({data: data.users})
            // })

            // .catch((err)=> {
            //     console.log(err)
            // })


        // Axios attempt


            axios("/api/users")

            .then((res) => {
                const data = res.data
                // console.log(data)
                this.setState({data: data.users})
            })

            .catch((err)=> {
                console.log(err)
            })


        // SetTimeou attempt



            // setTimeout(() => {
            //     console.log("aaaa")
            //     this.setState(
            //         {
            //             data: [
            //                 {name: "ze", age:23},
            //                 {name: "a", age:23},
            //                 {name: "b", age:23},
            //                 {name: "c", age:23},
            //                 {name: "d", age:23},
            //                 {name: "ze", age:23},
            //                 {name: "the end", age:23}
            //             ]
            //         })
            // }, 1000);
        



    }
   
  
   render() {

    
        const dataParas = this.state.data ? this.state.data.map(function (ele) {
            return (<User name={ele.name}/>)
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
