import Card from './card';


function Button() {
    const handleClick = (e) => {
        const cards = document.getElementsByClassName('card');
        
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.toggle('show');
        }

        e.target.textContent = e.target.textContent === 'See nudes' ? 'Hide us' : 'See nudes';
    }

    return (
        <button id='but' className="btn" onClick={handleClick}>See nudes</button>
    );
}
export default Button;