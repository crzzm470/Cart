import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeContext';
import { ShoppingCart, Sun, Moon } from 'lucide-react';
import { JSX } from 'react';
import './Header.css';

interface HeaderProps {
  onCartClick: () => void;
}

export function Header({ onCartClick }: HeaderProps): JSX.Element {
  const { isDark, toggleTheme } = useTheme();
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <header className={`header ${isDark ? 'dark' : 'light'}`}>
      <div className="header-content">
        <h1>🛍️ Tienda</h1>
        <div className="header-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="cart-button" 
            onClick={onCartClick}
            aria-label={`Carrito de compras con ${itemCount} items`}
          >
            <ShoppingCart size={20} />
            {itemCount > 0 && (
              <span className="cart-badge">{itemCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

