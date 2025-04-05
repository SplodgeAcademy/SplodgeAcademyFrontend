export class CurrentUser {

    constructor (localUser) {
        this._name = localUser?.name || "Guest";
        this._level = localUser?.level || "notSelected";
    };
    
    
}