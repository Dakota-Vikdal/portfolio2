import {cards, tools} from '../cards'
import './About.css'


function About() {

    return(
        <div className='container'>
            <div className='row pt-5 mt-5'>
                <div className="col-sm-7">

                    <h3 style={{textAlign: 'center', marginBottom: 50}}><strong>Professional Skillset</strong></h3>
                    <div className="row">
                        {cards.map((cardObj) => {
                            return (
                                <div key={cardObj.id} className="col-md-4 mb-4">
                                    <div className='card'>
                                        <img className="card-img-top" src={cardObj.image} alt={`${cardObj.name} logo`}/>
                                        <div className='card-body'>
                                            <h5><strong>{cardObj.name}</strong></h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <h3 style={{textAlign: 'center', margin: 50}}><strong>Tools I use</strong></h3>
                    <div className='row'>
                        {tools.map((toolObj) => {
                            return (
                                <div key={toolObj.id} className="col-md-4 mb-4">
                                    <div className='card'>
                                        <img className="card-img-top" src={toolObj.image} alt={`${toolObj.name} logo`}/>
                                        <div className='card-body'>
                                            <h5><strong>{toolObj.name}</strong></h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
                <div className='col-sm-5 blockquote'>
                    <h3>About me</h3>
                    <p>Welcome to my portfolio. As you can tell this part of the journey is 'About me'. So, what about me?
                        First off, my name is Dakota Vikdal. I am currently living in Vermont, but grew up in Alaska. 
                        I am a Full-Stack Web Developer with a preference for Front-end Development. I graduated from Flatiron
                        School with a deep yearning to learn more about my field and to become a highly skilled developer. I found that
                        such a task should not be taken lightly and that this path is a long one, full of ups and downs. Over the past year and 
                        a half I have learned a deep sense of perseverance, grit, and patience.

                        Shifting from Massage to tech was tough but my skills have developed as time has passed. 

                        A few loves of mine include physical fitness, videogames, cinema, family time, and eating.
                        There are many more bits of life that I enjoy such as coding and taichi, but I'll leave it how it is.
                    </p>
                </div>
                
            </div>
        </div>
        
    )
}

export default About