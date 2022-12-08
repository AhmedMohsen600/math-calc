import './index.css';
import Layout from './layouts/main';
import PageRoutes from './router/page-routes';

const App = () => {
  return (
    <Layout>
      <PageRoutes />
    </Layout>
  );
};

export default App;
