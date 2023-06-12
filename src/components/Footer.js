const Footer = () =>{

    const date = new Date().getFullYear();

    return(
        <footer>
            <p>
                Made by Nicole Nam 	&copy; {date}
            </p>
        </footer>
    )
}

export default Footer;