const Button = ({className, text, target}) => {
    const handleClick = (e) => {
        e.preventDefault();
        const targetElement = document.getElementById(target);
        if (targetElement) {
            const offset = window.innerHeight * 0.15;
            const top = targetElement.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }
    return ( 
        <a 
            className={`cta-wrapper ${className ?? ''}`}
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