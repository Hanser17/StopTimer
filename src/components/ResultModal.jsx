import { forwardRef } from 'react';
import { createPortal } from 'react-dom';

const ResultModel = forwardRef(function ResultModel({ targetTimer, remeningtime, onreset }, ref) {
  const secondsLeft = (remeningtime / 1000).toFixed(2);
  const userLost = remeningtime <= 0 ;
  const score = Math.round((1 - (remeningtime / (targetTimer * 1000))) * 100);
  return createPortal(
    <dialog ref={ref} className="result-modal">
      {userLost && <h1>You lost</h1>}
      <h2> {secondsLeft > 0 ? `You score: ${score}` : ''}</h2>
      <p>The target time was <strong>{targetTimer} seconds</strong></p>
      <p>You stopped the timer with <strong>{secondsLeft} seconds</strong> left</p>
      <form method="dialog" onSubmit={onreset}>
        <button>Close</button>
      </form>
    </dialog>, 
    document.getElementById('modal')
  );
});

export default ResultModel;
