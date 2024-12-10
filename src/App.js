import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomeApp } from './pages/client/HomeApp';
import { DetailsApp } from './pages/client/DetailsApp';
import { Admin } from './pages/admin/Admin';
import { ListProduct } from './pages/admin/ListProduct';
import { Dashboard } from './pages/admin/Dashboard';
import { ListOrder } from './pages/admin/ListOrder';
import { ListCustomer } from './pages/admin/ListCustomer';
import { Coleccions } from './pages/admin/Coleccions';
import { AddProduct } from './pages/admin/AddProduct';
import { ListApp } from './pages/client/ListApp';
import { MainContextApp } from './contexts/MainContextApp';
import { MapViewApp } from './pages/admin/MapViewApp';
import { ContactApp } from './pages/client/ContactApp';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainContextApp />}>
          <Route index element={<HomeApp />} />
          <Route path='home' element={<HomeApp />} />
          <Route path='products' element={<ListApp />} />
          <Route path='contact' element={<ContactApp />} />
          <Route path='details/:id' element={<DetailsApp />} />
        </Route>
        <Route path='/admin' element={<Admin />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products' element={<ListProduct />} />
          <Route path='clients' element={<ListCustomer />} />
          <Route path='orders' element={<ListOrder />} />
          <Route path='add-product' element={<AddProduct />} />
          <Route path='collections' element={<Coleccions />} />
          <Route path='map/:lat/:lng' element={<MapViewApp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
