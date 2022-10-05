import { useState } from 'react';
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

const initialState = {
    name: false,
    bio: false,
    location: false,
    website: false
}

export const EditProfileModal = () => {

    const [focus, setFocus] = useState(initialState);

    const setInputFocus = (input, active) => {
        setFocus({
            ...focus,
            [input]: active
        })
    }

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

            <div className="editmodal-banner">
                <div className="editmodal-banner_actions">
                    <button className="editmodal-banner_actions--action"><i className="fa fa-camera"></i></button>
                    <button className="editmodal-banner_actions--action"><i className="fa fa-close"></i></button>
                </div>
            </div>

            <div className="editmodal-profile">
                <div className="editmodal-banner_actions">
                    <button className="editmodal-banner_actions--action"><i className="fa fa-camera"></i></button>
                </div>
            </div>

            <div className="editmodal-profile_inputs">
                <div className={`${ focus.name && 'editmodal-profile_inputs--containerFOCUS' } editmodal-profile_inputs--container`}>
                    <label
                        className={`${ focus.name && 'editmodal-profile_inputs--container__labelFOCUS' } editmodal-profile_inputs--container__label`} 
                    >
                        Nombre
                    </label>
                    <input
                        onFocus={ () => setInputFocus('name', true) } 
                        onBlur={ () => setInputFocus('name', false) }
                        className="editmodal-profile_inputs--container__input" 
                        type="text"
                        value="Chiki Cazenave"
                    />  
                </div>
                <div className={`${ focus.bio && 'editmodal-profile_inputs--containerFOCUS' } editmodal-profile_inputs--container`}>
                    <label
                        className={`${ focus.bio && 'editmodal-profile_inputs--container__labelFOCUS' } editmodal-profile_inputs--container__label`} 
                    >
                        Bio
                    </label>
                    <textarea 
                        onFocus={ () => setInputFocus('bio', true) } 
                        onBlur={ () => setInputFocus('bio', false) }
                        className="editmodal-profile_inputs--container__input" 
                        type="text"
                        value="Martin Guemes Hockey Club🏑🔰 | Ig: chikicazenave_ | Enzo Cazenave | CABJ"
                    ></textarea> 
                </div>
                <div className={`${ focus.location && 'editmodal-profile_inputs--containerFOCUS' } editmodal-profile_inputs--container`}>
                    <label
                        className={`${ focus.location && 'editmodal-profile_inputs--container__labelFOCUS' } editmodal-profile_inputs--container__label`} 
                    >
                        Location
                    </label>
                    <input 
                        onFocus={ () => setInputFocus('location', true) } 
                        onBlur={ () => setInputFocus('location', false) }
                        className="editmodal-profile_inputs--container__input" 
                        type="text"
                        value="Quilmes, Argentina"
                    />  
                </div>
                <div className={`${ focus.website && 'editmodal-profile_inputs--containerFOCUS' } editmodal-profile_inputs--container`}>
                    <label
                        className={`${ focus.website && 'editmodal-profile_inputs--container__labelFOCUS' } editmodal-profile_inputs--container__label`} 
                    >
                        Website
                    </label>
                    <input 
                        onFocus={ () => setInputFocus('website', true) } 
                        onBlur={ () => setInputFocus('website', false) }
                        className="editmodal-profile_inputs--container__input" 
                        type="text"
                    />  
                </div>
            </div>
        </Modal>
    )
}
