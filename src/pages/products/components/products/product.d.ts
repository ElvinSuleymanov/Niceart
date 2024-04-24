import { ReactNode } from 'react';

interface IProductProps { 
    id:string | number,
    image?:string,
    title:string,
    text:string,
    duration:string,
    priceRange:string,
    interestRateRange:string,
    children?:ReactNode
}