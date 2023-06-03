import { News } from "./types/news";
import { API_URL } from "../util/constants";

export default async function getTopStories(): Promise<News[]> {
  try {
    const response = await fetch(API_URL + "top-stories");
    const data: News[] = await response.json();
    return data;
  } catch (err) {
    throw Error("Error fetching data.");
  }
}
