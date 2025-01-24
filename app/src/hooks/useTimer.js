import { useEffect } from 'react';

export default function useTimer(
    activate,
    timeRemaining,
    setTimeRemaining,
    action,
) {
    useEffect(() => {
        if (timeRemaining <= 0) {
            action();
        } else if (activate) {
            const timeInterval = setInterval(() => {
                setTimeRemaining(timeRemaining - 1);
            }, 1000);

            return () => clearInterval(timeInterval);
        }
    }, [activate, timeRemaining]);
}
