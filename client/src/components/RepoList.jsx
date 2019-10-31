import React from 'react';
import RepoItem from './RepoItem.jsx';

const RepoList = ({repos}) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    {repos.map(repo => {
      return <RepoItem repo={repo} />;
    })}
  </div>
)

export default RepoList;