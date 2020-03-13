import React from "react";

export default class Service extends React.Component{
    constructor(){
        super();
        this.serviceService=undefined;
    }

    static getInstance(){
        if(this.serviceService === undefined){
            this.serviceService=new Service();
        }
        return this.serviceService;
    }

    getHeaderOfTable(obj,list){
        let header=list.map((key,index)=>{
            return (
                    <th key={key._id} onClick={()=>obj.navigate(key._id)}>{key.name}</th>
            )
        });
        return (
            <tr key="{1}">
                {header}
            </tr>
        );
    }

    getBodyOfTable(obj,list){
        return list.map((key,index)=>{
            return (
                    <tr key={key._id}>
                        <th scope="col" value={key._id} onClick={()=>obj.navigate(key._id)}>{key.game}</th>
                        <th scope="col" value={key._id} onClick={()=>obj.navigate(key._id)}>{key.userName}</th>
                        <th scope="col" value={key._id} onClick={()=>obj.navigate(key._id)}>{key.discription}</th>
                    </tr>
                )
        });
    }

    getTable(list){
        return (
            <div>
                <table className="table">
                    <tbody>{list}</tbody>
                </table>
            </div>
        );
    }

    getData(){
        return [
            {
                _id : 1,
                name : "Name"
            },
            {
                _id : 2,
                name : "Email"
            },
            {
                _id : 3,
                name : "Address"
            }
        ];
    }
}