import React from 'react';
import data from "./services/constants";
import Service from "./services/service";
import HttpService from "./services/httpservice";
import getData from "./services/common";

export default class About extends React.Component {

   constructor(){
      super();
      this.state={
          userName : "a121",
          result : []
      };
      // this.history = withRouter();
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
      console.log("About : ",id);
   }

   render() {
      let list=[];
      let header=this.service.getHeaderOfTable(About,this.service.getData());
      list.push(header);
      list.push(this.service.getBodyOfTable(About,this.state.result));
      return this.service.getTable(list);
   }
}