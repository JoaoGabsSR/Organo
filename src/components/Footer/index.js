import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-h">
            <ul className="footer-icon">
                <li><a href="#" target="_blank"><img src="/images/fb.png" alt=""/></a></li>
                <li><a href="#" target="_blank"><img src="/images/tw.png" alt=""/></a></li>
                <li><a href="#" target="_blank"><img src="/images/ig.png" alt=""/></a></li>
            </ul>
            <img src="/images/logo.png" alt="logo organo"/>
            <h4>Desenvolvido por João com tutoria das aulas da Alura</h4>
        </div>
    );
}

export default Footer;
