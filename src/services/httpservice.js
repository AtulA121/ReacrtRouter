import React from "react";
import axios from "axios";

export default class HttpService extends React.Component{
    static httpService;
    constructor(){
        super();
        this.httpService=undefined;
    }

    static getInstance(){
        if(this.httpService === undefined){
            this.httpService=new HttpService();
        }
        return this.httpService;
    }

    async httpGetRequest(url){
         return await axios.get(url);
    }

    async httpPostRequest(url,obj){
        return await axios.post(url,obj);
   }

}