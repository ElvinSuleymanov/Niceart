export interface Partners {
    id: number;
    name: string | null;
    description: string | null;
    file: { id: number; url: string } | null;
    site: string | null;
    tag: string | null;
}

class PartnersModel implements Partners {
    public id: number;
    public name: string | null = null;
    public description: string | null = null;
    public file: { id: number; url: string } | null = null;
    public site: string | null = null;
    public tag: string | null = null;

    constructor(item: Partners) {
        this.id = (item.id);
        this._setName(item.name);
        this._setDescription(item.description);
        this._setFile(item.file);
        this._setSite(item.site);
        this._setTag(item.tag);
    }

    private _setId(id: number) {
        this.id = id;
    }

    private _setName(name: string | null) {
        this.name = name;
    }

    private _setDescription(description: string | null) {
        this.description = description;
    }

    private _setFile(file: { id: number; url: string } | null) {
        this.file = file;
    }

    private _setSite(site: string | null) {
        this.site = site;
    }

    private _setTag(tag: string | null) {
        this.tag = tag;
    }
}
export default PartnersModel;