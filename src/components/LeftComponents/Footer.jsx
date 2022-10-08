import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

export const Footer = () => {

    const { USER } = useContext(AuthContext);

    return (
        <footer className="leftbar-container_footer">
            <img className="leftbar-container_footer--img" src={ USER.profile_img || 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg' } />
            <div className="leftbar-container_footer--user">
                <p className="leftbar-container_footer--user__name">
                    { USER.name }
                </p>
                <p className="leftbar-container_footer--user__username">
                    @{ USER.username }
                </p>
            </div>
        </footer>
    )
}
