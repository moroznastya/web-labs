import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Create from './pages/Create';
import Item from './pages/Item';
import Edit from './pages/Edit';




function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [sneakers, setSneakers] = React.useState({id: '', title: '', price: '', imageUrl: ''});



  const [item, setItem] = React.useState({id: '', title: '', price: '', imageUrl: ''});


  const [cartOpened, setCartOpened] = React.useState(false);


  React.useEffect(()=> {
    axios.get('https://6347feb30484786c6e8ee836.mockapi.io/items').then(
      (res) => {
        setItems(res.data);
      }
    )
    axios.get('https://6347feb30484786c6e8ee836.mockapi.io/cart').then(
      (res) => {
        setCartItems(res.data);
      }
    )

    axios.get('https://6347feb30484786c6e8ee836.mockapi.io/Favorite').then(
      (res) => {
        setFavorites(res.data);
      }
    ) 
    

    /*fetch('https://6347feb30484786c6e8ee836.mockapi.io/items')
    .then((res)=>{
    return res.json();
    })
    .then((json)=>{
    setItems(json);
    });*/

    
  }, []);


  const onAddToCart = (obj) => {
    axios.post('https://6347feb30484786c6e8ee836.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onSelectSneakers = (obj) => {

      setSneakers(obj);  
      console.log(sneakers);
      console.log(sneakers.id)

  }

  const onViewItem = (obj) => {
    setItem(obj);
    console.log(obj);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://6347feb30484786c6e8ee836.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const onAddToFavorite = (obj) => {
    axios.post('https://6347feb30484786c6e8ee836.mockapi.io/Favorite', obj);
    setFavorites(prev => [...prev, obj]);
  };

  function onAddToSneakers (obj){
     axios.post('https://6347feb30484786c6e8ee836.mockapi.io/items', obj);
    setItems(prev => [...prev, obj]);
  } ;

  function onUpdateToSneakers (obj, id){
    axios.put(`https://6347feb30484786c6e8ee836.mockapi.io/items/${id}`, {title: obj.title,
     price: obj.price,
     imageUrl: obj.imageUrl
    });
   
  }










  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={()=> setCartOpened(false)} onRemove={onRemoveItem}/>}
      
      <Header onClickCart={()=> setCartOpened(true)} />


          <Routes>
          <Route path="" exact element = {<HomePage
                        items={[{"id":"1","title":"Чоловічі кросівки Nike Blazer Mid Suede Green","price":"2000","imageUrl":"/img/sneakers/5.jpg"},{"id":"2","title":"Чоловічі кросівки Nike Air Max 270","price":3500,"imageUrl":"/img/sneakers/2.jpg"},{"id":"3","title":"Чоловічі кросівки Nike Blazer Mid Suede","price":1999,"imageUrl":"/img/sneakers/3.jpg"},{"id":"4","title":"Кросівки Puma X Aka Boku Future Rider","price":2499,"imageUrl":"/img/sneakers/4.jpg"}]}
                        cartItems={cartItems}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onChangeSearchInput={onChangeSearchInput}
                        onAddToFavorite={onAddToFavorite}
                        onAddToCart={onAddToCart}
                        onViewItem={onViewItem}
                        onSelectSneakers={onSelectSneakers}
          />} />
            <Route path="/sneakers" exact element = {              
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              onViewItem={onViewItem}
              onSelectSneakers={onSelectSneakers}
            />} />
            <Route path="/favorites" exact
            element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite}/>}/>
            <Route path="/addsneakers" exact element = {
              <Create
              onAddToSneakers={onAddToSneakers}
              />}/>
            <Route path="/item" exact 
            element={<Item
              key = {item.title}
              title={item.title}
              price={item.price}
              id={item.id}
              imageUrl={item.imageUrl} 
              onFavorite={(item)=> onAddToFavorite(item)}
              onPlus={(item) => onAddToCart(item)}  
              onSelect={(item, id) => onSelectSneakers(item, id)}
              onViewMore={(item) =>  onViewItem(item)}  
             
            />}/>
            <Route path="/edit-item" exact 
              element={<Edit
                sneakers={sneakers}
                onUpdateToSneakers={onUpdateToSneakers}
             
            />}/>
          </Routes>

          <Footer/>
      
  

        

      
      
    </div>
  );
}

export default App;
