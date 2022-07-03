import React from 'react';
import { Formik } from 'formik';
import { ButtonStyled, FormStyled, LabelStyled, FieldStyled } from "./PhoneBook.styled";


export const ContactForm = ({initialValues, onSubmit,  }) => {

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <FormStyled>
                <LabelStyled>Name
                    <FieldStyled
                    
                    type="text"
                    name="name"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    />
                </LabelStyled>
                <LabelStyled>Number
                    <FieldStyled
                    
                    type="tel"
                    name="number"
                    />
                </LabelStyled>
                <ButtonStyled type="submit">Add Contact</ButtonStyled>
            </FormStyled>
            
        </Formik>
    )

}