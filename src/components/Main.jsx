import { useNavigate } from 'react-router-dom';
import './Main.css';

function Main() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <img className="card-img" src="/base/festivalImg.png" onClick={() => { navigate('/festivals') }}/>
        <p>축제 정보</p>
      </div>
      <div className="card">
        <img className="card-img" src="/base/stayImg.png" onClick={() => { navigate('/stays') }}/>
        <p>숙박 정보</p>
      </div>
    </div>
  )
}

export default Main;