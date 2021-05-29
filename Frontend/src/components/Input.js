import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input = ({ type, placeholder, onChange, icon, error, title }) => {
    return (
        <div className='form-container-input-container'>
            <label htmlFor={type} className='form-container-desc'>{title}: </label>
            <FontAwesomeIcon icon={icon} className='form-container-icon'/>
            <input
                id={type}
                className='form-container-input'
                placeholder={placeholder}
                type={type}
                onChange={(event) => onChange(event.target.value)}>
            </input>
            <p className={error === '' ? 'invisible' : 'error'}>{error}</p>
        </div>
    )
}

export default Input
