export default class Aframe {
    constructor() {
        this.register();
    }

    register() {
        //マーカーの前に読み込まないと動かない
        AFRAME.registerComponent('registerevents', {
            init: function () {
                var marker = this.el;

                // マーカーを検出したイベントの登録
                marker.addEventListener('markerFound', async function () {
                        // // AR発見の効果音を鳴らす
                        // const getSound = document.getElementById('get_sound');
                        // getSound.play();
                        console.log('hello');
                });

                // マーカーを見失ったイベントの登録
                marker.addEventListener('markerLost', async function () {
                });
            }
        });
    }
}