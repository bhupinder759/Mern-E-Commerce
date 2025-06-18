import { Label } from '@radix-ui/react-label'
import React from 'react'
import { Input } from '../ui/input';
import { Select, SelectContent, SelectValue } from '@radix-ui/react-select';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const CommonForm = ({formControls, formData, setFormData, onSubmit, buttonText }) => {

    function renderInputByComponentType(getControleItem) {
        let element = null;
        const value = formData[getControleItem.name] || "";

        switch (getControleItem.componentType) {
            case "input": 
                element = ( <Input
                    name={getControleItem.name}
                    placeholder={getControleItem.placeholder}
                    id={getControleItem.name}
                    type={getControleItem.type}
                    value={value}
                    onChange={event => setFormData({
                        ...formData,
                        [getControleItem.name]: event.target.value
                    })}
                    />
                );
                break;

            case "select": 
                element = ( 
                    <Select 
                    onValueChange={(value) => setFormData({
                        ...formData,
                        [getControleItem.name]: value
                    })}
                    value={value}
                   
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={getControleItem.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                getControleItem.options &&
                                getControleItem.options.length > 0 ?
                                getControleItem.options.map(optionItem=> <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>) : null
                            }
                        </SelectContent>
                    </Select>
                );
                break;

            case "textarea": 
                element = ( 
                    <Textarea 
                    name={getControleItem.name}
                    placeholder={getControleItem.placeholder}
                    id={getControleItem.name}
                    value={value}
                    onChange={event => setFormData({
                        ...formData,
                        [getControleItem.name]: event.target.value
                    })}
                    />
                );
                break;
            
            default:
                element = ( <Input
                    name={getControleItem.name}
                    placeholder={getControleItem.placeholder}
                    id={getControleItem.name}
                    type={getControleItem.type}
                    onChange={event => setFormData({
                        ...formData,
                        [getControleItem.name]: event.target.value
                    })}
                    />
                );
                break;
        }
    }
  return (
    <form onSubmit={onSubmit}>
      <div className='flex flex-col gap-3'>
        {
            formControls.map(controlItem => <div className='grid w-full gap-1.5' key={controlItem.name}>
                <Label className='mb-1'>{controlItem.label}</Label>
                {renderInputByComponentType(controlItem)}
            </div>)
        }
      </div>
      <Button type="submit" className="mt-2 w-full">{buttonText || "Submit"}</Button>
    </form>
  )
}

export default CommonForm
