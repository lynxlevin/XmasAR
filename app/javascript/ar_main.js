import { createSnow } from 'utils/createSnow';

// export default class Aframe {
//     constructor() {
//         this.register();
//     }

//     register() {
//         //マーカーの前に読み込まないと動かない
//         AFRAME.registerComponent('registerevents', {
//             init: function () {
//                 var marker = this.el;

//                 // マーカーを検出したイベントの登録
//                 marker.addEventListener('markerFound', async function () {
//                         // // AR発見の効果音を鳴らす
//                         // const getSound = document.getElementById('get_sound');
//                         // getSound.play();
//                         console.log('hello');
//                 });

//                 // マーカーを見失ったイベントの登録
//                 marker.addEventListener('markerLost', async function () {
//                 });
//             }
//         });
//     }
// }

window.addEventListener('DOMContentLoaded', ()=> {
  // コンテナを指定
  const container = document.querySelector('.snow-container');
  const letItSnow = document.querySelector('.let-it-snow');
  let count = 0;

  letItSnow.addEventListener("click", () => {
    if (count < 3) {
      count++;
      // 雪を生成する間隔をミリ秒で指定
      setInterval(() => {createSnow(container)}, 100);
    }
  });
});
