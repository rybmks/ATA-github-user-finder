import Card from '../Card/Card';
import Button from '../Button/Button';

/**
 * InfoCard component — renders a summary card for a GitHub user response.
 *
 * @param {Object|null|undefined} response - GitHub API user object. If falsy, the component renders minimal/empty placeholders.
 * @param {string} response.login - GitHub login/username used to build the profile URL.
 * @param {string} response.avatar_url - URL of the user's avatar image.
 * @param {string} [response.name] - Display name; may be null/undefined.
 * @param {string} [response.email] - Public email; may be null/undefined.
 * @param {string} [response.bio] - Short biography text; may be null/undefined.
 * @param {string} [response.location] - User's location string; may be null/undefined.
 * @param {string} response.created_at - ISO 8601 date string when the account was created.
 * @param {number} response.public_repos - Number of public repositories.
 * @param {number} response.followers - Number of followers.
 * @param {number} response.following - Number of users this account is following.
 *
 * @returns {JSX.Element} A Card containing the user's avatar, basic info, stats, and a "View on GitHub" link.
 *
 * @example
 * <InfoCard response={githubUserResponse} />
 */
function InfoCard({ response }) {
  const profile_url = `https://github.com/${response.login}`;

  return (
    <Card>
      <div className="flex-col">
        <div className="flex items-start gap-4 md:gap-6 mb-3 lg:mb-5">
          {response && (
            <img
              src={response.avatar_url}
              className="size-16 md:size-24 lg:size-48 rounded-full object-cover"
              alt="User avatar"
            />
          )}
          <div className="mx-5 flex flex-col justify-between">
            {response && (
              <p className="text-lg md:text-2xl lg:text-3xl font-semibold leading-tight">
                {response.name}
              </p>
            )}
            {response && (
              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-snug">
                {response.email}
              </p>
            )}
            {response && (
              <p className="text-xs md:text-sm lg:text-base text-gray-500 leading-snug">
                @{response.login}
              </p>
            )}
            {response && (
              <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {response.bio}
              </p>
            )}
            {response && (
              <p className="text-xs md:text-sm lg:text-base text-gray-500">{response.location}</p>
            )}
            {response && (
              <p className="text-xs md:text-sm lg:text-base text-gray-500">
                Account created: {new Date(response.created_at).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
        <Card className="flex items-center justify-between text-sm md:text-base lg:text-lg">
          <div>
            Repos {response && <p className="text-gray-500 mr-1">📚 {response.public_repos}</p>}
          </div>
          <div>
            Followers {response && <p className="text-gray-500 mr-1">👥 {response.followers}</p>}
          </div>
          <div>
            Following {response && <p className="text-gray-500 mr-1">🙋‍♂️ {response.following}</p>}
          </div>
        </Card>
        <div className="flex justify-center mt-1 lg:mt-5">
          <a href={profile_url}>
            <Button className="mt-2">View on GitHub</Button>
          </a>
        </div>
      </div>
    </Card>
  );
}

export default InfoCard;
