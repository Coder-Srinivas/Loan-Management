const LoaderComponent = ({size=5}) => {

    const dimensions = {
        width: size+'rem',
        height: size+'rem'
    }
    
    return(
        <div className="loading-component">
            <div style={dimensions} className="loading-component-main">
            </div>
        </div>
    )
}

export default LoaderComponent;
