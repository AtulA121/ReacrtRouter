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

    getTable(list){
        return (
            <div>
                <table className="table">
                    <tbody>{list}</tbody>
                </table>
            </div>
        );
    }

}