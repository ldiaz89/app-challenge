import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const menuSections = [
  ["Modelos", "Servicios y Accesorios", "Financiancion", "Reviews y Comunidad"],
  ["Toyota Mobility Service", "Toyota Gazoo Racing", "Toyota Híbridos"],
  ["Concesionarios", "Test Drive", "Contacto"],
  ["Actividades", "Servicios al Cliente", "Ventas Especiales", "Innovación", "Prensa", "Acerca de..."]
];

function HamburgerMenu({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) {
  return (
    <div>
      <div className="flex items-center cursor-pointer" onClick={toggleMenu}>
        {isOpen ? (
          <div className="flex gap-2">
            <span className="hidden md:text-black md:block">Cerrar</span>
            <X size={24} color="black" />
          </div>
        ) : (
          <div className="flex gap-2">
            <span className="hidden md:text-black md:block">Menu</span>
            <Menu size={24} color="black" />
          </div>
        )}
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute top-[60px] right-[10px] w-[300px] bg-white border-b shadow-lg z-10">
          <ul className=" text-black">
            {menuSections.map((section, index) => (
              <div key={index} className={`flex flex-col items-end border-b-[2px] border-gray-400 ${index === menuSections.length - 1 ? 'bg-gray-400' : ''}`}>
                {section.map((item, idx) => (
                  <li key={idx} className="py-2 mr-[10px]">{item}</li>
                ))}
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
