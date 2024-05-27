import React, { useState, useEffect } from 'react';
import '../App.css';

export const App = () => {
  const [services, setServices] = useState([]); // Estado para armazenar a lista de serviços
  const [name, setName] = useState(''); // Estado para armazenar o nome do serviço
  const [description, setDescription] = useState(''); // Estado para armazenar a descrição do serviço
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar o modo de edição
  const [currentServiceId, setCurrentServiceId] = useState(null); // Estado para armazenar o ID do serviço sendo editado

  // Hook para carregar os serviços armazenados no localStorage quando o componente é montado
  useEffect(() => {
    const storedServices = localStorage.getItem('services');
    if (storedServices) {
      setServices(JSON.parse(storedServices));
    }
  }, []);

  // Hook para atualizar o localStorage sempre que a lista de serviços mudar
  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services));
  }, [services]);

  // Função para adicionar um novo serviço ou atualizar um serviço existente
  const handleAddService = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    if (isEditing) {
      // Edição de Serviços
      const updatedServices = services.map((service) =>
        service.id === currentServiceId ? { id: service.id, name, description } : service
      );
      setServices(updatedServices); // Atualiza a lista de serviços
      setIsEditing(false); // Sai do modo de edição
    } else {
      // Cadastro de Serviços
      const newService = { id: Date.now(), name, description };
      setServices([...services, newService]); // Adiciona o novo serviço à lista
    }
    setName(''); // Limpa o campo de nome
    setDescription(''); // Limpa o campo de descrição
  };

  // Função para preencher os campos de entrada com os dados do serviço a ser editado
  const handleEditService = (id) => {
    const service = services.find((service) => service.id === id);
    setName(service.name); // Define o nome do serviço a ser editado
    setDescription(service.description); // Define a descrição do serviço a ser editado
    setIsEditing(true); // Entra no modo de edição
    setCurrentServiceId(id); // Define o ID do serviço sendo editado
  };

  // Função para excluir um serviço da lista
  const handleDeleteService = (id) => {
    const updatedServices = services.filter((service) => service.id !== id);
    setServices(updatedServices); // Atualiza a lista de serviços
  };

  return (
    <div className="App">
      <h1>Gerenciador de Serviços</h1>
      
      {/* Formulário para cadastrar ou editar serviços */}
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

      {/* Contêiner para exibir a lista de serviços cadastrados */}
      <div className="services-container">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-details">
              <strong>{service.name}</strong>
              <p>{service.description}</p>
            </div>
            <div className="service-actions">
              {/* Botão para editar o serviço */}
              <button className="edit" onClick={() => handleEditService(service.id)}>Editar</button>
              {/* Botão para excluir o serviço */}
              <button onClick={() => handleDeleteService(service.id)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Rodapé com informações pedidas pelo prof */}
      <footer>
        <p>121 - DESENVOLVIMENTO DE APLICAÇÕES MÓVEIS 2024/1 </p>
        <p>Daniel Gonçalves Braga</p>
        <p>2021100990</p>
      </footer>
    </div>
  );
};