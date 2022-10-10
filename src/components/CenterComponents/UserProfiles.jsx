import { useContext, useEffect, useState } from 'react';
import { Tweet } from '../CenterComponents/Tweet';
import { TweetsContext } from '../../context/TweetsContext';
import { getDateString } from '../../helpers/getDateString';
import { useTweetsContext } from '../../hooks/useTweetsContext';

export const UserProfiles = ({ username }) => {

    const [data, setData] = useState({});
    const { TWEETS } = useContext(TweetsContext);
    const { getProfileAllInfo } = useTweetsContext();

    useEffect(() => {
        getProfileAllInfo({username}).then(res => setData(res));
    }, []);

    

    const tweets_to_show = TWEETS.filter(tweet => tweet.owner.id == data.id);
    
    return (
        <>
            <div className="centerbar-container_userprofile fadeIn">
                <img className="centerbar-container_userprofile--banner" src={ data.profile_banner || 'https://fondosmil.com/fondo/9910.jpg' } />
                <div className="centerbar-container_userprofile--info">
                    <div className="centerbar-container_userprofile--info__edit">
                        <img className="centerbar-container_userprofile--edit__img" src={ data.profile_img || 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg' } />
                    </div>

                    <div className="centerbar-container_userprofile--info__user">
                        <h3 className="centerbar-container_userprofile--info__user---name">{ data.name }</h3>
                        <p className="centerbar-container_userprofile--info__user---username">@{ data.username }</p>
                        <p className="centerbar-container_userprofile--info__user---bio">{ data.bio }</p>
                    </div>

                    <div className="centerbar-container_userprofile--info__data">
                        {
                            (data.location) &&
                                <div className="centerbar-container_userprofile--info__data---info">
                                    <i className="fa fa-map-pin"></i>
                                    <p className="centerbar-container_userprofile--info__data---info___text">{ data.location }</p>
                                </div>
                        }
                        <div className="centerbar-container_userprofile--info__data---info">
                            <i className="far fa-calendar"></i>
                            <p className="centerbar-container_userprofile--info__data---info___text">{ getDateString('birthdate', data.birthdate || '01/01/1991') }</p>
                        </div>
                        <div className="centerbar-container_userprofile--info__data---info">
                            <i className="far fa-calendar-alt"></i>
                            <p className="centerbar-container_userprofile--info__data---info___text">{ getDateString('joined', data.joined || '534435252') }</p>
                        </div>
                    </div>

                    <div className="centerbar-container_userprofile--info__followers">
                        <p className="centerbar-container_userprofile--info__followers---text"><b>{ data.followers }</b> Followers</p>
                        <p className="centerbar-container_userprofile--info__followers---text"><b>{ data.following }</b> Following</p>
                    </div>

                    <div className="centerbar-container_userprofile--info__tweets">
                        <h4>Tweets</h4>
                    </div>
                </div>
            </div>
            {
                tweets_to_show.map(tweet => ( <Tweet key={ tweet._id } { ...tweet } /> ))
            }
        </>
    )
}
