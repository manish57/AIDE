import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FeedbackService{

    http:any;
    apiKey: String;
    feedbacksUrl: String;

    constructor(http: Http) {
        this.http = http;
        this.apiKey = 'QuV-LCiIjeYAnl5TtATYL7lizSj4LplR';
        this.feedbacksUrl = 'https://api.mlab.com/api/1/databases/kotharisdb/collections/feedbacksinfo';
    }

    getFeedbacks(){
        return this.http.get(this.feedbacksUrl+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }

    addFeedback(feedback){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.feedbacksUrl+'?apiKey='+this.apiKey, JSON.stringify(feedback),{headers: headers})
            .map(res => res.json());
    }
    
    deleteFeedback(feedbackId){
        return this.http.delete(this.feedbacksUrl+'/'+feedbackId+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }
    /*
    searchContact(str){
        return this.http.get(this.feedbacksUrl+'?q={"firstname":"'+str+'"}&apiKey='+this.apiKey)
            .map(res => res.json());
    }

    searchByCity(citystr){
        return this.http.get(this.feedbacksUrl+'?q={"city":"'+citystr+'"}&apiKey='+this.apiKey)
            .map(res => res.json());
    }

    searchByLastname(lstr){
        return this.http.get(this.feedbacksUrl+'?q={"lastname":"'+lstr+'"}&apiKey='+this.apiKey)
            .map(res => res.json());
    }*/

    updateFeedback(feedback){
        var id = feedback._id.$oid;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.feedbacksUrl+'?apiKey='+this.apiKey+'&q={"_id":{ "$oid" : "'+id+'"}}', JSON.stringify(feedback),{headers: headers})
            .map(res => res.json());
    }
}