import Card from './card.jsx';
import Button from './btn.jsx'

import kairat from './assets/picture.jpg';
import shama from './assets/shama.jpg';
import ama from './assets/ama.jpg';
import misha from './assets/misha.jpg';
import alan from './assets/alan.jpg';
import aidana from './assets/aidana.jpg';
import lyilya from './assets/lyailya.jpg';
import kirya from './assets/kirya.jpg';
import zema from './assets/zema.jpg';
import shalik from './assets/Shalik.jpg';


function App() {

      return(
        <>
        
        <Button/>
          <a href='https://kandratiche.github.io/kairat/'>
            <Card image={kairat} name='Kairat' desc='Программист корейского происхождения'/> 
          </a>
            <Card image={shama} name='Shamil' desc='Растегательный магнат, готовый скупить все булочки в столовой'/> 
          <a href='https://kandratiche.github.io/amir/'>
            <Card image={ama} name='Amir' desc='Всемирно известный филосов'/> 
          </a>
          <Card image={misha} name='Misha' desc='Пенсионер, которого можно раскрутить на деньги'/> 
          <Card image={zema} name='Zamir' desc='Волк, занимавшийся ремонтом котлов'/> 
          <Card image={aidana} name='Aidana' desc='Мини мобилограф прямиком из Китая'/> 
          <Card image={alan} name='Alan' desc='Журналист, со знаменитыми работами: "Когда празднуется 8 марта" и "День женьшеня"'/>
          <Card image={lyilya} name='Lyailya' desc='Чешский пивной барон, которого знают все, не знающий никого'/> 
          <Card image={kirya} name='Kirill' desc='Бывший блогер с самой милой улыбкой'/> 
          <a href='https://kandratiche.github.io/shalopriemnaya/'>
            <Card image={shalik} name='Shalopriemnaya' desc='See nudes'/>
          </a>
          <br/>
          <br/>
          <br/>
        </>
    );
    
  }
  
export default App
