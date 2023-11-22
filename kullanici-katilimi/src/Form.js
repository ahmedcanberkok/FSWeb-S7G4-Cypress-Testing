import axios from "axios";
import { useState, useEffect } from 'react';
import { object, string, boolean } from 'yup';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import './Form.css';
function Forms() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    tos: false,
  });

  const [kullanıcılar, setKullanıcılar] = useState([ ]);

  const schema = object().shape({
    firstName: string()
      .required('İsim zorunlu.')
      .min(2, "İsim En az 2 karakter olmali! "),
    lastName: string()
      .required('Soyisim zorunlu.')
      .min(2, "İsim En az 2 karakter olmali! "),
    email: string()
      .email('Invalid email address')
      .required('Email gerekli'),
    password: string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password gerekli'),
    tos: boolean()
      .oneOf([true], 'You must accept the terms of service'),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await schema.validate(form, { abortEarly: false });

      const response = await axios.post('https://reqres.in/api/users', form);
      console.log(response.data);

      // Kullanıcıları güncellemek için eski kullanıcılar state'ini kopyalayın ve yeni kullanıcıyı ekleyin
      setKullanıcılar(prevKullanıcılar => [...prevKullanıcılar, response.data]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <FormGroup>
        <Label>
          First Name:
          <Input
            type="text"
            value={form.firstName}
            onChange={(e) => setForm({...form, firstName: e.target.value})}
          />
        </Label>
        </FormGroup>
        <FormGroup>
        <Label>
          Last Name:
          <Input
            type="text"
            value={form.lastName}
            onChange={(e) => setForm({...form, lastName: e.target.value})}
          />
        </Label>
        </FormGroup>
        <FormGroup>
        <Label>
          Email:
          <Input
            type="email"
            value={form.email}
            onChange={(e) => setForm({...form, email: e.target.value})}
          />
        </Label>
        </FormGroup>
        <FormGroup>
        <Label>
          Password:
          <Input
            type="password"
            value={form.password}
            onChange={(e) => setForm({...form, password: e.target.value})}
          />
        </Label>
        </FormGroup>
        <FormGroup>
        <Label>
          Terms of Service:
          <Input
            type="checkbox"
            checked={form.tos}
            onChange={(e) => setForm({...form, tos: e.target.checked})}
          />
        </Label>
        </FormGroup>
        <FormGroup>
        <Button type="submit" onClick={handleSubmit}>
          Gönder
        </Button>
      </FormGroup>
      
      <div>
        <h2>Kullanıcılar</h2>
        <pre>{JSON.stringify(kullanıcılar, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Forms;
