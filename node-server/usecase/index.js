import makeCommit from  '../entity';
import commitsDB from '../data_access';

import makeAddCommit from './add_commit'
import makeDeleteCommit from './delete_commit'
import makeListCommits from './get_commits'
import makeReadLaterList from './get_read_later'

const addCommit = makeAddCommit({commitsDB,  makeCommit})
const deleteCommit = makeDeleteCommit({commitsDB})
const getCommits = makeListCommits({commitsDB,  makeCommit})
const getReadLaterCommits = makeReadLaterList({commitsDB})

const usecases = Object.freeze({
    addCommit,
    deleteCommit,
    getCommits,
    getReadLaterCommits
})

export default usecases
export {addCommit, deleteCommit, getCommits, getReadLaterCommits};