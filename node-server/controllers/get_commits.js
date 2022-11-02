export default function makeGetCommit({ getCommits }) {
    return async function getCommitsController (httpRequest) {
        const headers = {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, *'
        }
        try {
          const commits = await getCommits({
            repo: httpRequest.query.repo,
            owner: httpRequest.query.owner,
            commitsPerPage: httpRequest.query.commitsPerPage,
            pageNumber: httpRequest.query.pageNumber,
            commitsPerPage: httpRequest.query.commitsPerPage,
            
          })
          return {
            headers,
            statusCode: 200,
            body: commits
          }
        } catch (e) {
          console.log(e)
          return {
            headers,
            statusCode: 400,
            body: {
              error: e.message
            }
          }
        }
      }
}