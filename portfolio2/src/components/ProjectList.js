import projects from '../projects'
import ProjectCard from './ProjectCard'
function ProjectList() {

    const project = projects.map((project) => {
        return <ProjectCard key={project.id} {...project}/>
    })

    return (
        <section>
            <h2>Projects</h2>
            <ul>
                {project}
            </ul>
        </section>
    )
}


export default ProjectList