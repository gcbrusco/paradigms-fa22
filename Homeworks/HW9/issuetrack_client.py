#!/usr/bin/env python3

from requests.auth import HTTPBasicAuth
import requests
import csv

URL = "http://localhost:51017/"


# parses the list of bugs
def parse_bugs(bugs, csv_writer):
    count = {}
    for bug in bugs:
        b = bug['package']
        count[b] = count.get(b, 0) + 1

    csv_writer.writerow(["package","total"])
    for key, value in count.items():
        csv_writer.writerow([key,value])
    


# parses the list of bugs
def parse_comments(comments, csv_writer):	
    count = {}
    for comment in comments:
        bug_id = comment['bug'][28:33]
        count[bug_id] = count.get(bug_id, 0) + 1
        
    csv_writer.writerow(["bug_id","total"])
    for key, value in count.items():
        csv_writer.writerow([key, value])




def visit_url(resource, filename, callback):
    # open file
    with open(f"{filename}.csv", "w", newline='', encoding="utf8") as csvfile:
        csv_writer = csv.writer(csvfile, delimiter=',',quotechar='"')

        # composes request URL
        url = URL + resource
        info = []

        # while the `next` page to visit is not None
        while url:
            # HTTP request without authentication
            response = requests.get(url)
            # parse the response to JSON
            json_resp = response.json()
            # get the next page
            url = json_resp["next"] 
            # parse the returned user information
            for x in json_resp["results"]:
                info.append(x)
        
        callback(info, csv_writer)
            

def main():
    visit_url("bugs", "total_bugs_per_package", parse_bugs)
    visit_url("comments", "total_comments_per_bug", parse_comments)
    


if __name__ == '__main__':
    main()