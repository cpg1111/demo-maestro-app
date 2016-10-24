'use strict';

class Request {
    constructor(endpoint, store){
        this.endpoint = endpoint;
        this.store = store;
    }
    request(method, body, callback){
        let req = new XMLHttpRequest();
        req.open(method, this.endpoint, true);
        if(method == 'POST' || method == 'PUT') req.setRequestHeader('Content-Type', 'application/json');
        if(callback){
            req.onload = ()=>{
                if(req.status >= 200 && req.status < 400)
                    if(req.getResponseHeader('content-type').indexOf('application/json') > -1)
                        return callback(JSON.parse(req.responseText), this.store.dispatch, null);
                    return callback(req.responseText, this.store.dispatch, null);
                return callback(null, this.store.dispatch, new Error(`received a status of ${req.status}`));
            };
            req.onerror = err =>callback(null, this.store.dispatch, err);
        }
        return new Promise((resolve, reject)=>{
            req.onload = ()=>{
                if(req.status >= 200 && req.status < 400)
                    if(req.getResponseHeader('content-type').indexOf('application/json') > -1)
                        return resolve(JSON.parse(req.responseText), this.store.dispatch);
                    return resolve(req.responseText, this.store.dispatch);
                return reject(this.store.dispatch, new Error(`received a status of ${req.status}`));
            };
            req.onerror = err =>reject(this.store.dispatch, err);
        });
    }
    get(callback){
        return this.request('GET', null, callback);
    }
    post(callback){
        return this.request('POST', null, callback);
    }
    put(callback){
        return this.request('PUT', null, callback);
    }
    patch(callback){
        return this.request('PATCH', null, callback);
    }
    delete(callback){
        return this.request('DELETE', null, callback);
    }
}

export Request;
