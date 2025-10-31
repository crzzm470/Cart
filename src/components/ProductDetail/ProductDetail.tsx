import { JSX, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeContext';
import { Product } from '@/types/product';
import './ProductDetail.css';

export function ProductDetail(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isDark } = useTheme();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const [mainImage, setMainImage] = useState<string>(''); 

  useEffect(() => {
    if (!id) return;

    async function fetchProductDetail(): Promise<void> {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://dummyjson.com/products/${id}`);

        if (!response.ok) {
          throw new Error('Error al cargar los detalles del producto');
        }

        const data: Product = await response.json();
        setProduct(data);
        setMainImage(data.thumbnail || (data.images && data.images.length > 0 ? data.images[0] : '')); 

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido al cargar el detalle');
      } finally {
        setLoading(false);
      }
    }
    
    fetchProductDetail();
  }, [id]);

  useEffect(() => {
      if (product) {
          setMainImage(product.thumbnail || (product.images && product.images.length > 0 ? product.images[0] : ''));
      }
  }, [product]);


  if (loading) {
    return <div className="loading-detail">Cargando detalles... ⏳</div>;
  }

  if (error) {
    return <div className="error-detail">❌ {error}</div>;
  }
  
  if (!product) {
      return <div className="not-found-detail">Producto no encontrado.</div>;
  }

  return (
    <div className={`product-detail-page ${isDark ? 'dark' : 'light'}`}>
      <button 
          className="back-button" 
          onClick={() => navigate(-1)} 
          aria-label="Volver a la lista de productos"
      >
          &larr; Volver
      </button>

      <h1 className="product-title">{product.title}</h1>
      <p className="product-category">Categoría: <span>{product.category}</span></p>

      <div className="detail-content">
        <div className="detail-images">
          {mainImage && (
            <img src={mainImage} alt={product.title} className="main-image" />
          )}
          
          {product.images && product.images.length > 0 && (
            <div className="gallery">
                {product.images.map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt={`${product.title} ${index + 1}`} 
                        className={img === mainImage ? 'active' : ''} 
                        onClick={() => setMainImage(img)} 
                    />
                ))}
            </div>
          )}
        </div>

        <div className="detail-info">
          <p className="description">{product.description}</p>
          <p className="brand">Marca: <strong>{product.brand}</strong></p>
          
          <hr className="detail-separator" />
          
          <div className="product-specs">
             <p>SKU/Código: <span>{product.id}</span></p>
             <p>Peso (aprox): <span>{product.weight || 'N/A'}</span></p>
             <p>Dimensiones: <span>{product.dimensions ? `${product.dimensions.width}x${product.dimensions.height}x${product.dimensions.depth} cm` : 'N/A'}</span></p>
          </div>

          <hr className="detail-separator" />

          <div className="price-box">
            <div className="price-group">
                <span className="current-price">${product.price.toFixed(2)}</span>
                {product.discountPercentage > 0 && (
                    <span className="discount-tag">
                        Ahorra {Math.round(product.discountPercentage)}%
                    </span>
                )}
            </div>
            <span className="rating">⭐ {product.rating.toFixed(1)}</span>
          </div>
          
          <p className="stock-status">Stock: {product.stock > 0 ? `${product.stock} unidades` : 'Agotado'}</p>

          <button
            className="add-to-cart-btn-large"
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}