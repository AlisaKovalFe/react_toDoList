import '../../styles/App.css';
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import { globalContext as GlobalContext } from './context/globalContext'
import React, { useReducer } from "react"
import { reducer } from '../../reducers/reducer' 


function App() {

  const initialState = {
    list: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  // const [text, setText] = useState('')
  // const [list, setList] = useState([])
    
    
    // const handlerChange = (event) => {

    //     let newList = list.map((el, index) => {
    //     if (el.id.toString() === event.target.value) {
            
    //         el.status === false ? el.status = true : el.status = false    
            
    //         if (el.status === true) {
    //             let storeCopy = [...store]
    //             storeCopy.splice(index, 1)
    //             localStorage.setItem('task', JSON.stringify(storeCopy))
    //         } else {
    //             localStorage.setItem('task', JSON.stringify(store))
    //         }
            
    //     }
    //     return el
    //     })

    //     setList(newList)  
    // }

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
