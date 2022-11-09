import './App.css'
import MainPage from './components/mainPage'
import Homepage from './components/homePage'

import { useState, useEffect } from 'react'



function App() {
    const [pageToShow, setPageToShow] = useState('mainPage')
    const [user, setUser] = useState('')

    function handleLoginButton(textInputValue) {
        setUser(textInputValue)
    }

    useEffect(() => {
        if (user) {
            //console.log('I see ' + localStorage.getItem('bob'))
            if (localStorage.getItem(user) === null) {
                localStorage.setItem(user, JSON.stringify([0, 0, 0]))
            }
            setPageToShow('homePage')
        } else {
            setPageToShow('mainPage')
        }
    }, [user])

    function handleLogoutButton() {
        setUser('')
    }

    return (
        <div className="app-container">
            <div className="app-content">
                {pageToShow === 'mainPage' && <MainPage
                    clickHandler={handleLoginButton}
                />}
                {pageToShow === 'homePage' && <Homepage
                    username= {user}
                    clickHandler={handleLogoutButton}
                />}
            </div>

            <footer>
                &copy;
                {new Date().getFullYear()}
                &nbsp;
                Ines Simonica
            </footer>
        </div>
    )
    
    }

export default App;
