import requests


def main():
	# TODO: make a GET request
	response = requests.get("http://localhost:8000/bugs")
	# TODO: parse response
	print(response.json())

	





if __name__ == '__main__':
	main()
