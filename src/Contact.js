import React from 'react';

class Contact extends React.Component {
    constructor(){
        super();
        this.state={
            userName : "a121"
        };
    }

    render() {
       return (
          <div>
             <h1>Contact...{this.state.userName}</h1>
          </div>
       )
    }
 }
 export default Contact;