import GithubLogo from '../../assets/github-mark.svg';
import SearchInput from '../SearchInput/SearchInput';
import Card from '../Card/Card';

/**
 * Header component that displays the application logo, title and a search input.
 *
 * @param {Object} props - Component props
 * @param {(text: string) => void} props.setText - Callback to update the current search text
 * @param {() => void} props.onSearchClick - Callback invoked when the search action is triggered.
 * @returns {JSX.Element} The Header element
 *
 * @example
 * <Header setText={setSearchText} onSearchClick={handleSearch} />
 */
function Header({ setText, onSearchClick }) {
  return (
    <Card>
      <div className="flex justify-between m-5">
        <div className="flex">
          <img src={GithubLogo} className="w-14 md:w-18 lg:w-20 h-auto rounded"></img>
          <h2 className="lg:text-4xl md:text-2xl ml-2 self-end ">GitHub user finder</h2>
        </div>
      </div>
      <SearchInput setText={setText} onSearchClick={onSearchClick} className="m-2 w-full mx-auto" />
    </Card>
  );
}

export default Header;
