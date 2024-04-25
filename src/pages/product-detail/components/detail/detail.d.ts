import { ReactNode } from 'react';

interface IDetailProps {
    title:string | null,
    icon?:ReactNode,
    value:string | undefined,
    children?:ReactNode
}