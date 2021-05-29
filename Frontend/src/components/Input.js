import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input = ({ type, placeholder, onChange, icon, error, title, ...rest }) => {
    return (
        <div className='form-container-input-container'>
            <div className='form-container-input-container--first'>
                <label htmlFor={type} className='form-container-desc'>{title}: </label>
                {icon? <FontAwesomeIcon icon={icon} className='form-container-input-container--first-icon'/>: ''}
            </div>
            <input
                id={type}
                className='form-container-input-container--second'
                placeholder={placeholder}
                type={type}
                onChange={(event) => onChange(event.target.value)}
                {...rest}>
            </input>
            <p className={error === '' ? 'invisible' : 'error'}>{error}</p>
        </div>
    )
}

export default Input
