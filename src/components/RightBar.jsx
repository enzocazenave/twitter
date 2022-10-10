import { UserToFollow } from './RightComponents';
import '../styles/components/RightBar.css';
import { useContext } from 'react';
import { TweetsContext } from '../context/TweetsContext';
import { AuthContext } from '../context/AuthContext';

export const RightBar = () => {

    const { SUGGESTED_USERS } = useContext(TweetsContext);
    const { USER } = useContext(AuthContext);
    const suggested_to_show = SUGGESTED_USERS.filter(user => user._id !== USER.id);

    return (
        <>  
            {
                (suggested_to_show.length !== 0) &&
                    <div className="rightbar-container_whofollow">
                        <h4 className="rightbar-container_whofollow--title">Who to follow</h4>

                        {
                            suggested_to_show.map(user => (<UserToFollow key={ user._id } { ...user } />))
                        }
                    </div>
            }
            <div className="rightbar-container_textcontainer">
                <p className="rightbar-container_text">Terms of Service</p>
                <p className="rightbar-container_text">Privacy Policy</p>
                <p className="rightbar-container_text">Cookie Policy</p>
                <p className="rightbar-container_text">Accessibility</p>
                <p className="rightbar-container_text">Ads Info</p>
                <p className="rightbar-container_text">More...</p>
                <p className="rightbar-container_text">© 2022 Twitter, Inc.</p>
            </div>
        </>
    )
}