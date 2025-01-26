import { useEffect, useState } from 'react';
import Button from '../components/button';
import ColumnView from '../components/ColumView';
import Counters from '../components/counters';
import UserInput from '../components/UserInput';
import useSplitList from '../hooks/useSplitList';
import useTimer from '../hooks/useTimer';
import { apiData } from '../settings';

import '../styles/quiz.css';

export default function Quiz() {
    const [activate, setActivate] = useState(false);
    const [score, setScore] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(5 * 60);
    const maxScore = 50;
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);
    const dataView = useSplitList(apiData, 10);
    const [keyStatus, setKeyStatus] = useState(false);
    const [scoreType, setScoreType] = useState('Numerical');
    const [timerType, setTimerType] = useState('Default Timer');

    const checkInputValue = (value) => {
        setInputValue(value);

        if (apiData.includes(value) && !results.includes(value)) {
            setResults((prevValues) => [...prevValues, value]);
            setScore(score + 1);
        }
    };

    const resetApp = () => {
        setActivate(false);
        setScore(0);
        setResults([]);
    };

    const endQuis = () => {
        if (score === maxScore) {
            alert('Congratulations, you guessed all the keywords correctly.');
            resetApp();
        }
    };

    useEffect(() => {
        resetApp();

        if (timerType == 'Default Timer') {
            setTimeRemaining(5 * 60);
        } else {
            setTimeRemaining(10 * 60);
        }
    }, [timerType]);

    useEffect(() => {
        setInputValue('');
        endQuis();
    }, [keyStatus]);

    useTimer(activate, timeRemaining, setTimeRemaining, () =>
        setActivate(false),
    );

    return (
        <div className="page">
            <div className="page-content">
                <div className="quiz">
                    <div className="header">
                        <div className="header-left">
                            {activate ? (
                                <UserInput
                                    description="Enter keyword:"
                                    value={inputValue}
                                    action={checkInputValue}
                                />
                            ) : (
                                <Button
                                    text="PLAY QUIZ"
                                    onClick={() => setActivate(true)}
                                />
                            )}
                        </div>
                        <div className="header-counters">
                            <Counters
                                name="SCORE"
                                indicator={
                                    scoreType == 'Numerical'
                                        ? `${score}/${maxScore}`
                                        : `${Math.round((score / maxScore) * 100, 2)}%`
                                }
                                options={['Numerical', 'Percentage']}
                                action={(value) => setScoreType(value)}
                            />
                            <Counters
                                name="TIMER"
                                indicator={`${Math.floor(timeRemaining / 60)}:${(timeRemaining % 60).toString().padStart(2, '0')}`}
                                options={['Default Timer', 'Practice Mode']}
                                action={(value) => setTimerType(value)}
                            />
                        </div>
                    </div>
                    <div className="quiz-view">
                        {dataView.map((item) => {
                            return (
                                <ColumnView
                                    data={item}
                                    inputValue={inputValue}
                                    setKeyStatus={setKeyStatus}
                                    activate={activate}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
