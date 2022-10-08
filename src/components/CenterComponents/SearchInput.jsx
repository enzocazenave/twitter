import { useState } from 'react'
import { useTweetsContext } from '../../hooks/useTweetsContext';

export const SearchInput = () => {

    const [selected, setSelected] = useState(false);
    const [query, setQuery] = useState("");
    const { getSearchedUsers } = useTweetsContext();

    const searchUser = (e) => {
        e.preventDefault();

        if (query.length == 0) return;
        getSearchedUsers({ query });
    }

    return (
        <form onSubmit={ searchUser } className={`fadeIn centerbar-container_search--input__container ${ (selected) && 'centerbar-container_search--input__container---focus' }`}>
            <i className={`${ (selected) && 'centerbar-container_search--input__container---focus___icon' } fas fa-magnifying-glass`}></i>
            <input
                placeholder="Search an user" 
                className="centerbar-container_search--input" 
                type="text" 
                onFocus={ () => setSelected(true) }
                onBlur={ () => setSelected(false) }
                onChange={ (e) => setQuery(e.target.value) }
                value={ query }
            />
        </form>
    )
}
