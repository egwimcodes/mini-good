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
    const [token, setToken] = useState<string | null>(null);
    const ws = useRef<WebSocket | null>(null);

    useEffect(() => {
        const fetchToken = async () => {
            const accessToken = await fetchAccessToken();
            const tokenData = accessToken.data.accessToken.value;
            setToken(tokenData);
        };

        fetchToken();
    }, []);

    useEffect(() => {
        if (!token) return;

        const url = `wss://api.goodcoin.tech/ws/balance/?token=${token}`;
        ws.current = new WebSocket(url);

        ws.current.onopen = () => {
            setIsConnected(true);
            console.log('WebSocket connected');
        };

        ws.current.onmessage = (event: MessageEvent) => {
            setMessage(event.data);
            setIsConnected(true);
        };

        ws.current.onclose = () => {
            setIsConnected(false);
            console.log('WebSocket disconnected');
        };

        return () => {
            ws.current?.close();
        };
    }, [token]);

    const sendMessage = (msg: string) => {
        if (ws.current && isConnected) {
            ws.current.send(msg);
        }
    };

    return { message, isConnected, sendMessage };
};

export default useWebSocket;
