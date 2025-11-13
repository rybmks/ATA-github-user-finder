import SearchSvg from '../../assets/search-mark.svg';
import Card from '../Card/Card';

/**
 * SearchCard
 *
 * Simple placeholder card with a search illustration and a short prompt
 * asking the user to enter a GitHub username.
 *
 * @component
 * @returns {JSX.Element}
 */
function SearchCard() {
  return (
    <Card>
      <div className="flex flex-col items-center lg:text-3xl md:text-1xl m-3">
        <img
          src={SearchSvg}
          className="size-22 md:size-30 lg:size-35 my-5 mx-auto"
          alt="Search ico"
        />
        <h2 className="mx-auto">Enter a GitHub username search</h2>
      </div>
    </Card>
  );
}

export default SearchCard;
