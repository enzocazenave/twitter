import { UserToFollow } from './RightComponents';
import '../styles/components/RightBar.css';

export const RightBar = () => {
    return (
        <>
            <div className="rightbar-container_whofollow">
                <h4 className="rightbar-container_whofollow--title">Who to follow</h4>
                <UserToFollow />
                <UserToFollow />
                <UserToFollow />
                <UserToFollow />
                <UserToFollow />
            </div>
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