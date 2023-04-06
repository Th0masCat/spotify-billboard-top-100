import SpotifyLogo from "./images/icons8-spotify-512.svg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useTime, useTransform } from "framer-motion";


function DateInputCard() {
    const [date, setDate] = useState("2021-05-01");
    const [status, setStatus] = useState(true);
    const nav = useNavigate();

    const handleClick = () => {
        setStatus(false);
        axios.get("https://web-production-535b.up.railway.app/playlist",
            {
                params: {
                    date: date
                }
            }
        ).then(
            (response) => {
                console.log(response);
                setStatus(true)
                nav("/finish");
            }
        ).catch(
            (error) => {
                console.log(error);
            }

        )
    }

    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

    return (
        <>
            <motion.div style={status?
            null
            :
                {
                    rotate: rotate
                
                }
            }>
                <img src={SpotifyLogo} className="card-img-top" alt="..."></img>
            </motion.div>
            {status ?
                <form className="d-flex flex-column m-3">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter The Date:</label>
                        <input onChange={(e) => { setDate(e.target.value) }} type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        {console.log(date)}
                    </div>
                    <button onClick={handleClick} type="button" className="btn btn-secondary">Submit</button>
                </form>
                :
                <div className="d-flex justify-content-center mt-4">
                    <h1>Creating...</h1>
                </div>
            }
        </>
    )
}


export default DateInputCard;