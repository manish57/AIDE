import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ItemService{

    http:any;
    apiKey: String;
    itemUrl: String;

    constructor(http: Http) {
        this.http = http;
        this.apiKey = '<api-key>';
        this.itemUrl = 'https://api.mlab.com/api/1/databases/kotharisdb/collections/itemsinfo';
    }

    getItems(){
        return this.http.get(this.itemUrl+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }

    addItem(item){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.itemUrl+'?apiKey='+this.apiKey, JSON.stringify(item),{headers: headers})
            .map(res => res.json());
    }

    deleteItem(itemId){
        return this.http.delete(this.itemUrl+'/'+itemId+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }
    /*
    searchContact(str){
        return this.http.get(this.itemUrl+'?q={"firstname":"'+str+'"}&apiKey='+this.apiKey)
            .map(res => res.json());
    }

    searchByCity(citystr){
        return this.http.get(this.itemUrl+'?q={"city":"'+citystr+'"}&apiKey='+this.apiKey)
            .map(res => res.json());
    }

    searchByLastname(lstr){
        return this.http.get(this.itemUrl+'?q={"lastname":"'+lstr+'"}&apiKey='+this.apiKey)
            .map(res => res.json());
    }*/
    updateItem(item){
        var id = item._id.$oid;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.itemUrl+'?apiKey='+this.apiKey+'&q={"_id":{ "$oid" : "'+id+'"}}', JSON.stringify(item),{headers: headers})
            .map(res => res.json());
    }
}
