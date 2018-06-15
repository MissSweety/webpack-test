import React from 'react';
import Student from '../Student';

const EnhanceWrapper = (WrappedComponent) => {
  let inputEle = null;
  function handleClick() {
      inputEle.focus();
  }
  function wrappedComponentStatic() {
    WrappedComponent.sayHello();
  }
  return props => (
    <div>
      <WrappedComponent inputRef={el => { inputEle = el; }}
      {...props}
      />
      <input
            type="button"
            value="focus子组件input"
            onClick={handleClick}
        />
        <input
            type="button"
            value="调用子组件static"
            onClick={wrappedComponentStatic}
        />
    </div>
  );
}

export default EnhanceWrapper(Student);