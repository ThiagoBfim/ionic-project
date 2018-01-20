import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {

  LOCAL_STORAGE_CONFIG = "config";
  private config = {
    showSlide: false,
    name: "",
    username: ""
  }

  constructor() {
  }

  getConfigData(): any {
    return localStorage.getItem(this.LOCAL_STORAGE_CONFIG);
  }

  setConfigData(showSlide?: boolean, name?: string, username?: string) {
    if (showSlide) {
      this.config.showSlide = showSlide;
    }
    if (name) {
      this.config.name = name;
    }
    if (username) {
      this.config.username = username;
    }
    localStorage.setItem(this.LOCAL_STORAGE_CONFIG, JSON.stringify(this.config));
  }


}
