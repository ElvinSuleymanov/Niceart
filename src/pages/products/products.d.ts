export interface Product {
   about:{
    id: number;
    title: string;
    description: string;
   }
    features: {
      amount: string;
      comission: string;
      initialPayment: string;
      percentage: string;
      period: string;
    },
    file: {
      id: number;
      url: string;
    };
  };