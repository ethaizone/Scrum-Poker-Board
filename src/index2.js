import React, { Component } from 'react'
import io from 'socket.io-client';

class IndexPage extends Component {
    componentDidMount() {
        const socket = io('http://localhost:3421/socket', { path: '/myapp/socket.io' });

        socket.on('echo', function (data) {
            console.log(data)
        });

        var i = 1;
        setInterval(() => {
            socket.emit('echo', "Call " + i);
            i++;
        }, 1000)
        
    }

    render() {
        return (
            <div>kjkljkljlk
            </div>
        )
    }
}

export default IndexPage
