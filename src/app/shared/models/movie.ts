import { Genre } from './genre';

export class Movie{
    name: string;
    id: number;
    title: string;
    overview: string;
    tagline: string;
    budget: number;
    revenue: number;
    homepage?: any;
    imdbId: string;
    posterUrl: string;
    backdropUrl?: any;
    originalLanguage: string;
    popularity: number;
    releaseDate: string;
    runTime: number;
    averageVote: number;
    externalId: number;
    genres: Genre[];
    keywords?: any;
    trailers?: any;
    status : string;
}