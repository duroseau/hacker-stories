import React from 'react';

const storiesReducer = (state, action) => {
  switch (action.type) {
   case 'STORIES_FETCH_INIT': 
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  case 'STORIES_FETCH_SUCCESS':
    return {
      ...state,
      isLoading:false,
      isError: true,
    };
    case 'REMOVE_STORY':
      return {
        ...state,
        data: state.data.filter(
          story => action.payload.objectID !== story.objectID
        ),
      };
      
    
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
  fetch(`{API_ENDPOINT}react`)
  .then(response => response.json())
  .then(result => {
    dispatchStories({
      type: 'STORIES_FETCH_SUCCESS',
      payload: result.hits,
    })
  })
}, [value, key]);
return [value, setValue];
}, [value]);

return [value, setValue]

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';
const App = () => {
  const [stories, dispatchStories] = React.useReducer(
   storiesReducer,
   { data: [], isLoading:false, isError:false }
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
    handleFetchStories();
  }, [handleFetchStories]);
    const handleFetchStories = React.useCallback(() =>{

    }
    )
    if (searchTerm) return;

    dispatchStories({ type: 'STORIES_FETCH_INIT'});

    fetch(url)
    .then(response => response.json())
    // .then(result => {
    //   dispatchStories({
    // }
    // getAsyncStories()
    .then(result => {
      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: result.data.stories,
      });
      // setStories(result.data.stories);
      // setIsLoading(false);
    })
      .catch(() => 
      dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
      );
  }, [url]); 
  // }, [searchTerm]);
  
const [searchTerm, setSearchTerm] = useSemiPersistentState(
  'search',
  'React'
);
const [url, setUrl] = React.useState(
  `${API_ENDPOINT}${searchTerm}`
);
const handleSearchInput = event => { 
  setSearchTerm(event.taget.value);
};
const handleSearchSubmit = () => {
  setUrl(`${API_ENDPOINT}${searchTerm}`);
};
localStorage.setItem('search', event.target.value);
  };

const searchedStories = stories.data.filter(story =>
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
    <button
    type="button"
    disabled={!searchTerm}
    onClick={handleSearchSubmit}
    >
      submit
    </button>
    >

     
>

    <hr />
    {stories.isError && <p>Something went wrong ...</p>}
    {stories.isLoading ? (
      <p>Loading...</p>
    ) : (
    <List list={stories.data} onRemoveItem={handleRemoveStory} />
    )}
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
       onInputChange={handleSearchInput}
       >
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