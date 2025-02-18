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
    console.log('validatedFields: ', validatedFields);

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
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YWU1OTY3YWZmMTY4N2MwMDdjOTk2ZSIsImVtYWlsIjoibmV4dFR1dG9yaWFsMkB0ZXN0LmNvbSIsInVzZXJuYW1lIjoibmV4dFR1dG9yaWFsMiIsImlhdCI6MTczOTkwMjE0MywiZXhwIjoxNzM5OTA1NzQzfQ.pDBhFJ8iRbbL2160gqrfll9KzQGwzBlTJH0Cod3t9CU"
            },
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