import { useState } from "react"

export const CreateTweet = () => {

    const [tweet, setTweet] = useState("");
    const [tweetLength, setTweetLength] = useState(0);

    

    return (
        <div className="centerbar-container_createtweet">
            <img className="centerbar-container_createtweet--img" src={ "https://avatars.githubusercontent.com/u/102680110?v=4" } />
            <form className="centerbar-container_createtweet--form">
                <textarea 
                    placeholder="What's happening?" 
                    className="centerbar-container_createtweet--form__input" 
                    type="text"
                    name="tweet"
                    value={ tweet }
                    onChange={ (e) => {
                        setTweet(e.target.value);
                        setTweetLength(tweetLength + 1)
                    } }
                    maxLength={ 280 }
                ></textarea>
                <hr className="centerbar-container_createtweet--form__separation"/>
                <div className="centerbar-container_createtweet--form__buttons">
                    <button className="centerbar-container_createtweet--form__buttons---file"><i className="fas fa-images"></i>Wanna add an image?</button>
                    <div style={{ color: "red" }}>
                        { tweetLength }
                    </div>
                    <button className="centerbar-container_createtweet--form__buttons---submit" type="submit">Tweet</button>
                </div>
            </form>
        </div>
    )
}
