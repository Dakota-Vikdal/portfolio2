function ProjectCard({name, about, link, image}) {

    console.log(name, about, link, image)
    return (
        <div className="col-md-4 mb-4">
            <li className="card h-100 p-2 hover-shadow" style={{ width: '18rem'}}>
            {/* // <li className='project-card'> */}
                
                <img src={image} alt={`${name}`} className='card-img-top'/>
                
                <section className="card-body d-flex flex-column">
                    <h4 className='card-title'>{name}</h4>
                    <p  className="card-text">{about}</p>
                    <div className="mt-auto">
                        <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary">View Project</a>
                    </div>
                </section>
            </li>
        </div>
    )
}


export default ProjectCard