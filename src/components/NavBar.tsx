import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.svg';
import imageCard1 from '@/assets/administradores-de-sistemas-em-centros-de-dados-integrando-ferramentas-de-automacao-impulsionadas-por-ia.jpg';
import imageCard2 from '@/assets/plantas-que-crescem-no-solo.jpg';

const navItems = [
  {
    title: 'A Troiton',
    links: [
      { name: 'Apresentação', path: '/apresentacao' },
      { name: 'Estratégia', path: '/estrategia' },
      { name: 'Governança', path: '/governanca' },
      { name: 'Compliance', path: '/compliance' },
    ],
  },
  {
    title: 'Sustentabilidade',
    links: [
      { name: 'Meio ambiente e biodiversidade', path: '/meio-ambiente' },
      { name: 'Mudanças climáticas', path: '/clima' },
      { name: 'Responsabilidade social', path: '/social' },
      { name: 'Comunidade e sociedade', path: '/comunidade' },
    ],
  },
  {
    title: 'Tecnologia',
    links: [
      { name: 'Inovação', path: '/inovacao' },
      { name: 'Automação', path: '/automacao' },
      { name: 'IA e Dados', path: '/ia-dados' },
      { name: 'Infraestrutura', path: '/infraestrutura' },
    ],
  },
];

const Dropdown = ({ section }) => (
  <div className="absolute left-0 w-full bg-white text-green-900 shadow-lg mt-2 flex p-6 z-50">
    <div className="w-1/2">
      <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
      <ul className="space-y-2">
        {section.links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="font-medium hover:text-green-700 transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="w-1/2 flex gap-4">
      {[imageCard1, imageCard2].map((img, i) => (
        <div
          key={i}
          className="relative w-1/2 h-40 bg-cover bg-center rounded-xl overflow-hidden shadow"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-semibold bg-gradient-to-t from-black/70 to-transparent p-2 rounded">
            Acesse <span className="ml-2 inline-block w-4 h-4 bg-green-700 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <header className="bg-green-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/">
          <img src={logo} alt="Logo Troiton" className="h-8" />
        </Link>
        <nav className="flex gap-8 items-center relative">
          {navItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.title)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1 font-semibold hover:text-green-300">
                {item.title}
                <ChevronDown size={16} />
              </button>
              {openMenu === item.title && <Dropdown section={item} />}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
