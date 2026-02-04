import { type FC } from 'react';

const Profile: FC = () => {
  return (
    <div className="page profile-page">
      <h1>Perfil</h1>
      <p>Esta página contiene información del usuario.</p>
      <div className="profile-info">
        <div className="avatar">👤</div>
        <h2>Usuario Demo</h2>
        <p>email@example.com</p>
      </div>
    </div>
  );
};

export default Profile;
