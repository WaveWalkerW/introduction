function Button({ onToggle, showCards }) {
    return (
        <button id='but' className="btn" onClick={onToggle}>
            {showCards ? 'Hide nudes' : 'See nudes'}
        </button>
    );
}

export default Button;
