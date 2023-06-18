import axios from "axios";
import camelcaseKeys from "camelcase-keys";
import { inspect } from "util";
import { FeedResponse } from "./tiktok.interface";
export class ScraperService {
  private headers: Record<string, string> = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
  };

  constructor() {
  }

  // private generateUrlProfile(username: string) {
  //   const baseUrl = "https://www.tiktok.com/";
  //   if (username.includes("@")) {
  //     return `${baseUrl}${username}`;
  //   }
  //   return `${baseUrl}@${username}`;
  // };

  private getIdVideo(url: string) {
    const matching = url.includes("/video/");
    if (!matching) {
      console.error("URL not found");
    }
    const idVideo = url.substring(url.indexOf("/video/") + 7, url.length);
    return idVideo.length > 19
      ? idVideo.substring(0, idVideo.indexOf("?"))
      : idVideo;
  };

  // async getVideoMetadata(url: string): Promise<FeedItems> {
  //   try {
  //     const { data } = await axios<string>(url);
  //     if (!data) {
  //       throw new Error(`Can't extract video meta data`);
  //     }

  //     if (data.includes("__NEXT_DATA__")) {
  //       const rawVideoMetadata = data
  //         .split(/<script id="__NEXT_DATA__" type="application\/json" nonce="[\w-]+" crossorigin="anonymous">/)[1]
  //         .split(`</script>`)[0];

  //       const videoProps = JSON.parse(rawVideoMetadata);
  //       const videoData = videoProps.props.pageProps.itemInfo.itemStruct;
  //       return videoData as FeedItems;
  //     }

  //     if (data.includes('SIGI_STATE')) {
  //       const rawVideoMetadata = data.split('<script id="SIGI_STATE" type="application/json">')[1].split('</script>')[0];

  //       const videoProps = JSON.parse(rawVideoMetadata);
  //       const videoData = Object.values(videoProps.ItemModule)[0];
  //       console.log(videoData);

  //       return videoData as FeedItems;
  //     }

  //     throw new Error('No available parser for html page')
  //   } catch (error) {
  //     throw new Error(`Can't extract video metadata: ${url}`);
  //   }
  // }

  // private async extractVideoId(item: PostCollector): Promise<string> {
  //   // try {
  //   //     const result = await rp({
  //   //         uri: item.videoUrl,
  //   //         headers: this.headers,
  //   //     });
  //   //     const position = Buffer.from(result).indexOf('vid:');
  //   //     if (position !== -1) {
  //   //         const id = Buffer.from(result)
  //   //             .slice(position + 4, position + 36)
  //   //             .toString();

  //   //         return `https://api2-16-h2.musical.ly/aweme/v1/play/?video_id=${id}&vr_type=0&is_play_url=1&source=PackSourceEnum_PUBLISH&media_type=4${
  //   //             this.hdVideo ? `&ratio=default&improve_bitrate=1` : ''
  //   //         }`;
  //   //     }
  //   // } catch {
  //   //     // continue regardless of error
  //   // }
  //   // return '';
  // }

  async getVideoMetadata(url: string) {
    const idVideo = await this.getIdVideo(url);
    const API_URL = `https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${idVideo}`;

    const { data } = await axios.get(API_URL, { headers: this.headers });

    const camelize: FeedResponse = camelcaseKeys(data, { deep: true });
    // const urlMedia = camelize.awemeList[0].video.downloadAddr.urlList[0];

    return camelize;
  };

  // async getVideoNoWM(url: string) {
  //   const idVideo = await this.getIdVideo(url);
  //   const API_URL = `https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${idVideo}`;

  //   const { data } = await axios.get(API_URL, {
  //     headers: this.headersWm,
  //   });

  //   const camelize: FeedResponse = camelcaseKeys(data, { deep: true });
  //   const urlMedia = camelize.awemeList[0].video.playAddr.urlList[0];

  //   return {
  //     url: urlMedia,
  //     id: idVideo,
  //   };
  // };

}