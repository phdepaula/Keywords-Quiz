import { useState } from 'react';
import Button from '../components/button';
import Counters from '../components/counters';
import useTimer from '../hooks/useTimer';

import '../styles/quiz.css';

export default function Quiz() {
    const [activate, setActivate] = useState(false);
    const [score, setScore] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(5 * 60);
    const maxScore = 50;

    useTimer(activate, timeRemaining, setTimeRemaining, () =>
        setActivate(false),
    );

    return (
        <div className="page">
            <div className="page-content">
                <div className="header">
                    <div className="header-button">
                        <Button
                            text="PLAY QUIZ"
                            onClick={() => setActivate(true)}
                        />
                    </div>
                    <div className="header-counters">
                        <Counters
                            name="SCORE"
                            indicator={`${score}/${maxScore}`}
                        />
                        <Counters
                            name="TIMER"
                            indicator={`${Math.floor(timeRemaining / 60)}:${(timeRemaining % 60).toString().padStart(2, '0')}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
