import React from 'react';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';
import Item from '../../pages/Item';

function Card({id, title, imageUrl, price, onFavorite, onPlus, favorited=false, onSelect, onViewMore}){
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



    return(
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
        
         <Link to="/item">
           <button onClick={() => {onViewMore({id, title, imageUrl, price})} }className={styles.btn}>View more</button>
          </Link>
      </div>
    
    );
}

export default Card;