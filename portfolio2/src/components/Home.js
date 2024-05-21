import TypingAnimation from './TypingAnimation'
import wave from '../assets/wave.gif';
import home_image from '../assets/home_image.webp'



function Home() {
    return(

    <div className='container d-flex flex-column justify-content-center align-items-center' style={{ minHeight: 'calc(100vh - 100px)'}}>
      <div className='row w-100'>
        <div className='col-md-6 d-flex flex-column align-items-center'>
          <div className='d-flex align-items-center mb-4'>
            <h1>Hey there!</h1>
            <div className='inside-gif'>
              <img src={wave} alt="My GIF" style={{ width: '50px', height: 'auto' }} />
            </div>
          </div>
          <div className='text-center mb-4'>
            <h1>I'm Dakota Vikdal</h1>
            <div className="animation">
              <h1><TypingAnimation /></h1>
            </div>
          </div>
        </div>
        <div className='col-md-6 d-flex justify-content-center align-items-start'>
          <img src={home_image} alt="Home" className="img-fluid home-image" />
        </div>
      </div>
    </div>
    )
}

export default Home