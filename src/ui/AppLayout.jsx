import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';
import Loader from './Loader';
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div
      className=" grid-row-3 grid h-screen 
    grid-rows-[auto_1fr_auto]
    "
    >
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* <h1>content</h1> 
        outlet are used for nested routes (child routes)
      */}
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
