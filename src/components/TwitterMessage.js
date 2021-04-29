import React from "react";

class TwitterMessage extends React.Component {
    
  
  state = {
      value: ""
    };



handleMessage = event => {
  this.setState({
    value: event.target.value
  })
}


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        {/* <input type="text" name="message" id="message" /> */}
        <input type="text" onChange={event => this.handleMessage(event)} value={this.state.maxChars} />
       <p>You have {this.props.maxChars - this.state.value.length} characters remaining. </p>
      </div>
    );
  }
}

export default TwitterMessage;
