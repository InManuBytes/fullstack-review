import React from 'react';
import RepoItem from './RepoItem.jsx';

const RepoList = ({repos}) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    {repos.map((repo, index) => {
      return <RepoItem repo={repo} number={index + 1} />;
    })}
  </div>
)

export default RepoList;