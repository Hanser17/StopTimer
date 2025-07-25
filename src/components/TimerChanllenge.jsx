import { useState, useRef } from "react";
import ResultModal from './ResultModal'

export default function TimerChanllenge({title, targettime }) {

    const timer = useRef();
    const dialog = useRef();
    const [timeRemaing, setTimeRemaing] = useState(targettime * 1000);
    const timeIsAvtive = timeRemaing > 0 && timeRemaing < targettime*1000

    if(timeRemaing <= 0){
        clearInterval(timer.current);
        dialog.current.showModal();
    }
    function handleStart(){
       timer.current = setInterval(() => {
           setTimeRemaing (prevTimeRemanig => prevTimeRemanig -10 )
        }, 10);
    }
    function handleReset(){
        setTimeRemaing(targettime * 1000);
    }

    function handleStop(){
        clearInterval(timer.current);
        dialog.current.showModal();

    }

  return (
    <>
    <ResultModal  ref={dialog} targetTimer={targettime} remeningtime={timeRemaing} onreset={handleReset}/>
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">{targettime} second{targettime > 1 ? 's' : ''}</p>
      <p>
        <button onClick={timeIsAvtive? handleStop : handleStart}>
            {timeIsAvtive ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timeIsAvtive ? 'active': undefined}>
        {timeIsAvtive ? 'Time running': 'Time stop'}
      </p>
    </section>
    </>
  );
}