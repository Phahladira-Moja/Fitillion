export default function makeAddCommit({ addCommit }) {
    return async function addCommitController (httpRequest) {
        console.log(httpRequest.body)


        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, *'
        }

        try {
            const result = await addCommit({
                commit: httpRequest.body
            });

            return {
                headers,
                statusCode: 200,
                body: result
            }
        } catch (error) {
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