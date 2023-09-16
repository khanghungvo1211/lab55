import React from 'react';
import MyAvatar from './MyAvatar.jpg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={MyAvatar} alt="My Avatar" width={500} height={500} />
          <p>Xin chao ca nha yeu cua kem</p>
          <a
              className="App-link"
              href="https://www.facebook.com/khangvo1211"
              target="_blank"
              rel="noopener noreferrer"
          >
            My Info
          </a>
          <h2>This is my channel. Let's enjoy it</h2>
          <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/eGGxlyrlLVQ?si=GJ50hjdiCXlFHtBI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
          ></iframe>
        </header>

        {/* Footer */}
        <footer className="App-footer">
          {/* Add your footer content here */}
          <p>Vo Hung Khang_20521440</p>
        </footer>
      </div>
  );
}

export default App;
