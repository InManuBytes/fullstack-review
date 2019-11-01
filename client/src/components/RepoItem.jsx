import React from 'react';

const RepoItem = ({repo, number}) => {
  return (
    <div>
      <h3>
        {number}: <a href={repo.url} target="_blank" >{repo.name}</a> by {repo.author}
      </h3>
      <h4>
      Number of forks: {repo.forks}
      </h4>
      <p>
      Description: {repo.description}
      </p>
    </div>
  );
}

export default RepoItem;