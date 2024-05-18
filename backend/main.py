from fastapi import FastAPI
from collections import defaultdict

app = FastAPI()

scoreboard = defaultdict(lambda: 0)


@app.get("/")
async def root():
    return {"message": "Hello Garek"}


@app.put("/add_score")
async def add_score(user: str, delta: int):
    scoreboard[user] += delta


@app.get("/scoreboard")
async def get_scoreboard():
    return scoreboard


@app.get("/scoreboard/top")
async def get_scoreboard_top(n: int):
    return sorted(list(scoreboard), key=lambda x: x[1], reverse=True)[:n]
