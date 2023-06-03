import { Url } from "next/dist/shared/lib/router/router";

type News = {
  name: string;
  url: Url;
  image:
    | {
        thumbnail: {
          contentUrl: Url | undefined;
          width: number | undefined;
          height: number | undefined;
        };
        isLicensed: boolean;
      }
    | undefined;
  description: string;
  provider: [
    {
      _type: string;
      name: string;
      image: {
        thumbnail: {
          contentUrl: Url;
        };
      };
    }
  ];
  datePublished: string;
};
