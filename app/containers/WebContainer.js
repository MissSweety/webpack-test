import React from 'react';

class WebContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <section >
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

export default WebContainer;