import SpotifyLogo from "./images/icons8-spotify-512.svg";

const loginUrl = `http://127.0.0.1:8000/`


function LoginCard() {

    const handleSubmit = () => {
        fetch(loginUrl).then(res => res.json()).then(data => {
            window.location.href = data.url
        }
        )

    };

    return (
        <div className="card p-5" style={{ width: "25rem" }}>
            <img src={SpotifyLogo} className="card-img-top" alt="..."></img>

            <label htmlFor="exampleInputEmail1" className="form-label">Login</label>

            <button onClick={handleSubmit} type="button" className="btn btn-secondary">Submit</button>
            
        </div>
    )
}


export default LoginCard;