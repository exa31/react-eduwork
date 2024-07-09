import LandingPage from './pages/Index';
import Form from './pages/Form';

import { useState } from 'react';
import FormSuccess from './pages/FormSuccess';

function App() {

  const [showForm, setShowForm] = useState(true);
  const [success, setSuccess] = useState(false);
  const [successName, setSuccessName] = useState('');


  const handleSuccess = (nama) => {
    setSuccess(!success);
    setSuccessName(nama);
  }

  return (
    <div className="App">
      <button className='btnForm' onClick={() => setShowForm(!showForm)}>{!showForm ? 'Buka Form' : 'Buka page'}</button>
      {!showForm ? <LandingPage /> : !success ? <Form handleSuccess={handleSuccess} /> : <FormSuccess name={successName} success={success} setSuccess={setSuccess} />}

    </div>
  );
}

export default App;
