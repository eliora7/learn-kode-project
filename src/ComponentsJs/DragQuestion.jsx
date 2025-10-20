import React, { useState } from 'react';
import '../ComponentsCss/DragQuestion.css';
import { useNavigate } from 'react-router-dom';

function DragQuestion() {
    const navigate = useNavigate(); 

    const goToNextPage = () => {
      navigate('/LearnAboutNails');
    };

    const goToBackPage = () => {
      navigate('/NextPage');
    };

  const [draggedName, setDraggedName] = useState(null);
  const [colors, setColors] = useState({
    almond: '',
    oval: '',
    'rounded-square': '',
    square: '',
  });

  const [placedNames, setPlacedNames] = useState({
    almond: '',
    oval: '',
    'rounded-square': '',
    square: '',
  });

  const initialNames = ['ריבוע', 'שקד', 'אובל', 'מרובע מעוגל'];
  const [availableNames, setAvailableNames] = useState(initialNames);

  const handleDragStart = (e, name) => {
    setDraggedName(name);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetId) => {
    e.preventDefault();

    const correctMapping = {
      שקד: 'almond',
      אובל: 'oval',
      'מרובע מעוגל': 'rounded-square',
      ריבוע: 'square',
    };

    const draggedId = correctMapping[draggedName];

    if (draggedId === targetId) {
      setColors((prev) => ({ ...prev, [targetId]: 'green' }));
      setPlacedNames((prev) => ({ ...prev, [targetId]: draggedName }));
      setAvailableNames((prev) => prev.filter((name) => name !== draggedName));
    } else {
      setColors((prev) => ({ ...prev, [targetId]: 'red' }));
      setTimeout(() => {
        setColors((prev) => ({ ...prev, [targetId]: '' }));
      }, 800);
    }

    setDraggedName(null);
  };

  // בדיקה אם כל התשובות נכונות
  const allCorrect = Object.values(placedNames).every((name) => name !== '');

  return (
    <div className="DragQuestion">
      <h1 id='title-drag'>גררו את שם צורת השיוף של הציפורן לתמונה המתאימה</h1>

      <div id='nail-pictures'>
        {[
          { id: 'almond', src: 'almond.png' },
          { id: 'oval', src: 'oval.png' },
          { id: 'rounded-square', src: 'rounded-square.png' },
          { id: 'square', src: 'square.png' }
        ].map((nail) => (
          <div key={nail.id} className="nail-container">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/${nail.src}`} 
              alt={nail.id} 
              className='nail-pic' 
              style={{ borderColor: colors[nail.id] || 'rgb(146, 114, 177)' }}
              onDragOver={handleDragOver} 
              onDrop={(e) => handleDrop(e, nail.id)} 
            />
            {placedNames[nail.id] && <p className="placed-name">{placedNames[nail.id]}</p>}
          </div>
        ))}
      </div>

      <div id='name-of-nails'>
        {availableNames.map((name) => (
          <p 
            key={name}
            className='name-of-nail' 
            draggable 
            onDragStart={(e) => handleDragStart(e, name)}
          >
            {name}
          </p>
        ))}
      </div>

      {allCorrect && (
        <div id="next-button-container">
          <button id="next-button-drag" onClick={goToNextPage}>הבא</button>
          <button id='back-button-drag' onClick={goToBackPage}>עמוד קודם</button>
        </div>
      )}
    </div>
  );
}

export default DragQuestion;
