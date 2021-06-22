import { useState } from 'react';
import React from 'react';
import './customPage.css'

let saveEdit = 0, setEdit = true;
let index = 0, forDelete = 0;
index = localStorage.getItem('maxListKey');
let stopp = true;

function App() {
  let arrTitle = [], arrList = [], arrAbout = [];
  const [text, changeText] = useState('');
  const [value, setValue] = useState('');
  const [list, setList] = useState('');
  const [aboutList, setAboutList] = useState('');
  const setTitle = (event) => {
    setValue(event.target.value);
  }
  const setValueList = (event) => {
    setList(event.target.value);
  }
  const onSetAboutList = (event) => {
    setAboutList(event.target.value);
  }
  const submitList = () => {
    stopp = false;
    changeText('');
    index++;
  }
  const deleteList = (j) => {
    ++forDelete;
    localStorage.removeItem(j);
    localStorage.removeItem(j + 100);
    localStorage.removeItem(j + 200);
    changeText('');
  }
  const closePage = () => {
    changeText('');
  }
  const seeList = () => {
    changeText(
      <div>
      <input className="inputTitleList" onChange={setTitle} placeholder="List title..." />
      <textarea typeof="list" className='listElement' onChange={setValueList} placeholder="Insert your list..." />
      <textarea typeof="list" className='listElement' onChange={onSetAboutList} placeholder="Description list..." />
      <br />
      <button onClick={(i) => submitList(i)}>Submit Liat</button>
      <button onClick={() => closePage()}> Close</button>
      </div>
      ); 
    }
    const showList = (j) => {
      changeText(
        <div>
        <div className='titleListDiv'>{arrTitle[j]}</div>
        <div className='listDiv'>{arrList[j]}</div>
        <div className='listDiv' >{arrAbout[j]}</div>
        <br />
        <button onClick={() => editText(j)}>Edit</button>
        <button onClick={() => deleteList(j)}>Delete </button>
        <button onClick={() => closePage()}> Close</button>
        </div>
        ); 
      }
      const editText = (j) => {
        changeText(
          <div>
          <input className='editTitleList' onChange={setTitle} defaultValue={arrTitle[j]} placeholder="List title..." />
          <textarea typeof="list" className='editList' onChange={setValueList} defaultValue={arrList[j]} placeholder="Insert your list..." />
          <textarea typeof="list" className='editList' onChange={onSetAboutList} defaultValue={arrAbout[j]} placeholder="Description list..." />
          <button onClick={() => saveList(j)}>Salve</button>
          <button onClick={() => closePage()}>Close</button>
          </div>
          );
        }
        const saveList = (j) => {
          saveEdit = j;
          //console.log(j);
          setEdit = false
          changeText(''); 
          
        }
        if(stopp === false ) {
          localStorage.setItem(index, value);
          localStorage.setItem(index + 100, list);
          localStorage.setItem(index + 200, aboutList);
          stopp = true;
        }
        //if(setEdit === false && value !== '') {
          // localStorage.setItem(saveEdit, value);
          //   localStorage.setItem(saveEdit + 100, list);
          //   localStorage.setItem(saveEdit + 200, aboutList);
          // setEdit = true;
          //  / }
          for(let i = 0; i < 100; ++i) {
            arrTitle[i] = localStorage.getItem(i);
            arrList[i] = localStorage.getItem(i + 100);
            arrAbout[i] = localStorage.getItem(i + 200); 
            // console.log(localStorage.getItem(i));
          }
        
          
          localStorage.setItem('maxListKey', index);
          //console.log(localStorage.getItem('deleteList'));
          //localStorage.clear();
          return (
            <center>
        <div id="pageBorder">
          <div className="newList" style={{color:"green"}}></div>
          <div className="titleListBox">
          <div className="listsPart">
           <center>
              <h2>Your list is here!</h2>
            <ul className='menuList'>
              {arrTitle.map((i, j) => {
                return <div className = "listName" value={j} key={j} onClick={() => showList(j)}>{i}</div>;
              })}
            </ul>
            </center>
          </div>
            <button className='addNewList' onClick ={() => seeList()}>Add List</button>
          </div>
            {text}
        </div>
      </center>
     );
  }
export default App;