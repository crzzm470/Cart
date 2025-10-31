import { JSX, useState } from 'react';
import { Header } from './components/Header/Header';
import { Cart } from './components/Cart/Cart';
import { useTheme } from './context/ThemeContext';
import './App.css';
import './assets/styles/global.css';
import './assets/styles/theme.css';

interface AppProps {
  children: React.ReactNode; 
}

export default function App({ children }: AppProps): JSX.Element {
  const [cartOpen, setCartOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Header onCartClick={() => setCartOpen(true)} /> 
      
      <main className="main-content">
        {children} 
      </main>
      
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}