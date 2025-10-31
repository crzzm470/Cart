import { Product } from "@/types/product";
import { JSX, useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.css";

interface ApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export function ProductList(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts(): Promise<void> {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://dummyjson.com/products?limit=12');
        
        if (!response.ok) {
          throw new Error('Error al cargar productos');
        }
        
        const data: ApiResponse = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    }
    
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>❌ {error}</p>
        <button onClick={() => window.location.reload()}>
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="products-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
