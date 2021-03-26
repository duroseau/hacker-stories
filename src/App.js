import React from 'react';

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
  localStorage.getItem('key') || initialState
   );
React.useEffect(() => {
  localStorage.setItem('key', value);
}, [value, key]);
return [value, setValue];
}, [value]);

return [value, setValue]

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
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ]
const [searchTerm, setSearchTerm] = useSemiPersistentState(
  'search',
  'React'

const handleSearch = event => { 
  setSearchTerm(event.taget.value);
};
localStorage.setItem('search', event.target.value);
  };

const searchedStories = stories.filter(story =>
  story.title.toLocaleLowerCase().includes(searchTerm.toLowerCase())

  );
   return (
  <div>
    <h1>My Hacker Stories</h1>

    <Search search={searchTerm} on Search={handleSearch} />

    <hr />

    <List list={searchedStories} />
  </div>

 );

const Search = props => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { search, onSearch } = props;

  const handleChange = event => {
    setSearchTerm(event.target.value);

    props.onSearch(event);
  };


  return (
    const Search = ({ search, onSearch }) => (
      <div>
        <label htmlFor="search">Search: </label>
        <input id="search"
          type="text"
          value={search}
          onChange={onSearch} 
          />

      </div>

    );
    
  );
};
const list = {stories}

const List = ({ list }) =>
  list.map(item =>
    <Item
      key={item.objectID}
      title={item.title}
      url={item.url}
      author={item.author}
      num_comments={item.num_comments}
      points={item.points}
    />);

const Item = ({ title, url, author, num_comments, points }) => (
  <div 
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </div >
)
    ));




export default App;