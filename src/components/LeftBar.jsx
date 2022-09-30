import '../styles/components/LeftBar.css';

export const LeftBar = () => {
    return (
        <>
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
            </nav>

            <footer className="leftbar-container_footer">
                <img className="leftbar-container_footer--img" src={ "https://avatars.githubusercontent.com/u/102680110?v=4" } />
                <div className="leftbar-container_footer--user">
                    <p className="leftbar-container_footer--user__name">
                        Enzo Cazenave
                    </p>
                    <p className="leftbar-container_footer--user__username">
                        @chikicazenave_
                    </p>
                </div>
            </footer>
        </>
    )
}
