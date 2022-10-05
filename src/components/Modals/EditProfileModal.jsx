import Modal from 'react-modal';
import '../../styles/components/EditProfileModal.css';

const modalStyle = {
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
}

Modal.setAppElement('#root');

export const EditProfileModal = () => {
    return (
        <Modal 
            isOpen={ true }
            style={ modalStyle }
            className="modal"
            overlayClassName="modal-background"
            closeTimeoutMS={ 200 }
        >
            <div className="editmodal-nav">
                <button className="editmodal-nav_close" type="button"><i className="fa fa-close"></i></button>
                <h4 className="editmodal-nav_title">Edit profile</h4>
                <button className="editmodal-nav_edit" type="button">Save</button>
            </div>
        </Modal>
    )
}
