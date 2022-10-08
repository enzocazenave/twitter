import { useNavigate } from "react-router-dom"

export const SearchedUser = ({ name, username, bio, profile_img }) => {

    const navigate = useNavigate();

    const onClickUser = () => {
        navigate(`/profiles/${username}`)
    }

    return (
        <div className="centerbar-container_searcheduser fadeIn" onClick={ onClickUser }>
            <img className="centerbar-container_searcheduser--img" src={ profile_img || 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg' } />
            <div className="centerbar-container_searcheduser--user">
                <p className="centerbar-container_searcheduser--user__name">{ name }</p>
                <p className="centerbar-container_searcheduser--user__username">@{ username }</p>
                <p className="centerbar-container_searcheduser--user__biography">{ bio }</p>
            </div>
        </div>
    )
}
