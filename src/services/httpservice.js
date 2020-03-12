import React from "react";
import axios from "axios";

export default class HttpService extends React.Component{
    static httpService;
    constructor(){
        super();
        this.httpService=undefined;
    }

    async httpGetRequest(url){
         return await axios.get(url);
    }

    static getInstance(){
        if(this.httpService === undefined){
            this.httpService=new HttpService();
        }
        return this.httpService;
    }

}