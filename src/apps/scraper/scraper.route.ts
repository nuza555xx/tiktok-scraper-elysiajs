import Elysia, { ElysiaInstance } from "elysia";
import { ScraperService } from "./scraper.service";

export class Scraper {
  private service = new ScraperService();
  constructor(private readonly app: Elysia<ElysiaInstance>) {
  }

}

// export default async () => {
//   const service = new ScraperService();
//   // service.getVideoMetadata('https://www.tiktok.com/@phone030403/video/7228125048874208517')
//   const test = await service.getVideoMetadata('https://www.tiktok.com/@phone030403/video/7228125048874208517')
//   console.log(test);

// }
