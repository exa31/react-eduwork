import Error from '../component/Error';
import Input from '../component/Input';
import '../styles/FormStyle.css';
import { useState } from 'react';

function Form({ handleSuccess }) {

    const [error, setError] = useState([]); // menampung pesan error

    const [value, setValue] = useState({ // menampung value dari inputan
        name: '',
        email: '',
        age: '',
        message: ''
    });

    const handleChange = (input, label) => { // mengubah value inputan
        setValue({ ...value, [label]: input });
    }

    const handleSubmit = (e) => { // mengecek value inputan dan memberikan hasil submit
        e.preventDefault();

        let messageError = [];


        if (value.name === '' && value.email === '' && value.age === '' && value.message === '') { // mengecek apakah semua inputan kosong
            messageError = [...messageError, 'Please fill all the fields'];
            return setError(messageError);
        }

        if (value.name === '') { // mengecek apakah inputan name kosong
            messageError = [...messageError, 'Name is required'];
        }

        if (value.email === '') { // mengecek apakah inputan email kosong
            messageError = [...messageError, 'Email is required'];
        }

        const re = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim; // regex untuk mengecek email

        if (!re.test(String(value.email).toLowerCase())) { // mengecek apakah email valid
            messageError = [...messageError, 'Email not valid'];
        }

        if (value.age === '') { // mengecek apakah inputan age kosong
            messageError = [...messageError, 'Age is required'];
        }

        if (value.message === '') { // mengecek apakah inputan message kosong
            messageError = [...messageError, 'Message is required'];
        }

        if (value.name.length < 3) { // mengecek apakah inputan name kurang dari 3 karakter
            messageError = [...messageError, 'Name must be at least 3 characters'];
        }

        if (messageError.length === 0) { // mengecek apakah tidak ada pesan error apabila tidak ada form succes dijalankan
            handleSuccess(value.name);
            alert(`Name: ${value.name} \nEmail: ${value.email} \nAge: ${value.age} \nMessage: ${value.message}`);
            setValue({
                name: '',
                email: '',
                age: '',
                message: ''
            })


            messageError = []
            setError(messageError);
        }
        setError(messageError);
    }


    return (

        <>
            <form onSubmit={handleSubmit} id='regist' >
                {/* menampilkan message error */}
                {error.length > 0 &&
                    error.map((error, index) => <Error key={index} error={error}
                    />)}
                <Input setValue={handleChange} value={value.name} label='name' labels="Name" type='text' />
                <Input setValue={handleChange} value={value.email} label='email' labels="Email" type='email' />
                <Input setValue={handleChange} value={value.age} label='age' labels="Age" type='number' />
                <label htmlFor="message">Messege</label>
                <textarea
                    onChange={(e) => handleChange(e.target.value, 'message')}
                    placeholder='Message to us'
                    rows="20"
                    value={value.message}
                    id="message" />
                <button className='btnForm'>Submit</button>
            </form >
        </>
    )
}

export default Form;