import type { TAppLocalStorage } from "./types";

export class AppLocalStorage {
  get length() {
    return localStorage.length;
  }

  static clear(): void {
    localStorage.clear();
  }

  static key(index: number): string | null {
    return localStorage.key(index);
  }

  static removeItem(key: keyof TAppLocalStorage): void {
    localStorage.removeItem(key);
  }

  static setItem = <T extends keyof TAppLocalStorage>(key: T, value: TAppLocalStorage[T]) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  static getItem = <T extends keyof TAppLocalStorage>(key: T): TAppLocalStorage[T] | undefined => {
    const value = localStorage.getItem(key);
    try {
      return value ? JSON.parse(value) : undefined;
    } catch {
      return undefined;
    }
  };
}
