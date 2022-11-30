import { Link } from "react-router-dom";
import Card from "../components/Card";
function HomePage({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    onSelectSneakers,
    onViewItem
}) {
    return (
        <div className="content p-40">
        <div className="d-flex justify-between mb-40 ">
            <div className="img ml-50">
                <img className=""width={240} height={240} src="/img/home.jpg"/>
            </div>
            <div  className="description ml-70 mr-70">
                <h1 className="">React Sneakers</h1>
                <p>Магазин найкращих кросівок!<br /> 
                    Безкоштовна доставка при замовленні<br />
                    2-х і більше позицій! Швидко вибирай <br />
                    і додавай у корзину!</p>
            </div>
            
          
          
        </div>
        <div className="line">
            <img src="/img/line.svg"/>
        </div>
        <h1 className="mt-30">Наші кросівки:</h1>
        <div className ="d-flex flex-wrap mt-30">

        {items.filter((item)=> item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item)=> (
                    <Card 
                    key = {item.title}
                    title={item.title}
                    price={item.price}
                    id={item.id}
                    imageUrl={item.imageUrl} 
                    onFavorite={(obj)=> onAddToFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}  
                    onSelect={(obj, id) => onSelectSneakers(obj, id)}
                    onViewMore={(obj) =>  onViewItem(obj)}      
                   />
        ))}

 
        </div>

        <div className=" align-center justify-center">
            <Link to="/sneakers">
                <button  className="greenButtonFooter">View more <img src="/img/arrow.svg" alt="arrow"/>
                </button>
            </Link>
            
        </div>

      </div>
    );
}

export default HomePage;