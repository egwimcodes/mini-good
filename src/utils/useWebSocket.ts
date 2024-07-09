import { useEffect, useRef, useState } from 'react';
import WebSocket from 'isomorphic-ws';
import { fetchAccessToken } from './api';

interface WebSocketHook {
    message: string | null;
    isConnected: boolean;
    sendMessage: (msg: string) => void;
}

const useWebSocket = (): WebSocketHook => {
    const [message, setMessage] = useState<string | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const ws = useRef<WebSocket | null>(null);

    useEffect(() => {
        const initializeWebSocket = async () => {
            const accessToken = await fetchAccessToken();
            const tokenData = accessToken.data.accessToken.value;
            alert(tokenData);
            const url = `wss://api.goodcoin.tech/ws/balance/?token=${tokenData}`;

            ws.current = new WebSocket(url);

            ws.current.onopen = () => {
                setIsConnected(true);
                alert('WebSocket connected');
                console.log('WebSocket connected');
            };

            ws.current.onmessage = (event: MessageEvent) => {
                alert('WebSocket message received');
                setMessage(event.data);
                setIsConnected(true);
            };

            ws.current.onclose = () => {
                alert('WebSocket disconnected');
                setIsConnected(false);
                console.log('WebSocket disconnected');
            };
        };

        initializeWebSocket();

        return () => {
            ws.current?.close();
        };
    }, []);

    const sendMessage = (msg: string) => {
        if (ws.current && isConnected) {
            ws.current.send(msg);
        }
    };

    return { message, isConnected, sendMessage };
};

export default useWebSocket;
