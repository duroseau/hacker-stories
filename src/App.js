import React from 'react';

const storiesReducer = (state, action) => {
  switch (action.type) {
   case 'SET_STORIES': 
    return action.payload;
  case 'REMOVE_STORY':
    return state.filter(
      story => action.payload.objectID !== story.objectID
    );
  default:
    throw new Error();
  }
  };

const initialStories = [
  {
  title: 'React',
  ...
  },
  {
    title: 'Redux'
    ...
  },
];

const getAsyncStories = () =>
  new Promise(resolve =>
    setTimeout(
      () => resolve({ data: { stories: initialStories }}),
      2000
    )
    
  );
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
  const [stories, dispatchStories] = React.useReducer(
   storiesReducer,
   []
  );
    const handleRemoveStory = item => {
      dispatchStories({
        type: 'REMOVE_STORY',
        payload: item,
      });
      // const newStories = stories.filter(
      //   story => item.objectID !== story.objectID
      );
      dispatchStories({
        type: 'SET_STORIES',
        payload: newStories,
      });
      // setStories(newStories);
    };
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

  const [stories, setStories] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIaError] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);

    getAsyncStories()
    .then(result => {
      dispatchStories({
        type: 'SET_STORIES',
        payload: result.data.stories,
      });
      setStories(result.data.stories);
      setIsLoading(false);
    })
      .catch(() => SpeechSynthesisErrorEvent(true));
      
  }, []);
  
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

    <InputWithLabel
      id="search"
      label="search"
      value={searchTerm}
      isFocused
      onInputChange={handleSearch}
    >
      <strong>Search:</strong>
    </InputWithLabel>
    id='search'
    value={searchTerm}
    onInputChange={handleSearch}
    >

     <Search:
      </InputWithLabel>

    <hr />
    {isError && <p>Something went wrong ...</p>}
    {isLoading ? (
      <p>Loading...</p>
    )}
    <List list={searchedStories} onRemoveItem={handleRemoveStory} />
  </div>

 );
   };
const Search = props => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { search, onSearch } = props;

  const handleChange = event => {
    setSearchTerm(event.target.value);

    props.onSearch(event);
  };


  return (
    const InputWithLabel = ({
       id,
       value,
       type='text',
       onInputChange ,
       isFocused,
       children,
      }) => (
        const inputRef = React.useRef();

        React.useEffect(() => {
          if (isFocused && inputRef.current) {
            inputRef.current.focus();
          }
        }, [isFocused]);
      <>
        <label htmlFor={id}>{children}: </label>
        &nbsp;
        <input
        ref={inputRef}
        id={id}
          type={type}
          value={search}
          autoFocus={isFocused}
          onChange={onInputChange}
          />

      </>

    );
    
  );
};
const list = {stories}

const List = ({ list, onRemoveItem }) =>
  list.map(item =>
    <Item
      key={item.objectID}
      item={item}
      onRemoveItem={onRemoveItem}
      url={item.url}
      author={item.author}
      num_comments={item.num_comments}
      points={item.points}
    />);

const Item = ({ item, onRemoveItem }) => {
  function handleRemoveItem = () => {
    onRemoveItem(item);
  };
return (
  <div> 
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
    <span>
      <button type="button" onClick={onRemoveItem.bind(null, item)}>
        Dismiss
      </button> 
    </span>
  </div >
);
};




export default App;