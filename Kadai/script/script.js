// JavaScript用ファイル
new Vue({
  el: '#app',
  data: {
    name: '',            // ユーザーが入力した名前
    fortune: '',         // 運勢の結果
    errorMessage: '',    // エラーメッセージ
    isValidName: false   // 名前のバリデーションフラグ
  },
  methods: {
    validateName() {
      //名前は5文字以上で入力　5文字以下ならエラーメッセージ表示
      if (this.name.length < 5) {
        this.errorMessage = '名前は5文字以上で入力してください。';
        this.isValidName = false;
      } else {
        this.errorMessage = '';
        this.isValidName = true;
      }
    },
    drawFortune() {
      // バリデーションが成功した場合のみランダムな運勢を生成
      if (this.isValidName) {
        //0から100までのランダムな数値を取得する
        const randomNumber = Math.round(Math.random() * 100);
        //数値が80以上の場合（大吉）
        if (randomNumber >= 80) {
          this.fortune = 'daikichi';
          //数値が60以上の場合（吉）
        } else if (randomNumber >= 60) {
          this.fortune = 'kichi';
          //数値が40以上の場合（中吉）
        } else if (randomNumber >= 40) {
          this.fortune = 'chukichi';
          //数値が20以上の場合（小吉）
        } else if (randomNumber >= 20) {
          this.fortune = 'shokichi';
          //それ以外の場合（凶）
        } else {
          this.fortune = 'kyo';
        }
      }
    }
  }
}
);