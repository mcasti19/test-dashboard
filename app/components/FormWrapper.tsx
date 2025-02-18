"use client";
import { FC, useActionState } from 'react';
import Link from 'next/link';
import { CreateForm, CreateFormState, CustomerField } from 'anjrot-components';
import { createInvoice } from '../helpers/actions';



const FormWrapper: FC<{ customers: CustomerField[] }> = ({ customers }) => {
    const initialState: CreateFormState = { message: null, errors: {} }
    const [ state, formAction ] = useActionState(createInvoice, initialState);

    return (
        <CreateForm customers={customers} action={formAction} state={state} AnchorElement={Link} />
    )
}

export default FormWrapper;