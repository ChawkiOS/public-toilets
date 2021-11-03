import { useEffect, useState } from 'react';

import { BASE_URL } from '../utils/constants';
import { ApiResponseType, ToiletType } from '../types';

const useToilets = () => {
  const [loading, setLoading] = useState(true);
  const [toilets, setToilets] = useState<ToiletType[]>([]);

  useEffect(() => {
    fetch(BASE_URL).then(response =>
      response.json().then((response: ApiResponseType) => {
        setToilets(response.values);
        setLoading(false);
      })
    );
  }, []);

  return { loading, toilets };
};

export default useToilets;
