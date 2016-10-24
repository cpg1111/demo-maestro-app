'use strict';

class WS extends WebSocket {
    constructor(url, protocol, store){
        super(url, protocol);
        this.store = store;
    }
    onopen(){
        
    }
    onmessage(payload){
        
    }
}
