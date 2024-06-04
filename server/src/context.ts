import { TrackAPI } from "./datasources/tracks-api";

export type DataSourceContext = {
  dataSources: {
    trackAPI: TrackAPI;
  };
};
