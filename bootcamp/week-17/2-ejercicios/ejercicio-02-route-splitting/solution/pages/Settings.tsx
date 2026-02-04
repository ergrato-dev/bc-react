import { type FC } from 'react';

const Settings: FC = () => {
  return (
    <div className="page settings-page">
      <h1>Configuración</h1>
      <p>Ajusta las preferencias de la aplicación.</p>
      <div className="settings-list">
        <div className="setting-item">
          <span>Tema oscuro</span>
          <input
            type="checkbox"
            defaultChecked
          />
        </div>
        <div className="setting-item">
          <span>Notificaciones</span>
          <input type="checkbox" />
        </div>
        <div className="setting-item">
          <span>Idioma</span>
          <select defaultValue="es">
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
