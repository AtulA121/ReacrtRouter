import React from 'react';
import data from "./services/constants";
import Service from "./services/service";
import HttpService from "./services/httpservice";
import getData from "./services/common";

class About extends React.Component {

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
      getData();
      let res=await this.httpService.httpGetRequest(data.url);
      let obj={
          userName : "a121",
          result : res.data.result
      }
      this.setState(obj);
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
export default About;