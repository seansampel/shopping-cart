import Button from '@material-ui/core/Button';
//types
import { CartItemType } from '../App';
//styles
import { Wrapper } from './CartItem.styles';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItem) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = () => <div>Cart Item</div>;

export default CartItem;