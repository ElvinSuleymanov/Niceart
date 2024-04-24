


interface IContactFileResponse {
    record: {id:number, url:string}[],
    metadata:{
        id: string,
        private: boolean,
        createdAt: string,
        collectionId: string,
        name: string
    }   
}

interface IContactResponse {
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