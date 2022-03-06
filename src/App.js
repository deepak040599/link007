import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {
  return (
    <div className="App">
      {/* headder */}
      <Header/>

      {/* app body */}
      <div className="app_body">
           {/* sidebar */}
           <Sidebar/>
            {/* feed */}
            <Feed/>
            {/* widgets */}
            <Widgets/>
      </div>
           
    </div>
  );
}

export default App;
