/*import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import ./../models/EventAdd/Event.model";

@Injectable()
export class EventListService {
    private eventlistRef = this.db.list<Item>('event-list');

    constructor(private db: AngularFireDatabase){

    }

    getEventList(){
        return this.eventlistRef;
    }
    addEvent(item: Item){
        return this.eventlistRef.push(item);

    }
}*/