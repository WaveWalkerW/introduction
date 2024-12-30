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
                    <a href='https://kairat.vercel.app/'>
                        <Card bgImage='https://www.park.edu/wp-content/uploads/2022/09/source-g0d609dba2_1920.jpg'
                            image={kairat}
                            name='Kairat'
                            desc='Программист корейского происхождения' />
                    </a>
                    <a href='https://shamil-seven.vercel.app/'>
                        <Card bgImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRub3FwkV9RqPbwHTHtLhS5RkA6Fw0dvasLEA&s'
                            image={shama}
                            name='Shamil'
                            desc='Растегательный магнат, готовый скупить все булочки в столовой' />
                    </a>
                    <a href='https://amir-six.vercel.app/'>
                        <Card bgImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjWsN14a5xkwoz8-iZzNlKAyzaJh8gmMACw&s'
                            image={ama}
                            name='Amir'
                            desc='Всемирно известный филосов' />
                    </a>
                    <a href='https://misha-phi.vercel.app/'>
                      <Card bgImage='data:image/png;base64,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'
                          image={misha}
                          name='Misha'
                          desc='Пенсионер, которого можно раскрутить на деньги' />
                    </a>
                    <a href='https://zamir.vercel.app/'>
                        <Card bgImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4Js4J2ZcMWZKnduVfnvfMOdsmFqXMRE7hQ&s'
                            image={zema}
                            name='Zamir'
                            desc='Волк, занимавшийся ремонтом котлов' />
                    </a>
                    <a href='https://aidana.vercel.app/'>
                        <Card bgImage='https://i.scdn.co/image/ab67616100005174df0b5ac84376a0a4b2166816'
                            image={aidana}
                            name='Aidana'
                            desc='Мини мобилограф прямиком из Китая' />
                    </a>
                    <a href='https://alan-nu.vercel.app/'>
                    <Card bgImage='https://ih1.redbubble.net/image.3775132802.7474/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
                        image={alan}
                        name='Alan'
                        desc='Журналист, со знаменитыми работами: "Когда празднуется 8 марта" и "День женьшеня"' />
                    </a>
                    <a href='https://lyailya.vercel.app/'>
                      <Card bgImage='https://www.istudentzone.cz/underwood/download/images/kozel.jpg'
                          image={lyilya}
                          name='Lyailya'
                          desc='Чешский пивной барон, которого знают все, не знающий никого' />
                    </a>
                    <a href='https://kirill-lovat.vercel.app/'>
                        <Card bgImage='https://yt3.googleusercontent.com/ytc/AIdro_kQ9Bnind5zsVoMofSb3CmmMiEbkwvtb7x2eRgHjpEKiRQ=s900-c-k-c0x00ffffff-no-rj'
                            image={kirya}
                            name='Kirill'
                            desc='Бывший блогер с самой милой улыбкой' />
                    </a>
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
