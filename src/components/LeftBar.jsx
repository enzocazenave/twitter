import '../styles/components/LeftBar.css';

export const LeftBar = () => {
    return (
        <div className="d-flex flex-column justify-content-between" style={{ height: "100vh" }}>
            <nav className="list-unstyled">
                <li className="d-flex align-items-center home-icon"><i className="fab fa-twitter"></i></li>
                <li className="d-flex align-items-center"><i className="fas fa-home"></i> Home</li>
                <li className="d-flex align-items-center"><i className="fas fa-hashtag"></i> Explore</li>
                <li className="d-flex align-items-center"><i className="far fa-bell"></i> Notifications</li>
                <li className="d-flex align-items-center"><i className="fa fa-envelope"></i> Messages</li>
                <li className="d-flex align-items-center"><i className="far fa-bookmark"></i> Bookmarks</li>
                <li className="d-flex align-items-center"><i className="far fa-list-alt"></i> Lists</li>
                <li className="d-flex align-items-center"><i className="fas fa-user-alt"></i> Profile</li>
                <li className="d-flex align-items-center"><i className="fas fa-ellipsis-h"></i> More</li>
                <button className="button-tweet">Tweet</button>
            </nav>  
            <div className="d-flex justify-content-between align-items-center user-button">
                <div className="d-flex justify-content-center align-items-center">
                    <img src={ "https://avatars.githubusercontent.com/u/102680110?v=4" } />
                    <div className="d-flex flex-column">
                        <p className="m-0 name">Chiki Cazenave</p>
                        <p className="m-0 username">@chikicazenave</p>
                    </div>
                </div>
                <i className="fas fa-ellipsis-h"></i>
            </div>
        </div>
    )
}
