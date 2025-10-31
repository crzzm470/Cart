import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeContext';
import { ShoppingCart as CartIcon, X, Trash2 } from 'lucide-react';
import { JSX } from 'react';
import './Cart.css';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Cart({ isOpen, onClose }: CartProps): JSX.Element | null {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const { isDark } = useTheme();

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="cart-overlay" 
        onClick={onClose}
        aria-hidden="true"
      />
      <div 
        className={`cart-sidebar ${isDark ? 'dark' : 'light'}`}
        role="dialog"
        aria-label="Carrito de compras"
      >
        <div className="cart-header">
          <h2>🛒 Tu Carrito</h2>
          <button 
            className="close-btn" 
            onClick={onClose}
            aria-label="Cerrar carrito"
          >
            <X size={24} />
          </button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <CartIcon size={64} strokeWidth={1} />
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item : any) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="item-details">
                      <h4>{item.title}</h4>
                      <p className="item-price">${item.price.toFixed(2)}</p>
                      <div className="quantity-controls">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Disminuir cantidad"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Aumentar cantidad"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <p className="item-total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Eliminar ${item.title}`}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span className="total-amount">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <button className="checkout-btn">
                  Finalizar Compra
                </button>
                <button 
                  className="clear-cart-btn" 
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}