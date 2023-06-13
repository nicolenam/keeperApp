const Footer = () =>{

    const date = new Date().getFullYear();

    return(
        <footer>
            <p>
                Made by Nej. using Firebase 🔥&copy; {date}
            </p>
        </footer>
    )
}

export default Footer;