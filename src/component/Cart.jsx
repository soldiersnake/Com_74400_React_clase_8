import { addDoc, collection } from "firebase/firestore/lite";
import { useCart } from "../context/CartContext";
import { db } from "../config/firebaseConfig";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const { cart, removeFromCart, cleanCart, getTotal } = useCart();
  const { user } = useUser()

  // almacenar carrito de compras
  const confirmarCompra = async () => {
    try {
      // Crea una referencia a la colección "compra"
      const comprasRef = collection(db, "compra");

      // Agrega el documento a Firestore
      const docRef = await addDoc(comprasRef, {
        comprador:{
          nombre: user?.name ?? 'Sin Identificar', // usuario quien compra
          telefono: '623558426',
          email: 'mail@mail.com'
        },
        cart, // compra
        total: getTotal() ?? '0',
        fecha: new Date().toISOString(), // Fecha de la compra
      });

      cleanCart(); //limpiamos el carrito por medio del hook
      console.log("Documento agregado con ID:", docRef.id);
    } catch (e) {
      console.error("Error al agregar documento:", e);
    }
  }

  return (
    <div className="cart">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>El carrito está vacío.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <span>
                {item.name} - {item.quantity} x {item.price}
              </span>
              <button
                className="cart-button"
                onClick={() => removeFromCart(item.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={confirmarCompra}>
        Comprar
      </button>
    </div>
  );
};

export default Cart;
