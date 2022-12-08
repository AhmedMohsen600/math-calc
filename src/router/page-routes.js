import { Routes, Route } from 'react-router-dom';
import { Calculator, Header } from '../components';
import { Home, Quote } from '../pages';
import * as ROUTES from '../constant/routes';

export default function PageRoutes() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path={ROUTES.CALCULATOR} element={<Calculator />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.QUOTE} element={<Quote />} />
      </Route>
    </Routes>
  );
}
