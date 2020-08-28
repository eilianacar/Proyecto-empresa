import React, { useEffect, useState, useRef } from 'react';
import '../styles/Timer.css'
const Timer = () => {
    /*   const [timerDays, setTimerDays] = useState('00'); */
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        /*  const countdownDate = new Date('August 28, 2020 00:00:00').getTime(); */
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance =/*  countdownDate - */ now;

            /*  const days = Math.floor(distance / (1000 * 60 * 60 * 24)); */
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //stop our timer
                clearInterval(interval.current);
            } else {
                /*  setTimerDays(days); */
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });
    return (
        <main className='timerContainer'>
            {/*  <section>
                <p>{timerDays}</p>
                <p><small>dias</small></p>
            </section> */}
            <section>
                <p>{timerHours}</p>
                <p><small>Horas</small></p>
            </section>
            <section>
                <p>{timerMinutes}</p>
                <p><small>Minutos</small></p>
            </section>
            <section>
                <p>{timerSeconds}</p>
                <p><small>Segundos</small></p>
            </section>
        </main>
    );
}

export default Timer;