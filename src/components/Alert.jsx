import '../styles/components/Alert.css';

export const Alert = ({ msg }) => {
    return (
        <div className="alert-container-danger">
            <i className="fas fa-info-circle"></i>
            <p className="alert-container-danger_msg">{ msg }</p>
        </div>
    ) 
}
