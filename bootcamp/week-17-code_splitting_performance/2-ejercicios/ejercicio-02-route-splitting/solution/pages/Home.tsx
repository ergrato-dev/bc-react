import { type FC } from 'react';

const Home: FC = () => {
  return (
    <div className="page home-page">
      <h1>Inicio</h1>
      <p>Bienvenido a la aplicación de Route Splitting.</p>
      <p>Navega entre las páginas para ver cómo se cargan los chunks.</p>
    </div>
  );
};

export default Home;
