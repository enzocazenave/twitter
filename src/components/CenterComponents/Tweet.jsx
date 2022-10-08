import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTweetsContext } from '../../hooks/useTweetsContext';

export const Tweet = ({ text, owner, likes }) => {

    const { getProfileInfo } = useTweetsContext();
    const [info, setInfo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getProfileInfo({ id: owner }).then(data => setInfo(data));
    }, []);

    const onClickTweet = () => {
        navigate(`/profiles/${info.username}`)
    }

    return (
        <div className="centerbar-container_tweet fadeIn" onClick={ onClickTweet } >
            <img className="centerbar-container_tweet--img" src={ info.profile_img || 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg' } />
            <div className="centerbar-container_tweet--post">
                <div className="centerbar-container_tweet--post__user">
                    <span className="centerbar-container_tweet--post__user---name">{ info.name }</span>
                    <span className="centerbar-container_tweet--post__user---username">@{info.username}</span>
                </div>
                
                <p className="centerbar-container_tweet--post__text">{ text }</p>
            
                <div className="centerbar-container_tweet--post__actions">
                    <button className="centerbar-container_tweet--post__actions---action" id="action-comment"><i className="far fa-comment"></i><span>0</span></button>
                    <button className="centerbar-container_tweet--post__actions---action" id="action-retweet"><i className="fas fa-retweet"></i><span>0</span></button>
                    <button className="centerbar-container_tweet--post__actions---action" id="action-like"><i className="far fa-heart"></i><span>{ likes }</span></button>
                    <button className="centerbar-container_tweet--post__actions---action" id="action-share"><i className="fa fa-share"></i></button>
                </div>
            </div>
        </div>
    )
}
