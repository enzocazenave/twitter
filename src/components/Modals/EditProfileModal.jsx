import { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { AuthContext } from '../../context/AuthContext';
import { UiContext } from '../../context/UiContext';
import { useForm } from '../../hooks/useForm';
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

const initialForm = {
      name: '',
      bio: '',
      location: '',
      website: ''
}

export const EditProfileModal = () => {

    const { showEditModal, HIDE_EDIT_MODAL } = useContext(UiContext);
    const { USER } = useContext(AuthContext);
    const [focus, setFocus] = useState(initialState);

    const [values, setValues] = useState({ 
        name: USER.name, 
        bio: USER.bio || '' ,
        location: USER.location || '',
        website: USER.website || ''
    });

    const setInputvalues = ({ target }) => {
        const { name, value } = target;

        console.log(name, value)

        setValues({
            ...values,
            [ name ]: value
        });
    }

    const setInputFocus = (input, active) => {
        setFocus({
            ...focus,
            [input]: active
        })
    }

    return (
        <Modal 
            isOpen={ showEditModal }
            style={ modalStyle }
            className="modal"
            overlayClassName="modal-background"
            closeTimeoutMS={ 200 }
        >
            <div className="editmodal-nav">
                <button 
                    className="editmodal-nav_close" 
                    type="button"
                    onClick={ HIDE_EDIT_MODAL }
                >
                    <i className="fa fa-close"></i>
                </button>
                <h4 className="editmodal-nav_title">Edit profile</h4>
                <button 
                    className="editmodal-nav_edit" 
                    type="button"
                    onClick={ HIDE_EDIT_MODAL }
                >
                    Save
                </button>
            </div>

            <div 
                className="editmodal-banner" 
                style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ USER.profile_banner || 'https://fondosmil.com/fondo/9910.jpg' })`,
                }}
            >
                <div className="editmodal-banner_actions">
                    <button className="editmodal-banner_actions--action"><i className="fa fa-camera"></i></button>
                    <button className="editmodal-banner_actions--action"><i className="fa fa-close"></i></button>
                </div>
            </div>

            <div 
                className="editmodal-profile"
                style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ USER.profile_img || 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg' })`,
                }}
            >
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
                        name="name"
                        value={ values.name }
                        onChange={ setInputvalues }
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
                        name="bio"
                        value={ values.bio }
                        onChange={ setInputvalues }
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
                        name="location"
                        value={ values.location }
                        onChange={ setInputvalues }
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
                        name="website"
                        value={ values.website }
                        onChange={ setInputvalues }
                    />  
                </div>
            </div>
        </Modal>
    )
}
