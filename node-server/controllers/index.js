import { addCommit, getCommits, deleteCommit ,getReadLaterCommits } from '../usecase'
import makeAddCommit from './add_commit'
import makeGetCommit from './get_commits'
import makeDeleteCommit from './delete_commit'
import makeGetReadLaterCommits from './get_read_later'


const addCommitController = makeAddCommit({addCommit})

const getCommitController = makeGetCommit({ getCommits })

const deleteCommitController = makeDeleteCommit({ deleteCommit })


const readLaterCommitController = makeGetReadLaterCommits({ getReadLaterCommits })


const controllers = Object.freeze({
    addCommitController,
    getCommitController,
    deleteCommitController,
    readLaterCommitController
})
  
export default controllers
export {addCommitController, getCommitController, deleteCommitController, readLaterCommitController};