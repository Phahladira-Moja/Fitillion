# Fitillion
This repo will be for the purpose of a technical assessment by Fitillion

To run the web-app cd into github-search. Once inside run ng serve --open - it will open on port 4200
To run local server please navigate into node-server dircetory.Once inside run: npm start - a express server will go live.

NB: You are not required to run the node-server in order to run the angular web-app. They are completely isolated from one another.
  - The node code is an example of it as a backend for the requested task. You can test the endpoints in isolation.
  
  The endpoints are as follow:
  - Get Github commits: http://localhost:3000?pageNumber=<page number>&commitsPerPage=<number-of-returned-commits>&repo=<repo-name>&owner=<repo-owner-name>
  - Get Saved Commits From DB: http://localhost:3000/commits
  - Delete A Commit to DB: http://localhost:3000/commits?id=<commit-id>
  - POST A Commit to DB: http://localhost:3000/commits
    - Body:  {
        "id": "Testing Again",
        "message": "Merge pull request #76 from fy2/master\n\nAdds a missing variable to sampledotenv",
        "commentCount": 0,
        "readLater": true,
        "author": {
            "id": 4952180,
            "name": "arcdev1",
            "avatarUrl": "https://avatars.githubusercontent.com/u/4952180?v=4"
        },
        "committer": {
            "id": 19864447,
            "name": "web-flow",
            "avatarUrl": "https://avatars.githubusercontent.com/u/19864447?v=4"
        }
    }
