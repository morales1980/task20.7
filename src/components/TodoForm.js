import React from 'react';
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(e) {
    e.preventDefault();
    this.setState({value: e.target.value});
  }
  handleOnClick(e) {
    e.preventDefault();
    if(this.state.value !== '') {
      this.props.onAdd(this.state.value);
    }
  }
  render() {

    return (
      <form>
        <input
          type="text"
          placeholder="Enter todo name here"
          onChange={(e) => this.handleOnChange(e)}
        />
        <button onClick={(e) => this.handleOnClick(e)}>add</button>
      </form>
    );
  }
}
export default TodoForm;
