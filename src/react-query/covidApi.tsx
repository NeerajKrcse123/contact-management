import { useQuery } from '@tanstack/react-query';

export const useGlobalData = () => {
  return useQuery({
    queryKey: ['globalData'],
    queryFn: async () => {
      const response = await fetch('https://disease.sh/v3/covid-19/all');
      if (!response.ok) {
        throw new Error('Failed to fetch global data');
      }
      return response.json();
    },
  });
};

export const useCountriesData = () => {
  return useQuery({
    queryKey: ['countriesData'],
    queryFn: async () => {
      const response = await fetch('https://disease.sh/v3/covid-19/countries');
      if (!response.ok) {
        throw new Error('Failed to fetch countries data');
      }
      return response.json();
    },
  });
};

export const useHistoricalData = () => {
  return useQuery({
    queryKey: ['historicalData'],
    queryFn: async () => {
      const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
      if (!response.ok) {
        throw new Error('Failed to fetch historical data');
      }
      return response.json();
    },
  });
};
