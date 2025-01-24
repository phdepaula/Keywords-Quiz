import { useState } from 'react';

import { Button } from '../components/button';

import '../syles/quiz.css';

export default function Quiz() {
    const [activate, setActivate] = useState(false);

    console.log(activate);

    return (
        <div className="header">
            <div className="header-button">
                <Button text="Play Quiz" action={() => setActivate(true)} />
            </div>
            <div></div>
        </div>
    );
}
