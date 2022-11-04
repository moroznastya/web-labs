import { Link} from 'react-router-dom';

function Footer(){
    return (

        <footer >
                <div className="line">
            <img src="/img/line.svg"/>
        </div>
        <div className="d-flex justify-between  align-center p-40">
            <div className="d-flex align-center">
            <Link to="/">          
              <img width={40} height={40} src="/img/logo.png" />
              <div>
              <h3 className = "text-uppercase">React Sneakers</h3>
              <p>Магазин найкращих кросівок!</p>
              </div>
            </Link>

        </div>
        <ul className="d-flex ">
          <li className='ml-30 mr-30'>
            <img width={60} height={70} src="/img/facebook.png"/>
          </li>
          <li className='ml-30 mr-30'>
            <img width={60} height={70} src="/img/instagram.png"/>
          </li>
          <li className='ml-30 mr-30'>
            <img width={60} height={70} src="/img/telegram.png"/>
          </li>
          
        </ul>
        </div>
            
        
      </footer>
    );
}

export default Footer;