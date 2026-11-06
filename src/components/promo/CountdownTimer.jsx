import { useEffect, useState } from "react";

function CountdownTimer(){
    const targetDate = new Date("2026-12-01T00:00:00");

    const calculateTimeLeft = () =>{
        const difference = targetDate - new Date();

        if (difference <= 0){
            return {
                days:0,
                hours:0,
                minutes:0,
                seconds:0
            }
        }

        return {
            days:Math.floor(difference/(1000*60*60*24)),
            hours:Math.floor((difference/(1000*60*60))%24),
            minutes: Math.floor((difference / (1000*60))%60),
            seconds:Math.floor((difference/1000)%60)
        }
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
    useEffect(() =>{
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
        return ()=>clearInterval(timer);
    },[])

    return (
        <div className="flex justify-center gap-5 text-center">
            <div>
                <p className="text-3xl font-semibold">
                    {String(timeLeft.days).padStart(2,"0")}
                </p>
                <span className="text-sm text-gray-500">Days</span>
            </div>
            <span className="text-3xl">:</span>
            <div>
                <p className="text-3xl font-semibold">
                    {String(timeLeft.hours).padStart(2, "0")}
                </p>
                <span className="text-sm text-gray-500">
                    Hours
                </span>
            </div>
            <span className="text-3xl">:</span>
            <div>
                <p className="text-3xl font-semibold">
                    {String(timeLeft.minutes).padStart(2, "0")}
                </p>
                <span className="text-sm text-gray-500">
                    Minutes
                </span>
            </div>
            <span className="text-3xl">:</span>
            <div>
                <p className="text-3xl font-semibold">
                    {String(timeLeft.seconds).padStart(2, "0")}
                </p>
                <span className="text-sm text-gray-500">
                    Seconds
                </span>
            </div>
        </div>
    )
}

export default CountdownTimer;