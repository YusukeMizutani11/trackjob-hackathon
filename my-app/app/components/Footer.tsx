import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => {
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <footer>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="name">名前</label>
            <input id="name" {...register('name', { required: true })} />
            {errors.name && <span>名前は必須です</span>}
        </div>
        <div>
            <label htmlFor="email">メールアドレス</label>
            <input id="email" type="email" {...register('email', { required: true })} />
            {errors.email && <span>メールアドレスは必須です</span>}
        </div>
        <div>
            <label htmlFor="message">お問い合わせ内容</label>
            <textarea id="message" {...register('message', { required: true })}></textarea>
            {errors.message && <span>お問い合わせ内容は必須です</span>}
        </div>
        <button type="submit">送信</button>
        </form>
    </footer>
  );
};

export default ContactForm;
