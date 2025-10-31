import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeContext';
import { Product } from '@/types/product';
import { JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps): JSX.Element {
  const { addToCart } = useCart();
  const { isDark } = useTheme();
  const navigate = useNavigate(); 

  const handleCardClick = () => {
    navigate(`/producto/${product.id}`); 
  };
  

  return (
    <div 
      className={`product-card ${isDark ? 'dark' : 'light'}`}
      onClick={handleCardClick} 
      role="button" 
      tabIndex={0}
    >
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} /> 
        {product.discountPercentage > 0 && (
          <span className="discount-badge">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <button 
            className="add-to-cart-btn"
            onClick={(e) => {
              e.stopPropagation(); 
              addToCart(product);
            }}
            aria-label={`Añadir ${product.title} al carrito`}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}