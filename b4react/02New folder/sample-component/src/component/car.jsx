import React from "react";


class Car extends React.Component {

  constructor(Props) {
    super();
    this.state = {carname: "maruti suzuki"};
  }

  onUpdate(){

    this.setState({
      carname:"Hyundai"
    })
    

}

    render() {
        return <div>
          <button onClick={this.onUpdate.bind(this)}> me for change name</button>

         <h2>Hi, I am a Car! {this.state.carname}  </h2>
         </div>
    }
  }

  export default Car