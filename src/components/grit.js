import React from "react";
import data from "../services/constants";
import Service from "../services/service";
import HttpService from "../services/httpservice";
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
        this.service=Service.getInstance();
        this.httpService=HttpService.getInstance();
        this.shoot();
    }

    async shoot(){
        // axios.get(data.url).then(res=>{
        //     console.log("data is : ",res.data);
        //     let obj={
        //         userName : "a121",
        //         result : res.data.result
        //     }
        //     this.setState(obj);
        // }).catch(err=>{
        //     console.log(err);
        // });

        let res=await this.httpService.httpGetRequest(data.url);
        let obj={
            userName : "a121",
            result : res.data.result
        }
        this.setState(obj);
    }

    navigate(id){
        // let history = useHistory();
        // history.push("/home");
        return <Redirect push to="/somewhere/else" />
    }

    render(){
        let list=this.state.result.map((key,index)=>{
            return (
                    <tr key={key._id}>
                        <th scope="col" value={key._id} onClick={()=>this.navigate(key._id)}>{key.game}</th>
                        <th scope="col" value={key._id} onClick={()=>this.navigate(key._id)}>{key.userName}</th>
                    </tr>
                )
        });

        return this.service.getTable(list);

        // return (
        //     <span onClick={this.shoot}>Hello... {this.state.userName}</span>
        // )
    }
}

// export default Greet;