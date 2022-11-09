import { useState } from 'react'
import '../mainPage.css'

function MainPage({ clickHandler }) {
    const [textInput, setTextInput] = useState('')


    function handleButtonClick() {
        clickHandler(textInput)

    }

    function handleChange(e) {
        setTextInput(e.target.value)
    }

    
    return(
        <div className='main-page'>
            <div className='login-card'>
                <div className='top-login-card'>
                    <label>Username </label>
                    <input type='text' value={textInput} onChange={(e) => handleChange(e)}/>
                </div>
                <div className='bottom-login-card'>
                    <button onClick={handleButtonClick}>Login</button>
                </div>
                
                
                
            </div>
        </div>

    )
}

export default MainPage