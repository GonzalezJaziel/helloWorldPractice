import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import DiscFullIcon from '@mui/icons-material/DiscFull';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        </p>
        Jaziel G
        <img src={logo} className="App-logo" alt="logo" />
        {/* icons */}
        <DiscFullIcon fontSize='large' />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          More boring stuff
        </a>
        <Button color="error" key="one"
        className="App-link"
        href="https://outlook.office.com/mail/inbox/id/AAQkADc0NTcwMGI3LWY1ODktNGMwMi05NDdmLTg1MzFkYzE4MWJlMgAQANEVBFvWOMxGo0Iq4AicZk4%3D"
        target="_blank"
        >Outlook</Button>

        <Button color="success" key="two"
        className="App-link"
        href="https://www.office.com/launch/word?auth=2"
        target="_blank">Word</Button>

        <Button color="primary" key="three"
        className="App-link"
        href="https://us02web.zoom.us/j/87089831972"
        target="_blank"
        >Zoom</Button>

        <Button color="secondary" variant="contained"
        className="App-link"
        href="https://www.youtube.com/watch?v=1at8XzyeEVA"
        target="_blank"
        >Help from the video</Button>
        
        <Button variant="contained"
         className="App-link"
         href="https://www.google.com/"
         target="_blank"
         >Go to google</Button>
      </header>
    </div>
  );
}

export default App;
