import React from "react";
import data from "../services/constants";
import Service from "../services/service";
import HttpService from "../services/httpservice";
import getData from "../services/common";
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
        getData();
        let res=await this.httpService.httpGetRequest(data.url);
        let obj={
            userName : "a121",
            result : res.data.result
        }
        this.setState(obj);
    }

    static navigate(id){
        console.log("Grit : ",id);
    }

    render(){
        let list=[];
        let header=this.service.getHeaderOfTable(Greet,this.service.getData());
        list.push(header);
        list.push(this.service.getBodyOfTable(Greet,this.state.result));
        return this.service.getTable(list);

        // return (
        //     <span onClick={this.shoot}>Hello... {this.state.userName}</span>
        // )
    }
}

// export default Greet;