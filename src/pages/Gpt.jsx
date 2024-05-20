import React, { useState, useEffect } from 'react';
import '../App.css';

export const App = () => {
  const [services, setServices] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentServiceId, setCurrentServiceId] = useState(null);

  // Carregar a lista de serviços do localStorage ao montar o componente
  useEffect(() => {
    const storedServices = localStorage.getItem('services');
    if (storedServices) {
      setServices(JSON.parse(storedServices));
    }
  }, []);

  // Salvar a lista de serviços no localStorage sempre que for atualizada
  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services));
  }, [services]);

  const handleAddService = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedServices = services.map((service) =>
        service.id === currentServiceId ? { id: service.id, name, description } : service
      );
      setServices(updatedServices);
      setIsEditing(false);
    } else {
      const newService = { id: Date.now(), name, description };
      setServices([...services, newService]);
    }
    setName('');
    setDescription('');
  };

  const handleEditService = (id) => {
    const service = services.find((service) => service.id === id);
    setName(service.name);
    setDescription(service.description);
    setIsEditing(true);
    setCurrentServiceId(id);
  };

  const handleDeleteService = (id) => {
    const updatedServices = services.filter((service) => service.id !== id);
    setServices(updatedServices);
  };

  return (
    <div className="App">
      <h1>Gerenciador de Serviços</h1>
      <form onSubmit={handleAddService}>
        <div>
          <label>Nome do Serviço:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">{isEditing ? 'Salvar Alterações' : 'Cadastrar Serviço'}</button>
      </form>
      <h2>Lista de Serviços</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <strong>{service.name}</strong>: {service.description}
            <button onClick={() => handleEditService(service.id)}>Editar</button>
            <button onClick={() => handleDeleteService(service.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
