import { createContext, useState } from 'react';

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showTweetModal, setShowTweetModal] = useState(false);

    const SHOW_EDIT_MODAL = () => setShowEditModal(true);
    const HIDE_EDIT_MODAL = () => setShowEditModal(false);

    const SHOW_TWEET_MODAL = () => setShowTweetModal(true);
    const HIDE_TWEET_MODAL = () => setShowTweetModal(false);
    
    return (
        <UiContext.Provider 
            value={{
                SHOW_EDIT_MODAL,
                HIDE_EDIT_MODAL, 
                SHOW_TWEET_MODAL,
                HIDE_TWEET_MODAL,
                showEditModal,
                showTweetModal
            }}
        >
            { children }    
        </UiContext.Provider>
    )
}