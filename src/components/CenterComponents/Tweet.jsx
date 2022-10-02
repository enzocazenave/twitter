export const Tweet = () => {
    return (
        <div className="centerbar-container_tweet fadeIn">
            <img className="centerbar-container_tweet--img" src={ "https://avatars.githubusercontent.com/u/102680110?v=4" } />
            <div className="centerbar-container_tweet--post">
                <div className="centerbar-container_tweet--post__user">
                    <span className="centerbar-container_tweet--post__user---name">Enzo</span>
                    <span className="centerbar-container_tweet--post__user---username">@chikicazenave</span>
                </div>
                
                <p className="centerbar-container_tweet--post__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat possimus in sapiente ea ipsa fugiat dolores, reprehenderit ex ullam aliquam veritatis esse culpa quis et eligendi. Repellat, accusantium accusamus? Provident.</p>
            
                <div className="centerbar-container_tweet--post__actions">
                    <button className="centerbar-container_tweet--post__actions---action" id="action-comment"><i className="far fa-comment"></i><span>0</span></button>
                    <button className="centerbar-container_tweet--post__actions---action" id="action-retweet"><i className="fas fa-retweet"></i><span>0</span></button>
                    <button className="centerbar-container_tweet--post__actions---action" id="action-like"><i className="far fa-heart"></i><span>0</span></button>
                    <button className="centerbar-container_tweet--post__actions---action" id="action-share"><i className="fa fa-share"></i></button>
                </div>
            </div>
        </div>
    )
}
