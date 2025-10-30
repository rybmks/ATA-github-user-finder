import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
});

class Api {
  constructor() {
    this.axiosInstance = instance;
  }

  async getUser(username) {
    return this.axiosInstance.get(`/users/${encodeURIComponent(username)}`);
  }

  async getPinnedRepos(username) {
    const token = import.meta.env.VITE_GH_TOKEN;
    if (!token) {
      throw new Error(
        "GitHub token (VITE_GH_TOKEN) is missing or empty. Please set the environment variable to a valid token."
      );
    }

    const endpoint = '/graphql';
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    };

    const query = `
  query fetchPinnedRepos($login: String!, $count: Int = 6) {
  user(login: $login) {
    pinnedItems(first: $count, types: [REPOSITORY]) {
      totalCount
      pageInfo { hasNextPage endCursor }
      nodes {
        ... on Repository {
          id
          name
          nameWithOwner
          description
          url
          homepageUrl
          stargazerCount
          forkCount
          primaryLanguage { name color }
          owner { login }
          updatedAt
        }
      }
    }
  }
}
`;

    const variables = { login: username, count: 6 };

    const body = {
      operationName: 'fetchPinnedRepos',
      query: query,
      variables: variables,
    };

    return this.axiosInstance.post(endpoint, body, { headers });
  }
}

export default Api;
