import type {MediaData, MediaItem} from "../interfaces/mediaItem.ts";

export const getData = async (): Promise<MediaData> => {
    const data = await fetch("/data.json")

    return await data.json();
}


export const getItemById = async (id:string): Promise<MediaItem | undefined> => {
    const data = await fetch("/data.json")
    const item:MediaData = await data.json();
    return item.TendingNow.find(item => item.Id === id) ;
}
