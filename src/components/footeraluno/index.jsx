import React from 'react';

const FooterAluno = () => {
    return (
        <footer id="myFooter">
        <div class="container">
        
            <div class="row">
                <img src={logo}                     
                    width={100} 
                    height={50} 
                    alt="Logo EduX" />
            <div class="col-sm-2">
                    <h5>Suporte</h5>
                    <ul>
                        <li><a >Email</a></li>
                        <li><a >Telefone</a></li>
                        <li><a>Whatsapp</a></li>
                    </ul>
                </div>
                <div class="col-sm-2">
                    <h5>Redes Sociais</h5>
                    <ul>
                        <li><a href="https://www.facebook.com/edux">Facebook</a></li>
                        <li><a href="https://www.instagram.com/ProjEdux/">Instagram</a></li>
                        <li> <a href= "https://twitter.com/projedux">Twitter</a></li>
                    </ul>
                </div>
                <img src={logo}                     
                    width={100} 
                    height={50} 
                    alt="Logo EduX" />
            </div>
        </div>
        <div class="footer-copyright">
            <div className="equipe">
                <h1>Grupo De 3</h1>
            </div>
            <small>
Developed by <a href="https://github.com/Yan-91/react-Edux">Bruno Vidal, Yan Ad'Vincula, Erick</a></small>
        </div>
    </footer>
    )
}

export default FooterAluno;