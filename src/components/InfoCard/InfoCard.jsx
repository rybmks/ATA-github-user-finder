import Card from '../Card/Card';
import Button from '../Button/Button';

function InfoCard({ response }) {
  const profile_url = `https://github.com/${response.login}`;

  return (
    <Card>
      <div className="flex-col">
        <div className="flex">
          {response && (
            <img
              src={response.avatar_url}
              className="w-48 h-auto rounded-full object-cover"
              alt="User avatar"
            />
          )}
          <div className="mx-5 flex flex-col justify-between">
            {response && <h3 className="text-2xl font-semibold">{response.name}</h3>}
            {response && <h3 className="text-lg text-gray-600">{response.email}</h3>}
            {response && <h3 className="text-base text-gray-500">@{response.login}</h3>}
            {response && <h3 className="text-sm text-gray-400">{response.bio}</h3>}
            {response && <h3 className="text-sm text-gray-400">{response.location}</h3>}
            {response && (
              <h3 className="text-sm text-gray-600">
                Account created: {new Date(response.created_at).toLocaleDateString()}
              </h3>
            )}
          </div>
        </div>
        <div></div>
        <Card className="flex items-center justify-between">
          <div>Repos {response && <h3>📚 {response.public_repos}</h3>}</div>
          <div>Followers {response && <h3>👥 {response.followers}</h3>}</div>
          <div>Following {response && <h3>🙋‍♂️ {response.following}</h3>}</div>
        </Card>
        <div className="flex justify-center mt-5">
          <a href={profile_url}>
            <Button className="mt-5">View on GitHub</Button>
          </a>
        </div>
      </div>
    </Card>
  );
}

export default InfoCard;
