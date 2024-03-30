import * as readline from "readline";

// Animal型の定義
// 可視化のために定義しているだけで、実際には使用していない
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
    }

    console.log("\n");
    console.log(`name : ${name}`);
    console.log(`sound: ${sound}`);

    // readlineインターフェースを閉じる
    readlineInterface.close();
  });
});
