import React from 'react';

class WebContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h2 className="jumbotron-heading">web container</h2>
          <p className="bg-info">
          ttttttttt
          <br />
          omg
          </p>
					<div className="input-group">
					  <span className="input-group-addon" id="basic-addon1">@</span>
					  <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
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
export default WebContainer;