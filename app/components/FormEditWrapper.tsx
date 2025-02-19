"use client";
import { FC, useActionState } from 'react';
import Link from 'next/link';
import { CreateForm, CreateFormState, CustomerField, InvoiceForm } from 'anjrot-components';
import { updateInvoice } from '../helpers/actions';



const FormEditWrapper: FC<{ customers: CustomerField[]; invoice: InvoiceForm }> = ({ customers, invoice }) => {
    const initialState: CreateFormState = { message: null, errors: {} }
    const [ state, formAction ] = useActionState(updateInvoice, initialState);

    return (
        <CreateForm customers={customers} state={state} action={formAction} invoice={invoice} AnchorElement={Link} />
    )
}

export default FormEditWrapper;