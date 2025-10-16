import GithubLogo from '../../assets/github-mark.svg';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import SearchInput from '../SearchInput/SearchInput';
import Card from '../Card/Card';

function Header() {
  return (
    <Card>
      <div className="flex justify-between m-5">
        <div className="flex">
          <img src={GithubLogo} className="w-18 h-auto rounded"></img>
          <h2 className="lg:text-4xl md:text-2xl ml-2 self-end ">GitHub user finder</h2>
        </div>
        <ThemeToggle></ThemeToggle>
      </div>
      <SearchInput className="m-2 w-full mx-auto" />
    </Card>
  );
}

export default Header;
