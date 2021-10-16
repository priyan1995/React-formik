import React from 'react';
import { Checkbox } from './Checkbox';
import { Input } from './Input';
import { RadioInput } from './RadioInput';
import { Select } from './Select';
import { Textarea } from './Textarea';

const FormikControl = (props) => {
    const { control, ...rest } = props;

    switch (control) {
        case 'input': return <Input {...rest} />
        case 'textarea': return <Textarea {...rest} />
        case 'select': return <Select {...rest} />
        case 'radio': return <RadioInput {...rest} />
        case 'checkbox': return <Checkbox {...rest} />
        case 'date':
        default: return null
    }
}

export default FormikControl;