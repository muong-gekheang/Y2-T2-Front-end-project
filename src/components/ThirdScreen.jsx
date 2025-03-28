import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import beepSound from '../assets/beeping_sound.mp3';
function ThirdScreen(){
    const navigate = useNavigate();

    useEffect(() => {
        const audio = new Audio(beepSound);
        audio.play();

        const audioTimer = setTimeout(() => {
            audio.pause();
            audio.currentTime = 0; // Reset audio to start position
        }, 6000);
        

        return () => {
            clearTimeout(audioTimer); // Cleanup timeout when unmounting
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    

    const handleBackButton = () => {
        navigate('/');
    }
    return(
        <>
            <div className="time-up-container">
                <p className="time-up">TIME'S UP</p>
                <button className="back" onClick={handleBackButton}>BACK</button>
            </div>
        </>
    );

}
export default ThirdScreen;