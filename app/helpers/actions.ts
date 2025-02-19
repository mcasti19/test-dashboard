'use server';

import { CreateFormState } from 'anjrot-components';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const headers = {
    "Content-type": "application/json",
    Authorization: `${process.env.TOKEN}`

}

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string({
        invalid_type_error: "Please select a customer."
    }),
    amount: z.coerce.number().gt(0, { message: "Please enter an amount greater than $0." }),
    status: z.enum([ "pending", "paid" ], {
        invalid_type_error: "Please select an invoice status."
    }),
    date: z.string()
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ date: true });

export const createInvoice = async (prevState: CreateFormState, formData: FormData) => {
    console.log('Entrando a createInvoices');

    const validatedFields = CreateInvoice.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });
    // console.log('validatedFields: ', validatedFields);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields, Failed to create Invoice. '
        }
    }
    const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[ 0 ];

    const body = {
        status,
        date,
        amount: amountInCents,
        customer: customerId
    }

    try {
        console.log("headers >>>>", headers);

        await fetch(`${process.env.API_URL}/invoices/`, {
            headers,
            method: "POST",
            body: JSON.stringify(body)
        })
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create Invoice',
            error
        }
    }
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices')
}

export const updateInvoice = async (prevState: CreateFormState, formData: FormData) => {
    console.log('Entrando a createInvoices a UPDATE INVOICES: ', formData);

    const validatedFields = UpdateInvoice.safeParse({
        id: formData.get('invoiceId'),
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields, Failed to Update Invoice. '
        }
    }
    const { customerId, amount, status, id } = validatedFields.data;
    const amountInCents = amount * 100;

    const body = {
        status,
        amount: amountInCents,
        customer: customerId
    }

    try {
        console.log("headers >>>>", headers);

        await fetch(`${process.env.API_URL}/invoices/${id}`, {
            headers,
            method: "PUT",
            body: JSON.stringify(body)
        })
    } catch (error) {
        return {
            message: 'Database Error: Failed to Update Invoice',
            error
        }
    }

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices')
}


export const deleteInvoice = async (formData: FormData) => {
    throw new Error("probandito el Error en DELETE");
    const id = formData.get('invoiceId');

    try {
        console.log("headers >>>>", headers);

        await fetch(`${process.env.API_URL}/invoices/${id}`, {
            headers,
            method: "DELETE",
        })
        revalidatePath('/dashboard/invoices');
        
    } catch (error) {
        return {
            message: 'Database Error: Failed Deleting Invoice',
            error
        }
    }
}