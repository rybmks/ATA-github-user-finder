import { useState } from 'react';
import Header from '../Header/Header';
import InfoCard from '../InfoCard/InfoCard';
import SearchCard from '../SearchCard/SearchCard';
import UserNotFoundCard from '../UserNotFoundCard/UserNotFoundCard';
import Api from '../../api/AxiousInstance';

function Main() {
  const [response, setResponse] = useState(null);
  const [input, setInput] = useState();
  const api = new Api();

  const fetchUser = async () => {
    if (input || input.trim() !== '') {
      try {
        const res = await api.getUser(input);
        setResponse(res.data);
      } catch {
        setResponse(undefined);
      }
    }
  };

  const renderCard = () => {
    switch (response) {
      case null:
        return <SearchCard />;
      case undefined:
        return <UserNotFoundCard />;
      default:
        return <InfoCard response={response}></InfoCard>;
    }
  };

  return (
    <div className="bg-white dark:bg-black  min-h-dvh w-full mx-auto px-4 py-6  md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <Header setText={setInput} onSearchClick={fetchUser} />
      {renderCard()}
    </div>
  );
}

export default Main;
