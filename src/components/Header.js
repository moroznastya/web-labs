import { Link} from 'react-router-dom';


function Header(props){

    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
            <Link to="/">          
              <img width={40} height={40} src="/img/logo.png" />
              <div>
              <h3 className = "text-uppercase">React Sneakers</h3>
              <p>Магазин найкращих кросівок!</p>
              </div>
            </Link>

        </div>
        <div className="d-flex flex-wrap">
          <div>
            <Link to="/">
              <h4>Home</h4>
            </Link>
          </div>


        </div>
                  <div>
            <Link to="/sneakers">
              <h4>Catalog</h4>
            </Link>
          </div>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            
            <span>1205 грн. </span>
          </li>
          <li>

            
            </li>
          <li className="mr-20 cu-p">
            <Link to="/favorites">
              <img width={20} height={20} src="/img/heart.svg" alt="Вибране" />
            </Link>
          
          </li>
          <li>
          <img width={20} height={20} src="/img/user.svg" />
          </li>
        </ul>
      </header>
    );
}

export default Header;