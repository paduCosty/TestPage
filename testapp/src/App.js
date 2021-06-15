import { useState } from 'react';
import './customPage.css'

function App() {
  const [text, changeText] = useState('Lista1');
  const [nameList, setName] = useState('Add a list');
  const seeList = () => {
    changeText(
      <div>
      <input className="inputTitleList" placeholder="List title..." />
      <textarea typeof="list" className='listElement' placeholder="Insert your list..." />
      <textarea typeof="list" className='listElement' placeholder="Description list..." />
      <br />
      <button className="submitButton">Submit Liat</button>
      </div>
      );
    }
    
  return (
    <center>
        <div id="pageBorder">
          <h1 style={{color: "red"}}>Vezi listele deja existente!</h1>
          <div className="newList" style={{color:"green"}}></div>
          <div className="titleListBox">
            <div className='addNewList' onClick ={() => seeList()}>{nameList}</div>
            {text}
          </div>
        </div>
      </center>
     );
  }
     
export default App;
