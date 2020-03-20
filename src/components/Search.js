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
        <form onSubmit={this.onSubmit} className="flex flex-row w-full p-3 text-lg">
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
            className="bg-white text-indigo-400 focus:outline-none focus:shadow-outline border border-indigo-200 rounded-lg py-2 px-4 mb-3 mr-3 block w-full appearance-none leading-normal"
          />
          <input
            type='submit'
            value='Search'
            className="w-full bg-indigo-200 text-indigo-800 text-2xl font-semibold p-2 mb-3 mr-3 cursor-pointer rounded-lg trans-animation"
          />
          {showClear && (
            <button className="w-full bg-indigo-200 text-indigo-800 text-2xl font-semibold p-2 mb-3 cursor-pointer rounded-lg trans-animation" onClick={clearUsers}>
              Clear
            </button>
          )}
        </form>
        
      </div>
    );
  }
}

export default Search;