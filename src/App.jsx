import { useState, useEffect } from 'react';
import Card from './card.jsx';
import Button from './btn.jsx';

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
    const [showCards, setShowCards] = useState(false);

    const handleToggle = () => {
        setShowCards((prev) => !prev);
    };

    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => {
            observer.observe(card);
        });

        return () => {
            cards.forEach(card => observer.unobserve(card));
        };
    }, [showCards]); 

    return (
        <>
            <Button onToggle={handleToggle} showCards={showCards} />
            {showCards && (
                <>
                    <a href='https://kandratiche.github.io/kairat/'>
                        <Card bgImage='https://www.park.edu/wp-content/uploads/2022/09/source-g0d609dba2_1920.jpg'
                            image={kairat}
                            name='Kairat'
                            desc='Программист корейского происхождения' />
                    </a>
                    <Card bgImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRub3FwkV9RqPbwHTHtLhS5RkA6Fw0dvasLEA&s'
                        image={shama}
                        name='Shamil'
                        desc='Растегательный магнат, готовый скупить все булочки в столовой' />
                    <a href='https://kandratiche.github.io/amir/'>
                        <Card bgImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjWsN14a5xkwoz8-iZzNlKAyzaJh8gmMACw&s'
                            image={ama}
                            name='Amir'
                            desc='Всемирно известный филосов' />
                    </a>
                    <a href='https://kandratiche.github.io/misha/'>
                      <Card bgImage='https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png'
                          image={misha}
                          name='Misha'
                          desc='Пенсионер, которого можно раскрутить на деньги' />
                    </a>
                    <Card bgImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4Js4J2ZcMWZKnduVfnvfMOdsmFqXMRE7hQ&s'
                        image={zema}
                        name='Zamir'
                        desc='Волк, занимавшийся ремонтом котлов' />
                    <Card bgImage='https://i.scdn.co/image/ab67616100005174df0b5ac84376a0a4b2166816'
                        image={aidana}
                        name='Aidana'
                        desc='Мини мобилограф прямиком из Китая' />
                    <Card bgImage='https://ih1.redbubble.net/image.3775132802.7474/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
                        image={alan}
                        name='Alan'
                        desc='Журналист, со знаменитыми работами: "Когда празднуется 8 марта" и "День женьшеня"' />
                    <a href='https://kandratiche.github.io/lyailya/'>
                      <Card bgImage='https://cdn.discordapp.com/attachments/802140450911158292/1298283167068717106/image.png?ex=6718ffeb&is=6717ae6b&hm=947f151a5fc89bbae53234c7467aee6e1c94262a034f5ec3c9abc115f2c3deaa&'
                          image={lyilya}
                          name='Lyailya'
                          desc='Чешский пивной барон, которого знают все, не знающий никого' />
                    </a>
                    <Card bgImage='https://yt3.googleusercontent.com/ytc/AIdro_kQ9Bnind5zsVoMofSb3CmmMiEbkwvtb7x2eRgHjpEKiRQ=s900-c-k-c0x00ffffff-no-rj'
                        image={kirya}
                        name='Kirill'
                        desc='Бывший блогер с самой милой улыбкой' />
                    <a href='https://kandratiche.github.io/shalopriemnaya/'>
                        <Card bgImage='https://cdn.worldvectorlogo.com/logos/my-little-pony-g4-logo.svg'
                            image={shalik}
                            name='Shaliki'
                            desc='See general site' />
                    </a>
                </>
            )}
            <br />
            <br />
            <br />
        </>
    );
}

export default App;
