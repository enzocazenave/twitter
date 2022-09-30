export const Nav = () => {
    return (
        <nav className="leftbar-container_menu">
            <li className="leftbar-container_menu--item">
                <i className="fas fa-home"></i>
                <a className="leftbar-container_menu--item__title" href="#">Home</a>
            </li>
            <li className="leftbar-container_menu--item">
                <i className="fas fa-hashtag"></i>
                <a className="leftbar-container_menu--item__title" href="#">Explore</a>
            </li>
            <li className="leftbar-container_menu--item">
                <i className="fas fa-bell"></i>
                <a className="leftbar-container_menu--item__title" href="#">Notifications</a>
            </li>
            <li className="leftbar-container_menu--item">
                <i className="fas fa-user-alt"></i>
                <a className="leftbar-container_menu--item__title" href="#">Profile</a>
            </li>
            <li className="leftbar-container_menu--item">
                <i className="fas fa-cog"></i>
                <a className="leftbar-container_menu--item__title" href="#">Settings</a>
            </li>
            <button className="leftbar-container_menu--tweet" type="button">Tweet</button>
            <button className="leftbar-container_menu--tweet" id="responsive-tweet-button" type="button"><i className="fa fa-edit"></i></button>
        </nav>
    )
}