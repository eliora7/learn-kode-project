import React from 'react';
import '../ComponentsCss/LearnAboutNails.css';
import { useNavigate } from 'react-router-dom';

function LearnAboutNails() {
  const navigate = useNavigate(); 

  const goToNextPage = () => {
    navigate('/DrawPage');
  };

  const goToBackPage = () => {
      navigate('/DragQuestion');
  };

  return (
    <div id='LearnAboutNails'>
        <h1 id='title-about'>איך לשייף נכון?</h1>
        <div id='url-about-nails'>
            <div className='url-about-nail'>
                <p>אובל</p>
                <iframe 
                    width="200" 
                    height="100" 
                    src="https://www.youtube.com/embed/FsSw6XzZbt4" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
            <div className='url-about-nail'>
                <p>ריבוע</p>
                <iframe 
                    width="200" 
                    height="100" 
                    src="https://www.youtube.com/embed/vxgE1vNe2NU?si=iZIUZKgh_9XNfEyM" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
            <div className='url-about-nail'>
                <p>מרובע מעוגל</p>
                <iframe 
                    width="200" 
                    height="100" 
                    src="https://www.youtube.com/embed/iemNSYpFuC0?si=tQ_FWK6pOdVQhhcY" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
            <div className='url-about-nail'>
                <p>שקד</p>
                <iframe 
                    width="200" 
                    height="100" 
                    src="https://www.youtube.com/embed/l7SanWcnUJU?si=XngnkF_sGMtUgQ3G" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
        <div id='buttons-about-page'>
            <button id='next-btn' onClick={goToNextPage}>עמוד הבא </button>
            <button id='back-btn' onClick={goToBackPage}>עמוד קודם</button>
        </div>
    </div>
  )
}

export default LearnAboutNails;
