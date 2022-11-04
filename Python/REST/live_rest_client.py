import requests
import csv

HOST = "http://localhost:8000"


def main():
	# makes HTTP GET request
	response = requests.get(f"{HOST}/bugs")
	# parses the response (.content vs .text vs .json())
	json_resp = response.json()
	# TODO: parse bugs 

if __name__ == '__main__':
	main()
