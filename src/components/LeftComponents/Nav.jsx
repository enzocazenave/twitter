import { useNavigate } from 'react-router-dom';

export const Nav = () => {

    const pathname = window.location.pathname;
    const navigate = useNavigate();

    const redirect = (path) => navigate(path);

    return (
        <nav className="leftbar-container_menu">
            <li onClick={ () => redirect('/home') } className={`leftbar-container_menu--item ${ (pathname == '/home') && 'leftbar-container_menu--item__selected' }`}>
                <i className="fas fa-home"></i>
                <a className="leftbar-container_menu--item__title" href="#">Home</a>
            </li>
            <li onClick={ () => redirect('/explore') } className={`leftbar-container_menu--item ${ (pathname == '/explore') && 'leftbar-container_menu--item__selected' }`}>
                <i className="fas fa-hashtag"></i>
                <a className="leftbar-container_menu--item__title" href="#">Explore</a>
            </li>
            <li onClick={ () => redirect('/notifications') } className={`leftbar-container_menu--item ${ (pathname == '/notifications') && 'leftbar-container_menu--item__selected' }`}>
                <i className="fas fa-bell"></i>
                <a className="leftbar-container_menu--item__title" href="#">Notifications</a>
            </li>
            <li onClick={ () => redirect('/profile') } className={`leftbar-container_menu--item ${ (pathname == '/profile') && 'leftbar-container_menu--item__selected' }`}>
                <i className="fas fa-user-alt"></i>
                <a className="leftbar-container_menu--item__title" href="#">Profile</a>
            </li>
            <li onClick={ () => redirect('/settings') } className={`leftbar-container_menu--item ${ (pathname == '/settings') && 'leftbar-container_menu--item__selected' }`}>
                <i className="fas fa-cog"></i>
                <a className="leftbar-container_menu--item__title" href="#">Settings</a>
            </li>
            <button className="leftbar-container_menu--tweet" type="button">Tweet</button>
        </nav>
    )
}
