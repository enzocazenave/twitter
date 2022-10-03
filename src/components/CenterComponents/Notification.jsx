export const Notification = () => {
    return (
        <div className="centerbar-container_notification fadeIn">
            <div className="notification-icon">
                <i className="fas fa-bell"></i>
            </div>
            <div className="notification-info">
                <img className="centerbar-container_notification--img" src={ "https://avatars.githubusercontent.com/u/102680110?v=4" } />
                <h6 className="centerbar-container_notification--user">Enzo</h6>
                <p className="centerbar-container_notification--tweet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero harum labore quas reiciendis similique veritatis commodi iusto voluptate, quibusdam minus voluptas, mollitia suscipit eveniet rerum nisi, id dolores pariatur fugit!</p>
            </div>
        </div>
    )
}
