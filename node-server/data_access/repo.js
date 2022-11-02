export default function makeCommitsRepo({ octokit, fetch }) {

    return Object.freeze({
        addCommit,
        getCommits,
        getReadLater,
        deleteReadLater
    })

    async function getCommits({
        repo = "Spoon-Knife", 
        owner = "octocat",
        pageNumber = 1, 
        commitsPerPage = 10,
    }) {
        const result = await octokit.request(`GET /repos/{owner}/{repo}/commits?page=${pageNumber}&per_page=${commitsPerPage}`, {
            owner: owner,
            repo: repo,
          });
    
        return result.data
    }

    async function addCommit({
        commit
    }) {
        const response = await fetch('https://3spx1ttq9k.execute-api.af-south-1.amazonaws.com/commits', {
            method: 'POST',
            body: JSON.stringify(commit),
            headers: {'Content-Type': 'application/json'}
        });

        const data = await response.json();

        return data
    }

    async function getReadLater() {
        const response = await fetch('https://3spx1ttq9k.execute-api.af-south-1.amazonaws.com/commits', {
            method: 'GET',
        });
        const data = await response.json();

        return data;
    }
    
    async function deleteReadLater({id}) {
        const response = await fetch('https://3spx1ttq9k.execute-api.af-south-1.amazonaws.com/commits', {
            method: 'DELETE',
            body: JSON.stringify({
                "id": id
            }),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();

        return data;
    }
}