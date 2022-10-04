import Modal from 'react-modal';
import '../../styles/components/TweetModal.css';
import { CreateTweet } from '../CenterComponents';

const modalStyle = {
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
}

Modal.setAppElement('#root');

export const TweetModal = () => {
    return (
        <Modal 
            isOpen={ false }
            style={ modalStyle }
            className="modal"
            overlayClassName="modal-background"
            closeTimeoutMS={ 200 }
        >
            <div className="tweetmodal-nav">
                <button className="tweetmodal-nav_button" type="button"><i className="fa fa-close"></i></button>
            </div>
            <CreateTweet />
        </Modal>
    )
}
