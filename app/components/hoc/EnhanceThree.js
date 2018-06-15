import React from 'react';
import Student from '../Student';

const EnhanceThree = WrappedComponent => {
    const willMount = WrappedComponent.prototype.componentWillMount;
    const didMount = WrappedComponent.prototype.componentDidMount;
  class NewComponent extends WrappedComponent {
    constructor(props) {
        
        super(props);
        console.log('wrappedComponent constructor');
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(...args) {
        console.log('wrappedComponent didMount');
        if (didMount) {
            didMount.apply(this, args);
        }
        
    }
    handleClick() {
        super.focus();
    }
    render() {
      return (
        <div>
            我和上面的不一样
            {super.render()}
        <input
            type="button"
            value="focus子组件input"
            onClick={this.handleClick}
        />
        <input
            type="button"
            value="调用子组件static"
            onClick={WrappedComponent.sayHello}
        />
        </div>
      );
    }
  }
  return NewComponent;
}

export default EnhanceThree(Student);