import { FC, PropsWithChildren } from 'react';
import '@/app/ui/globals.css';
import { roboto } from './ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: "%s | CastDev",
        default: "CastDev"
    },
    description: "Dashboard hecho siguiendo el Tutorial NextJS de Anjrot Dev"

}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html>
            <body className={`${roboto.className} antialiased`}>
                {children}
            </body>
        </html>
    )
}

export default RootLayout