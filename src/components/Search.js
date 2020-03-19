import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: ''
  };


  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className="block w-full p-3 text-lg border-2">
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className="block w-full bg-red-200 text-red-800 mr-1 px-3 py-5 cursor-pointer trans-animation"
          />
        </form>
        {showClear && (
          <button className="block w-full bg-red-200 text-red-800 mr-1 px-3 py-5 cursor-pointer trans-animation" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;