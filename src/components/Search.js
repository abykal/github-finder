import React, { useState } from 'react';

const Search = ({ showClear, clearUsers, searchUsers, setAlert }) => {
  const [text, setText] = useState('');


  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-row w-full p-3 text-lg">
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
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

export default Search;