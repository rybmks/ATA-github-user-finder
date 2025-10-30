import { useState } from 'react';
import Header from '../Header/Header';
import InfoCard from '../InfoCard/InfoCard';
import SearchCard from '../SearchCard/SearchCard';
import UserNotFoundCard from '../UserNotFoundCard/UserNotFoundCard';
import Api from '../../api/AxiosInstance';
import ReposCard from '../ReposCard/ReposCard';
import Calendar from '../Calendar/Calendar';

function Main() {
  const [response, setResponse] = useState(null);
  const [repos, setRepos] = useState([]);
  const [input, setInput] = useState('');

  const api = new Api();

  const fetchUser = async () => {
    const q = input.trim();
    if (!q) return;

    try {
      const res = await api.getUser(q);
      const user = res.data;
      setResponse(user);

      try {
        const pinnedRes = await api.getPinnedRepos(user.login);
        const nodes = pinnedRes.data.data.user.pinnedItems.nodes ?? [];
        setRepos(nodes);
      } catch (e) {
        console.warn('getPinnedRepos error:', e);
        setRepos([]);
      }
    } catch {
      setResponse(undefined);
      setRepos([]);
    }
  };

  const renderCard = () => {
    if (response === null) return <SearchCard />;
    if (response === undefined) return <UserNotFoundCard />;

    return (
      <>
        <InfoCard response={response} />
        <ReposCard repos={repos} />
        <Calendar username={response.login} />
      </>
    );
  };

  return (
    <div
      className="min-h-dvh w-full bg-white
         mx-auto
         px-1 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16
         py-2 sm:py-8 md:py-10 lg:py-12
         max-w-none md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
    >
      <Header setText={setInput} onSearchClick={fetchUser} />
      {renderCard()}
    </div>
  );
}

export default Main;
