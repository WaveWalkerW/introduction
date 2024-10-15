import Card from './card.js';
import Student from './student.js';
import User from './userg.js';
import Button from './btn.js'
import New from './new.js'


import kairat from './assets/picture.jpg';
import shama from './assets/shama.jpg';
import ama from './assets/ama.jpg';
import misha from './assets/misha.jpg';
import alan from './assets/alan.jpg';
import aidana from './assets/aidana.jpg';
import lyilya from './assets/lyailya.jpg';
import kirya from './assets/kirya.jpg';
import zema from './assets/zema.jpg';


function App() {

    const fruits = [
      {id:1, name:"apple", calories: 95}, 
      {id:2, name: "orange", calories: 45}, 
      {id:3, name: "banana", calories: 105}, 
      {id:4, name: "coconut", calories: 159}, 
      {id:5, name: "pineapple", calories: 37}];

    const vegetables = [
      {id:6, name:"potatoes", calories: 110}, 
      {id:7, name: "celery", calories: 15}, 
      {id:8, name: "carrots", calories: 45}, 
      {id:9, name: "corn", calories: 63}, 
      {id:10, name: "broccoli", calories: 50}];
      return(
        <>
        {/* <User isLoggedIn={true} username='Kairat'/>
        <Student username='Kairat' age='20' isStudent={true}/>
        <Student/> */}
        {/* {fruits.length > 0 ? <List items={fruits} category='Fruits'/> : null} 
        {vegetables.length > 0 ? <List items={vegetables} category='Vegetables'/> : null} */}
        
        <Button/>
        <Card image={kairat} name='Kairat' desc='Программист корейского происхождения'/> 
        <Card image={shama} name='Shamil' desc='Растегательный магнат, готовый скупить все булочки в столовой'/> 
        <Card image={ama} name='Amir' desc='Всемирно известный филосов'/> 
        <Card image={misha} name='Misha' desc='Пенсионер, которого можно раскрутить на деньги'/> 
        <Card image={zema} name='Zamir' desc='Волк, занимавшийся ремонтом котлов'/> 
        <Card image={aidana} name='Aidana' desc='Мини мобилограф прямиком из Китая'/> 
        <Card image={alan} name='Alan' desc='Журналист, со знаменитыми работами: "Когда празднуется 8 марта" и "День женьшеня"'/>
        <Card image={lyilya} name='Lyailya' desc='Чешский пивной барон, которого знают все, не знающий никого'/> 
        <Card image={kirya} name='Kirill' desc='Бывший блогер с самой милой улыбкой'/> 
        <New style={{display: 'none'}}/>
          <br/>
          <br/>
          <br/>
        </>
    );
    
  }
  
export default App
