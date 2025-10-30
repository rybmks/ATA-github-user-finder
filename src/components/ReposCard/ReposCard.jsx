import Card from '../Card/Card';

function ReposCard({ repos = [] }) {
  if (!Array.isArray(repos) || repos.length === 0) {
    return (
      <Card>
        <p className="text-sm text-gray-500">No pinned repos available.</p>
      </Card>
    );
  }

  return (
    <Card className="grid gap-1 sm:grid-cols-1 md:grid-cols-2">
      {repos.map((repo) => (
        <Card key={repo.id}>
          <div className="flex flex-col h-full justify-between">
            <a
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-lg underline underline-offset-2 text-blue-700 dark:text-blue-400"
            >
              {repo.name}
            </a>

            {repo.description && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                {repo.description}
              </p>
            )}

            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
              {repo.primaryLanguage?.name && (
                <span className="inline-flex items-center gap-1">
                  <span
                    className="inline-block size-2 rounded-full"
                    style={{
                      backgroundColor: repo.primaryLanguage.color || '#999',
                    }}
                  />
                  {repo.primaryLanguage.name}
                </span>
              )}

              {'stargazerCount' in repo && <span title="Stars">⭐ {repo.stargazerCount}</span>}

              {repo.updatedAt && (
                <span title="Updated">
                  updated: {new Date(repo.updatedAt).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        </Card>
      ))}
    </Card>
  );
}

export default ReposCard;
