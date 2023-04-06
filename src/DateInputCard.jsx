import SpotifyLogo from "./images/icons8-spotify-512.svg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function DateInputCard() {
    const [date, setDate] = useState("2021-05-01");
    const [status, setStatus] = useState(true);
    const nav = useNavigate();

    const handleClick = () => {
        setStatus(false);
        axios.get("http://127.0.0.1:8000/playlist",
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



    return (
        <div className="card p-5" style={{ width: "25rem" }}>
            <img src={SpotifyLogo} className="card-img-top" alt="..."></img>
            { status?
                <form className="d-flex flex-column m-3">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Enter The Date:</label>
                    <input onChange={(e)=>{setDate(e.target.value)}} type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {console.log(date)}
                </div>
                <button onClick={handleClick}  type="button" className="btn btn-secondary">Submit</button>
            </form>
            :
            <div>
                <h1>Loading</h1>
            </div>
            }
        </div>
    )
}


export default DateInputCard;