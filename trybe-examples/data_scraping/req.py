import requests


try:
    # recurso demora muito a responder
    response = requests.get("http://httpbin.org/delay/3", timeout=3)
    response.timer = 'first'
except requests.Timeout:
    # vamos fazer uma nova requisição
    response = requests.get("http://httpbin.org/delay/1", timeout=2)
    response.timer = 'second'

finally:
    print(response.status_code)
    print(response.timer)