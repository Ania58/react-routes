
import projects from '../src/data/projects';

function Projects() {
    return (
        <>
        <h1>My Projects</h1>
        {projects.map(project =>{
            const {id,name,image,description,url} = project
            return (
                <div key={id} className="project">
                    <h2>{name}</h2>
                    <img src={image} alt={`${name} image`} />
                    <p>{description}</p>
                    <a href={url} target="_blank">View Project</a>
                </div>
            );
        })}
        </>
    )
}









export default Projects