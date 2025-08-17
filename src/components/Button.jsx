const Button = ({className, id, text}) => {
    return ( 
        <a className={`cta-wrapper ${className ?? ''}`} id={id}>
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="Arrow" />
                </div>
            </div>

        </a>
     );
}

export default Button;