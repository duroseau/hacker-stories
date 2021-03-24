import React from 'react';

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title:'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ]

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = event => {
    console.log(event.taget.value)
  };

  const searchedStories = stories.filter(story => {
     story.title
    .toLocaleLowerCase().includes(searchTerm.toLowerCase())
    
  });
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search on Search={handleSearch} />

      <hr />

      <List list={searchedStories} />
    </div>
    
  );
};
  const Search = props => {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const handleChange = event => {
    setSearchTerm(event.target.value);

    props.onSearch(event);
  };
  
  return (
    <div>
      <label htmlFor="search">Search: </label>
     <input id="search" type="text" onChange={props.onSearch} />

    <p>
      Searching for <strong>{searchTerm}</strong>.
    </p>
    </div>
     

    
  );
};
// const list = {stories}
  
const List = props =>
  props.list.map(item => (
    
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    ));
  



 export default App;