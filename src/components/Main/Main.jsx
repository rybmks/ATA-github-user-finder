import Card from '../Card/Card';
import { useEffect, useState } from 'react';
import mockUser from '../../mock/MockGhResponse.json';
import Header from '../Header/Header';
import InfoCard from '../InfoCard/InfoCard';
import SearchCard from '../SearchCard/SearchCard';
import UserNotFoundCard from '../UserNotFoundCard/UserNotFoundCard';

function Main() {
  const [response, setResponse] = useState();
  useEffect(() => {
    setResponse(mockUser);
  }, []);

  return (
    <div className="bg-white dark:bg-black  min-h-dvh w-full mx-auto px-4 py-6  md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <Header></Header>
      <SearchCard></SearchCard>
      <UserNotFoundCard></UserNotFoundCard>
      <InfoCard response={response}></InfoCard>
    </div>
  );
}

export default Main;
