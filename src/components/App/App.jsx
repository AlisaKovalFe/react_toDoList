import '../../styles/App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { globalContext as GlobalContext } from '../../context/globalContext';
import { useReducer, useEffect } from 'react';
import { reducer } from '../../components/reducers/reducer'
import useLocalStorage from '../../hooks/useLS'

import { initializer } from '../../hooks/useLS'

function App() {

  const initialState = []


  // const [state, dispatch] = useReducer(reducer, initialState)


  // const [state, dispatch] = useReducer(reducer, [], initializer)

  // useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(state));
  // }, [state]);

  // function init(initialState) {
  //   return JSON.parse(localStorage.getItem('tasks')) || initialState
  // }

  const [state, dispatch] = useReducer(reducer, initializer(initialState, 'tasks')
);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state));
  }, [state]);

  
  return (
    <div className="wrap">
      <GlobalContext.Provider value={{state, dispatch}}>
        <Header />
        <Main />
        <Footer />
      </GlobalContext.Provider>
    </div>

  );
}

export default App;
