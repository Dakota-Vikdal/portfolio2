import projects from '../projects'
import ProjectCard from './ProjectCard'
function ProjectList() {

    const project = projects.map((project) => {
        return <ProjectCard key={project.id} {...project}/>
    })

    return (
        <section>
            <div className='container'>
                <div className='row mt-5'>
                    
                        {project}
                    
                </div>
            </div>
        </section>
    )
}


export default ProjectList