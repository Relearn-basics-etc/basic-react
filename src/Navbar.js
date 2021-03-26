import "./Navbar.css";

const Navbar = () => {
    return(
        <div className='Navbar'>
            <a className='home' href='/'>Home</a>
            <a className='projects' href='/projects'>Projects</a>
            <a className='blog' href='/blog'>Blog</a>
        </div>
    )
}

export default Navbar;