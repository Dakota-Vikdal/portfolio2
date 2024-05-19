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
                                    <div className='card' style={{ borderRadius: '25px' }}>
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
                                    <div className='card' style={{ borderRadius: '25px' }}>
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
                    <h3 style={{marginBottom: 30}}><strong>About me</strong></h3>
                    <p>Hello, I'm <strong>Dakota Vikdal</strong> from <strong>Anchorage, Alaska</strong>.
                    <br/><br/>
                    We shall begin at a time of transition
                    when I changed from being a Massage Therapist to a <strong>Software Engineer</strong>. This journey began in 2022.
                    I was young, naive and full of hope—oh, how things change... Just kidding. Let's get to it.
                    <br/><br/>
                    In 2022/2023, I attended <strong>Flatiron School</strong>, where I became a <strong>Full Stack Developer</strong>.
                    This was a great experience; however, I left the school feeling like there was still so much to learn and improve upon.
                    Thus, the journey continued. 
                    <br/><br/>
                    Shortly after graduating, I ventured deep into the territory of Python scripting. 
                    After a number of months, I shifted my focus to front-end development once again, starting with JavaScript. I entrenched myself in 
                    vanilla code, but as all front-end developers do, I found my way back to React, the beautiful maiden 
                    herself.</p>
                    <br/> 
                    <h4 style={{marginBottom: 30, marginTop:30}}><strong>Outside of work, my passions include:</strong></h4>
                    <ul style={{ paddingLeft: '40px' }}>
                        <li>Spending time with the <strong>family</strong> (dnd night, movies, gym time, etc.)</li>
                    <br/><br/>
                        <li>Videogames (Currently crushing it in <strong>Fallout 4</strong> as well as <strong>LOL</strong>—don't hold it against me)</li>
                    <br/><br/>
                        <li>Lastly, I have a deep and abiding love for <strong>food</strong>.</li>
                    </ul>
                </div>
                
            </div>
        </div>
        
    )
}

export default About



{/* <p>Welcome to my portfolio. As you can tell this part of the journey is 'About me'. So, what about me?
                        First off, my name is Dakota Vikdal. I am currently living in Vermont, but grew up in Alaska. 
                        I am a Full-Stack Web Developer with a preference for Front-end Development. I graduated from Flatiron
                        School with a deep yearning to learn more about my field and to become a highly skilled developer. I found that
                        such a task should not be taken lightly and that this path is a long one, full of ups and downs. Over the past year and 
                        a half I have learned a deep sense of perseverance, grit, and patience.

                        Shifting from Massage to tech was tough but my skills have developed as time has passed. 

                        A few loves of mine include physical fitness, videogames, cinema, family time, and eating.
                        There are many more bits of life that I enjoy such as coding and taichi, but I'll leave it how it is.
                    </p> */}