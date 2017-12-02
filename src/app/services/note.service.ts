import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class NoteService{

    http:any;
    apiKey: String;
    notesUrl: String;

    constructor(http: Http) {
        this.http = http;
        this.apiKey = '<api-key>';
        this.notesUrl = 'https://api.mlab.com/api/1/databases/kotharisdb/collections/notesinfo';
    }

    getNotes(){
        return this.http.get(this.notesUrl+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }

    addNote(note){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.notesUrl+'?apiKey='+this.apiKey, JSON.stringify(note),{headers: headers})
            .map(res => res.json());
    }

    deleteNote(noteId){
        return this.http.delete(this.notesUrl+'/'+noteId+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }
    /*
    searchContact(str){
        return this.http.get(this.notesUrl+'?q={"firstname":"'+str+'"}&apiKey='+this.apiKey)
            .map(res => res.json());
    }

    searchByCity(citystr){
        return this.http.get(this.notesUrl+'?q={"city":"'+citystr+'"}&apiKey='+this.apiKey)
            .map(res => res.json());
    }

    searchByLastname(lstr){
        return this.http.get(this.notesUrl+'?q={"lastname":"'+lstr+'"}&apiKey='+this.apiKey)
            .map(res => res.json());
    }*/
    updateNote(note){
        var id = note._id.$oid;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.notesUrl+'?apiKey='+this.apiKey+'&q={"_id":{ "$oid" : "'+id+'"}}', JSON.stringify(note),{headers: headers})
            .map(res => res.json());
    }
}
