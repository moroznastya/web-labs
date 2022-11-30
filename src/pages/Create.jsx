import { useState } from "react";
import { useEffect } from "react";
function Create(props){
    const [title, setTitle] =useState('');
    const [price, setPrice] =useState('');
    const [imageUrl, setImageUrl] =useState('');

    const [titleDirty, setTitleDirty] =useState(false);
    const [priceDirty, setPriceDirty] =useState(false);
    const [photoDirty, setPhotoDirty] =useState(false);



    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    const priceHandler = (e) => {
        setPrice(e.target.value)
    }

    const photoHandler = (e) => {
        setImageUrl(e.target.value)
    }

    const clearInputs = () => {
        setTitle('');
        setPrice('');
        setImageUrl('');
    }

    const handleAdd = (e) => {
        e.preventDefault();
    
        setTitle(title);
        setPrice(price);
        setImageUrl(imageUrl);

        props.onAddToSneakers({title, price, imageUrl});
        clearInputs();
    
      }
    


    const blurHandler = (e) => {
        switch (e.target.name){
            case 'title':
                setTitleDirty(true)
                break
            case 'price':
                setPriceDirty(true)
                break
            case 'imageUrl':
                setPhotoDirty(true)
                break
        }
    }
    return (
        <div className="create">
            
            <form className=" justify-center ml-50"  onSubmit={handleAdd}>
                <h1>Додати кросівки</h1>
                <label>Title</label>
                <input onChange={(e) => titleHandler(e)} value={title} onBlur={e => blurHandler(e)}   name='title' type="text" className="d-block"  placeholder="Title" />
                <label>Price</label>
                <input onChange={(e) => priceHandler(e)} value={price} onBlur={e => blurHandler(e)} name='price' className="d-block" placeholder="Price..." />
                <label>ImageUrl</label>
                <input onChange={(e) => photoHandler (e)} value={imageUrl} onBlur={e => blurHandler(e)} name='imageUrl' className="d-block" placeholder="imageUrl..." />
                <button onClick={handleAdd}  className="greenButtonFooter" >Підтвердити</button>

            </form>
        </div>
    );
}

export default Create;