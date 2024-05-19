from fastapi import FastAPI, HTTPException
from starlette.middleware.cors import CORSMiddleware
from collections import defaultdict
from typing import Dict
from pydantic import BaseModel
import json
import random


class ScoreBase(BaseModel):
    user_hash: str
    score: int
    task_id: int


def read_json(filename):
    with open(filename, "r") as file:
        return json.load(file)


def write_json(filename, data):
    with open(filename, "w") as file:
        json.dump(data, file, indent=4)


def read_user_score(user_hash: str, scores: Dict):
    user_scores = [
        score.get("score") for score in scores if score.get("user_hash") == user_hash
    ]
    user_score = 0
    if user_scores:
        user_score = sum(user_scores)
    return user_score


def get_medal_color(score: int):
    if score > 80:
        return "diamond"
    elif score > 60:
        return "gold"
    elif score > 40:
        return "silver"
    return "bronze"


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello Garek!"}


@app.post("/login/{user_hash}")
async def login_user(user_hash: str):
    users = read_json("data/user.json").get("users")
    for user in users:
        if user.get("hash") == user_hash:
            return {"name": user.get("name")}
    raise HTTPException(status_code=404, detail="User not found")


@app.post("/register/{user_name}")
async def register_user(user_name: str):
    users = read_json("data/user.json").get("users")
    new_user = {"name": user_name}
    while True:
        id = str(random.randint(1, 999999))
        id = (6 - len(id)) * "0" + id
        for user in users:
            if user.get("hash") == id:
                break
        else:
            new_user["hash"] = id
            break
    users.append(new_user)
    write_json("data/user.json", {"users": users})
    return {"user": new_user}


@app.get("/collection/{user_hash}")
def get_user_collection(user_hash: str):
    scores = read_json("data/score.json").get("scores")
    tasks = read_json("data/task.json").get("tasks")
    user_collection = []
    user_scores = [score for score in scores if score.get("user_hash") == user_hash]
    for score in user_scores:
        cur_task = [
            task for task in tasks if task.get("task_id") == score.get("task_id")
        ][0]
        user_collection.append(
            {**cur_task, "color": get_medal_color(score.get("score"))}
        )
    cur_task_ids = [task.get("task_id") for task in user_collection]
    missing_set = [task for task in range(1, 6) if task not in cur_task_ids]
    for element in missing_set:
        user_collection.append(
            {
                "task_id": element,
                "name": "???",
                "photo": "../../assets/question.png",
                "color": None,
                "description": "???",
            }
        )
    return {"collection": user_collection}


@app.post("/scores")
async def add_score(score: ScoreBase):
    user_hash = score.user_hash
    task_id = score.task_id
    delta = score.score
    scores = read_json("data/score.json").get("scores")
    tasks = read_json("data/task.json").get("tasks")
    found_task = None
    for task in tasks:
        if task.get("task_id") == task_id:
            found_task = task
    for score in scores:
        if score.get("task_id") == task_id and score.get("user_hash") == user_hash:
            score["score"] = max(score.get("score"), delta)
            write_json("data/score.json", {"scores": scores})
            return {
                "color": get_medal_color(delta),
                "name": found_task.get("name"),
                "photo": found_task.get("photo"),
            }
    score = {"task_id": task_id, "user_hash": user_hash, "score": delta}
    scores.append(score)
    write_json("data/score.json", {"scores": scores})
    return {
        "color": get_medal_color(delta),
        "name": found_task.get("name"),
        "photo": found_task.get("photo"),
    }


@app.get("/scoreboard")
async def get_scoreboard():
    users = read_json("data/user.json").get("users")
    scores = read_json("data/score.json").get("scores")
    users = [
        {**user, "score": read_user_score(user.get("hash"), scores)} for user in users
    ]
    sorted_users = sorted(users, key=lambda x: x["score"])
    return {"scoreboard": sorted_users}


@app.get("/scoreboard/{user_hash}")
async def get_scoreboard(user_hash: str):
    scores = read_json("data/score.json").get("scores")
    user_scores = [
        score.get("score") for score in scores if score.get("user_hash") == user_hash
    ]
    user_score = 0
    if user_scores:
        user_score = sum(user_scores)
    return {"score": user_score}


@app.get("/scoreboard/{user_hash}")
async def get_scoreboard(user_hash: str):
    scores = read_json("data/score.json").get("scores")
    user_scores = [
        score.get("score") for score in scores if score.get("user_hash") == user_hash
    ]
    user_score = 0
    if user_scores:
        user_score = sum(user_scores)
    return {"score": user_score}


@app.get("/scoreboard/top/{n}")
async def get_scoreboard_top(n: int):
    users = read_json("data/user.json").get("users")
    scores = read_json("data/score.json").get("scores")
    users = [
        {**user, "score": read_user_score(user.get("hash"), scores)} for user in users
    ]
    sorted_users = sorted(users, key=lambda x: x["score"])
    return {"scoreboard": sorted_users[:n]}


@app.get("/scores/{user_hash}")
async def get_scoreboard_info(user_hash: str):
    users = read_json("data/user.json").get("users")
    scores = read_json("data/score.json").get("scores")
    users = [
        {**user, "score": read_user_score(user.get("hash"), scores)} for user in users
    ]
    sorted_users = sorted(users, key=lambda x: x["score"], reverse=True)
    sorted_users = [{**user, "place": i + 1} for i, user in enumerate(sorted_users)]
    user_index = [i for i, x in enumerate(sorted_users) if x.get("hash") == user_hash][
        0
    ]
    if len(sorted_users) < 10:
        return {"scoreboard": sorted_users}
    elif user_index < 10:
        return {"scoreboard": sorted_users[:10]}
    elif user_index == len(sorted_users) - 1:
        return {"scoreboard": sorted_users[:8] + sorted_users[-2:]}
    return {
        "scoreboard": sorted_users[:8] + sorted_users[user_index - 1 : user_index + 2]
    }

CLASSES = ['Basia', 'Garek', 'Idzik', 'Other']

def garque(photo: str):
    import torch
    from torch import nn
    from torchvision import transforms, models
    import base64
    import re
    import json
    from PIL import Image
    from io import BytesIO
    import numpy as np

    class ResNet18(nn.Module):
        def __init__(self, num_classes=4):
            super(ResNet18, self).__init__()
            # Load pre-trained ResNet18 model
            self.model = models.resnet18(pretrained=True)

            # Replace the last fully connected layer
            num_features = self.model.fc.in_features
            self.model.fc = nn.Linear(num_features, num_classes)

        def forward(self, x):
            return self.model(x)
    
    transformations = transforms.Compose([
        transforms.Resize((224, 224)),            # zmiana rozmiaru obrazów do 224x224
        transforms.ToTensor(),                    # konwersja obrazów do tensorów
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])  # normalizacja dla ResNet
    ])

    image_data = re.sub('^data:image/.+;base64,', '', photo)
    img = Image.open(BytesIO(base64.b64decode(image_data))).convert("RGB")

    PATH = "best_model.pth"
    state_dict = torch.load(PATH)
    model = ResNet18(num_classes=4)
    model.load_state_dict(state_dict)

    img = transformations(img)

    with torch.no_grad():
        outputs = model(img.unsqueeze(0))

    def softmax(x):
        """Compute softmax values for each sets of scores in x."""
        e_x = np.exp(x - np.max(x))
        return e_x / e_x.sum(axis=0)

    outputs = np.array(outputs.tolist()[0])
    magic_vector = np.array([0.158, 0.154, -0.14, -1.4])

    outputs = outputs - magic_vector

    cojones_grandes = np.argmax(outputs)

    print(outputs)
    print(softmax(outputs))
    print(cojones_grandes, CLASSES[cojones_grandes])

    return CLASSES[cojones_grandes]


@app.get("/garque")
async def garque_model_function(photo: str):
    return garque(photo)

if __name__ == "__main__":

    if True:
        with open("example.txt", "r") as f:
            photo = f.read().strip()

    garque(photo)
