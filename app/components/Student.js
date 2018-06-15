import React from 'react';

const buttonStyle = {
  background: 'orange',
};
const outerStyle = {
  border: '1px solid #7d7d7d',
  padding: 20,
};
const inputStyle = {
  color: 'pink',
};
class Student extends React.Component {
  static sayHello() {
    window.alert('hello from Student');
  }
  constructor(props) {
    super(props);
    console.log('student constructor');
    this.focus = this.focus.bind(this);
  }
  componentWillMount() {
    console.log('Student componentWillMount'); // eslint-disable-line
    this.setState({
        name: this.props.name,
        age: this.props.age,
    });
  }
  componentDidMount() {
    console.log('Student componentDidMount'); // eslint-disable-line
  }
  componentWillReceiveProps(nextProps) {
    console.log('Student componentWillReceiveProps'); // eslint-disable-line
    console.log(nextProps); // eslint-disable-line
  }
  focus() {
    this.inputElement.focus();
  }
  render() {
    return (
      <div style={outerStyle}>
        <p>姓名：{this.state.name}</p>
        <p>年龄：
          <input
            style={inputStyle}
            value={this.state.age}
            ref={(input) => {
              this.inputElement = input;
              if (this.props.inputRef) {
                this.props.inputRef(input);
              }
            }}
          />
        </p>
        <p>
        <input
                    style={buttonStyle}
                    type="button"
                    value="focus input"
                    onClick={this.focus}
                />
        </p>
      </div>
    );
  }
}

export default Student;
