import Card from '../Card/Card';
import Button from '../Button/Button';

function InfoCard({ response }) {
  const profile_url = `https://github.com/${response.login}`;

  return (
    <Card>
      <div className="flex-col">
        <div className="flex items-start gap-4 md:gap-6">
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
        <div></div>
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
