import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function ThirdScreen(){
    const location = useLocation();
    return(
        <>
            <div className="time-up-container">
                <p className="time-up">TIME'S UP</p>
                <button className="back"> BACK</button>
            </div>
        </>
    );

}
export default ThirdScreen;