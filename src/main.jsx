import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorldApp from './HelloWorldApp';
import FirstApp from './FirstApp';

function App(){
    return(
        <>
       <HelloWorldApp/>
       <FirstApp/> 
       </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)