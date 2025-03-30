import{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FirstScreen(){
    const navigate = useNavigate();

    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [second, setSecond] = useState('');
    const [error, setError] = useState('');


    const handleHourChange = (e) => {
        const value = e.target.value;
        if (value >= 0 && value <= 23) {
            setHour(parseInt(value,10));

        } else if (value === '') {
            setHour(0); 
        }
        // else {
        //     setError('Hour must be between 0 and 23');
        // }
    };

    const handleMinChange = (e) => {
        const value = e.target.value;
        if(value >= 0 && value <= 59){
            setMinute(parseInt(value,10));
        }
        else if( value === ''){
            setMinute(0);
        }
        // else {
        //     setError('Minute must be between 0 and 59');
        // }
    };

    const handleSecondChange = (e) => {
        const value = e.target.value;
        if (value >= 0 && value <= 59) {
            setSecond(parseInt(value,10));
        } 
        else if (value === '') {
            setSecond(0); 
        }
        // else{
        //     setError('Second must be between 0 and 59');
        // }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            handleStartClick();
        }
    }

    const handleStartClick = () => {
        if (hour === 0 && minute === 0 && second === 0) {
            setError("your timer are all 0 which is cannot countdown");
        }
        else{
            console.log({hour: hour, min: minute, second: second});
            setError('');
            navigate('/countdown', { state: { hour, minute, second } });
        }
    };

    return(
        <>
            <h1> COUNTDOWN TIMER</h1>
            <div className="form-container">

                <div className="input-zone">
                    <label id = "hour">Hour</label><br></br>
                    <input type="number" className="input-box" onChange={handleHourChange} value={hour} 
                    onKeyDown={handleKeyDown}
                    placeholder='Please enter number that in the range of 0 - 23'/>
                    <br></br>
                </div>

                <div className="input-zone">
                    <label id = "min">Minute</label><br></br>
                    <input type="number" className="input-box" onChange={handleMinChange} value={minute}
                    onKeyDown={handleKeyDown}
                    placeholder='Please enter number that in the range of 0 - 59'/>
                    <br></br>
                </div>

                <div className="input-zone">
                    <label id="sec">Second</label><br></br>
                    <input type="number" className="input-box" onChange={handleSecondChange} value={second}
                    onKeyDown={handleKeyDown}
                    placeholder='Please enter number that in the range of 0 - 59'/>
                    <br></br>
                </div>
                
                <button id="start-button" onClick={handleStartClick} 
                disabled = {hour === 0 && minute === 0 && second === 0 ||
                    hour === '' && minute === '' && second === '' ||
                    hour === '' && minute === '' && second === 0 ||
                    hour === '' && minute === 0 && second === '' ||
                    hour === 0 && minute === 0 && second === '' 
                } >START</button>
            </div>
        </>
    );

}

export default FirstScreen