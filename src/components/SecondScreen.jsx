import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function SecondScreen(){
    const [isPause, setIsPause] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log('Location State:', location.state);
    const { hour, minute, second } = location.state || {hour: 0, minute: 0, second: 0};
    // console.log("hour:", location.state?.hour);
    // console.log("min:", location.state?.minute);
    // console.log("sec:", location.state?.second);
    const [timeLeft, setTimeLeft] = useState(hour * 3600 + minute * 60 + second);
    // console.log(timeLeft);
    useEffect(() => {
        if(timeLeft <= 0){
            navigate('/time-up');
            return;
        }
        
        if (isPause) return;

        const timer = setInterval(() => {
            setTimeLeft ((current) => current - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, isPause]); // if the program cause any error try to add 'navigate' as another dependency

    const displayTime = () => {
        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;
        return `${String(h).padStart(2, "0")} : ${String(m).padStart(2, "0")} : ${String(s).padStart(2, "0")}`;
    };

    const handlePauseButton = () =>{
        setIsPause(true);
    };
    const handleResumeButton = () =>{
        setIsPause(false);
    }

    const handleCancelButton = () =>{
        navigate('/');
    }
    return(
        <>
            <div>
                <div className="timer-container">
                    <h1 className='heading'>counting</h1>
                    <p className="timer-display">{displayTime()}</p>
                    <div className="buttons">
                        <button onClick={handlePauseButton}>PAUSE</button>
                        <button onClick={handleResumeButton}>RESUME</button>
                        <button onClick={handleCancelButton}>CANCEL</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SecondScreen