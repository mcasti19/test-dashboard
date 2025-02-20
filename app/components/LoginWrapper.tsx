"use client"
import { LoginForm } from "anjrot-components";
import { useActionState } from "react";
import { authenticate } from "../helpers/actions";
import { useSearchParams } from "next/navigation";

const LoginWrapper = () => {
    const searchParams = useSearchParams();
    const callBackUrl = searchParams.get('callBackUrl') || '/dashboard';
    const [ errorMessage, formAction] = useActionState(authenticate, undefined)

    return <LoginForm action={formAction} error={errorMessage} callbackurl={callBackUrl} />
}

export default LoginWrapper;