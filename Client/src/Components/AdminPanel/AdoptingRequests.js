import React, { useState, useEffect } from 'react';
import FormCard from './FormCard';

const AdoptingRequests = () => {
  const [forms, setForms] = useState([]);
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [petDetailsPopup, setPetDetailsPopup] = useState(false); 
  const [selectedPet, setSelectedPet] = useState(null); 
  const [selectedPetId, setSelectedPetId] = useState(''); 

  const fetchForms = async () => {
    try {
      const response = await fetch('http://51.20.183.104:4000/form/getForms');
      if (!response.ok) {
        throw new Error('An error occurred');
      }
      const data = await response.json();
      setForms(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPets = async () => {
    try {
      const response = await fetch('http://51.20.183.104:4000/approvedPets');
      if (!response.ok) {
        throw new Error('An error occurred');
      }
      const data = await response.json();
      setPets(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchForms();
    fetchPets();
  }, []);

  const petsWithRequests = pets.filter((pet) =>
    forms.some((form) => form.petId === pet._id)
  );

  const displayPetDetails = (pet) => {
    setSelectedPet(pet);
    setPetDetailsPopup(true);
  };

  const closePetDetailsPopup = () => {
    setPetDetailsPopup(false);
    setSelectedPet(null); 
  };

  const handlePetChange = (event) => {
    setSelectedPetId(event.target.value);
  };

  const filteredPets = selectedPetId
    ? petsWithRequests.filter(pet => pet._id === selectedPetId)
    : petsWithRequests;

  return (
    <div>
      
      {loading ? (
        <p>Loading...</p>
      ) : filteredPets.length > 0 ? (
        filteredPets.map((pet) => {
          const petForms = forms.filter((form) => form.petId === pet._id);
          return (
            <div key={pet._id} className='form-container'>
              <div>
                <h2 className='clickable-pet-name' onClick={() => displayPetDetails(pet)}>
                  {pet.name}
                </h2>
              </div>
              <div className='form-child-container'>
                {petForms.map((form) => (
                  <FormCard
                    key={form._id}
                    form={form}
                    pet={pet}
                    updateCards={fetchForms}
                    deleteBtnText={'Reject'}
                    approveBtn={true}
                  />
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <p>No acquried requests available for any blood.</p>
      )}

      {petDetailsPopup && selectedPet && (
        <div className='popup'>
          <div className='popup-content'>
            <div className='pet-view-card'>
              <div className='pet-card-pic'>
                <img src={`http://51.20.183.104:4000/images/${selectedPet.filename}`} alt={selectedPet.name} />
              </div>
              <div className='pet-card-details'>
                <h2>{selectedPet.name}</h2>
                <p><b>Type:</b> {selectedPet.type}</p>
                <p><b>Age:</b> {selectedPet.age}</p>
                <p><b>Location:</b> {selectedPet.area}</p>
                <p><b> Email:</b> {selectedPet.email}</p>
                <p><b> Phone:</b> {selectedPet.phone}</p>
                <p><b>Consent:</b> {selectedPet.justification}</p>
              </div>
            </div>
            <button onClick={closePetDetailsPopup} className='close-btn'>
              Close <i className="fa fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdoptingRequests;
