import requests


data = {
    "companyName": "goMart",
    "ownerName": "Mahak",
    "rollNo": "21131011770",
    "ownerEmail": "14mahakgarg@gmail.com",
    "accessCode": "FKDLjg"
}


url = "http://20.244.56.144/test/register"

try:
    
    response = requests.post(url, json=data)
    response.raise_for_status()  
    print("Registration successful:", response.json())
except requests.RequestException as e:
    print("Registration failed:", e)
