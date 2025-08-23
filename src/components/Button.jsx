const Button = ({className,style, text, target, onClick}) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (onClick) {
            onClick(e);
            return;
        }
        const targetElement = document.getElementById(target);
        if (targetElement) {
            window.scrollTo({ top: targetElement.offsetTop, behavior: 'smooth' });
        }
    }
    return ( 
        <a 
            className={`cta-wrapper ${className ?? ''}`}
            style={style}
            onClick={handleClick}
        >
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