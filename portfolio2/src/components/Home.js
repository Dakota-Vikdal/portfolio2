import TypingAnimation from './TypingAnimation'
import wave from '../assets/wave.gif';
import home_image from '../assets/home_image.webp'


function Home() {
    return (
        
            <div className='home'>
                <div className='gif'>
                    <h1>Hey there!</h1>
                    <div className='inside-gif'>
                        <img src={wave} alt="My GIF" style={{ width: '50px', height: 'auto' }} />
                    </div>
                </div>
                <div className='content'>
                    <div>
                        <h1>I'm Dakota Vikdal</h1>
                        <div className="animation">
                            {/* <h1><TypingAnimation /></h1> */}
                        </div>
                    </div>
                    
                </div>
                <div className="home-image">
                    <img src={home_image} alt='home image'style={{ width: '650px', height: 'auto' }}/>
                </div>
                
                
            </div>
            
    )
}

export default Home