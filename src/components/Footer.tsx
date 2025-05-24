import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">TROITON<span className="text-troiton-500">PROJECTS</span></h3>
            <p className="text-gray-400 mb-6">
              Soluções tecnológicas inovadoras para impulsionar o crescimento do seu negócio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-troiton-600 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-troiton-600 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-troiton-600 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-troiton-600 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">NEGÓCIOS E PRODUTOS</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-troiton-400 transition-colors">Implantação de Projetos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-troiton-400 transition-colors">Segurança da Informação</a></li>
              <li><a href="#" className="text-gray-400 hover:text-troiton-400 transition-colors">Service Desk</a></li>
              <li><a href="#" className="text-gray-400 hover:text-troiton-400 transition-colors">Análise de Dados</a></li>
              <li><a href="#" className="text-gray-400 hover:text-troiton-400 transition-colors">Consultoria em TI</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">LINKS RÁPIDOS</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-troiton-400 transition-colors">Início</Link></li>
              <li><Link to="/#servicos" className="text-gray-400 hover:text-troiton-400 transition-colors">Negócios e Produtos</Link></li>
              <li><Link to="/#sobre" className="text-gray-400 hover:text-troiton-400 transition-colors">Sobre Nós</Link></li>
              <li><Link to="/tecnologias" className="text-gray-400 hover:text-troiton-400 transition-colors">Eficiência Operacional</Link></li>
              <li><Link to="/#contato" className="text-gray-400 hover:text-troiton-400 transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">CONTATO</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Rua Werner Von Siemens, 111 - Lapa de Baixo - São Paulo, SP - Brasil</li>
              <li>projects@troiton.com.br</li>
              <li>+55 (11) 95823-1139</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Troiton Projects. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-troiton-400 text-sm transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-troiton-400 text-sm transition-colors">Termos de Serviço</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;