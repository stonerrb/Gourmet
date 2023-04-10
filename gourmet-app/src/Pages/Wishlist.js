import react from 'react';
import Card from '../Components/Card';
const Wishlist = () => {
    return (
        <div>
            <h1>Wishlist</h1>
            <Card>
                <div className='card-image'>
                    <img className='cardimg' src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"></img>
                    </div>
            </Card>
        </div>
    );
}

export default Wishlist