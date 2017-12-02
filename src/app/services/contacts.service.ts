import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ContactsService{

    http:any;
    apiKey: String;
    contactsUrl: String;

    constructor(http: Http) {
        this.http = http;
        this.apiKey = 'QuV-LCiIjeYAnl5TtATYL7lizSj4LplR';
        this.contactsUrl = 'https://api.mlab.com/api/1/databases/kotharisdb/collections/contactsinfo';
    }

    getContacts(){
        return this.http.get(this.contactsUrl+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }

    addContact(contact){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.contactsUrl+'?apiKey='+this.apiKey, JSON.stringify(contact),{headers: headers})
            .map(res => res.json());
    }

    deleteContact(contactId){
        return this.http.delete(this.contactsUrl+'/'+contactId+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }

    searchContact(str){
        return this.http.get(this.contactsUrl+'?q={"firstname":"'+str+'"}&apiKey='+this.apiKey)
            .map(res => res.json());
    }

    searchByLocation(locstr){
        return this.http.get(this.contactsUrl+'?q={"location":"'+locstr+'"}&apiKey='+this.apiKey)
            .map(res => res.json());
    }

    searchByCity(citystr){
        return this.http.get(this.contactsUrl+'?q={"city":"'+citystr+'"}&apiKey='+this.apiKey)
            .map(res => res.json());
    }

    searchByLastname(lstr){
        return this.http.get(this.contactsUrl+'?q={"lastname":"'+lstr+'"}&apiKey='+this.apiKey)
            .map(res => res.json());
    }

    updateContact(contact){
        var id = contact._id.$oid;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.contactsUrl+'?apiKey='+this.apiKey+'&q={"_id":{ "$oid" : "'+id+'"}}', JSON.stringify(contact),{headers: headers})
            .map(res => res.json());
    }

}