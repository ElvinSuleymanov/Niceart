import {ILang} from '../assets/lang/lang';

export interface IState {
    loader: boolean;
    leftMenu: boolean;
    languages: ILanguages[];
    locale: any;
    user: any | null;
    contact:IContact | null
}


export interface ILanguages {
    id: number;
    key: ILang;
    value: string;
}


interface IContact {
    record: {
        callcenter:string
        email:string
        location:string
        phone:string
    },
    metadata:{
        id: string,
        private: boolean,
        createdAt: string,
        collectionId: string,
        name: string
    }    
}