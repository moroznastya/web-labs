import { useState } from "react";

function Edit({sneakers, onUpdateToSneakers}){
    const [title, setTitle] =useState(sneakers.title);
    const [price, setPrice] =useState(sneakers.price);
    const [imageUrl, setImageUrl] =useState(sneakers.imageUrl);

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    const priceHandler = (e) => {
        setPrice(e.target.value)
    }

    const photoHandler = (e) => {
        setImageUrl(e.target.value)
    }

    const handleAdd = (e) => {
        e.preventDefault();
        setTitle(title);
        setPrice(price);
        setImageUrl(imageUrl);
        const id = sneakers.id;

        onUpdateToSneakers({title, price, imageUrl, id}, id);
        clearInputs();
    
      }

      const clearInputs = () => {
        setTitle('');
        setPrice('');
        setImageUrl('');
    
      }

    
    return(
        <div className="create">
            
            <form className=" justify-center ml-50"  onSubmit={handleAdd}>
                <h1>Редагувати кросівки</h1>
                <label>Title:</label>
                <input onChange={(e) => titleHandler(e)} value={title}   name='title' type="text" className="d-block"  />
                <label>Price:</label>
                <input onChange={(e) => priceHandler(e)} value={price} name='price' className="d-block" />
                <label>ImageUrl:</label>
                <input onChange={(e) => photoHandler (e)} value={imageUrl}  name='imageUrl' className="d-block" />
                <button onClick={handleAdd}  className="greenButtonFooter" >Підтвердити</button>

            </form>
        </div>
    );


}

export default Edit;