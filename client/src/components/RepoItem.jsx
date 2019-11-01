import React from 'react';

const RepoItem = ({repo}) => {
  return (
    <div>
      <h3>
        Repo: <a href={repo.url} target="_blank" >{repo.name}</a> by {repo.author}
      </h3>
      <span>
        <p>
        Number of forks: {repo.forks}
        </p>
        <p>
        Description: {repo.description}
        </p>
      </span>
    </div>
  );
}

export default RepoItem;