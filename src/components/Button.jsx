const Button = ({ className, style, text, onClick }) => {

    return (
        <button
            className={`cta-wrapper ${className ?? ''}`}
            style={style}
            onClick={onClick}
        >
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="Arrow" />
                </div>
            </div>

        </button>
    );
}

export default Button;