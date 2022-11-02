from requests.auth import HTTPBasicAuth
import requests
import csv

URL = "http://localhost:8000/"


# parses the list of bugs
def parse_bugs(bugs):	
	for b in bugs:
		print(b)


# parses the list of bugs
def parse_comments(comments):	
	for c in comments:
		print(c)




def visit_url(resource, callback):
	url = URL + resource
	# while the `next` page to visit is not None
	while url:
		# HTTP request without authentication
		response = requests.get(url)
		# parse the response to JSON
		json_resp = response.json()
		# get the next page
		url = json_resp["next"] 
		# parse the returned user information
		callback(json_resp["results"])

def main():
	visit_url("bugs",parse_bugs)
	visit_url("comments",parse_comments)
	


if __name__ == '__main__':
	main()