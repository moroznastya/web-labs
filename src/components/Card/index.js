import React from 'react';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ContentLoader from 'react-content-loader';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../redux/cartSlice';


function Card({id, title, imageUrl, price, onFavorite, onPlus, favorited=false, isLoading, onSelect, onViewMore}){
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const [sneakers, setSneakers] = React.useState({id: '', title: '', price: '', imageUrl: ''});

  const dispatch = useDispatch()

  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded (!isAdded);
  }

  const onClickFavorite = () => {
    onFavorite({title, imageUrl, price});
    setIsFavorite (!isFavorite);
  }

  const onSelectSneakers = (obj, id) => {

    setSneakers(obj);  
    console.log(sneakers);
    console.log(sneakers.id);
    onDelete(sneakers, sneakers.id);

  }
     function onDelete (obj, id){
    axios.delete(`https://6347feb30484786c6e8ee836.mockapi.io/items/${id}`)};




    return(
        <div className = {styles.card}>
          {isLoading ? (<ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>) : (
          <>
                   <div className={styles.favorite} onClick={onFavorite}>
          <img onClick={onClickFavorite} src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}/>
         </div>    

          
          <div className="mt-40">
           <img onClick={() => onSelectSneakers({title, imageUrl, price, id}, id)} className={styles.removeBtn} alt="Remove" src={'/img/btn-remove.svg'} />
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
          <img onClick={() => 
          dispatch(addToCart({
            id, title, imageUrl, price
          }))} 
           src = {isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" className={styles.plus} />
        </div>
        
         <Link to="/item">
           <button onClick={() => {onViewMore({id, title, imageUrl, price})} }className={styles.btn}>View more</button>
          </Link>

         </>
        )
        }
      </div>
    
    );
}

export default Card;