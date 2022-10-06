export const UserToFollow = () => {
    return (
        <div className="rightbar-container_usertofollow">
            <div className="rightbar-container_usertofollow--user">
                <img
                    className="rightbar-container_usertofollow--user__img" 
                    src={ "https://avatars.githubusercontent.com/u/102680110?v=4" } 
                />
                <div className="rightbar-container_usertofollow--user__data">
                    <p className="rightbar-container_usertofollow--user__data---name">Enzo</p>
                    <p className="rightbar-container_usertofollow--user__data---username">@chikicazenave</p>
                </div>
            </div>

            <button className="rightbar-container_usertofollow--follow">Follow</button>
        </div>
    )
}
