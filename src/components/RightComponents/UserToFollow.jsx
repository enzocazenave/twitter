export const UserToFollow = ({ name, profile_img, username }) => {
    return (
        <div className="rightbar-container_usertofollow">
            <div className="rightbar-container_usertofollow--user">
                <img
                    className="rightbar-container_usertofollow--user__img" 
                    src={ profile_img ||'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg' } 
                />
                <div className="rightbar-container_usertofollow--user__data">
                    <p className="rightbar-container_usertofollow--user__data---name">{ name }</p>
                    <p className="rightbar-container_usertofollow--user__data---username">@{username}</p>
                </div>
            </div>

            <button className="rightbar-container_usertofollow--follow">Follow</button>
        </div>
    )
}
