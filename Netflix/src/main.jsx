
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'normalize.css'
import {GlobalStyles} from './global-styles.jsx';



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
ReactDOM.createRoot(document.getElementById('root'))
.render(
    <>
    {/* <FirebaseContext.Provider value= {{ firebase }}> */}
    <GlobalStyles/>
    <App/>
    {/* </FirebaseContext.Provider> */}
    </>
)