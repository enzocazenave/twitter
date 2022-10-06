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
        </>
    )
}