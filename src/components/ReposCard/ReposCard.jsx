import Card from '../Card/Card';

/**
 * ReposCard component
 *
 * Renders a collection of repository "cards" inside a parent Card. If no repos
 * are provided or the provided value is not a non-empty array, a placeholder
 * Card with the message "No pinned repos available." is returned.
 *
 * Repository object shape:
 * @typedef {Object} Repo
 * @property {string|number} id            - Unique identifier for the repo (used as React key).
 * @property {string} url                  - URL to the repository (opened in a new tab).
 * @property {string} name                 - Display name of the repository.
 * @property {string} [description]        - Optional short description (rendered and line-clamped).
 * @property {Object} [primaryLanguage]    - Optional primary language info.
 * @property {string} primaryLanguage.name - Language name (e.g., "JavaScript").
 * @property {string} [primaryLanguage.color] - Hex color string for the language (fallback to '#999').
 * @property {number} [stargazerCount]     - Optional star count (displayed if present).
 * @property {string} [updatedAt]          - Optional ISO date string; displayed as a localized date if present.
 *
 * @param {Repo[]} [repos=[]] Array of repository objects to render. If not an array or an empty array,
 *                             the component displays a "No pinned repos available." placeholder.
 * @returns {JSX.Element} A Card element containing repo Cards.
 *
 */
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
