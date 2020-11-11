export const inputTypes = {
    TEXT: 'text',
    EMAIL: 'email'
};

export const validateInput = (inputValue, inputType, isRequired) => {
    if (isRequired && inputValue.trim() === '') {
        return 'This field is required.'
    }
    switch (inputType) {
        case inputTypes.EMAIL:
            return validateEmail(inputValue)
                ? null
                : 'Please fill out a valid email. Ex.) abc@email.com';
        case inputTypes.TEXT:
        default:
            return null;
    }
}

const validateEmail = value => {
    const emailRegex = /^[\w-\.]{2-60}+@([\w-]{2-60}+\.)+[\w-]{2,6}$/g;
    return emailRegex.test(value);
};
