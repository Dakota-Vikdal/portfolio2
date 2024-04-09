import projects from '../projects'
import ProjectCard from './ProjectCard'
function ProjectList() {

    const project = projects.map((project) => {
        return <ProjectCard key={project.id} {...project}/>
    })

    return (
        <section>
            <ul className='project-card-container'>
                {project}
            </ul>
        </section>
    )
}


export default ProjectList