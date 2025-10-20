import React from 'react';
import '../ComponentsCss/Intro.css';
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Intro() {
  const navigate = useNavigate(); 

  const goToNextPage = () => {
    navigate('/NextPage');
  };

      return (
        <div id='Intro'>
          <h1 id='title-intro'>כותרת יפה</h1>
          <button id='next-btn' onClick={goToNextPage}>עמוד הבא </button>
        </div>
      )
}

export default Intro;
