import React from "react";
export const randomPosition = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        position: {
          top: `${Math.floor(Math.random() * 100)}vh`,
          left: `${Math.floor(Math.random() * 100)}vw`
        }
      };
    }
    render() {
      return <Component style={this.state.position} />;
    }
  };
};
