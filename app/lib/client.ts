import {MicroCMSQueries, createClient}from "microcms-js-sdk";
import { Note } from "../notes/type";

const domain = process.env.NEXT_PUBLIC_SERVICE_DOMAIN;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

if (!domain || !apiKey) {
  console.error("Error: Environment variables for serviceDomain and apiKey are not set.");
  throw new Error("Missing environment variables for serviceDomain and apiKey");
}

export const client = createClient({
  serviceDomain: domain,
  apiKey: apiKey,
});

//ノート一覧を取得する

export const getNotesList = async ()=>{
  const noteLists = await client.getList<Note>({
    endpoint:"notes",
  });
return noteLists;
}

export const getDetailNote = async (
  contentId:string,
  queries?:MicroCMSQueries
)=>{
  const detailNote = await client.getListDetail<Note>({
    endpoint:"notes",
    contentId:contentId,
    queries,
  });
return detailNote;
}
