import Card from './card';


function Button(){
    
 
    
    const handleClick = (e) => {

        const card = document.getElementsByClassName('card');
        const full = document.getElementById('new');
        console.log(full.style.display);

        for (var i=0;i<card.length;i+=1){
            if(card[i].style.display == 'block'){
                card[i].style.display = 'none';
            }
            else card[i].style.display = 'block';
            }
        if(e.target.textContent == 'See shalopriemnuy') {e.target.textContent = `Hide us`;}
        else {e.target.textContent = `See shalopriemnuy`}
    

        if(full.style.display != 'block')
            full.style.display = 'block'
        else
            full.style.display = 'none';
        console.log(full.style.display);
    }
   


    return(
        <button id='but' className="btn" onClick={(e) => handleClick(e)}>See shalopriemnuy</button>
    );
}

export default Button;