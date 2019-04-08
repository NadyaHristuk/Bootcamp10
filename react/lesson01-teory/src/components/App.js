import React from 'react';
import Panel from './Panel';
import ProfileDetails from './ProfileDetails';
import TechList from './TechList';
import ProductList from './ProductList';
import products from '../products.json';

const tech = [
  { id: 'id-1', name: 'JS' },
  { id: 'id-2', name: 'React' },
  { id: 'id-3', name: 'React Router' },
  { id: 'id-4', name: 'Redux' }
];

const App = () => (
  <div>
    <Panel title="Latest tech">
      <TechList items={tech} />
    </Panel>

    <Panel title="Top seeling products">
      <ProductList products={products} />
    </Panel>
  </div>
);

export default App;
