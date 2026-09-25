import asyncio
import websockets

async def lidar_com_conexao(websocket):
    print("novo jogador abriu o overlay!")
    # fica escutando as mensagens que chegam do Electron
    async for mensagem in websocket:
        print(f"mensagem recebida: {mensagem}")
        # devolve a mensagem para o Electron
        await websocket.send(f"servidor confirmou: {mensagem}")

async def main():
    # abre o servidor na porta 8765 do seu próprio PC
    async with websockets.serve(lidar_com_conexao, "localhost", 8765):
        print("servidor rodando... aguardando jogadores.")
        await asyncio.Future()

asyncio.run(main())