import { useEffect, useState } from 'react';

import { BASE_URL } from '../utils/constants';
import { ApiResponseType, ToiletType } from '../types';

const useToilets = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [toilets, setToilets] = useState<ToiletType[]>([]);

  useEffect(() => {
    fetch(BASE_URL).then(response =>
      response
        .json()
        .then((response: ApiResponseType) => {
          // Show only toilets that have an address
          const filtered = response.values.filter(
            item => item.adresse !== null
          );

          setToilets(filtered);
          setLoading(false);
        })
        .catch(() => setError(true))
    );
  }, []);

  return { loading, toilets };
};

export default useToilets;
