export default function makeDeleteCommit({ deleteCommit }) {
    return async function deleteCommitController (httpRequest) {
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, *'
          }
          try {
            const result = await deleteCommit({
              id: httpRequest.query.id,
            })
            return {
              headers,
              statusCode: 200,
              body: result
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