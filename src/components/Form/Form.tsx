import React, { useState } from 'react';
import './Form.css';

const Form = (props: FormProps) => {
  const [title, setTitle] = useState(props.title);

  const onTitleChange = (e: any) => {
    setTitle(e.target.value)
    props.onTitleChange(title);
  }

  return (<div>
    <input type="text" name="title" className="form-input" value={title} onChange={onTitleChange} />
  </div>);
}

interface FormProps {
  title: string;
  onTitleChange: any;
}

export default Form;
