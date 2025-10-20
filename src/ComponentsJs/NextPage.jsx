import React from 'react';
import '../ComponentsCss/NextPage.css';
import { useNavigate } from 'react-router-dom';

function NextPage() {
    const navigate = useNavigate(); 

    const goToNextPage = () => {
      navigate('/DragQuestion');
    };

    const goToBackPage = () => {
      navigate('/');
    };
      return (
        <div id='NextPage'>
            <h1 id='title-next-page'>עמוד הבא!</h1>
            <button id='next-btn' onClick={goToNextPage}>עמוד הבא </button>
            <button id='back-btn' onClick={goToBackPage}>עמוד קודם</button>
        </div>
      )
}

export default NextPage;
