export default function makeGetReadLaterCommits({ getReadLaterCommits }) {
    return async function readLaterCommitController (httpRequest) {
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, *'
        }

        try {
            const result = await getReadLaterCommits();

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