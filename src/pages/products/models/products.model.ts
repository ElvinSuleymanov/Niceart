
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
class ProductModel implements Product {
    public about: {
        id: number;
        title: string;
        description: string;
    } = { id: 0, title: '', description: '' }; 
    public features: {
        amount: string;
        comission: string;
        initialPayment: string;
        percentage: string;
        period: string;
    } = { amount: '', comission: '', initialPayment: '', percentage: '', period: '' };
    public file: {
        id: number;
        url: string;
    } = { id: 0, url: '' }; 
    constructor(item: Product) {
        this._setId(item.about.id);
        this._setTitle(item.about.title);
        this._setDescription(item.about.description);
        this._setAmount(item.features.amount);
        this._setCommision(item.features.comission);
        this._setInitialPayment(item.features.initialPayment);
        this._setPercentage(item.features.percentage);
        this._setPeriod(item.features.period);
        this._setFileId(item.file.id);
        this._setFileUrl(item.file.url);
    }
    

  private _setId(id: number) {
    this.about.id = id;
  }

  private _setTitle(title: string ) {
    this.about.title = title   }

  private _setDescription(description: string ) {
    this.about.description = description;
  }
  private _setAmount(amount:string){
    this.features.amount = amount;
   }
   private _setCommision(comission:string){
    this.features.comission = comission;
   }
   private _setInitialPayment(initialPayment:string){
    this.features.initialPayment = initialPayment;
   }
   private _setPercentage(percentage:string){
    this.features.percentage = percentage;
   }
   private _setPeriod(period:string){
    this.features.period = period;
   }
  private _setFileId(fileId: number) {
    this.file.id = fileId;
  }
  private _setFileUrl(fileUrl: string) {
    this.file.url = fileUrl;
  }

}
export default ProductModel;
