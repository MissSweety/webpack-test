import React from 'react';
import SimpleTitle from '../components/SimpleTitle';
import nameComponent from '../components/hoc/NameComponent';
import WrappedStudent from '../components/hoc/EnhanceStudent';
import EnhanceTwo from '../components/hoc/EnhancerTwo';
import EnhanceThree from '../components/hoc/EnhanceThree';

const Wrapped = nameComponent(SimpleTitle);

class HocContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>high order component</h2>
        <Wrapped msg="can i display in the screen?" />
        <WrappedStudent name={'zcx'}  />
        <EnhanceTwo />
        <EnhanceThree />
      </div>
    );
  }
}

export default HocContainer;