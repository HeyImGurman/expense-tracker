import "./LandingCard.css"
import MoneyImg from "../assets/money-img.png"

export default function LandingCard() {
    return(
        <>
            <div className="image-wrapper">
            <div className="card">

            <p className="card-text">Track daily expenses and develop smart financial state</p>
            <h1>Spend Smarter, Live better</h1>
            <p className="landing-description-text">An elegant expense tracker built to help you understand where your money goes and make smarter financial decisions.</p>
            <a></a>

            </div>
            <img src={MoneyImg} />
            </div>  
        </>
    );
}