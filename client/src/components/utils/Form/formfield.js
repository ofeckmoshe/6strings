import React from 'react';

const FormField = ({ formData, change, id }) => {

    const showErrors = () => {
        let errorsMessage = null;

        if(formData.validation && !formData.valid){
            errorsMessage = (
                <div className="error_label">
                    {formData.validationMessage}
                </div>
            )
        }
        return errorsMessage;
    };

    const renderTemplate = () => {
        let formTemplate = null;

        switch (formData.element) {
            case('input'):
                formTemplate = (
                    <div className="fromBlock">
                        <input 
                            {...formData.config}
                            value={formData.value}
                            onBlur={(event) => change({ event, id, blur: true })}
                            onChange={(event) => change({ event, id})}
                        />
                        {showErrors()}
                    </div>
                )
            break;
            default:
                formTemplate = null
        }

        return formTemplate
    };

    return (
        <div>
            {renderTemplate()}
        </div>
    );
};

export default FormField;