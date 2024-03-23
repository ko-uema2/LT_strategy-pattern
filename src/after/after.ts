import * as readline from "readline";
import { Species, animalMap } from "./animal";

// readlineのインターフェースを作成
const readlineInterface = readline.createInterface({
  input: process.stdin, // 標準入力からデータを読み込む
  output: process.stdout, // 標準出力にデータを書き込む
});

// ユーザーに名前を尋ねる
readlineInterface.question("What is your name? ", (name) => {
  // ユーザーに種類を尋ねる
  readlineInterface.question("What is your species? ", (species) => {
    // 入力された種類に基づいてAnimalオブジェクトを作成
    const animal = new animalMap[species as Species](name);

    // Animalオブジェクトの名前と鳴き声を出力
    console.log(`name : ${animal.getName()}`);
    console.log(`sound: ${animal.getSound()}`);

    // readlineインターフェースを閉じる
    readlineInterface.close();
  });
});
