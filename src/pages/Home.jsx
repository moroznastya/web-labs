import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { useState } from 'react';

import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';


function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    onViewItem,
    onSelectSneakers,
    isLoading
})
 {
  const [sortBy, setSortBy] = useState('Sort by');
  const [sortOrder, setSortOrder] = useState('Sorting order');
  const [sortProps, setSortProps] = useState({ sortBy: '', sortingOrder: '' })

  let sortedItems = [];
  let foundItems = items.filter(item => item.title.search(searchValue) !== -1);
 
  if (sortBy === 'Price') {
      if (sortOrder === 'Ascending') {
          sortedItems = foundItems.sort(function (a, b) {
              return a.price > b.price ? 1 : -1;
          })
      }
      if (sortOrder === 'Descending') {
          sortedItems = foundItems.sort(function (a, b) {
              return a.price < b.price ? 1 : -1;
          })
      }
  } else {
      sortedItems = foundItems;
  
    }




    const renderItems = () => {
      const filtredItems = sortedItems.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()),
      );
      return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
        <Card
        key = {index}
        isLoading={isLoading}
        onFavorite={(obj)=> onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}  
        onSelect={(obj, id) => onSelectSneakers(obj, id)}
        onViewMore={(obj) =>  onViewItem(obj)}
        {...item}
          
        />
      ));
    };


    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart)
  
    const  getTotalQuantity = () => {
      let total = 0
      cart.forEach(item => {
        total += item.quantity
      })
      return total
    }
  
    return (
        <div className="content p-40">
          <div className="d-flex align-center mb-40 justify-between">
            <div className="d-flex">
              <div width={80} height={120} >
                               <select height={100} className="mr-50" name="Filter 1" id="select1" onChange={(value) => setSortBy(value.target.value)}>
                <option value="Sort by">Sort by</option>
                <option value="Price">Price</option>
                </select>
              </div>

            <select name="Filter 2" id="select2" onChange={(value) => setSortOrder(value.target.value)}>
                <option value="Sorting order">Sorting order</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
            </select>
            </div>

            <div className="ml-90 d">
              <button >Apply</button>
            </div>
      <div className='shopping-cart' onClick={() => navigate('/cart')}>
           <img width={18} height={18} src="/img/cart.svg" />
            <p>{getTotalQuantity() || 0}</p>
           </div>
            
            </div>
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Пошук по запиту: ${searchValue}` : 'Всі кросівки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
            <img
             onClick = { () => setSearchValue('')}
              className="clear cu-p" src="/img/btn-remove.svg" alt="Clear" />)}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Пошук..." />
          </div>
        </div>
        <div className ="d-flex flex-wrap">{renderItems()}</div>
        <div className="btn-create">
          <Link to="/addsneakers">
            <button  className="greenButtonFooter">Додати кросівки</button>
          </Link>
          
        </div>


      </div>
    );
}

export default Home;


