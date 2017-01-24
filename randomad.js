function randomAdv() {
  m = 0, x = 0, y = 0;
  ad  = new Array();
  adv = new Array();
  hit = new Array();

  // hitには相対確率を入れる
  // 完全にランダムにするなら全部"1"にする
  // advには、広告のタグを入れる。改行はしないようにする
  // 広告を増やしたりする場合は、"[ ]"の数字が0から順になるようにする
  hit[0] = 1; adv[0] = '<div id="appreach-box" style="text-align:left;"><img id="appreach-image" src="//lh4.ggpht.com/LQDLh7N0NWO-3Jl-gYZAto0WWHg7RX__olf_fVki6QcQ85O-7BwlEk8BPlN9oDDNajG-=w170" alt="フリマアプリ「メルカリ」オークションよりかんたん" style="float:left; margin:10px; width:25%; max-width:120px; border-radius:10%;"><div class="appreach-info" style="margin: 10px;"><div id="appreach-appname">フリマアプリ「メルカリ」オークションよりかんたん</div><div id="appreach-developer" style="font-size:80%; display:inline-block; _display:inline;">開発元:<a id="appreach-developerurl" href="https://itunes.apple.com/jp/developer/mercari-inc./id667861052?uo=4" target="_blank" rel="nofollow">Mercari, Inc.</a></div><div id="appreach-price" style="font-size:80%; display:inline-block; _display:inline;">無料</div><div class="appreach-links" style="float: left;"><div id="appreach-itunes-link" style="display: inline-block; _display: inline;"><a id="appreach-itunes" href="https://t.adcrops.net/ad/p/r?_site=15563&_article=1383&_image=1417" target="_blank" rel="nofollow"><img src="https://nabettu.github.io/appreach/img/itune_en.png" style="height:40px;"></a></div><div id="appreach-gplay-link" style="display:inline-block; _display:inline;"><a id="appreach-gplay" href="https://t.adcrops.net/ad/p/r?_site=15563&_article=1383&_image=1417" target="_blank" rel="nofollow"><img src="https://nabettu.github.io/appreach/img/gplay_en.png" style="height:40px;"></a></div></div></div><div class="appreach-footer" style="margin-bottom:10px; clear: left;"></div></div>';
  hit[1] = 1; adv[1] = '<div id="appreach-box" style="text-align:left;"><img id="appreach-image" src="//lh3.googleusercontent.com/HxnkFh2w0XLgiJ1Obhc_wegsCpuJt0I2YU3kMc7-FrxOe9Xc2E_W4EPnfaHm6u026cvr=w170" alt="手数料無料 オタクのフリマアプリ-モノキュン！" style="float:left; margin:10px; width:25%; max-width:120px; border-radius:10%;"><div class="appreach-info" style="margin: 10px;"><div id="appreach-appname">手数料無料 オタクのフリマアプリ-モノキュン！</div><div id="appreach-developer" style="font-size:80%; display:inline-block; _display:inline;">開発元:<a id="appreach-developerurl" href="https://itunes.apple.com/jp/developer/ntt-solmare/id291585690?uo=4" target="_blank" rel="nofollow">NTT Solmare</a></div><div id="appreach-price" style="font-size:80%; display:inline-block; _display:inline;">無料</div><div class="appreach-links" style="float: left;"><div id="appreach-itunes-link" style="display: inline-block; _display: inline;"><a id="appreach-itunes" href="https://t.adcrops.net/ad/p/r?_site=15563&_article=26737&_image=9851" target="_blank" rel="nofollow"><img src="https://nabettu.github.io/appreach/img/itune_en.png" style="height:40px;"></a></div><div id="appreach-gplay-link" style="display:inline-block; _display:inline;"><a id="appreach-gplay" href="https://t.adcrops.net/ad/p/r?_site=15563&_article=26736&_image=9852" target="_blank" rel="nofollow"><img src="https://nabettu.github.io/appreach/img/gplay_en.png" style="height:40px;"></a></div></div></div><div class="appreach-footer" style="margin-bottom:10px; clear: left;"></div></div>';
  hit[2] = 1; adv[2] = '<div id="appreach-box" style="text-align:left;"><img id="appreach-image" src="//lh3.googleusercontent.com/706n6rqkT_8O9teW9BA61Prp_YSO-qJEmwAqdWBBOQIJsBw5rbfGNAJ9q1UCWmx21A=w170" alt="フリマアプリ ラクマ - 出品手数料無料の楽天のフリマアプリ" style="float:left; margin:10px; width:25%; max-width:120px; border-radius:10%;"><div class="appreach-info" style="margin: 10px;"><div id="appreach-appname">フリマアプリ ラクマ - 出品手数料無料の楽天のフリマアプリ</div><div id="appreach-developer" style="font-size:80%; display:inline-block; _display:inline;">開発元:<a id="appreach-developerurl" href="https://itunes.apple.com/jp/developer/rakuten-inc./id373778581?uo=4" target="_blank" rel="nofollow">Rakuten, Inc.</a></div><div id="appreach-price" style="font-size:80%; display:inline-block; _display:inline;">無料</div><div class="appreach-links" style="float: left;"><div id="appreach-itunes-link" style="display: inline-block; _display: inline;"><a id="appreach-itunes" href="https://t.adcrops.net/ad/p/r?_site=15563&_article=23095&_image=8952" target="_blank" rel="nofollow"><img src="https://nabettu.github.io/appreach/img/itune_en.png" style="height:40px;"></a></div><div id="appreach-gplay-link" style="display:inline-block; _display:inline;"><a id="appreach-gplay" href="https://t.adcrops.net/ad/p/r?_site=15563&_article=23095&_image=8952" target="_blank" rel="nofollow"><img src="https://nabettu.github.io/appreach/img/gplay_en.png" style="height:40px;"></a></div></div></div><div class="appreach-footer" style="margin-bottom:10px; clear: left;"></div></div>';
  //hit[3] = 1; adv[3] = '広告４';
  //hit[4] = 1; adv[4] = '広告５';
  //hit[5] = 1; adv[5] = '広告６';

  for(i=0; i<=hit.length - 1; i++) {
    m += hit[i];
  }
  n = Math.floor(Math.random() * m);
  n++;
  for(i=0; i<=hit.length - 1; i++) {
    x = y;
    y += hit[i];
    if(x<n && n<=y) ad = adv[i];
  }
  document.write(ad);
}
