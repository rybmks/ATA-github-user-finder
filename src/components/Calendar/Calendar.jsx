/**
 * Powered by https://github.com/grubersjoe/react-github-calendar
 */

import GitHubCalendar from 'react-github-calendar';
import Card from '../Card/Card';

/**
 * Calendar component that renders a user's GitHub contribution calendar inside a Card.
 *
 * @component
 * @param {string} username - GitHub username whose contribution graph will be displayed.
 *   Provide a plain username (e.g. "octocat").
 * @returns {JSX.Element} A Card containing the GitHubCalendar for the specified user.
 *
 * @example
 * <Calendar username="octocat" />
 **/
export default function Calendar({ username }) {
  return (
    <Card>
      <GitHubCalendar username={username} />
    </Card>
  );
}
