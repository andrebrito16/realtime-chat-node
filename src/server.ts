import { http } from './http';
import "./websocket/client";
import "./websocket/admin";

http.listen(3333, () => console.log("🔥 Aplicação rodando na porta 3333!"));