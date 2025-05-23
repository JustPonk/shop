import { Link, Outlet } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export const Layout = () => {
  const { state } = useStore();
  const cartItemsCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              TechStore
            </Link>
            <nav className="flex items-center space-x-8">
              <Link
                to="/products"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Productos
              </Link>
              <Link
                to="/cart"
                className="relative text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-10 mt-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">TechStore</h3>
            <p className="text-sm">Tu destino para la última tecnología. Explora nuestra amplia selección de productos de alta calidad.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="hover:text-white transition-colors">Productos</Link></li>
              <li><Link to="/cart" className="hover:text-white transition-colors">Carrito</Link></li>
              <li><Link to="/checkout" className="hover:text-white transition-colors">Checkout</Link></li>
              <li><Link to="/profile" className="hover:text-white transition-colors">Mi Cuenta</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@techstore.com</li>
              <li>Teléfono: +123 456 7890</li>
              <li>Dirección: Calle Principal 123, Ciudad Tecnológica</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
            {/* Puedes añadir íconos de redes sociales aquí */}
            <div className="flex space-x-4">
              {/* Ejemplo de ícono (requeriría una librería de íconos o SVGs) */}
              {/* <a href="#" className="hover:text-white transition-colors"><i className="fab fa-facebook"></i></a> */}
              {/* <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter"></i></a> */}
              {/* <a href="#" className="hover:text-white transition-colors"><i className="fab fa-instagram"></i></a> */}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} TechStore. Todos los derechos reservados. Milton Bruno Escalantre Mattos.
        </div>
      </footer>
    </div>
  );
}; 