import React from 'react';

const NameComponent = WrappedComponent => {
  class NewComponent extends React.Component {
    render() {
      const { msg } = this.props;
      const newMsg = msg.toUpperCase();
      return <WrappedComponent title="hello" {...this.props} msg={newMsg}/>
    }
  }
  return NewComponent;
};

export default NameComponent;
