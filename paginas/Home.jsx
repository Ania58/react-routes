
import { Link } from 'react-router-dom';


function Home () {
    return (
        <>
        <h1>Welcome to my website</h1>
        <h2>Here's what you can find out about me</h2>
        <div className='links'>
            <Link to = {'/projects'}>Check out my projects</Link>
            <Link to = {'/resume'}>Check out my education and experience</Link>
        </div>
        </>
    )
}

export default Home;