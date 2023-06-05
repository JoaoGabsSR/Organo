import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import "./Collaborator.css";

const Collaborator = ({ id, name, image, job, backColor, onDelete, favorite, onFavorite }) => {
    const favorited = () => {
        onFavorite(id)
    }

    const propsFavorited = {
        size: 25,
        onClick: favorited
    }
    
    if (!image) {
        image = '/images/question-icon.png'; 
    }

    return (
        <div className="collaborator">
            <AiFillCloseCircle 
                size={25} 
                className="del" 
                onClick={() => onDelete(id)} 
            />
            <div className="header" style={{ backgroundColor: backColor }}>
                <img src={image} alt={name} />
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{job}</h5>
                <div>
                    {favorite 
                        ? <AiFillHeart {...propsFavorited} color='#FF0000'/> 
                        : <AiOutlineHeart {...propsFavorited} />}
                </div>
            </div>
        </div>
    );
}

export default Collaborator;
