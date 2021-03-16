import React from 'react' // eu importo o react quando eu vou usar tag HTML
import './style.css'

import Header from './components/Header'


function Home() {
    return(
        <div>
            <Header/>
            <main className="main">
                <div className="navbar">
                    navbar
                </div>

                <div className="feed">
                    feed
                </div>
            </main>
        </div>
    )
}

export default Home