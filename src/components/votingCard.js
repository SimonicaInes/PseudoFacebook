import '../votingCard.css'
import Score from './score'

export default function VotingCard({ cardTitle, image, username, index }) {
    return (
        <div className="voting-card">
            <label className="card-title">{cardTitle}</label>
            <div className="img-container">
                <img src={process.env.PUBLIC_URL + image} />
            </div>
            <Score
                username={username}
                index={index}
            />
        </div>
    )
}
