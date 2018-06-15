import React from 'react';
import Student from '../Student';

const EnhanceTwo = WrappedComponent => {
  class NewComponent extends React.Component {
    static wrappedStatic() {
        WrappedComponent.sayHello();
    }
    constructor(props) {
        console.log('wrappedComponent constructor')
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount() {
        console.log('wrappedComponent willMount');
    }
    componentDidMount() {
        console.log('wrappedComponent didMount');
    }
    handleClick() {
        this.inputEle.focus();
    }
    render() {
      return (
        <div>
            我和上面的不一样
            <WrappedComponent
              inputRef={ref => { this.inputEle = ref }}
                {...this.props} />
                 <input
            type="button"
            value="focus子组件input"
            onClick={this.handleClick}
        />
        <input
            type="button"
            value="调用子组件static"
            onClick={this.constructor.wrappedStatic}
        />
        </div>
      );
    }
  }
  return NewComponent;
}

export default EnhanceTwo(Student);