import react from 'react';
import FoodCard from '../Components/FoodCard';
const Wishlist = () => {
    return (
        <div>
            <h1>Wishlist</h1>
            <FoodCard items>
                <div className='card-image'>
                    <img className='cardimg' src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"></img>
                </div>
            </FoodCard>
        </div>
    );
}

export default Wishlist