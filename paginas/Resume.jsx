import {studies, experiences} from '../src/data/resume'

function Resume () {
    return (
        <>
            <h1>My Resume</h1>
            
            <h2>Education</h2>
            {studies.map(({ id, title, institution, date }) => (
                <div key={id} className="resume-entry">
                    <h3>{title}</h3>
                    <p>{institution}</p>
                    <p>{date}</p>
                </div>
            ))}
            
            <h2>Experience</h2>
            {experiences.map(({ id, title, company, date }) => (
                <div key={id} className="resume-entry">
                    <h3>{title}</h3>
                    <p>{company}</p>
                    <p>{date}</p>
                </div>
            ))}
        </>
    );
}







export default Resume;