import '../homepage.css'
import VotingCard from './votingCard'
import {useState, useEffect} from 'react'





const votingCards = [{
    cardTitle: 'Parrot',
    image: '/images/parrot.jpg',
}, {
    cardTitle: 'Seal',
    image: '/images/seal.jpg',
}, {
    cardTitle: 'Giraffe',
    image: '/images/giraffe.jpg',
}, {
    cardTitle: 'Seal',
    image: '/images/seal.jpg',
},, {
    cardTitle: 'Seal',
    image: '/images/seal.jpg',
},, {
    cardTitle: 'Seal',
    image: '/images/seal.jpg',
},, {
    cardTitle: 'Seal',
    image: '/images/seal.jpg',
},, {
    cardTitle: 'Seal',
    image: '/images/seal.jpg',
},, {
    cardTitle: 'Seal',
    image: '/images/seal.jpg',
},]




function Homepage({ username, clickHandler}){
    const[date, setDate] = useState(new Date())
  



    useEffect(()=> {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    return(
        <div className='homepage'>
            <div className='top-content'>
                <div className='page-message'>
                    <h2>Hello, {username}</h2>
                </div>
                <div className = 'page-utilities'>
                    <button onClick={clickHandler}>Logout</button>
                    <div class='date'>
                        <label>{date.toLocaleDateString()}</label>
                        <label>{date.toLocaleTimeString()}</label>
                    </div>     
                </div>
            </div>
            <div className='voting-cards-component'>
                {votingCards.map((element, index) => 
                    <VotingCard
                        cardTitle={element.cardTitle}
                        image={element.image}
                        username={username}
                        index={index}
                    />
                )}
            </div>
        </div>
        
    )
}




export default Homepage