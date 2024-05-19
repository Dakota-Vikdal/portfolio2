import image1 from '../assets/footer/linkedin-logo.webp'
import image2 from '../assets/footer/github-logo.png'
import image3 from '../assets/footer/email-logo.png'

function Footer() {
    return(
        <div style={{textAlign: 'center', marginTop: 50, marginBottom: 30}}>
            <h1>Let's Connect!</h1>
                <a className='footer' href='https://www.linkedin.com/in/dakota-vikdal/' target="_blank" rel="noreferrer"><img src={image1} alt='linkedin logo'style={{height: '40px', width:'40px'}}/></a>
                <a className='footer' href='https://github.com/Dakota-Vikdal' target="_blank" rel="noreferrer"><img src={image2} alt='github logo'style={{height: '40px', width:'40px'}}/></a>
                <a className='footer' href="mailto:dakota.james19@hotmail.com" target="_blank" rel="noreferrer"><img src={image3} alt='email logo'style={{height: '40px', width:'40px'}}/></a>
        </div>
    )
}

export default Footer 