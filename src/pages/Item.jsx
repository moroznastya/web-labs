import React from 'react';
import styles from '../components/Card/Card.module.scss';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';


function Item({id, title, imageUrl, price, onFavorite, onPlus, favorited=false, onSelect}){ 
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded (!isAdded);
  }

  const onClickFavorite = () => {
    onFavorite({title, imageUrl, price});
    setIsFavorite (!isFavorite);
  }




    return (
      <div className="ml-30 mt-30 mr-70 d-flex justify-around">
            <div className = {styles.card}>
        <div className={styles.favorite} onClick={onFavorite}>
          <img onClick={onClickFavorite} src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}/>

          
        </div>          
        <Link to="/edit-item">
            <img onClick={() => onSelect({title, imageUrl, price, id}, id)} width={15} height={15}  src={ '/img/edit.svg'}/>
          </Link>
        <img width={133} height={112} src={imageUrl} alt = "Sneakers" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Ціна:</span>
            <b>{price} грн.</b>
          </div>
          <img onClick={onClickPlus}  src = {isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" className={styles.plus} />
        </div>
      </div>
      <div  className="d-flex flex-column">
        <div >
          <h3>{title}</h3>
          <p>Найкращі кросівки тільки тут, оновлення щотижня</p>
        </div>

        <div className="mb-60">
          <Link to={"/sneakers"}>
            <button>Go back</button>
          </Link>
        </div>
        <div>
          <button >Add to cart</button>
        </div>
      </div>
      </div>

    );
}

export default Item;