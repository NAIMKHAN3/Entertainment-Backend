import serverApp from './app'
import config from './config';
const server = async ()=> {
serverApp.listen(config.port, ()=>{
    console.log('Travel Good Server is Running', config.port)
})
}

server();