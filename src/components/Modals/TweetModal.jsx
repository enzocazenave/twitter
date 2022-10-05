import { useContext } from 'react';
import Modal from 'react-modal';
import { UiContext } from '../../context/UiContext';
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

    const { showTweetModal, HIDE_TWEET_MODAL } = useContext(UiContext);

    return (
        <Modal 
            isOpen={ showTweetModal }
            style={ modalStyle }
            className="modal"
            overlayClassName="modal-background"
            closeTimeoutMS={ 200 }
        >
            <div className="tweetmodal-nav">
                <button 
                    className="tweetmodal-nav_button" 
                    type="button"
                    onClick={ HIDE_TWEET_MODAL }
                >
                    <i className="fa fa-close"></i>
                </button>
            </div>
            <CreateTweet />
        </Modal>
    )
}
