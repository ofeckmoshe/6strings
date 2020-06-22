export const validate = (element, formData= []) => {
    let errors = [true, ''];

    if(element.validation.email){
        const valid = /\S+@\S+\.\S+/.test(element.value);
        const message = `${!valid ? 'Must be a valid email' : ''}`;
        errors = !valid ? [valid, message] : errors;
    }

    if(element.validation.confirm){
        const valid = element.value.trim() === formData[element.validation.confirm].value;
        const message = `${!valid ? 'Passwords do not match' : ''}`;
        errors = !valid ? [valid, message] : errors;
    }

    if(element.validation.required){
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'This field is required' : ''}`;
        errors = !valid ? [valid, message] : errors;
    }

    return errors
};

export const update = (element, formdata, formName ) => {
    const newFormdata = {
        ...formdata
    }
    const newElement = {
        ...newFormdata[element.id]
    }

    newElement.value = element.event.target.value;

    if(element.blur){
        let validData = validate(newElement,formdata);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];
    }

    newElement.touched = element.blur;
    newFormdata[element.id] = newElement;

    return newFormdata;
}

export const generateData = (formData, formName) => {
    let dataToSubmit = {};
   
    for(let key in formData) {
        if(key !== 'confirmPassword'){
            dataToSubmit[key] = formData[key].value;
        }
    }

    return dataToSubmit;
};

export const isFormValid = (formData, formName) => {

    let formIsValid = true;

    for(let key in formData) {
        formIsValid = formData[key].valid && formIsValid;
    }
    return formIsValid;
};

export const populateOptionFields= (formdata, arrayData = [], field) => {
    const newArray = [];
    const newFormdata = { ...formdata };

    arrayData.forEach(item => {
        newArray.push({key:item._id, value:item.name});
    });

    newFormdata[field].config.options = newArray;
    return newFormdata;
}

export const resetFields = (formdata, formName) => {
    const newFormdata = { ...formdata} ;

    for(let key in newFormdata){
        if(key === 'images'){
            newFormdata[key].value = [];
        }else{
            newFormdata[key].value = '';
        }

        newFormdata[key].valid = false;
        newFormdata[key].touched = false;
        newFormdata[key].validationMessage = '';
    }

    return newFormdata
}

export const populateFields = (formData, fields) => {

    for(let key in formData){
        formData[key].value = fields[key];
        formData[key].valid = true;
        formData[key].touched = true;
        formData[key].validationMessage = ''
    }

    return formData;
}
