import os
from dotenv import load_dotenv

# https://app.freecurrencyapi.com/
from requests import get

from pprint import PrettyPrinter

def configure():
    load_dotenv()

configure()

BASE_URL = "https://api.freecurrencyapi.com/v1/"
API_KEY = os.getenv("API_KEY")
printer = PrettyPrinter()

def get_currencies():
    endpoint = f"currencies?apikey={API_KEY}"
    url = BASE_URL + endpoint
    data = get(url).json()
    data = list(data.items())
    data.sort() # sort by alphabetical order
    return data

def exchange_rate(base_currency, target_currency):
    """
    Gets the exchange rate between two currencies
    Args:
        base_currency (str): base currency.
        target_currency (str): target currency.

    Returns:
        float: exchange rate between base_currency and target_currency.
    """
    endpoint = "latest?"
    url = BASE_URL + endpoint
    p = {'apikey': API_KEY, 'base_currency': base_currency, 'currencies': target_currency}
    data = get(url, params=p).json() # data example output: {'data': {'CAD': 1.3830201948}}

    if len(data) == 0:
        print("Invalid currencies")

    return list(data.values())[0][target_currency] # ex: 1.3830201948

def convert_currency(base_currency, target_currency, amount):
    """
    Converts an amount from base_currency to target_currency
    Args:
        base_currency (str): base currency.
        target_currency (str): target currency.
        amount (float): amount to convert.
    Returns:
        float: converted amount.
    """
    rate = exchange_rate(base_currency, target_currency)
    
    if rate is None:
        return
    
    try: 
        amount = float(amount)
    except:
        print("Invalid amount")
        return
    
    converted_amount = rate * amount
    return converted_amount

#print(convert_currency('USD', 'CAD', 1000))

currencies = get_currencies()[0][1]

with open("currencies.txt", "w", encoding="utf-8") as f:
    for code in currencies.keys():
        f.write(code + "\n")
