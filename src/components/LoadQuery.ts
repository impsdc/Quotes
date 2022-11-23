import { Client, LogLevel } from '@notionhq/client';

const LoadQuery = async () => {
  const notion = new Client({
    auth: import.meta.env.VITE_NOTION_API_KEY,
    logLevel: LogLevel.DEBUG,
  });

  const databaseId = 'd9824bdc-8445-4327-be8b-97043404098947019cd68cf506ca2b5d';
  const response = await notion.databases.query({
    database_id: import.meta.env.VITE_NOTION_DATABASE_ID,
  });
  return response;
};

export default LoadQuery;
