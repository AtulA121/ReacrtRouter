import React from "react";
import axios from "axios";
import { Redirect } from 'react-router'
// import { useHistory } from "react-router-dom";

export default class Greet extends React.Component{
    // let history;
    constructor(){
        super();
        this.state={
            userName : "a121",
            result : []
        };
        // this.history = withRouter();
        this.shoot();
    }

    shoot(){
        axios.get("http://localhost:3300/getEventData").then(res=>{
            console.log("data is : ",res.data);
            let obj={
                userName : "a121",
                result : res.data.result
            }
            this.setState(obj);

        }).catch(err=>{
            console.log(err);
        });
    }

    navigate(id){
        console.log("asda",id);
        // let history = useHistory();
        // history.push("/home");
        return <Redirect push to="/somewhere/else" />
    }

    render(){
        console.log(this.state.result);
        let list=this.state.result.map((key,index)=>{
            return (
                    <tr key={key._id}>
                        <th scope="col" value={key._id} onClick={()=>this.navigate(key._id)}>{key._id}</th>
                        <th scope="col" value={key._id} onClick={()=>this.navigate(key._id)}>{key.userName}</th>
                    </tr>
                )
        });

        return (
            <div>
                <table className="table">
                    <tbody>{list}</tbody>
                </table>
            </div>
        );

        // return (
        //     <span onClick={this.shoot}>Hello... {this.state.userName}</span>
        // )
    }
}

// export default Greet;