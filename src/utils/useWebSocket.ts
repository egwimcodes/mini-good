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
    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const fetchTokenAndConnect = async () => {
            try {
                const accessToken = await fetchAccessToken();
                const tokenData = accessToken.data.accessToken.value;
                const url = `wss://api.goodcoin.tech/ws/balance/?token=${tokenData}`;

                // Close the existing WebSocket connection if it exists
                if (ws.current) {
                    ws.current.close();
                }

                ws.current = new WebSocket(url);

                ws.current.onopen = () => {
                    setIsConnected(true);
                    console.log('WebSocket connected');
                };

                ws.current.onmessage = (event: MessageEvent) => {
                    setMessage(event.data);
                };

                ws.current.onclose = () => {
                    setIsConnected(false);
                    console.log('WebSocket disconnected');
                };
            } catch (error) {
                console.error("Error fetching token or connecting WebSocket:", error);
            } finally {
                // Schedule the next token fetch and WebSocket connection
                timeoutId.current = setTimeout(fetchTokenAndConnect, 1000);
            }
        };

        fetchTokenAndConnect();

        return () => {
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }
            if (ws.current) {
                ws.current.close();
            }
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
