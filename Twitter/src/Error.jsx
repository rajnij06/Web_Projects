function Error(props) {
    return (
        <nav className="error" onClick={ () => props.setIsErrorPage(false) }>
            <span className="tag-line">Incorrect log in user name</span>
            <a>Go back to LogIn page</a>
        </nav>
    );
}
export default Error;