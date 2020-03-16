import socketIOClient from "socket.io-client";

export default class WebSocekt{
    
    static socket=undefined;

    public static async getInstance(url){
        if(this.socket===undefined){
            await this.connect(url);
        }
        return this.socket;
    }

    private static async connect(url){
        console.log("connecting to socket : ");
        this.socket = socketIOClient(url);
        this.onOpen(this.socket);
        this.onClose(this.socket);
        this.onMessage(this.socket);
    }

    private static onOpen(socketIO){
        socketIO.on("open",(data)=>{
            console.log("connection opened : ");
        });
    }

    private static onClose(socketIO){
        socketIO.on("disconnect",(data)=>{
            console.log("connection closed : ");
        });
    }

    private static onMessage(socketIO){
        socketIO.on("message",(data)=>{
            console.log("socket message : ");
        });
    }

    public static sendMessage(obj){
        this.socket.emit("message",obj);
    }

}