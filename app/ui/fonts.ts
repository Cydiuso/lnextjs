import { Inter, Lusitana, Roboto_Mono, Bungee } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
});

export const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    display: 'swap'
})

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: '700'
})

export const bungee = Bungee({
    subsets: ['latin'],
    weight: '400',
    
});