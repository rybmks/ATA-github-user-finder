import GithubLogo from '../../assets/github-mark.svg';
import SearchInput from '../SearchInput/SearchInput';
import Card from '../Card/Card';

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
