import { getColorCounter } from '../../helpers/getColorCounter';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const CreateTweet = () => {

    const { USER } = useContext(AuthContext);
    const [tweet, setTweet] = useState("");
    const [focus, setFocus] = useState(false);
    
    return (
        <div className="centerbar-container_createtweet fadeIn">
            <img className="centerbar-container_createtweet--img" src={ USER.profile_img || 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg' } />
            <form className="centerbar-container_createtweet--form">
                <textarea 
                    placeholder="What's happening?" 
                    className="centerbar-container_createtweet--form__input" 
                    type="text"
                    name="tweet"
                    value={ tweet }
                    onChange={ (e) => setTweet(e.target.value) }
                    onFocus={ () => setFocus(true) }
                    onBlur={ () => setFocus(false) }
                    maxLength={ 280 }
                ></textarea>
                <hr className="centerbar-container_createtweet--form__separation"/>
                <div className="centerbar-container_createtweet--form__buttons">
                    <button className="centerbar-container_createtweet--form__buttons---file"><i className="fas fa-images"></i><span>Wanna add an image?</span></button> 
                    {
                        focus &&
                            <p className="centerbar-container_createtweet--form__buttons---counter" style={{ color: getColorCounter(tweet.length) }}>{ tweet.length }/280</p>
                    }
                    <button disabled={ (tweet.length == 0) } className="centerbar-container_createtweet--form__buttons---submit" type="submit">Tweet</button>     
                </div>
            </form>
        </div>
    )
}