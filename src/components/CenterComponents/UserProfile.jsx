import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { UiContext } from '../../context/UiContext';
import { getDateString } from '../../helpers/getDateString';

export const UserProfile = () => {

    const { SHOW_EDIT_MODAL } = useContext(UiContext);
    const { USER } = useContext(AuthContext);

    return (
        <div className="centerbar-container_userprofile fadeIn">
            <img className="centerbar-container_userprofile--banner" src={ USER.profile_banner || 'https://fondosmil.com/fondo/9910.jpg' } />
            <div className="centerbar-container_userprofile--info">
                <div className="centerbar-container_userprofile--info__edit">
                    <img className="centerbar-container_userprofile--edit__img" src={ USER.profile_img || 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg' } />
                    <button 
                        className="centerbar-container_userprofile--edit__button" 
                        type="button"
                        onClick={ SHOW_EDIT_MODAL }
                    >
                        Edit profile
                    </button>
                </div>

                <div className="centerbar-container_userprofile--info__user">
                    <h3 className="centerbar-container_userprofile--info__user---name">{ USER.name }</h3>
                    <p className="centerbar-container_userprofile--info__user---username">@{ USER.username }</p>
                    <p className="centerbar-container_userprofile--info__user---bio">{ USER.bio }</p>
                </div>

                <div className="centerbar-container_userprofile--info__data">
                    {
                        (USER.location) &&
                            <div className="centerbar-container_userprofile--info__data---info">
                                <i className="fa fa-map-pin"></i>
                                <p className="centerbar-container_userprofile--info__data---info___text">{ USER.location }</p>
                            </div>
                    }
                    <div className="centerbar-container_userprofile--info__data---info">
                        <i className="far fa-calendar"></i>
                        <p className="centerbar-container_userprofile--info__data---info___text">{ getDateString('birthdate', USER.birthdate) }</p>
                    </div>
                    <div className="centerbar-container_userprofile--info__data---info">
                        <i className="far fa-calendar-alt"></i>
                        <p className="centerbar-container_userprofile--info__data---info___text">{ getDateString('joined', USER.joined) }</p>
                    </div>
                </div>

                <div className="centerbar-container_userprofile--info__followers">
                    <p className="centerbar-container_userprofile--info__followers---text"><b>{ USER.followers }</b> Followers</p>
                    <p className="centerbar-container_userprofile--info__followers---text"><b>{ USER.following }</b> Following</p>
                </div>

                <div className="centerbar-container_userprofile--info__tweets">
                    <h4>Tweets</h4>
                </div>
            </div>
        </div>
    )
}
