import React from 'react';
export default class Plist extends React.Component {
  render() {
    const { loading, keyword, list, firstView } = this.props;
    //添加一些if else的判断，用来展示不同的内容
    if (firstView) {
      return (
        <h2>Enter name to search</h2>
      )
    }
    if (loading) {
      return (
        <h2>Loading result...</h2>
      );
    } else {
      if (list.length === 0) {
        return (
          <h2>No result.</h2>
        )
      } else {
        return (
          <div className="row">
            {list.map(people=>{
              return (
                <div className="card col-sm-4" key={people.login}>
                  <img src={people.avatar_url} />
                  <p className="card-text">
                    {people.login}
                    <br />
                    <a href={people['html_url']} target="_blank">github</a>
                  </p>
                </div>
              )
            })}
         </div>
           );
      }
    }
  }
}