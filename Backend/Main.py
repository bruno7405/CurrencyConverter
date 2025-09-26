import uvicorn # web server to run fastapi app
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

from CurrencyConverter import *

class Conversion(BaseModel):
  amount: float

app = FastAPI()

origins = ["http://localhost:5173"]

# CORS block unauthorized requests
app.add_middleware(
  CORSMiddleware, 
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

@app.get("/convert")
def callConvert(f: str, t: str, amt: float):
  return convert_currency(f, t, amt)

@app.get("/getcurrencies")
def callConvert():
  return get_currencies()


if __name__ == "__main__":
  uvicorn.run(app, host="0.0.0.0", port=8000) # run application