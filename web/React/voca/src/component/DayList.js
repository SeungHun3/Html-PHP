import { Link } from "react-router-dom";
import dummy from "../db/data.json";
import { useEffect, useState } from "react";

export default function Daylist() {
    const [days, setDays] = useState([]);
    // 한번만 호출
    useEffect(() => {
        fetch("http://localhost:3001/days")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setDays(data);
                console.log(data);
            })
    }, []);


    return (
        <>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}