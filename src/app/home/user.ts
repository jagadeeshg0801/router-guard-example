 export class User {
    userId: number;
    name: string;
    location: string;
    constructor(userId: number, name: string, location: string){
        this.userId = userId;
        this.name = name;
        this.location = location;
    }
}