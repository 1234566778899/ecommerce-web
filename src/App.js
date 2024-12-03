import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomeApp } from './components/client/HomeApp';
import { DetailsApp } from './components/client/DetailsApp';
import { Admin } from './components/admin/Admin';
import { ListProduct } from './components/admin/ListProduct';
import { Dashboard } from './components/admin/Dashboard';
import { ListOrder } from './components/admin/ListOrder';
import { ListCustomer } from './components/admin/ListCustomer';
import { Coleccions } from './components/admin/Coleccions';
import { AddProduct } from './components/admin/AddProduct';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeApp />} />
        <Route path='/home' element={<HomeApp />} />
        <Route path='/details/:id' element={<DetailsApp />} />
        <Route path='/admin' element={<Admin />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products' element={<ListProduct />} />
          <Route path='clients' element={<ListCustomer />} />
          <Route path='orders' element={<ListOrder />} />
          <Route path='add-product' element={<AddProduct />} />
          <Route path='collections' element={<Coleccions />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
