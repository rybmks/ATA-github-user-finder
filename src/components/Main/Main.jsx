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
    if (input && input.trim() !== '') {
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
