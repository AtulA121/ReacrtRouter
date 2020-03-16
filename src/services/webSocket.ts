import socketIOClient from "socket.io-client";

export default class WebSocekt{
    
    static socket : any=undefined;
    
    private constructor(){
        // socket=undefined;
    }

    public static async getInstance(url : any){
        if(this.socket===undefined){
            await this.connect(url);
        }
        return this.socket;
    }

    private static async connect(url : any){
        console.log("connecting to socket : ");
        this.socket = socketIOClient(url);
        this.onOpen(this.socket);
        this.onClose(this.socket);
        this.onMessage(this.socket);
    }

    private static onOpen(socketIO : any){
        socketIO.on("open",(data : any)=>{
            console.log("connection opened : ");
        });
    }

    private static onClose(socketIO : any){
        socketIO.on("disconnect",(data : any)=>{
            console.log("connection closed : ");
        });
    }

    private static onMessage(socketIO : any){
        socketIO.on("message",(data : any)=>{
            console.log("socket message : ");
        });
    }

    public static sendMessage(obj : any){
        this.socket.emit("message",obj);
    }

}