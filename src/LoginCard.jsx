import SpotifyLogo from "./images/icons8-spotify-512.svg";

const loginUrl = `https://web-production-535b.up.railway.app`


function LoginCard() {

    const handleSubmit = () => {
        fetch(loginUrl).then(res => res.json()).then(data => {
            window.location.href = data.url
        }
        )

    };

    return (
        <>
            <img src={SpotifyLogo} className="card-img-top" alt="..."></img>
                
            <button onClick={handleSubmit} type="button" className="btn btn-secondary mt-4">Login</button>
        </>
    )
}


export default LoginCard;