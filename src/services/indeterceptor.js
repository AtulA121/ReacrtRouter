import React from 'react';
import axios from "axios";

export default class Interceptor extends React.Component{

    static intercept(){
        //request interceptor
        axios.interceptors.request.use(request=>{
            //add logic here on the coming request
            console.log("intercept every request : ",request.url);
            return request;
        });
        
    }
}