var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useQuery } from '@tanstack/react-query';
export const useGlobalData = () => {
    return useQuery({
        queryKey: ['globalData'],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield fetch('https://disease.sh/v3/covid-19/all');
            if (!response.ok) {
                throw new Error('Failed to fetch global data');
            }
            return response.json();
        }),
    });
};
export const useCountriesData = () => {
    return useQuery({
        queryKey: ['countriesData'],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield fetch('https://disease.sh/v3/covid-19/countries');
            if (!response.ok) {
                throw new Error('Failed to fetch countries data');
            }
            return response.json();
        }),
    });
};
export const useHistoricalData = () => {
    return useQuery({
        queryKey: ['historicalData'],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
            if (!response.ok) {
                throw new Error('Failed to fetch historical data');
            }
            return response.json();
        }),
    });
};
//# sourceMappingURL=covidApi.js.map