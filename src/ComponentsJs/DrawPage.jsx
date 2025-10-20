import React, { useRef, useState, useEffect } from 'react';
import '../ComponentsCss/DrawPage.css';
import { useNavigate } from 'react-router-dom';

function DrawPage() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState(null);
  const [color, setColor] = useState('#333');
  const [lineWidth, setLineWidth] = useState(4);
  const [canvasSize, setCanvasSize] = useState({ width: 600, height: 400 });

  // עדכון גודל קאנבאס לפי חלון
  useEffect(() => {
    const updateCanvasSize = () => {
      const width = window.innerWidth * 0.6;   // 60% מרוחב המסך
      const height = window.innerHeight * 0.3; // 40% מגובה המסך
      setCanvasSize({ width, height });
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  // הגדרת Canvas size – רק כשהגודל משתנה
    useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;
    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    setCtx(context);
    }, [canvasSize]);

    // עדכון צבע ועובי קו בלי למחוק את הציור
    useEffect(() => {
    if (ctx) {
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
    }
    }, [ctx, color, lineWidth]);

  const getPointerPosition = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    if (e.touches) {
      return {
        x: (e.touches[0].clientX - rect.left) * (canvasRef.current.width / rect.width),
        y: (e.touches[0].clientY - rect.top) * (canvasRef.current.height / rect.height)
      };
    } else {
      return {
        x: (e.clientX - rect.left) * (canvasRef.current.width / rect.width),
        y: (e.clientY - rect.top) * (canvasRef.current.height / rect.height)
      };
    }
  };

  const startDrawing = (e) => {
    e.preventDefault();
    setIsDrawing(true);
    const pos = getPointerPosition(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const pos = getPointerPosition(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      ctx.closePath();
      setIsDrawing(false);
    }
  };

    const clearCanvas = () => {
    if (!canvasRef.current) return;          // ודא שהקאנבאס קיים
    const context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    };

    const navigate = useNavigate(); 

    const goToNextPage = () => {
      navigate('/DrawPage');
    };

    const goToBackPage = () => {
      navigate('/LearnAboutNails');
    };

  return (
    <div className="DrawPage">
        <h1 id='title-draw'>ציירו ציפורן עם עיצוב מיוחד ואינדיבידואלי:</h1>
        <button id="next-btn" onClick={goToNextPage}>הבא</button>
        <button id='back-btn' onClick={goToBackPage}>עמוד קודם</button>
      <div className="controls">
        <label>
          צבע:
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </label>
        <label>
          עובי קו:
          <input type="range" min="1" max="20" value={lineWidth} onChange={(e) => setLineWidth(e.target.value)} />
        </label>
        <button onClick={clearCanvas}>נקה ציור</button>
      </div>

      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        style={{ width: `${canvasSize.width}px`, height: `${canvasSize.height}px` }} // תואם למיכל
      />
    </div>
  );
}

export default DrawPage;
