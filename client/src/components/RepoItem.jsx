import React from 'react';

const RepoItem = ({repo}) => {
  return (
    <div>
      <h2>
        {Repo.name}
      </h2>
      <p>Number of forks: {repo.forks}</p>
      <p>Description: {repo.description}</p>
    </div>
  );
}

export default RepoItem;