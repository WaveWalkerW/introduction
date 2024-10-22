import Card from './card';


function Button(){
    
 
    
    const handleClick = (e) => {

        const card = document.getElementsByClassName('card');

        for (var i=0;i<card.length;i+=1){
            if(card[i].style.display == 'block'){
                card[i].style.display = 'none';
            }
            else card[i].style.display = 'block';
            }
        if(e.target.textContent == 'See shalopriemnuy') {e.target.textContent = `Hide us`;}
        else {e.target.textContent = `See shalopriemnuy`}
        }


    return(
        <button id='but' className="btn" onClick={(e) => handleClick(e)}>See shalopriemnuy</button>
    );
}

export default Button;