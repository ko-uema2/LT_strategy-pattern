import * as readline from "readline";

// Animal型の定義
type Animal = {
  name: string;
  species: string;
  sound: string;
};

// readlineのインターフェースを作成
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ユーザーに名前を尋ねる
readlineInterface.question("What is your name? ", (name) => {
  // ユーザーに種類を尋ねる
  readlineInterface.question("What is your species? ", (species) => {
    let sound: string = "";

    // 種類によって鳴き声を変更
    if (species === "dog") {
      sound = "wan";
    } else if (species === "cat") {
      sound = "nyan";
    } else if (species === "bird") {
      sound = "chun";
    }

    // Animalオブジェクトを作成
    const animal: Animal = { name, species, sound };
    // Animalオブジェクトを出力
    console.log(animal);
    // readlineインターフェースを閉じる
    readlineInterface.close();
  });
});