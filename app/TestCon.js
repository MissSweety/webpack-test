import React from 'react';

class TestCon extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h1 className="jumbotron-heading">another con</h1>
          <div className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span className="sr-only">Error:</span>
            Enter a valid email address
          </div>
        </section>
      </div>
    );
  }
}

// (mapdispatchToProps, 可以是个对象也可以是个函数，个人习惯用对象),
// 把redux的dispatch方法绑定到我们自己写的action上。
// this.props.setKeyword, ==> dispatch(setKeyword);
// 由于用了redux-thunk, 对dispatch进行了封装，如果是函数的话，会有getState， 和dispatch，两个参数。
export default TestCon;