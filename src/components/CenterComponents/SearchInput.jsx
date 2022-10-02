import { useState } from 'react'

export const SearchInput = () => {

    const [selected, setSelected] = useState(false);

    return (
        <div className={`fadeIn centerbar-container_search--input__container ${ (selected) && 'centerbar-container_search--input__container---focus' }`}>
            <i className={`${ (selected) && 'centerbar-container_search--input__container---focus___icon' } fas fa-magnifying-glass`}></i>
            <input
                placeholder="Search an user" 
                className="centerbar-container_search--input" 
                type="text" 
                onFocus={ () => setSelected(true) }
                onBlur={ () => setSelected(false) }
            />
        </div>
    )
}
