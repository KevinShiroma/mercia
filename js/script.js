import DropdownMenu from './modules/dropdown-menu.js';
import ativaHamburguer from './modules/hamburguer-menu.js';

const dropdown = new DropdownMenu('[data-dropdown]');
dropdown.init();
ativaHamburguer();