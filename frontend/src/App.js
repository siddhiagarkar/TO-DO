import React from 'react';
import './App.css';

class App extends React.Component {
  render()
  {
    return(
      <body>
      <div class = "container">
        <div class="form-wrapper">
          <input type="text" placeholder='Add task...' id='inputfield'></input>
          <input type="submit" value="ADD" id='button'></input>
        </div>        
        <div class="list-wrapper">
          list-display-1<br></br>
          list-display-2<br></br>
          list-display-3<br></br>
          list-display-4
        </div>        
      </div>
      </body>
    )
  }
}

export default App;
