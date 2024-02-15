function ProjectCard({name, about, link, image}) {

    console.log(name, about, link, image)
    return (
        <li className='project-card'>
            <figure className='image'>
                <img src={image} alt={`${name} image.`}/>
            </figure>
            <section className='card-content'>
                <h4 className='card-title'>{name}</h4>
                <p  className="card-description">{about}</p>
                <a href={link} className="card-link">View Project</a>
            </section>
        </li>
    )
}


export default ProjectCard