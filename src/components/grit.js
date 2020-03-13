import React from "react";
import data from "../services/constants";
import Service from "../services/service";
import HttpService from "../services/httpservice";
import getData from "../services/common";

export default class Greet extends React.Component{
    // let history;
    constructor(){
        super();
        this.state={
            userName : "a121",
            result : []
        };
        this.service=Service.getInstance();
        this.httpService=HttpService.getInstance();
    }

    componentDidMount(){
        this.shoot();
    }

    async shoot(){
        getData();
        let res=await this.httpService.httpGetRequest(data.url);
        this.setState({result : res.data.result});
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
    }
}