/**
 * 動物の種類を表す型
 */
export type Species = "dog" | "cat";

/**
 * Animalインターフェース
 */
interface Animal {
  name: string;
  species: Species;
  sound: string;

  /*
   * 動物の名前を取得する
   */
  getName(): string;

  /**
   * 動物の鳴き声を取得する
   */
  getSound(): string;
}

/**
 * Dogクラス
 */
class Dog implements Animal {
  name: string;
  species: Species = "dog";
  sound: string = "wan";

  /**
   * Dogクラスのコンストラクタ
   * @param {string} name - 名前
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * 犬の名前を取得する
   * @returns {string} 名前
   */
  getName(): string {
    return this.name;
  }

  /**
   * 犬の鳴き声を取得する
   * @returns {string} 鳴き声
   */
  getSound(): string {
    return this.sound;
  }
}

/**
 * Catクラス
 */
class Cat implements Animal {
  name: string;
  species: Species = "cat";
  sound: string = "nyan";

  /**
   * Catクラスのコンストラクタ
   * @param {string} name - 名前
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * 猫の名前を取得する
   * @returns {string} 名前
   */
  getName(): string {
    return this.name;
  }

  /**
   * 猫の鳴き声を取得する
   * @returns {string} 鳴き声
   */
  getSound(): string {
    return this.sound;
  }
}

/**
 * 動物のマップ
 * キーは動物の種類、値は動物クラスのコンストラクタ
 */
export const animalMap: { [key in Species]: new (name: string) => Animal } = {
  dog: Dog,
  cat: Cat,
};
