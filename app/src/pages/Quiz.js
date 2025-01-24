import { useState } from 'react';

import Button from '../components/button';
import Counters from '../components/counters';

import '../styles/quiz.css';

export default function Quiz() {
    const [activate, setActivate] = useState(false);
    const [score, setScore] = useState(0);
    const maxScore = 50;

    return (
        <div className="page">
            <div className="page-content">
                <div className="header">
                    <div className="header-button">
                        <Button text="Play Quiz" />
                    </div>
                    <div className="header-counters">
                        <Counters
                            name="SCORE"
                            indicator={`${score}/${maxScore}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
