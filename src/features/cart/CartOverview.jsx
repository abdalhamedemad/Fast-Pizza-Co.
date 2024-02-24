import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice } from './cartSlice';
import { getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';
function CartOverview() {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  if (totalCartQuantity === 0) return null;
  return (
    <div
      className="  flex items-center justify-between  bg-stone-800 px-4 py-4 text-sm uppercase 
    text-stone-200  sm:px-6 md:text-base"
    >
      <p
        className="text-stone-
      300 space-x-4 font-semibold sm:space-x-6"
      >
        <span>{totalCartQuantity} pizzas</span>
        <span>${formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
