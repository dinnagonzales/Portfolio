import React, { useEffect, useRef } from 'react';

export const renderElapsedString = (elapsed, runningSince) => {
    let totalElapsed = elapsed;
    if (runningSince) {
        totalElapsed += Date.now() - runningSince;
    }
    return millisecondsToHuman(totalElapsed);
}

export const millisecondsToHuman = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
        pad(hours.toString(), 2),
        pad(minutes.toString(), 2),
        pad(seconds.toString(), 2),
    ].join(':');

    return humanized;
}

export const prepTimers = (timodoro) => {
    let updatedTimer = timodoro.timers;
    var start = 0;

    updatedTimer.forEach((t, i) => {
        const durationInSeconds = t.duration * 60;

        t.durationInSeconds = durationInSeconds;
        t.start = i === 0 ? start : start + 1;
        t.end = start + durationInSeconds;

        start = start + durationInSeconds;
    });

    return { ...timodoro, timers: updatedTimer };

}

export const useInterval = function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
  