export const UserProfile = () => {
    return (
        <div className="centerbar-container_userprofile fadeIn">
            <img className="centerbar-container_userprofile--banner" src={ "https://pbs.twimg.com/profile_banners/970747597068689408/1598968559/600x200" } />
            <div className="centerbar-container_userprofile--info">
                <div className="centerbar-container_userprofile--info__edit">
                    <img className="centerbar-container_userprofile--edit__img" src={ "https://avatars.githubusercontent.com/u/102680110?v=4" } />
                    <button className="centerbar-container_userprofile--edit__button" type="button">Edit profile</button>
                </div>

                <div className="centerbar-container_userprofile--info__user">
                    <h3 className="centerbar-container_userprofile--info__user---name">Enzo Cazenave</h3>
                    <p className="centerbar-container_userprofile--info__user---username">@chikicazenave</p>
                    <p className="centerbar-container_userprofile--info__user---bio">Martin Guemes Hockey Club🏑🔰 | Ig: chikicazenave_ | Enzo Cazenave | CABJ</p>
                </div>

                <div className="centerbar-container_userprofile--info__data">
                    <div className="centerbar-container_userprofile--info__data---info">
                        <i className="fa fa-map-pin"></i>
                        <p className="centerbar-container_userprofile--info__data---info___text">Quilmes, Argentina</p>
                    </div>
                    <div className="centerbar-container_userprofile--info__data---info">
                        <i className="far fa-calendar"></i>
                        <p className="centerbar-container_userprofile--info__data---info___text">Born February 24, 2004</p>
                    </div>
                    <div className="centerbar-container_userprofile--info__data---info">
                        <i className="far fa-calendar-alt"></i>
                        <p className="centerbar-container_userprofile--info__data---info___text">Joined March 2018</p>
                    </div>
                </div>

                <div className="centerbar-container_userprofile--info__followers">
                    <p className="centerbar-container_userprofile--info__followers---text"><b>74</b> Followers</p>
                    <p className="centerbar-container_userprofile--info__followers---text"><b>92</b> Following</p>
                </div>

                <div className="centerbar-container_userprofile--info__tweets">
                    <h4>Tweets</h4>
                </div>
            </div>
        </div>
    )
}
