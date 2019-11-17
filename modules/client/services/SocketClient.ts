import * as io from "socket.io-client";

// this class initiates the single connection used within all components
// which allows socket.emit('v1.0.0/io emit() and on() to be bundled where they belong

export default class SocketClient {
  constructor() {
    // console.info('start socket', process.env.APIHOST, process.env.APIPORT)
    // api direct:
    // const socket = io.connect('http://127.0.0.1:3030'); // 'http://127.0.0.1:3030'
    // thru proxy:
    // const socket = io("", { path: "/ws" });
    // console.info("init sockets...");
    // socket.emit('v1.0.0/confirmSocket');
    // socket.on('v1.0.0/confirmAgain', (data) => {
    //     console.log('frontend socket connected');
    // });
    // socket.on('v1.0.0/error', (data) => {
    //     console.log(data || 'error');
    // });
    // socket.on('v1.0.0/disconnect', (data) => {
    //     console.log('disconnect!');
    // });
    // return socket;
  }

  empty() {}
}
