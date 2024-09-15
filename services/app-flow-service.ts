import { Router } from "@angular/router";
import { Injectable, NgZone } from "@angular/core";

import { PageEnum } from "../enums/page-enum"

import { SoundService } from "./sound/sound-affect-service";

@Injectable()
export class AppFlowService {
  private applicationLoaded: boolean;

  private currentPage: PageEnum;
  private readonly router: Router;
  private readonly ngZone: NgZone;

  private new: string | undefined = undefined;

  private readonly soundService: SoundService;

  constructor(router: Router, ngZone: NgZone, soundService: SoundService) {
    this.router = router;
    this.ngZone = ngZone;
    //this.currentPage = PageEnum.Splashscreen;

    this.soundService = soundService;

    this.applicationLoaded = false;
  }

  async loadApplication() : Promise<void> {

  }

  private async navigate(page: PageEnum) : Promise<void> {
    if (this.currentPage != page) {
      this.ngZone.run(async () => {
        this.currentPage = page;
        await this.router.navigateByUrl('/' + page);
      });
    }
  }
}