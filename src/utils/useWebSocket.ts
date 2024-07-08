// hooks/useWebSocket.ts
import { useEffect, useRef, useState } from 'react';
import WebSocket from 'isomorphic-ws';

interface WebSocketHook {
    message: string | null;
    isConnected: boolean;
    sendMessage: (msg: string) => void;
}

const useWebSocket = (url: string): WebSocketHook => {
    const [message, setMessage] = useState<string | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const ws = useRef<WebSocket | null>(null);

    useEffect(() => {
        ws.current = new WebSocket(url);

        ws.current.onopen = () => {
            setIsConnected(true);
            console.log('WebSocket connected');
        };

        ws.current.onmessage = (event: MessageEvent) => {
            setMessage(event.data);
            setIsConnected(true);
        };

        // ws.current.onclose = () => {
        //     setIsConnected(false);
        //     console.log('WebSocket disconnected');
        // };

        return () => {
            ws.current?.close();
        };
    }, [url]);

   const sendMessage = (msg: string) => {
       if (ws.current && isConnected) {
        ws.current.send(msg);
    }
}

    return { message, isConnected, sendMessage };
};

export default useWebSocket;
