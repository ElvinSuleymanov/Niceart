interface Leads {
    id:number;
    title:string | null;
    tag:string | null;
    heading: string | null;
    description:string | null;
    file:{
        id:number;
        url:string | null;
    } |null;
}