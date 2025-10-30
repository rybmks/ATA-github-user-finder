/**
 * Powered by https://github.com/grubersjoe/react-github-calendar
 */

import GitHubCalendar from 'react-github-calendar';
import Card from '../Card/Card';

/**
 * There is no real need to create `Calendar`
 * wrapper, nevertheless for possibility of changing
 * logic it's considered to separate Calendar logic
 */
export default function Calendar({ username }) {
  return (
    <Card>
      <GitHubCalendar username={username} />
    </Card>
  );
}
