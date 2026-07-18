/* ============================================================
   PreGo Demo Prototype — SPA (demo only / no backend)
   ============================================================ */
'use strict';

/* ---------- tiers ---------- */
const TIERS = {
  WHITE:  { name:'WHITE',  label:'デビュー', color:'#9AA69E', text:'#fff', price:5500,  reward:4400,  next:'BRONZE' },
  BRONZE: { name:'BRONZE', label:'ブロンズ', color:'#A46B39', text:'#fff', price:8800,  reward:7040,  next:'SILVER' },
  SILVER: { name:'SILVER', label:'シルバー', color:'#8C939B', text:'#fff', price:14300, reward:11440, next:'GOLD' },
  GOLD:   { name:'GOLD',   label:'ゴールド', color:'#B08A3C', text:'#fff', price:22000, reward:17600, next:'BLACK' },
  BLACK:  { name:'BLACK',  label:'ブラック', color:'#16130E', text:'#D9B96A', price:27500, reward:22000, next:null },
};
const yen = n => '¥' + n.toLocaleString();

/* ---------- demo users ---------- */
const WOMEN = [
  { id:'w1', st:'o', name:'MIKA',   age:29, img:'img/w1.jpg', best:92,  ave:104, tier:'GOLD',   rounds:38, rating:4.9, rc:41, hist:'5年',   area:['千葉','東京','埼玉'], dates:['7/8','7/14','7/17','7/21'], meet:'現地集合', drink:'少し飲む', style:'楽しくエンジョイ・マナー重視', reply:true,  bio:'休日はほぼゴルフ場にいます。ベスト更新が今年の目標。ラウンド後のビールまでがゴルフです🍺' },
  { id:'w2', st:'n', name:'SAKI',   age:28, img:'img/w2.jpg', best:99,  ave:110, tier:'SILVER', rounds:21, rating:4.8, rc:18, hist:'3〜5年', area:['千葉','茨城'], dates:['7/14','7/19','7/26'], meet:'駅集合OK', drink:'飲む', style:'わいわい・コンペ好き', reply:true,  bio:'最近100切りしました！月2でラウンドしています。駅集合で大丈夫です。' },
  { id:'w3', st:'n', name:'Emi',    age:31, img:'img/w3.jpg', best:96,  ave:108, tier:'SILVER', rounds:17, rating:4.7, rc:12, hist:'3〜5年', area:['東京','神奈川'], dates:['7/9','7/17','7/30'], meet:'現地集合', drink:'飲まない', style:'しっとり・丁寧なゴルフ', reply:false, bio:'フォームを大事にしています。レッスン週1。ご一緒する方のプレーの邪魔はしません◎' },
  { id:'w4', st:'o', name:'Rina',   age:26, img:'img/w4.jpg', best:118, ave:126, tier:'BRONZE', rounds:6,  rating:4.6, rc:5,  hist:'1〜3年', area:['埼玉','群馬'], dates:['7/12','7/21'], meet:'駅集合OK', drink:'少し飲む', style:'初心者歓迎でお願いします', reply:true,  bio:'ゴルフ歴2年目です。まだまだ下手ですが、一生懸命がんばります！' },
  { id:'w5', st:'n', name:'manami', age:31, img:'img/w5.jpg', best:104, ave:115, tier:'SILVER', rounds:14, rating:4.8, rc:11, hist:'3〜5年', area:['千葉','埼玉','東京'], dates:['7/14','7/17','7/30'], meet:'現地集合', drink:'飲む', style:'コンペ・わいわい・楽しくゴルフ', reply:true,  bio:'平日ゴルファーです。明るく穏やかな性格。ニコニコよく笑います。' },
  { id:'w6', st:'o', name:'yuka',   age:33, img:'img/w6.jpg', best:91,  ave:100, tier:'GOLD',   rounds:44, rating:5.0, rc:37, hist:'10年以上', area:['東京','千葉','神奈川'], dates:['7/10','7/19','7/27'], meet:'現地集合', drink:'少し飲む', style:'スコア重視・淡々と回りたい', reply:true,  bio:'シングル目指して練習中。ストイックに回りたい方、ぜひ。' },
  { id:'w7', st:'o', name:'Coco',   age:27, img:'img/w7.jpg', best:112, ave:121, tier:'BRONZE', rounds:9,  rating:4.5, rc:7,  hist:'1〜3年', area:['神奈川','静岡'], dates:['7/13','7/20'], meet:'駅集合OK', drink:'飲む', style:'エンジョイ・写真もたくさん撮りたい', reply:false, bio:'ゴルフウェア集めが趣味です。楽しく回れたら最高です🌸' },
  { id:'w8', st:'n', name:'Karin',  age:24, img:'img/w8.jpg', best:124, ave:132, tier:'WHITE',  rounds:2,  rating:4.4, rc:2,  hist:'1年未満', area:['東京','埼玉'], dates:['7/15','7/22'], meet:'駅集合OK', drink:'少し飲む', style:'デビューしたてです', reply:true,  bio:'先月コースデビューしました！優しく教えてくれる方だと嬉しいです。' },
  { id:'w9', st:'o', name:'あんな', age:34, img:'img/w9.jpg', best:97,  ave:107, tier:'SILVER', rounds:19, rating:4.7, rc:15, hist:'5年',   area:['茨城','千葉'], dates:['7/16','7/23','7/30'], meet:'現地集合', drink:'飲む', style:'早朝スルー好き', reply:true,  bio:'朝イチスタート好きです。午後は温泉に寄って帰るのが定番コース。' },
  { id:'w10', st:'n',name:'Rio',    age:30, img:'img/w10.jpg',best:101, ave:113, tier:'SILVER', rounds:16, rating:4.6, rc:13, hist:'3〜5年', area:['千葉','東京'], dates:['7/11','7/18','7/25'], meet:'駅集合OK', drink:'飲む', style:'わいわい・コンペ好き', reply:false, bio:'夏ゴルフに向けて体力づくり中。カート乗りっぱなしにはしません(笑)' },
];
const MEN = [
  { id:'m1', name:'SHU',     age:44, img:'img/m1.jpg', best:88,  ave:100, plan:'PREMIUM',  rounds:52, rating:5.0, rc:24, hist:'10年以上', area:['千葉','茨城','埼玉'], dates:['7/14','7/17','7/26','7/30'], meet:'車送迎OK', drink:'飲む', style:'楽しく・たまに真剣', bio:'月3ラウンド。車出せます（駅集合ももちろんOK）。楽しく回りましょう。' },
  { id:'m2', name:'Dai',     age:38, img:'img/m2.jpg', best:94,  ave:103, plan:'STANDARD', rounds:31, rating:4.8, rc:17, hist:'5年', area:['東京','神奈川'], dates:['7/12','7/19'], meet:'車送迎OK', drink:'少し飲む', style:'エンジョイ', bio:'ラウンド帰りの飯まで含めてゴルフだと思ってます。' },
  { id:'m3', name:'Nori',    age:51, img:'img/m3.jpg', best:82,  ave:91,  plan:'PREMIUM',  rounds:120,rating:4.9, rc:56, hist:'20年以上', area:['千葉','茨城'], dates:['7/9','7/16','7/23'], meet:'車送迎OK', drink:'飲まない', style:'スコア重視・でも優しい', bio:'元研修生です。スイングのアドバイスもできます。' },
  { id:'m4', name:'GOLFMAN', age:41, img:'img/m4.jpg', best:99,  ave:107, plan:'STANDARD', rounds:26, rating:4.6, rc:9,  hist:'5年', area:['埼玉','群馬'], dates:['7/13','7/20'], meet:'現地集合', drink:'飲む', style:'わいわい', bio:'コンペ大好き。ドラコンだけは負けません。' },
  { id:'m5', name:'Ken',     age:35, img:'img/m5.jpg', best:105, ave:112, plan:'STANDARD', rounds:12, rating:4.5, rc:6,  hist:'3年', area:['東京','千葉'], dates:['7/15','7/22'], meet:'駅集合', drink:'少し飲む', style:'エンジョイ', bio:'仕事の合間にコツコツ練習中です。' },
  { id:'m6', name:'BUMA',    age:48, img:'img/m6.jpg', best:79,  ave:94,  plan:'PREMIUM',  rounds:80, rating:4.9, rc:33, hist:'15年', area:['千葉','茨城','栃木'], dates:['7/10','7/17','7/24'], meet:'車送迎OK', drink:'飲む', style:'真剣勝負も歓迎', bio:'ベスト79。バーディ合戦しましょう。' },
];
/* extra photos per profile (portrait + play/course shots) */
const PHOTOS = {
  w1:['c3','c4'], w2:['c5','c1'], w3:['c6','c7'], w4:['c2'], w5:['c8','c1'],
  w6:['c4','c6'], w7:['c5'], w8:['c2'], w9:['c7','c3'], w10:['c8'],
  m1:['c9','c13'], m2:['c10'], m3:['c11','c13'], m4:['c12'], m5:['c10'], m6:['c11','c9'],
};
const photosOf = u => [u.img, ...(PHOTOS[u.id]||[]).map(p=>`img/${p}.jpg`)];

const COMPES = [
  { id:'c1', title:'PREGO OPEN 平日コンペ', course:'大多喜城ゴルフ倶楽部', pref:'千葉', date:'7/19（日）', fmt:'2:2 ペアラウンド', fee:10000, left:2, avs:['img/w2.jpg','img/m2.jpg','img/w5.jpg','img/m4.jpg'], note:'昼食付き・初参加歓迎・表彰あり' },
  { id:'c2', title:'サンセットハーフコンペ', course:'市原京急カントリークラブ', pref:'千葉', date:'7/26（日）', fmt:'3:3 グループ', fee:8000, left:4, avs:['img/w6.jpg','img/m3.jpg','img/w9.jpg'], note:'午後スルー・ハーフ9H・お茶会つき' },
];
const COURSES = ['大多喜城ゴルフ倶楽部','市原京急カントリークラブ','太平洋クラブ市原','千葉夷隅ゴルフクラブ','紫カントリークラブ すみれ'];
const COURSE_DATA = [
  { n:'大多喜城ゴルフ倶楽部', k:'オオタキジョウゴルフクラブ', p:'千葉県', img:'img/c3.jpg' },
  { n:'市原京急カントリークラブ', k:'イチハラケイキュウカントリークラブ', p:'千葉県', img:'img/c6.jpg' },
  { n:'太平洋クラブ市原', k:'タイヘイヨウクラブイチハラ', p:'千葉県', img:'img/c1.jpg' },
  { n:'千葉夷隅ゴルフクラブ', k:'チバイスミゴルフクラブ', p:'千葉県', img:'img/c8.jpg' },
  { n:'紫カントリークラブ すみれ', k:'ムラサキカントリークラブ スミレ', p:'千葉県', img:'img/c5.jpg' },
  { n:'JGM宇都宮ゴルフクラブ', k:'ジェージーエムウツノミヤゴルフクラブ', p:'栃木県', img:'img/c2.jpg' },
  { n:'25那須ゴルフガーデン', k:'ニジュウゴナスゴルフガーデン', p:'栃木県', img:'img/c4.jpg' },
  { n:'G7カントリー倶楽部', k:'ジーセブンカントリークラブ', p:'栃木県', img:'img/c7.jpg' },
];
const ARTICLES = [
  { id:'a1', title:'もっと気軽にラウンドできる仲間がいれば…', date:'2026年4月21日', img:'img/c6.jpg',
    body:['「ゴルフに行きたいのに、誘える相手がいない」。社会人ゴルファーの一番の悩みは、実はスコアよりも“同伴者”です。','会社のコンペは年に数回。友人とは予定が合わない。一人予約は気を使う——。PreGoは、プレー希望日から相手を探せる「日程マッチング」でこの悩みを解決するために生まれました。','この記事では、日程マッチングの使い方と、初めてのラウンドを安心して迎えるためのポイントを紹介します。'] },
  { id:'a2', title:'ゴルフ友達がなかなかできない…33歳独身男子の切実な悩みと解決策', date:'2026年4月2日', img:'img/c5.jpg',
    body:['30代になると、ゴルフを始める友人は増える一方で「一緒に回る仲間」を作るのは意外と難しいもの。','練習場には通っているのに、コースデビューのきっかけがない。そんな声をよく聞きます。','大切なのは「同じ日に行ける人」と出会うこと。腕前よりもまず日程です。PreGoのティーシートで、あなたの行ける日に行ける仲間を見つけてください。'] },
];

/* ---------- state ---------- */
const store = JSON.parse(localStorage.getItem('prego-demo') || '{}');
const S = Object.assign({
  role: null,            // 'm' | 'f'
  likes: {}, follows: {},
  points: 30000,         // male points
  coins: 17600,          // female coins
  sentOffers: [], recvOffers: [
    { id:'ro1', from:'m3', date:'7/16（木）', meet:'駅集合（五井駅 8:20）', course:'市原京急カントリークラブ', reward:17600, status:'pending' },
    { id:'ro2', from:'m2', date:'7/19（日）', meet:'現地集合', course:'大多喜城ゴルフ倶楽部', reward:17600, status:'pending' },
  ],
  chats: null, logs: [], seenNotice: false, theme:'g',
  subActive: false, favs: {}, verified: true,
  ntf: { email:true, line:false, news:true, foot:true, like:true, msg:true },
}, store);
const save = () => localStorage.setItem('prego-demo', JSON.stringify(S));

/* ---------- color themes (A/B/C) ---------- */
const THEME_NAMES = { b:'B ミント', e:'E エメラルド', g:'G ミント×エメラルド', '1':'1 新プラン（チケット制）' };
const isD = () => S.theme === '1';
const qsTheme = new URLSearchParams(location.search).get('theme');
if(qsTheme && THEME_NAMES[qsTheme]) S.theme = qsTheme;
if(!THEME_NAMES[S.theme]) S.theme = 'g';
function applyTheme(){
  document.body.classList.remove('theme-b','theme-e','theme-g');
  const cls = S.theme==='1' ? 'g' : S.theme;
  if(['b','e','g'].includes(cls)) document.body.classList.add('theme-' + cls);
}
function setTheme(t){ S.theme = t; save(); applyTheme(); render(); }
function cycleTheme(){
  const _tc=['b','e','g','1']; S.theme = _tc[(_tc.indexOf(S.theme)+1) % _tc.length];
  save(); applyTheme(); render();
  toast('配色パターン ' + THEME_NAMES[S.theme]);
}

const defaultChats = role => role === 'm' ? [
  { id:'w2', msgs:[ {who:'them', t:'はじめまして！7/14ご一緒できそうですね⛳', tm:'6/28 21:04'}, {who:'me', t:'はじめまして！ぜひお願いします。コースの希望ありますか？', tm:'6/28 21:40'}, {who:'them', t:'大多喜城いいなと思ってました！駅集合で大丈夫です😊', tm:'6/29 08:12'} ] },
  { id:'w5', msgs:[ {who:'them', t:'メッセージありがとうございます！是非タイミング合いましたら🙏', tm:'6/26 19:22'} ] },
  { id:'w8', msgs:[ {who:'them', t:'はじめまして、よろしくお願いします！デビューしたてですが頑張ります🔰', tm:'6/24 12:03'} ] },
] : [
  { id:'m1', msgs:[ {who:'them', t:'はじめまして！プロフィール拝見しました。今月ご都合いかがですか？', tm:'6/30 18:20'} ] },
  { id:'m3', msgs:[ {who:'them', t:'7/16にオファーをお送りしました。ご検討ください🙇', tm:'7/1 09:11'}, {who:'me', t:'ありがとうございます、確認します！', tm:'7/1 12:40'} ] },
];

/* ---------- helpers ---------- */
const $app = document.getElementById('app');
const me = () => S.role === 'f' ? { ...WOMEN[0], name:'みどり', tier:'GOLD' } : MEN[0];
const pool = () => S.role === 'f' ? MEN : WOMEN;
const find = id => [...WOMEN, ...MEN].find(u => u.id === id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

let toastTimer;
function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(()=>t.classList.remove('show'), 2400);
}
function sheet(html){
  const root = document.getElementById('sheet-root');
  root.innerHTML = `<div class="sheet-bg" onclick="if(event.target===this)closeSheet()"><div class="sheet"><div class="grab"></div>${html}</div></div>`;
}
function closeSheet(){ document.getElementById('sheet-root').innerHTML=''; }
function celebrate(){
  const colors=['#D9B96A','#68A083','#7AE0BD','#FFFFFF','#009395'];
  const el=document.createElement('div'); el.id='celebrate';
  el.innerHTML = `<div class="ck">${I.check.replace('width="40" height="40"','width="38" height="38"')}</div>` +
    Array.from({length:18},(_,i)=>{
      const ang=(i/18)*Math.PI*2, d=90+(i%5)*28;
      return `<span class="cf" style="background:${colors[i%5]};--dx:${Math.cos(ang)*d}px;--dy:${Math.sin(ang)*d-40}px;--rr:${(i%2?1:-1)*(180+i*20)}deg;animation-delay:${i*12}ms"></span>`;
    }).join('');
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),1200);
}
function go(h){ location.hash = h; }

/* ---------- icons ---------- */
const I = {
  back:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4.5L7.5 12l7.5 7.5"/></svg>',
  bell:'<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5a5.5 5.5 0 0 1 5.5 5.5c0 4.3 1.5 5.6 1.9 6H4.6c.4-.4 1.9-1.7 1.9-6A5.5 5.5 0 0 1 12 3.5z"/><path d="M10.2 19.5a1.9 1.9 0 0 0 3.6 0"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10.5L12 4l8 6.5"/><path d="M5.5 9.3V20h13V9.3"/><path d="M9.8 20v-5.6h4.4V20"/></svg>',
  cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 9.7h17M8.5 3v3.6M15.5 3v3.6"/></svg>',
  flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 21V3.5l10 3.2L7 10.2"/><path d="M4.6 21h4.8"/></svg>',
  msg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 11.7a8.5 8.5 0 0 1-8.5 8.4c-1.2 0-2.3-.2-3.3-.7L4 20.6l1.2-4.3a8.5 8.5 0 1 1 15.3-4.6z"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="7.8" r="3.8"/><path d="M4.6 20.5c1.3-3.8 4.3-5.6 7.4-5.6s6.1 1.8 7.4 5.6"/></svg>',
  heart:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.2S4.4 15.6 2.9 11.1C1.8 7.6 4 4.6 7.1 4.6c2 0 3.7 1.1 4.9 2.9 1.2-1.8 2.9-2.9 4.9-2.9 3.1 0 5.3 3 4.2 6.5-1.5 4.5-9.1 9.1-9.1 9.1z"/></svg>',
  send:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 3L10.8 13.2"/><path d="M21 3l-6.5 18-3.7-8.3L2.5 9z"/></svg>',
  invite:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 21V4l11.5 3.7L6.5 11.4"/></svg>',
  check:'<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5.5 5.5L20 6.5"/></svg>',
  star:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M12 3.5l2.7 5.6 6.1.9-4.4 4.2 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 10l6.1-.9z"/></svg>',
  pin:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>',
  camera:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8.5A1.5 1.5 0 0 1 5.5 7H8l1.7-2.5h4.6L16 7h2.5A1.5 1.5 0 0 1 20 8.5V18a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18z"/><circle cx="12" cy="13" r="3.3"/></svg>',
  coin:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="6.5" rx="8" ry="3.5"/><path d="M4 6.5v11c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-11"/><path d="M4 12c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5"/></svg>',
  gear:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.1"/><path d="M19 12a7 7 0 0 0-.15-1.4l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2.4-1.4L13.7 2h-3.4l-.4 2.6a7 7 0 0 0-2.4 1.4l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .5.05.9.15 1.4l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2.4 1.4l.4 2.6h3.4l.4-2.6a7 7 0 0 0 2.4-1.4l2.4 1 2-3.4-2-1.6c.1-.5.15-.9.15-1.4z"/></svg>',
  foot:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><ellipse cx="8" cy="7" rx="2.7" ry="4.2"/><ellipse cx="16" cy="12" rx="2.7" ry="4.2"/><ellipse cx="8" cy="17" rx="1.8" ry="2.3"/><ellipse cx="16" cy="21" rx="1.7" ry="1.7"/></svg>',
  trophy:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v6a5 5 0 0 1-10 0z"/><path d="M7 6H4a3 3 0 0 0 3 5M17 6h3a3 3 0 0 1-3 5"/></svg>',
  car:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15l1.5-5A2 2 0 0 1 7.4 8.5h9.2a2 2 0 0 1 1.9 1.5L20 15"/><rect x="3" y="15" width="18" height="4.5" rx="1.5"/><circle cx="7.2" cy="19.5" r="1.3"/><circle cx="16.8" cy="19.5" r="1.3"/></svg>',
  train:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M9 21l1.5-3M15 21l-1.5-3"/><circle cx="9" cy="14" r=".6" fill="currentColor"/><circle cx="15" cy="14" r=".6" fill="currentColor"/></svg>',
  shield:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 2.8v5.4c0 4.6-3 8-7 9.8-4-1.8-7-5.2-7-9.8V5.8z"/><path d="M9 12l2 2 4-4.2"/></svg>',
};

/* ---------- shared UI parts ---------- */
function appbar(o = {}){
  const back = o.back ? `<button class="side back" onclick="history.back()">${I.back}</button>` : `<span class="side"></span>`;
  const bell = o.noBell ? `<span class="side"></span>` : `<button class="side bell" onclick="go('#/notifications')">${I.bell}<span class="dot"></span></button>`;
  const mid = o.brand ? `<span class="ttl" style="display:flex;justify-content:center;align-items:center"><span class="brand-logo" role="img" aria-label="PreGo"></span></span>` : `<span class="ttl">${o.title||''}</span>`;
  return `<header class="appbar ${o.green?'green':''}">${back}${mid}${bell}</header>`;
}
function tabbar(cur){
  const t = (id, icon, label, href, nd) =>
    `<a class="tb ${cur===id?'on':''}" href="${href}">${nd?'<span class="nd"></span>':''}${icon}<span>${label}</span></a>`;
  return `<nav class="tabbar">
    ${t('home', I.home, 'ホーム', '#/home')}
    ${t('tee', I.cal, 'ティーシート', '#/tee')}
    ${t('feed', I.flag, 'フィード', '#/feed')}
    ${t('msg', I.msg, 'メッセージ', '#/messages', true)}
    ${t('my', I.user, 'マイページ', '#/mypage')}
  </nav>`;
}
function tierBadge(tk, small){
  const t = TIERS[tk];
  const bg = tk === 'GOLD' ? 'linear-gradient(120deg,#D9B96A,#B08A3C)' : t.color;
  return `<span class="tier-badge" style="background:${bg};color:${t.text};${small?'font-size:8px;padding:2px 8px;':''}">${t.name}</span>`;
}
function styleBadge(u, small){
  if(!u.st) return '';
  const s = small?'font-size:8.5px;padding:2px 8px;':'';
  return u.st==='n'
    ? `<span class="chip" style="${s}">仲間探し</span>`
    : `<span class="chip brass" style="${s}">おもてなし</span>`;
}
function ringStyle(tk){
  const t = TIERS[tk];
  const c = tk === 'GOLD' ? 'linear-gradient(135deg,#D9B96A,#B08A3C)' : t.color;
  return `background:${c}`;
}
function demoPill(){
  const r = S.role === 'f' ? '女性デモ：みどり' : '男性デモ：SHU';
  return `<div class="pill-row">
    <button class="demo-pill" onclick="switchRole()">${r}<span class="sw">⇄ 切替</span></button>
    <button class="demo-pill theme" onclick="cycleTheme()">配色 <span class="tletter">${S.theme.toUpperCase()}</span></button>
    <button class="demo-pill" style="padding:10px 14px" onclick="resetDemo()">↺</button>
  </div>`;
}
function resetDemo(){
  if(!confirm('デモを最初の状態に戻しますか？（オファー・チャット・保存内容がリセットされます）')) return;
  const t = S.theme;
  localStorage.removeItem('prego-demo');
  location.href = location.pathname + '?theme=' + t + '#/login';
  location.reload();
}
function switchRole(){
  S.role = S.role === 'f' ? 'm' : 'f';
  S.chats = defaultChats(S.role);
  save(); toast(S.role==='f' ? '女性デモ（みどり）に切替えました' : '男性デモ（SHU）に切替えました');
  go('#/home'); render();
}

/* ---------- views ---------- */
const V = {};

/* ---- login ---- */
V.login = () => `
<div class="login">
  <svg class="art" viewBox="0 0 430 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <g fill="none" stroke="var(--art-stroke,#D9B96A)" stroke-width="1">
      <path d="M-20,700 C90,650 200,740 320,690 S460,620 480,660"/>
      <path d="M-20,750 C90,700 210,790 330,740 S470,670 480,710" opacity=".6"/>
      <circle cx="360" cy="150" r="70" opacity=".5"/><circle cx="360" cy="150" r="50" opacity=".35"/>
    </g>
  </svg>
  <div class="brandmark">
    <div class="morph">
      <div class="premium">PREMIUM&nbsp;GOLF</div>
      <div class="logo" role="img" aria-label="PreGo"></div>
    </div>
    <div class="under"></div>
    <div class="pg-cap">PREMIUM GOLF</div>
    <div class="copy">都合の合うゴルフ仲間が、見つかる。</div>
  </div>
  <div class="proof"><span class="chip">${I.shield} 本人確認制</span><span class="chip">実名非公開</span></div>
  <div class="actions">
    <button class="btn line-btn" onclick="demoLogin()">LINEではじめる</button>
    <button class="btn glass" onclick="demoLogin()">メールアドレスではじめる</button>
    <div class="sub">
      <a onclick="demoLogin()">ログイン</a>
      <a href="#/signup">新規登録</a>
      <a href="#/forgot">パスワードを忘れた</a>
    </div>
    <div class="sub" style="margin-top:8px">
      <a href="#/articles" style="text-decoration:underline">PreGo記事はこちら</a>
      <a href="#/contact">運営へのお問い合わせ</a>
    </div>
    <div class="theme-row">
      <span class="lbl2">配色パターン</span>
      ${['b','e','g','1'].map(t=>`<button class="tbtn ${S.theme===t?'on':''}" onclick="setTheme('${t}')">${t.toUpperCase()}</button>`).join('')}
    </div>
    <div class="demo-note">DEMO PROTOTYPE — 認証・決済は動作しません</div>
  </div>
</div>`;
function demoLogin(){
  sheet(`<h3>デモアカウントを選択</h3>
  <p class="muted">体験したい側を選んでください（あとで切替できます）</p>
  <div class="role-pick">
    <button class="rp" onclick="pickRole('m')"><img src="img/m1.jpg"><div class="nm">SHU（44）</div><div class="rl">男性ゴルファー・プレミアム会員</div></button>
    <button class="rp" onclick="pickRole('f')"><img src="img/w1.jpg"><div class="nm">みどり（29）</div><div class="rl">女性ゴルファー・GOLDランク</div></button>
  </div>`);
}
function pickRole(r){
  S.role = r; S.chats = defaultChats(r); save();
  closeSheet(); go('#/home'); render();
  setTimeout(()=>toast(r==='m'?'ようこそ、SHUさん':'ようこそ、みどりさん'), 300);
}

/* ---- signup (demo wizard / 実アプリ準拠) ---- */
let su = { step:1, opts:{}, photo:false, areas:[] };
V.signup = () => {
  const s = su.step;
  const opt = (g,v)=>`<button class="opt ${su.opts[g]===v?'on':''}" onclick="suOpt('${g}','${v}')">${v}</button>`;
  let body = '';
  if(s===1) body = `
    <div class="label">性別</div>
    <div class="opt-grid">${opt('sex','男性')}${opt('sex','女性')}</div>
    <div class="label">メールアドレス</div>
    <input class="input" type="email" placeholder="example@email.com" value="demo@prego.golf">
    <div class="label">電話番号（SMSで認証コードが送られます）</div>
    <input class="input" type="tel" placeholder="ハイフンなし" value="09000000000">
    <div class="label">任意のパスワード（英数字6桁以上）</div>
    <input class="input" type="password" placeholder="パスワードを入力" value="demo123">
    <div style="margin-top:16px;display:flex;flex-direction:column;gap:8px">
      <button class="opt ${su.opts.terms?'on':''}" style="border-radius:12px;text-align:left" onclick="su.opts.terms=!su.opts.terms;render()">${su.opts.terms?'☑':'☐'} 利用規約・プライバシーポリシーに同意します</button>
      <button class="opt ${su.opts.adult?'on':''}" style="border-radius:12px;text-align:left" onclick="su.opts.adult=!su.opts.adult;render()">${su.opts.adult?'☑':'☐'} 18歳以上です</button>
    </div>`;
  if(s===2) body = `
    <p style="text-align:center;margin-top:20px;font-size:13.5px">090-0000-0000 宛に送信された<br><b>4桁の認証コード</b>を入力してください</p>
    <div class="code-in">
      ${[0,1,2,3].map(i=>`<input maxlength="1" inputmode="numeric" value="${'1234'[i]}">`).join('')}
    </div>
    <p class="muted" style="text-align:center;font-size:11px">コードが届かない場合は <a style="color:var(--turf);font-weight:700" onclick="toast('認証コードを再送しました（デモ）')">再送する</a></p>`;
  if(s===3) body = `
    <div class="label">プロフィール写真</div>
    <button class="photo-pick" onclick="photoTips()">
      ${su.photo?`<img src="${su.opts.sex==='女性'?'img/w5.jpg':'img/m2.jpg'}">`:`${I.camera}<span>タップして写真を選択</span><span style="font-size:10px">選ばれる写真のポイントを見る</span>`}
    </button>
    <div class="label">ニックネーム</div>
    <input class="input" placeholder="ニックネームを入力" value="${su.opts.sex==='女性'?'もも':'タケ'}">
    <div class="label">自己紹介（200文字まで）</div>
    <textarea class="input" rows="3" placeholder="よろしくお願いします！">よろしく</textarea>
    <div style="display:flex;gap:10px;margin-top:4px">
      <div style="flex:1"><div class="label">ベストスコア</div><input class="input" type="number" value="100"></div>
      <div style="flex:1"><div class="label">アベレージ</div><input class="input" type="number" value="95"></div>
    </div>
    <div class="label">生年月日（非公開・後から変更できません）</div>
    <div style="display:flex;gap:8px;align-items:center">
      <input class="input" style="flex:2" type="number" value="1985"><span>年</span>
      <input class="input" style="flex:1" type="number" value="12"><span>月</span>
      <input class="input" style="flex:1" type="number" value="10"><span>日</span>
    </div>
    <div class="label">プレー代の負担について *</div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${['お相手の分も払います','お互い自分の分を払う','お相手に出してもらいたい','話し合って決めたい'].map(v=>`<button class="opt ${su.opts.pay===v?'on':''}" style="border-radius:12px" onclick="suOpt('pay','${v}')">${v}</button>`).join('')}
    </div>
    <div class="label">プレーエリア *</div>
    <button class="input" style="text-align:left;color:${su.areas.length?'var(--ink)':'var(--ink-soft)'}" onclick="areaSheet()">
      ${su.areas.length?su.areas.join('・'):'プレーエリアを選択してください'}
    </button>
    <div class="label">郵便番号（市区町村レベルで管理されます）</div>
    <input class="input" placeholder="1234567" value="1510051" style="max-width:180px">
    <p class="muted" style="margin-top:14px;font-size:11px">プロフィール情報は条件にマッチしたお相手を検索する際に反映されます。生年月日は非公開です（年齢・都道府県・市区郡は公開）。</p>`;
  return `
  ${appbar({title:'新規登録', back:true, noBell:true})}
  <div class="page nofoot wrap">
    <div class="steps">${[1,2,3].map(i=>`<i class="${i<=s?'on':''}"></i>`).join('')}</div>
    <p class="muted">STEP ${s} / 3 ${['アカウント作成','SMS認証','プロフィール登録'][s-1]}</p>
    ${body}
    <div style="margin-top:26px;display:flex;gap:10px">
      ${s>1?`<button class="btn ghost" style="flex:1" onclick="su.step--;render()">戻る</button>`:''}
      <button class="btn" style="flex:2" onclick="suNext()" ${s===1&&(!su.opts.terms||!su.opts.adult)?'disabled':''}>${['認証コード送信','認証する','プロフィール登録'][s-1]}</button>
    </div>
  </div>`;
};
function suOpt(g,v){ su.opts[g]=v; render(); }
function suNext(){
  if(su.step<3){ su.step++; render(); window.scrollTo(0,0); }
  else {
    const r = (su.opts.sex==='女性')?'f':'m';
    su = {step:1, opts:{}, photo:false, areas:[]};
    S.role = r; S.chats = defaultChats(r); save();
    go('#/home'); render();
    setTimeout(()=>toast('登録が完了しました。ようこそPreGoへ！'),300);
  }
}
function photoTips(){
  su.photo = true;
  const g = su.opts.sex==='女性' ? ['w2','w5','w6','w8'] : ['m1','m2','m4','m5'];
  const sc = [['108','122'],['78','90'],['87','95'],['70','90']];
  sheet(`<h3>プロフィール写真のポイント</h3>
    <div class="tip-grid">${g.map((p,i)=>`<div class="tg"><img src="img/${p}.jpg"><div class="ts">Best ${sc[i][0]}・Ave ${sc[i][1]}</div></div>`).join('')}</div>
    <p style="font-size:12.5px;line-height:1.8">1枚目はあなたの人柄が伝わる<b>笑顔の写真</b>がおすすめです。2枚目以降にラウンドの様子がわかる写真を載せると、お相手へイメージがより伝わります。</p>
    <p class="muted" style="font-size:11px;margin-top:8px">NG：顔がまったくわからないもの・風景のみ・動物やイラストなど。不快感を与える写真は差し戻されることがあります。</p>
    <button class="btn" style="margin-top:14px" onclick="closeSheet();render()">OK（デモ写真を設定）</button>`);
}
function areaSheet(){
  const kanto = ['茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県'];
  const html = () => `<h3>プレーエリア選択</h3>
    <p class="muted">主にプレーするエリアを選択してください</p>
    <div class="opt-grid" style="margin-top:12px">
      ${kanto.map(p=>`<button class="opt ${su.areas.includes(p)?'on':''}" onclick="toggleArea('${p}')">${p}</button>`).join('')}
    </div>
    <div class="hr"></div>
    <p class="muted" style="font-size:11px">選択済み：${su.areas.length?su.areas.join(', '):'未選択'}</p>
    <button class="btn" style="margin-top:12px" onclick="closeSheet();render()">OK</button>`;
  sheet(html());
  window._areaHtml = html;
}
function toggleArea(p){
  const i = su.areas.indexOf(p);
  i>=0 ? su.areas.splice(i,1) : su.areas.push(p);
  sheet(window._areaHtml());
}

/* ---- home ---- */
V.home = () => {
  const isM = S.role === 'm';
  let list = pool();
  if(isM && S.hf==='n') list = list.filter(u=>u.st==='n');
  if(isM && S.hf==='o') list = list.filter(u=>u.st==='o');
  const cards = list.map((u, ci) => {
    const liked = S.likes[u.id];
    return `
    <div class="pcard" style="--i:${ci}">
      <div class="ph" onclick="go('#/profile/${u.id}')">
        <img src="${u.img}" alt="">
        ${u.reply!==false?'<span class="chip brass rep" style="font-size:9px">返信率↑</span>':''}
        <button class="like ${liked?'on':''}" onclick="event.stopPropagation();toggleLike('${u.id}')">${I.heart}</button>
        <div class="id">
          <div class="nm">${esc(u.name)} <span class="ag">${u.age}</span></div>
          ${isM?`<div style="display:flex;gap:4px">${styleBadge(u,true)}${u.st==='o'?tierBadge(u.tier,true):''}</div>`:''}
        </div>
      </div>
      <div class="stats" onclick="go('#/profile/${u.id}')">
        <span class="st">BEST<b>${u.best}</b></span>
        <span class="st">AVE<b>${u.ave}</b></span>
      </div>
    </div>`;
  }).join('');
  return `
  ${appbar({brand:true})}
  <div class="page">
    <div class="notice">
      <span class="ic">${I.cal}</span>
      <span>プレー希望日を登録するとマッチ率が3倍になります</span>
    </div>
    <div class="filters">
      <button class="chip ${!S.hf?'':'line'}" onclick="S.hf=null;save();render()">すべて</button>
      ${isM?`
      <button class="chip ${S.hf==='n'?'':'line'}" onclick="S.hf='n';save();render()">仲間探し（謝礼不要）</button>
      <button class="chip ${S.hf==='o'?'':'line'}" onclick="S.hf='o';save();render()">おもてなし</button>`:''}
      <span class="chip line">日程が合う</span>
      <span class="chip line">エリア：千葉</span>
    </div>
    <div class="grid">${cards}</div>
  </div>
  ${tabbar('home')}${demoPill()}`;
};
function toggleLike(id){
  S.likes[id] = !S.likes[id]; save(); render();
  if(S.likes[id]) toast('いいねしました');
}

/* ---- tee sheet ---- */
let teeSel = '7/14';
const TEE_DAYS = [
  { d:'7/8',  w:'WED' }, { d:'7/9', w:'THU' }, { d:'7/10', w:'FRI' },
  { d:'7/12', w:'SUN' }, { d:'7/14', w:'TUE' }, { d:'7/17', w:'FRI' },
  { d:'7/19', w:'SUN' }, { d:'7/21', w:'TUE' }, { d:'7/26', w:'SUN' }, { d:'7/30', w:'THU' },
];
V.tee = () => {
  const cand = pool().filter(u => u.dates.includes(teeSel));
  const compe = COMPES.filter(c => c.date.startsWith(teeSel));
  const dayBtns = TEE_DAYS.map(x => {
    const has = pool().some(u => u.dates.includes(x.d)) || COMPES.some(c=>c.date.startsWith(x.d));
    return `<button class="day ${x.d===teeSel?'sel':''} ${has?'has':''}" onclick="teeSel='${x.d}';render()">
      <div class="dw">${x.w}</div><div class="dn">${x.d.split('/')[1]}</div><div class="dot"></div></button>`;
  }).join('');
  const rows = cand.map(u => `
    <div class="card mcard" onclick="go('#/profile/${u.id}')">
      <span class="ring" style="${ringStyle(u.tier||'BRONZE')};width:50px;height:50px">
        <img class="av" src="${u.img}" style="width:100%;height:100%;border:2px solid #fff">
      </span>
      <div class="info">
        <div class="nm">${esc(u.name)} <span class="ag">${u.age}</span> ${S.role==='m'?tierBadge(u.tier,true):''}</div>
        <div class="st"><span>Best <b>${u.best}</b></span><span>Ave <b>${u.ave}</b></span><span>${u.area.slice(0,2).join('・')}</span></div>
      </div>
      <span class="arw">${I.back.replace('M15 5l-7 7 7 7','M9 5l7 7-7 7')}</span>
    </div>`).join('');
  const compeCards = compe.map(c => `
    <a class="compe" href="#/compe/${c.id}">
      <div class="lb">PREGO OPEN</div>
      <h4>${c.title}</h4>
      <div class="mt">${c.course}・${c.fmt}・${c.note.split('・')[0]}</div>
      <div class="ft">
        <div class="avs">${c.avs.map(a=>`<img src="${a}">`).join('')}</div>
        <span class="join">残り${c.left}枠</span>
      </div>
    </a>`).join('');
  return `
  <div class="page">
    <div class="tee-head">
      ${appbar({green:true, title:'', noBell:true}).replace('<span class="ttl"></span>','<span class="ttl" style="text-align:left;font-size:18px">ティーシート</span><span class="mon" style="margin-left:auto">JULY 2026</span>')}
      <div class="strip">${dayBtns}</div>
    </div>
    <div class="tee-body">
      <div class="date-lbl"><span class="d">${teeSel}</span><span class="t">${TEE_DAYS.find(x=>x.d===teeSel)?.w==='SUN'?'日曜日':'プレー希望日'}・あなたも空き登録済み</span></div>
      ${compeCards}
      ${rows || ''}
      ${(!rows && !compeCards) ? `<div class="empty"><div class="big">—</div>この日はまだ候補がいません</div>` : ''}
      <button class="card" style="padding:14px;display:flex;align-items:center;gap:12px;width:100%" onclick="go('#/miss')">
        <span style="width:38px;height:38px;border-radius:50%;background:var(--brass-soft);color:#8A6B25;display:flex;align-items:center;justify-content:center;flex:none">${I.pin}</span>
        <span style="flex:1;text-align:left">
          <b style="font-size:13.5px">惜しいマッチ　<span class="chip brass" style="font-size:9px">3件</span></b>
          <span class="muted" style="display:block;font-size:11px">あと一歩で成立する候補を見る</span>
        </span>
        <span class="arw" style="color:var(--fairway)">${I.back.replace('M15 5l-7 7 7 7','M9 5l7 7-7 7')}</span>
      </button>
    </div>
  </div>
  ${tabbar('tee')}${demoPill()}`;
};

/* ---- near-miss ---- */
V.miss = () => {
  const isM = S.role==='m';
  const a = isM ? WOMEN[1] : MEN[1];
  const b = isM ? WOMEN[4] : MEN[2];
  return `
  ${appbar({title:'惜しいマッチ', back:true})}
  <div class="page">
    <p class="muted wrap" style="margin-top:12px">あと一歩で成立する候補です。橋渡しの提案を送ってみましょう。</p>
    <div class="tee-body">
      <div class="card" style="padding:14px 16px">
        <div style="display:flex;gap:12px;align-items:center" onclick="go('#/profile/${a.id}')">
          <img class="av" src="${a.img}" style="width:48px;height:48px">
          <div style="flex:1">
            <div style="font-weight:700">${esc(a.name)} <span class="muted">${a.age}</span></div>
            <div class="miss-badges"><span class="chip ok">日程 ◎ 7/14 空き</span><span class="chip ng">距離 △ 車95分</span></div>
          </div>
        </div>
        <div class="bridge"><span class="lb">中間地点の提案</span><b>市原京急カントリークラブ</b>（あなた48分・${esc(a.name)}さん51分）・五井駅からクラブバスあり</div>
        <button class="btn sm" style="margin-top:11px" onclick="toast('中間地点の提案を送りました（デモ）')">この案を送ってみる</button>
      </div>
      <div class="card" style="padding:14px 16px">
        <div style="display:flex;gap:12px;align-items:center" onclick="go('#/profile/${b.id}')">
          <img class="av" src="${b.img}" style="width:48px;height:48px">
          <div style="flex:1">
            <div style="font-weight:700">${esc(b.name)} <span class="muted">${b.age}</span></div>
            <div class="miss-badges"><span class="chip ok">距離 ◎ 拠点12km</span><span class="chip ng">日程 △ 合わず</span></div>
          </div>
        </div>
        <div class="bridge"><span class="lb">日程リクエスト</span>${esc(b.name)}さんは <b>7/21（火）</b> が空いています。合わせられますか？</div>
        <button class="btn sm" style="margin-top:11px" onclick="toast('7/21で日程リクエストを送りました（デモ）')">7/21で打診する</button>
      </div>
      <a class="compe" href="#/compe/c1">
        <div class="lb">それでも合わない週は</div>
        <h4>${COMPES[0].date} 公式コンペ＠千葉</h4>
        <div class="mt">${COMPES[0].fmt}・残り${COMPES[0].left}枠</div>
      </a>
    </div>
  </div>
  ${tabbar('tee')}${demoPill()}`;
};

/* ---- profile ---- */
V.profile = id => {
  const u = find(id); if(!u) return V.home();
  const isWoman = WOMEN.includes(u);
  const pics = photosOf(u);
  const myDates = me().dates || ['7/14','7/17','7/26','7/30'];
  const dchips = u.dates.map(d => `
    <div class="dchip ${myDates.includes(d)?'hot':''}"><div class="d">${d}</div><div class="w">${TEE_DAYS.find(x=>x.d===d)?.w||''}</div></div>`).join('');
  const overlap = u.dates.some(d=>myDates.includes(d));
  return `
  <div class="page" style="padding-bottom:0">
    <div class="prof-hero">
      <div class="hero-track" onscroll="heroScrolled(this)">
        ${pics.map((p,i)=>`<div class="hero-slide"><img src="${p}" class="${i===0?'kb':''}" alt=""></div>`).join('')}
      </div>
      <div class="hero-shade"></div>
      ${pics.length>1?`
      <div class="pcount" id="pcount">1 / ${pics.length}</div>
      <div class="hero-dots" id="hero-dots">${pics.map((_,i)=>`<i class="${i===0?'on':''}"></i>`).join('')}</div>`:''}
      <div class="topbar">
        <button class="cbtn" onclick="history.back()">${I.back}</button>
        <button class="cbtn ${S.likes[u.id]?'on':''}" onclick="toggleLike('${u.id}')" style="${S.likes[u.id]?'color:#FF7A93':''}">${I.heart}</button>
      </div>
      <div class="idbox">
        <div class="nm">${esc(u.name)} <span class="ag">${u.age}</span> ${isWoman?(u.st==='o'?tierBadge(u.tier):''):''}</div>
        <div class="bd">
          ${isWoman&&S.role==='m'?styleBadge(u):''}
          <span class="chip" style="background:rgba(250,248,242,.9)">${I.shield} 本人確認済</span>
          ${u.meet.includes('駅')?`<span class="chip" style="background:rgba(250,248,242,.9)">${I.train} 駅集合OK</span>`:''}
          ${u.meet.includes('車')?`<span class="chip" style="background:rgba(250,248,242,.9)">${I.car} 送迎OK</span>`:''}
        </div>
      </div>
    </div>
    <div class="prof-body">
      <div class="scorecard">
        <div class="c"><div class="v">${u.best}</div><div class="k">BEST</div></div>
        <div class="c"><div class="v">${u.ave}</div><div class="k">AVERAGE</div></div>
        <div class="c"><div class="v">${u.rounds}</div><div class="k">ラウンド回数</div></div>
      </div>
      <div class="rev-line"><span class="stars">★★★★★</span><b>${u.rating}</b><span>（${u.rc}件のレビュー）</span></div>
      <div class="psec">
        <div class="h">プレー希望日${overlap?'　<span class="chip brass" style="font-size:9px;letter-spacing:0">あなたと重なる日があります</span>':''}</div>
        <div class="dchips">${dchips}</div>
      </div>
      <div class="psec"><div class="h">プレーエリア</div><div class="chips">${u.area.map(a=>`<span class="chip">${a}</span>`).join('')}</div></div>
      <div class="psec"><div class="h">自己紹介</div><div class="txt">${esc(u.bio)}</div></div>
      <div class="psec"><div class="h">ゴルフ情報</div>
        <div class="spec">
          <div class="row"><span class="k">ゴルフ歴</span><span class="v">${u.hist}</span></div>
          <div class="row"><span class="k">合流方法</span><span class="v">${u.meet}</span></div>
          <div class="row"><span class="k">お酒</span><span class="v">${u.drink}</span></div>
          <div class="row"><span class="k">スタイル</span><span class="v" style="font-size:11px">${u.style}</span></div>
        </div>
      </div>
      <div style="height:8px"></div>
    </div>
    <div class="prof-cta">
      <button class="sq" onclick="openChat('${u.id}')">${I.msg.replace('viewBox','width="20" height="20" viewBox')}</button>
      ${S.role==='m' && isWoman
        ? (u.st==='n'
          ? `<button class="btn" onclick="inviteSheet('${u.id}')">${I.invite} ラウンドに誘う（謝礼不要）</button>`
          : `<button class="btn" onclick="go('#/offer/${u.id}')">${I.invite} オファーで誘う</button>`)
        : `<button class="btn" onclick="openChat('${u.id}')">メッセージを送る</button>`}
    </div>
  </div>${demoPill()}`;
};

/* ---- offer flow ---- */
let of_ = {};
V.offer = id => {
  const u = find(id); if(!u) return V.home();
  const t = TIERS[u.tier];
  if(of_.id !== id) of_ = { id, date:null, meet:null, course:null };
  const myDates = me().dates || [];
  const shared = u.dates.filter(d=>myDates.includes(d));
  const dateOpts = (shared.length?shared:u.dates).map(d =>
    `<button class="opt ${of_.date===d?'on':''}" onclick="of_.date='${d}';render()">${d}（${TEE_DAYS.find(x=>x.d===d)?.w||'-'}）</button>`).join('');
  const meets = [
    {k:'station', l:`${I.train} 駅集合（推奨）`, d:'最寄駅からクラブバス'},
    {k:'onsite', l:`${I.pin} 現地集合`, d:'各自でコースへ'},
    {k:'car', l:`${I.car} 車送迎`, d:'認証ドライバーのみ'},
  ].map(m=>`<button class="opt ${of_.meet===m.k?'on':''}" onclick="of_.meet='${m.k}';render()" style="display:flex;flex-direction:column;align-items:flex-start;border-radius:14px;flex:1;min-width:100px">
     <span style="display:flex;gap:5px;align-items:center;font-weight:700">${m.l}</span><span style="font-size:9.5px;color:var(--ink-soft)">${m.d}</span></button>`).join('');
  const courses = COURSES.slice(0,3).map(c=>`<button class="opt ${of_.course===c?'on':''}" onclick="of_.course='${c}';render()">${c}</button>`).join('');
  const ready = of_.date && of_.meet && of_.course;
  return `
  ${appbar({title:`${esc(u.name)}さんをラウンドに誘う`, back:true, noBell:true})}
  <div class="page nofoot oflow">
    <div class="card" style="padding:13px 15px;display:flex;gap:12px;align-items:center">
      <span class="ring" style="${ringStyle(u.tier)};width:52px;height:52px"><img class="av" src="${u.img}" style="width:100%;height:100%;border:2px solid #fff"></span>
      <div style="flex:1">
        <div style="font-weight:900">${esc(u.name)} <span class="muted">${u.age}</span> ${tierBadge(u.tier,true)}</div>
        <div class="muted" style="font-size:11px">Best ${u.best}・${u.area.slice(0,2).join('・')}</div>
      </div>
    </div>
    <div>
      <div class="label">ラウンド日${shared.length?'（ハイライト＝お互い空いている日）':''}</div>
      <div class="osel">${dateOpts}</div>
    </div>
    <div>
      <div class="label">合流方法</div>
      <div class="osel" style="flex-wrap:nowrap;overflow-x:auto">${meets}</div>
    </div>
    <div>
      <div class="label">ゴルフ場（候補から選択）</div>
      <div class="osel">${courses}</div>
      <button class="btn ghost sm" style="margin-top:10px" onclick="coursePick='offer';go('#/courses')">ゴルフ場一覧から選ぶ</button>
      <p class="muted" style="margin-top:8px;font-size:11px">${I.pin} お二人の拠点の中間地点から自動で候補を出しています</p>
    </div>
    <div class="price-box">
      <div class="row"><span>オファー料金（${t.name}ランク）</span><span class="money">${yen(t.price)}</span></div>
      <div class="row muted" style="font-size:11.5px"><span>└ お相手への謝礼（80%）</span><span>${yen(t.reward)}</span></div>
      <div class="row muted" style="font-size:11.5px"><span>└ サービス利用料（20%）</span><span>${yen(t.price - t.reward)}</span></div>
      <div class="row total"><span>お支払い</span><span class="money" style="color:var(--fairway)">${yen(t.price)}</span></div>
      <p class="muted" style="font-size:10.5px;margin-top:8px">成立後キャンセルは前日まで無料。当日キャンセルは100%が謝礼に充当されます。</p>
    </div>
    <button class="btn brass" ${ready?'':'disabled'} onclick="sendOffer('${u.id}')">オファーを送信する（残 ${S.points.toLocaleString()} pt）</button>
  </div>${demoPill()}`;
};
let inv = {};
function inviteSheet(id){
  if(S.role==='m' && !S.subActive){ paywall(); return; }
  const u = find(id);
  const myDates = me().dates || [];
  const shared = u.dates.filter(d=>myDates.includes(d));
  const dates = shared.length ? shared : u.dates;
  inv = { id, date: dates[0], mode: 'ラウンド', pay: 'プレー代はこちらで持ちます' };
  const iSim = '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12.5" rx="2"/><path d="M9 20.5h6M12 16.5v4"/><path d="M8 12.5l2.5-3.5 2 2 3-4"/></svg>';
  const iRange = '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20.5c2-1 3-2.6 3-5V5l8-1.8"/><circle cx="17" cy="14" r="2.6"/><path d="M4.5 20.5h8"/></svg>';
  const MODES = [
    ['ラウンド','ゴルフ場で18ホール・1日', I.flag.replace('<svg ','<svg width="21" height="21" '), ''],
    ['シミュゴルフ','1〜2時間・駅近・雨でもOK', iSim, 'はじめまして向き'],
    ['打ちっぱなし','1時間・手ぶらOK・気軽', iRange, 'はじめまして向き'],
  ];
  const html = () => `
    <h3>${esc(u.name)}さんを誘う</h3>
    <p class="muted">仲間探しスタイルの方には、サブスクだけで誘えます（謝礼不要）</p>
    ${isD()?`
    <div class="label">会う形式 *</div>
    <div class="mode-list">${MODES.map(([m,s,ic,tag])=>`
      <button class="mode-row ${inv.mode===m?'on':''}" onclick="inv.mode='${m}';inv.pay=inv.pay.replace(/^(プレー代|費用)/,'${m}'==='ラウンド'?'プレー代':'費用');window._invR()">
        <span class="mic">${ic}</span>
        <span class="mtx"><span class="mt">${m}${tag?`<span class="mtag">${tag}</span>`:''}</span><span class="ms">${s}</span></span>
        <span class="mck">${inv.mode===m?I.check.replace('width="40" height="40"','width="15" height="15"'):''}</span>
      </button>`).join('')}</div>
    `:''}
    <div class="label">日程${shared.length?'（お互いの空き日）':''}</div>
    <div class="opt-grid">${dates.map(d=>`<button class="opt ${inv.date===d?'on':''}" onclick="inv.date='${d}';window._invR()">${d}</button>`).join('')}</div>
    <div class="label">${isD()&&inv.mode!=='ラウンド'?'費用':'プレー代'}の宣言 *</div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${[(isD()&&inv.mode!=='ラウンド'?'費用':'プレー代')+'はこちらで持ちます','割り勘でお願いします','相談して決めたい'].map((p,i)=>`
        <button class="opt ${inv.pay===p?'on':''}" style="border-radius:12px;text-align:left" onclick="inv.pay='${p}';window._invR()">${i===0?'★ ':''}${p}${i===0?'（返信率が上がります）':''}</button>`).join('')}
    </div>
    <div class="notice" style="margin:14px 0 0">
      <span class="ic">${I.shield}</span>
      <span>宣言した内容はお相手に表示され、あとから変更できません</span>
    </div>
    <button class="btn" style="margin-top:14px" onclick="sendInvite()">この内容で誘いを送る</button>`;
  window._invR = () => sheet(html());
  sheet(html());
}
function sendInvite(){
  const u = find(inv.id);
  let c = S.chats.find(x=>x.id===inv.id);
  if(!c){ c = {id:inv.id, msgs:[]}; S.chats.unshift(c); }
  c.msgs.push({who:'sys', t:`⛳ ${inv.date} の${inv.mode||'ラウンド'}にお誘い（${inv.pay}）`});
  c.msgs.push({who:'me', t:`はじめまして！${inv.date}に${inv.mode&&inv.mode!=='ラウンド'?inv.mode:'ラウンド'}をご一緒できたら嬉しいです。${inv.pay}。`, tm:'いま'});
  save(); closeSheet();
  go('#/chat/'+inv.id); render();
  setTimeout(()=>toast('誘いを送りました。謝礼は発生しません'),300);
}
function paywall(){
  if(isD()){
    sheet(`<div class="paywall">
    <div class="pw-h">サブスクプラン（チケット制）</div>
    <ul class="pw-list">
      <li>メッセージ・ラウンド誘い（プレー代宣言）が使い放題</li>
      <li>プレミアムは謝礼オファーチケットが毎月1枚届く</li>
      <li>チケットは当月限り有効。使わないと失効します</li>
    </ul>
    <button class="pw-plan reco" onclick="subscribe('プレミアム')">
      <span class="pm">プレミアム<small>オファーチケット 月1枚つき</small></span><span class="pp">¥9,800<small>/月</small></span>
    </button>
    <button class="pw-plan" onclick="subscribe('スタンダード')">
      <span class="pm">スタンダード<small>メッセージ＋ラウンド誘い</small></span><span class="pp">¥2,480<small>/月</small></span>
    </button>
    <button class="pw-plan" onclick="subscribe('年間プラン')">
      <span class="pm">年間プラン<small>チケット3枚つき・月あたり¥1,980</small></span><span class="pp">¥23,760<small>/年</small></span>
    </button>
    <p class="muted" style="font-size:10.5px;margin-top:10px">チケット1枚＝デビューオファー1回（お相手には謝礼¥4,400が届きます）。上位ランクの方への指名は差額のみ追加。税込・自動更新・いつでも解約可（デモ）</p>
  </div>`);
    return;
  }
  sheet(`<div class="paywall">
    <div class="pw-h">14日間の無料トライアル</div>
    <ul class="pw-list">
      <li>メッセージ機能が利用可能</li>
      <li>気になる相手に直接ゴルフのお誘いが可能</li>
      <li>マッチング時の金額が30%OFF</li>
    </ul>
    <button class="pw-plan reco" onclick="subscribe('12ヶ月プラン')">
      <span class="pm">12ヶ月プラン<small>¥1,500お得</small></span><span class="pp">¥980<small>/月</small></span>
    </button>
    <button class="pw-plan" onclick="subscribe('3ヶ月プラン')">
      <span class="pm">3ヶ月プラン<small>¥500お得</small></span><span class="pp">¥1,980<small>/月</small></span>
    </button>
    <button class="pw-plan" onclick="subscribe('1ヶ月プラン')">
      <span class="pm">1ヶ月プラン</span><span class="pp">¥2,480<small>/月</small></span>
    </button>
    <p class="muted" style="font-size:10.5px;margin-top:10px">上記は税込価格です。サブスクリプションは選択されたプラン毎の月で自動更新され、解約はいつでも可能です。登録すると当社の利用規約とプライバシーポリシーに同意されたものとします。</p>
  </div>`);
}
function subscribe(plan){
  S.subActive = true; save(); closeSheet(); render();
  celebrate();
  setTimeout(()=>toast(`${plan}で登録しました。14日間無料です（デモ）`),200);
}
function sendOffer(id){
  const u = find(id); const t = TIERS[u.tier];
  if(S.role==='m' && !S.subActive){ paywall(); return; }
  if(S.points < t.price){ toast('ポイントが不足しています（デモ）'); return; }
  S.points -= t.price;
  S.sentOffers.push({ id:'so'+Date.now(), to:id, date:of_.date, meet:of_.meet, course:of_.course, price:t.price, status:'pending' });
  save();
  $app.innerHTML = `
    <div class="page nofoot">
      <div class="ok-hero">
        <div class="mark">${I.check}</div>
        <h2>オファーを送信しました</h2>
        <p>${esc(u.name)}さんが承諾するとマッチ成立です。<br>結果は通知とメッセージでお知らせします。</p>
      </div>
      <div class="wrap">
        <div class="card" style="padding:16px">
          <div class="spec" style="grid-template-columns:1fr">
            <div class="row"><span class="k">お相手</span><span class="v">${esc(u.name)}さん</span></div>
            <div class="row"><span class="k">日程</span><span class="v">${of_.date}</span></div>
            <div class="row"><span class="k">ゴルフ場</span><span class="v">${of_.course}</span></div>
            <div class="row"><span class="k">支払い</span><span class="v">${yen(TIERS[u.tier].price)}（ポイント）</span></div>
          </div>
        </div>
        <button class="btn" style="margin-top:18px" onclick="go('#/offers')">オファー状況を見る</button>
        <button class="btn ghost" style="margin-top:10px" onclick="go('#/home')">ホームへ戻る</button>
      </div>
    </div>`;
  window.scrollTo(0,0);
}

/* ---- offers list ---- */
V.offers = () => {
  const isM = S.role==='m';
  let inner = '';
  if(isM){
    inner = S.sentOffers.length ? S.sentOffers.map(o=>{
      const u = find(o.to);
      return `<div class="card mcard">
        <img class="av" src="${u.img}" style="width:46px;height:46px">
        <div class="info">
          <div class="nm">${esc(u.name)}さん <span class="chip brass" style="font-size:9px">承諾待ち</span></div>
          <div class="st">${o.date}・${esc(o.course||'')}</div>
        </div></div>`;
    }).join('') : `<div class="empty"><div class="big">—</div>送信したオファーはまだありません</div>`;
  } else {
    inner = S.recvOffers.map(o=>{
      const u = find(o.from);
      if(o.status!=='pending') return `
        <div class="card mcard" style="opacity:.65">
          <img class="av" src="${u.img}" style="width:46px;height:46px">
          <div class="info"><div class="nm">${esc(u.name)}さん</div><div class="st">${o.date}・${o.status==='ok'?'承諾済み':'辞退'}</div></div>
        </div>`;
      return `<div class="card" style="padding:14px 16px">
        <div style="display:flex;gap:12px;align-items:center" onclick="go('#/profile/${u.id}')">
          <img class="av" src="${u.img}" style="width:48px;height:48px">
          <div style="flex:1">
            <div style="font-weight:900">${esc(u.name)}さんからオファー</div>
            <div class="muted" style="font-size:11.5px">${o.date}・${esc(o.course)}・${esc(o.meet)}</div>
          </div>
        </div>
        <div class="price-box" style="margin-top:12px;padding:12px 14px">
          <div class="row"><span>受け取れる謝礼</span><span class="money" style="color:var(--brass)">${o.reward.toLocaleString()} コイン</span></div>
        </div>
        <div style="display:flex;gap:9px;margin-top:12px">
          <button class="btn ghost sm" style="flex:1" onclick="answerOffer('${o.id}',false)">辞退</button>
          <button class="btn sm" style="flex:2" onclick="answerOffer('${o.id}',true)">承諾してマッチ成立</button>
        </div>
      </div>`;
    }).join('');
  }
  return `
  ${appbar({title: isM?'オファー状況':'受信オファー', back:true})}
  <div class="page tee-body">${inner}</div>
  ${tabbar('')}${demoPill()}`;
};
function answerOffer(id, ok){
  const o = S.recvOffers.find(x=>x.id===id);
  o.status = ok?'ok':'ng';
  if(ok){ S.coins += o.reward; celebrate(); toast(`マッチ成立！ ${o.reward.toLocaleString()}コインが確定しました`); }
  else toast('オファーを辞退しました');
  save(); render();
}

/* ---- messages ---- */
V.messages = () => {
  const rows = (S.chats||[]).map((c,i)=>{
    const u = find(c.id); const last = c.msgs[c.msgs.length-1];
    return `<button class="thread" style="width:100%;text-align:left" onclick="go('#/chat/${c.id}')">
      <img class="av" src="${u.img}" style="width:52px;height:52px">
      <div class="info">
        <div class="nm">${esc(u.name)}<span class="tm">${last.tm.split(' ')[0]}</span></div>
        <div class="pv">${esc(last.t)}</div>
      </div>
      ${i===0?'<span class="nd"></span>':''}
    </button>`;
  }).join('');
  return `
  ${appbar({title:'メッセージ'})}
  <div class="page">${rows || '<div class="empty"><div class="big">—</div>メッセージはまだありません</div>'}</div>
  ${tabbar('msg')}${demoPill()}`;
};
function openChat(id){
  if(!S.chats.find(c=>c.id===id)){ S.chats.unshift({id, msgs:[]}); save(); }
  go('#/chat/'+id);
}
V.chat = id => {
  const c = S.chats.find(x=>x.id===id) || {id, msgs:[]};
  const u = find(id);
  const fx = (S.fixed||{})[id];
  const msgs = c.msgs.map((m,i)=>{
    if(m.who==='sys') return `<div class="msg sys">${m.t}</div>`;
    if(m.who==='me'){
      const read = c.msgs.slice(i+1).some(x=>x.who==='them');
      return `<div class="mrow me">
        <span class="mmeta">${read?'既読<br>':''}${m.tm}</span>
        <div class="msg me">${esc(m.t)}</div>
      </div>`;
    }
    return `<div class="mrow"><div class="msg them">${esc(m.t)}<span class="tm">${m.tm}</span></div></div>`;
  }).join('');
  const fixbar = fx ? `
    <div class="fixbar done">
      <span class="ic">${I.cal}</span>
      <span style="flex:1"><b>${fx.date} ラウンド確定</b><small>${esc(fx.course)}・当日は位置共有と到着チェックインが自動でONになります</small></span>
      <button class="btn sm" style="background:var(--brass)" onclick="go('#/roundlog')">当日へ</button>
    </div>` : `
    <div class="fixbar">
      <span class="ic">${I.cal}</span>
      <span style="flex:1">ラウンドの約束ができたら記録しましょう<small>確定するとレビュー・安全機能・実績カウントが有効になります</small></span>
      <button class="btn sm" onclick="openFixSheet('${id}')">ラウンド確定</button>
    </div>`;
  return `
  ${appbar({title:esc(u.name), back:true, noBell:true})}
  <div class="page nofoot" style="display:flex;flex-direction:column;min-height:calc(100dvh - 60px)">
    ${fixbar}
    <div class="chat">${msgs || `<div class="empty" style="padding-top:60px"><div class="big">⛳</div>${esc(u.name)}さんに挨拶してみましょう</div>`}</div>
    <div class="chatbar">
      <input class="input" id="chat-in" placeholder="メッセージを入力" onkeydown="if(event.key==='Enter')sendMsg('${id}')">
      <button class="send" onclick="sendMsg('${id}')">${I.send}</button>
    </div>
  </div>`;
};
let fixSel = {};
function openFixSheet(id){
  const u = find(id);
  const myDates = me().dates || [];
  const shared = u.dates.filter(d=>myDates.includes(d));
  const dates = shared.length ? shared : u.dates;
  fixSel = { id, date: dates[0], course: COURSES[0] };
  sheet(`
    <h3>ラウンド確定</h3>
    <p class="muted">${esc(u.name)}さんとのラウンドを記録します（あとで変更できます）</p>
    <div class="label">日程${shared.length?'（お互いの空き日）':''}</div>
    <div class="opt-grid">${dates.map(d=>`<button class="opt ${fixSel.date===d?'on':''}" onclick="fixSel.date='${d}';this.parentNode.querySelectorAll('.opt').forEach(o=>o.classList.remove('on'));this.classList.add('on')">${d}</button>`).join('')}</div>
    <div class="label">ゴルフ場</div>
    <select class="input" onchange="fixSel.course=this.value">${COURSES.map(c=>`<option>${c}</option>`).join('')}</select>
    <div class="notice" style="margin:16px 0 0">
      <span class="ic">${I.shield}</span>
      <span>確定すると当日の位置共有・到着チェックイン・SOSが有効になります</span>
    </div>
    <button class="btn" style="margin-top:16px" onclick="fixRound()">この内容で確定する</button>
  `);
}
function fixRound(){
  const {id, date, course} = fixSel;
  S.fixed = S.fixed || {};
  S.fixed[id] = { date, course };
  let c = S.chats.find(x=>x.id===id);
  if(!c){ c = {id, msgs:[]}; S.chats.unshift(c); }
  c.msgs.push({who:'sys', t:`⛳ ${date}・${course} でラウンド確定`});
  celebrate();
  save(); closeSheet(); render();
  setTimeout(()=>toast('ラウンドを確定しました。当日の安全機能がONになります'), 250);
}
function sendMsg(id){
  const inp = document.getElementById('chat-in');
  const t = inp.value.trim(); if(!t) return;
  if(S.role==='m' && !S.subActive){ toast('メッセージの送信にはサブスク登録が必要です'); setTimeout(paywall, 700); return; }
  let c = S.chats.find(x=>x.id===id);
  if(!c){ c={id,msgs:[]}; S.chats.unshift(c); }
  c.msgs.push({who:'me', t, tm:'いま'});
  save(); render();
  setTimeout(()=>{
    c.msgs.push({who:'them', t:'（デモ自動返信）ありがとうございます！楽しみにしています⛳', tm:'いま'});
    save(); if(location.hash==='#/chat/'+id) render();
  }, 1200);
}

/* ---- feed ---- */
const FEED = [
  { u:'w6', course:'紫カントリークラブ すみれ', score:91, img:'img/c5.jpg', cap:'自己ベストまであと1打…！グリーンが難しすぎました🥲 #100切り達成済', likes:24, grad:'linear-gradient(150deg,#2E8B5E,#0E4A34)' },
  { u:'m3', course:'大多喜城ゴルフ倶楽部', score:84, img:'img/c13.jpg', cap:'風強めでしたがパット好調。ご一緒したお二人ありがとうございました！', likes:18, grad:'linear-gradient(150deg,#17603F,#082E21)' },
  { u:'w2', course:'市原京急カントリークラブ', score:99, img:'img/c8.jpg', cap:'ついに100切り！！PreGoで会ったメンバーで回れて楽しかった〜🎉', likes:47, grad:'linear-gradient(150deg,#B08A3C,#6B5222)' },
];
V.feed = () => {
  const posts = FEED.map((p,i)=>{
    const u = find(p.u); const liked = S.likes['feed'+i];
    return `<div class="card post">
      <div class="ph-head">
        <img class="av" src="${u.img}" style="width:38px;height:38px">
        <div><div class="nm">${esc(u.name)}</div><div class="sub">2026/07/0${3-i>0?3-i:1}</div></div>
      </div>
      <div class="visual" style="background:${p.grad}">
        ${p.img?`<img class="vimg" src="${p.img}" alt="" loading="lazy">`:''}
        <span class="course-tag">${I.pin} ${p.course}</span>
        <div class="score-strip"><div class="s">${p.score}</div><div class="k">TOTAL</div></div>
      </div>
      <div class="acts">
        <button class="a ${liked?'on':''}" onclick="S.likes['feed${i}']=!S.likes['feed${i}'];save();render()">${I.heart} ${p.likes + (liked?1:0)}</button>
        <button class="a" onclick="toast('コメントはデモでは省略しています')">${I.msg.replace('viewBox','width="16" height="16" viewBox')} コメント</button>
      </div>
      <div class="cap">${esc(p.cap)}</div>
    </div>`;
  }).join('');
  return `
  ${appbar({title:'フィード'})}
  <div class="page">${posts}</div>
  <button class="fab" onclick="go('#/roundlog')">${I.camera} ラウンド録を投稿</button>
  ${tabbar('feed')}${demoPill()}`;
};

/* ---- compe ---- */
V.compe = id => {
  const c = COMPES.find(x=>x.id===id) || COMPES[0];
  return `
  ${appbar({title:'公式コンペ', back:true})}
  <div class="page nofoot">
    <div class="compe" style="margin:16px 18px;border-radius:20px">
      <div class="lb">PREGO OPEN</div>
      <h4 style="font-size:18px">${c.title}</h4>
      <div class="mt">${c.date}・${c.course}（${c.pref}）</div>
      <div class="ft"><div class="avs">${c.avs.map(a=>`<img src="${a}">`).join('')}</div><span class="join">残り${c.left}枠</span></div>
    </div>
    <div class="wrap">
      <div class="card" style="padding:16px">
        <div class="spec" style="grid-template-columns:1fr">
          <div class="row"><span class="k">形式</span><span class="v">${c.fmt}</span></div>
          <div class="row"><span class="k">参加費</span><span class="v">${yen(c.fee)}（プレー費別）</span></div>
          <div class="row"><span class="k">集合</span><span class="v">クラブハウス 8:30／五井駅バス 7:50</span></div>
          <div class="row"><span class="k">内容</span><span class="v" style="font-size:11px">${c.note}</span></div>
        </div>
      </div>
      <div class="notice" style="margin:14px 0 0">
        <span class="ic">${I.shield}</span>
        <span>グループ開催・運営スタッフ同行。はじめての方も安心です</span>
      </div>
      <button class="btn brass" style="margin-top:16px" onclick="toast('コンペにエントリーしました（デモ）')">エントリーする ${yen(c.fee)}</button>
      <p class="muted" style="text-align:center;margin-top:10px;font-size:11px">キャンセルは3日前まで無料</p>
    </div>
  </div>${demoPill()}`;
};

/* ---- mypage ---- */
V.mypage = () => {
  const m = me();
  const isF = S.role==='f';
  const tier = TIERS[m.tier||'GOLD'];
  const foot = (isF?MEN:WOMEN).slice(0,4);
  const menu = [
    ['プロフィール', I.user, ()=>`go('#/me')`],
    [isF?'コイン':'ポイント', I.coin, ()=>`go('#/points')`],
    [isF?'受信オファー':'オファー状況', I.invite, ()=>`go('#/offers')`, isF?'2':''],
    ['ラウンド録', I.camera, ()=>`go('#/roundlog')`],
    ['フレーム', I.trophy, ()=>`go('#/frames')`],
    ['ゴルフ場', I.pin, ()=>`coursePick=null;go('#/courses')`],
    ['ヘルプ', I.bell, ()=>`go('#/help')`],
    ['記事', I.flag.replace('viewBox','width="23" height="23" viewBox'), ()=>`go('#/articles')`],
    ['設定', I.gear, ()=>`go('#/settings')`],
  ].map(x=>`<button class="mi" onclick="${x[2]()}">${x[1]}${x[0]}${x[3]?`<span class="bd">${x[3]}件</span>`:''}</button>`).join('');
  return `
  <div class="page">
    <div class="my-head">
      <span class="avatar-ring" style="${isF?ringStyle(m.tier):'background:rgba(250,248,242,.3)'};display:block">
        <img src="${m.img}">
      </span>
      <div class="nm">${esc(m.name)} ${isF?tierBadge(m.tier):(S.subActive?'<span class="chip brass" style="font-size:9px">サブスク会員</span>':'<span class="chip line" style="font-size:9px">無料会員</span>')}</div>
      <div class="meta">
        <div class="m"><div class="v">${m.best}</div><div class="k">BEST</div></div>
        <div class="m"><div class="v">${m.rounds}</div><div class="k">ROUNDS</div></div>
        <div class="m"><div class="v">${m.rating}</div><div class="k">RATING</div></div>
        <div class="m"><div class="v">${isF?450:244}</div><div class="k">足あと</div></div>
      </div>
    </div>
    ${isF?`
    <div class="next-tier">
      <span class="ic">${I.trophy}</span>
      <div class="t" style="flex:1">
        次のランク <b>BLACK</b> まで レビュー★4.8以上 × あと4ラウンド
        <div class="bar"><i style="width:72%"></i></div>
      </div>
    </div>`:`
    <div class="next-tier">
      <span class="ic">${I.trophy}</span>
      <div class="t" style="flex:1">
        ベスト<b>79</b>で BLACKフレーム 解放。今月 <b>2ラウンド</b> 消化
        <div class="bar"><i style="width:55%"></i></div>
      </div>
    </div>`}
    <div class="menu">${menu}</div>
    <div class="sec wrap">
      <div class="sec-h"><span class="t">足あと</span><span class="s">あなたに興味がある人</span><a class="more" href="#/home">すべて見る</a></div>
      ${foot.map(u=>`
        <button class="thread" style="width:100%;border-radius:14px;margin-bottom:8px;border:1px solid var(--line);text-align:left" onclick="go('#/profile/${u.id}')">
          <img class="av" src="${u.img}" style="width:44px;height:44px">
          <div class="info"><div class="nm">${esc(u.name)}</div><div class="pv">昨日 ${['23:47','16:56','10:12','08:03'][foot.indexOf(u)]}</div></div>
          <span style="color:var(--ink-soft)">${I.foot}</span>
        </button>`).join('')}
    </div>
  </div>
  ${tabbar('my')}${demoPill()}`;
};

/* ---- points / coins ---- */
V.points = () => {
  const isF = S.role==='f';
  if(isF){
    const rows = Object.values(TIERS).map(t=>`
      <div class="tier-row ${me().tier===t.name?'on':''}">
        <span class="tier-dot" style="background:${t.name==='GOLD'?'linear-gradient(120deg,#D9B96A,#B08A3C)':t.color}"></span>
        <span class="nm">${t.name}</span>
        <span class="cond">${t.label}</span>
        <span class="amt">${t.reward.toLocaleString()}<small style="font-size:9px">コイン/R</small></span>
      </div>`).join('');
    return `
    ${appbar({title:'コイン', back:true})}
    <div class="page">
      <div class="balance">
        <div class="k">CURRENT BALANCE</div>
        <div class="v"><span data-count="${S.coins}">0</span><small>コイン</small></div>
        <div class="sub">1コイン＝1円で換金・月末締め翌月末払い・振込手数料 ¥500</div>
      </div>
      <div class="wrap" style="margin-top:14px;display:flex;gap:10px">
        <button class="btn sm ghost" style="flex:1" onclick="toast('銀行口座は登録済みです（デモ）')">口座情報</button>
        <button class="btn sm" style="flex:1" onclick="toast('出金申請を受け付けました（デモ）')">出金申請</button>
      </div>
      <div class="sec wrap"><div class="sec-h"><span class="t">ランクと謝礼</span><span class="s">レビューと実績で昇格します</span></div></div>
      <div class="tier-table">${rows}</div>
      <p class="muted wrap" style="font-size:11px;margin-top:4px">昇格条件：プロフィール100%・本人確認・直近レビュー平均・ラウンド実績。ランクはフォトフレームの色にも反映されます。</p>
    </div>
    ${tabbar('my')}${demoPill()}`;
  }
  return `
  ${appbar({title:'ポイント', back:true})}
  <div class="page">
    <div class="balance">
      <div class="k">CURRENT BALANCE</div>
      <div class="v"><span data-count="${S.points}">0</span><small>pt</small></div>
      <div class="sub">1pt＝¥1としてオファー料金に利用できます</div>
    </div>
    <div class="wrap sec">
      <div class="sec-h"><span class="t">チャージ</span></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        ${[5500,11000,22000,33000].map(v=>`
          <button class="card" style="padding:15px;text-align:center" onclick="S.points+=${v};save();render();toast('${v.toLocaleString()}ptチャージしました（デモ）')">
            <div style="font-family:var(--font-num);font-size:19px;color:var(--fairway)">${v.toLocaleString()}<small style="font-size:10px"> pt</small></div>
            <div class="muted" style="font-size:10.5px">${yen(v)}</div>
          </button>`).join('')}
      </div>
      <p class="muted" style="font-size:11px;margin-top:12px">※デモのため決済は発生しません</p>
    </div>
  </div>
  ${tabbar('my')}${demoPill()}`;
};

/* ---- round log + frame ---- */
let rl = { score:94, out:46, inn:48, course:COURSES[0], tier:null, stars:5 };
V.roundlog = () => {
  const m = me();
  const tk = rl.tier || frameTier(rl.score);
  return `
  ${appbar({title:'ラウンド録', back:true})}
  <div class="page">
    <p class="muted wrap" style="margin-top:12px">昨日のラウンド、おつかれさまでした。スコアカードを作ってシェアしましょう。</p>
    <div class="framebox"><canvas id="frame-cv" width="860" height="860" style="width:100%;display:block"></canvas></div>
    <div class="wrap" style="margin-top:14px;display:flex;gap:10px;align-items:flex-end">
      <div style="flex:1"><div class="label" style="margin-top:0">OUT</div><input class="input" type="number" value="${rl.out}" onchange="rl.out=+this.value;rl.score=rl.out+rl.inn;rl.tier=null;render()"></div>
      <div style="flex:1"><div class="label" style="margin-top:0">IN</div><input class="input" type="number" value="${rl.inn}" onchange="rl.inn=+this.value;rl.score=rl.out+rl.inn;rl.tier=null;render()"></div>
      <div style="flex:1.2"><div class="label" style="margin-top:0">TOTAL（自動計算）</div>
        <div class="input" style="text-align:center;font-family:var(--font-num);font-size:19px;background:var(--turf-soft);border-color:transparent;color:var(--fairway)">${rl.out + rl.inn}</div>
      </div>
    </div>
    <div class="wrap"><div class="label">ゴルフ場</div>
      <select class="input" onchange="rl.course=this.value;render()">
        ${COURSES.map(c=>`<option ${rl.course===c?'selected':''}>${c}</option>`).join('')}
      </select>
    </div>
    <div class="wrap"><div class="label">ご一緒した ${S.role==='m'?'manami':'SHU'} さんはどうでしたか？</div>
      <div class="stars-in">${[1,2,3,4,5].map(n=>`<button class="${n<=rl.stars?'on':''}" onclick="rl.stars=${n};render()">★</button>`).join('')}</div>
      <p class="muted" style="text-align:center;font-size:11px">レビュー投稿で 500コイン／相手のプロフィールに反映されます</p>
    </div>
    <div class="wrap" style="display:flex;flex-direction:column;gap:10px;margin-top:16px">
      <button class="btn brass" onclick="downloadFrame()">${I.camera} スコアカード画像を保存</button>
      <button class="btn" onclick="toast('フィードに投稿しました（デモ）');go('#/feed')">フィードに投稿</button>
      <button class="btn ghost" onclick="toast('レビューを送信しました（＋500コイン）')">レビューだけ送る</button>
    </div>
    <p class="muted wrap" style="font-size:11px;margin:14px 0 0">フレームの色はベストスコア帯で自動的に変わります（${tk}）。Instagram・Xにそのまま投稿できる1:1サイズです。</p>
  </div>
  ${tabbar('feed')}${demoPill()}`;
};
function heroScrolled(el){
  const i = Math.round(el.scrollLeft / el.clientWidth);
  const dots = document.querySelectorAll('#hero-dots i');
  dots.forEach((d,k)=>d.classList.toggle('on', k===i));
  const pc = document.getElementById('pcount');
  if(pc) pc.textContent = `${i+1} / ${dots.length}`;
}
function countUp(){
  document.querySelectorAll('[data-count]').forEach(el=>{
    const t = +el.dataset.count; const start = performance.now(); const dur = 750;
    const step = now=>{
      const p = Math.min(1,(now-start)/dur);
      el.textContent = Math.round(t*(1-Math.pow(1-p,3))).toLocaleString();
      if(p<1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}
function frameTier(s){ return s<80?'BLACK':s<90?'GOLD':s<100?'SILVER':s<110?'BRONZE':'WHITE'; }
const LOGOIMG = new Image();
LOGOIMG.src = 'img/logo.png';
LOGOIMG.onload = () => { if(location.hash.includes('roundlog')) drawFrame(); };
function drawFrame(){
  const cv = document.getElementById('frame-cv'); if(!cv) return;
  const x = cv.getContext('2d'); const W = 860;
  const tk = rl.tier || frameTier(rl.score);
  const g = x.createLinearGradient(0,0,W,W);
  if(tk==='BLACK'){ g.addColorStop(0,'#2A2417'); g.addColorStop(1,'#0A0906'); }
  else if(tk==='GOLD'){ g.addColorStop(0,'#8A6B25'); g.addColorStop(.5,'#B08A3C'); g.addColorStop(1,'#6B5222'); }
  else if(tk==='SILVER'){ g.addColorStop(0,'#7A828C'); g.addColorStop(1,'#3E444C'); }
  else if(tk==='BRONZE'){ g.addColorStop(0,'#A46B39'); g.addColorStop(1,'#5C3A1E'); }
  else { g.addColorStop(0,'#17603F'); g.addColorStop(1,'#082E21'); }
  x.fillStyle = g; x.fillRect(0,0,W,W);
  x.strokeStyle = 'rgba(217,185,106,.5)'; x.lineWidth = 2;
  x.strokeRect(26,26,W-52,W-52);
  x.beginPath(); x.arc(W-150,150,95,0,7); x.strokeStyle='rgba(217,185,106,.28)'; x.stroke();
  x.beginPath(); x.arc(W-150,150,70,0,7); x.strokeStyle='rgba(217,185,106,.18)'; x.stroke();
  x.fillStyle = 'rgba(250,248,242,.75)';
  x.font = '600 26px "Zen Kaku Gothic New", sans-serif';
  x.fillText(rl.course, 64, 120);
  x.font = '22px Outfit, sans-serif'; x.fillStyle = '#D9B96A';
  x.fillText('2026.07.14  TUE', 64, 158);
  x.font = '300 290px Outfit, sans-serif'; x.fillStyle = '#FFFFFF';
  x.fillText(String(rl.score), 56, 520);
  x.font = '24px Outfit, sans-serif'; x.fillStyle = 'rgba(250,248,242,.8)';
  x.fillText(`OUT ${rl.out}   /   IN ${rl.inn}`, 64, 580);
  x.strokeStyle = 'rgba(250,248,242,.3)'; x.setLineDash([4,8]);
  x.beginPath(); x.moveTo(64,660); x.lineTo(W-64,660); x.stroke(); x.setLineDash([]);
  x.font = '600 25px "Zen Kaku Gothic New", sans-serif'; x.fillStyle = 'rgba(250,248,242,.85)';
  x.fillText(`${me().name} ・ ${S.role==='m'?'manami':'SHU'} のラウンド`, 64, 716);
  if(LOGOIMG.complete && LOGOIMG.naturalWidth){
    const lw = 168, lh = lw*461/1871;
    x.globalAlpha = .95; x.drawImage(LOGOIMG, W-64-lw, 782-lh, lw, lh); x.globalAlpha = 1;
  } else {
    x.font = '26px Marcellus, serif'; x.fillStyle = '#D9B96A';
    x.textAlign = 'right'; x.fillText('P R E G O', W-64, 780); x.textAlign = 'left';
  }
  x.font = '18px Marcellus, serif'; x.fillStyle = 'rgba(217,185,106,.8)';
  x.fillText(tk + ' FRAME', W-64, 120); x.textAlign = 'left';
}
function downloadFrame(){
  const cv = document.getElementById('frame-cv');
  const a = document.createElement('a');
  a.download = 'prego-scorecard.png'; a.href = cv.toDataURL('image/png'); a.click();
  toast('画像を保存しました');
}

/* ---- frames gallery ---- */
V.frames = () => `
  ${appbar({title:'フォトフレーム', back:true})}
  <div class="page">
    <p class="muted wrap" style="margin-top:12px">フレームの色はベストスコア帯で決まる、腕前の勲章です。ベスト更新で自動昇格します。</p>
    <div class="tier-table">
      ${[['BLACK','〜79'],['GOLD','80〜89'],['SILVER','90〜99'],['BRONZE','100〜109'],['WHITE','110〜/デビュー']].map(([k,c])=>`
        <div class="tier-row ${frameTier(me().best)===k?'on':''}">
          <span class="tier-dot" style="background:${k==='GOLD'?'linear-gradient(120deg,#D9B96A,#B08A3C)':TIERS[k].color}"></span>
          <span class="nm">${k}</span><span class="cond">ベストスコア ${c}</span>
          ${frameTier(me().best)===k?'<span class="chip brass" style="font-size:9px">現在</span>':''}
        </div>`).join('')}
    </div>
    <div class="wrap"><button class="btn" onclick="go('#/roundlog')">ラウンド録でフレームを作る</button></div>
  </div>
  ${tabbar('my')}${demoPill()}`;

/* ---- settings / subscription ---- */
V.settings = () => `
  ${appbar({title:'設定', back:true})}
  <div class="page">
    <div class="slist">
      <button class="srow" onclick="go('#/base')"><span class="ic">${I.pin}</span>拠点設定<span class="tag2">千葉市</span></button>
      <button class="srow" onclick="go('#/notif-settings')"><span class="ic">${I.bell}</span>通知設定<span class="arw">›</span></button>
      <button class="srow" onclick="go('#/blocked')"><span class="ic">${I.shield}</span>ブロック中<span class="arw">›</span></button>
      ${S.role==='m'?`<button class="srow" onclick="go('#/subscription')"><span class="ic">${I.coin}</span>サブスクリプション<span class="tag2">${S.subActive?'利用中':'未加入'}</span></button>`:''}
      <button class="srow" onclick="go('#/card')"><span class="ic">${I.coin}</span>クレジットカード情報の更新<span class="arw">›</span></button>
      <button class="srow" onclick="go('#/password')"><span class="ic">${I.gear}</span>パスワード更新<span class="arw">›</span></button>
      <button class="srow" onclick="go('#/verify')"><span class="ic">${I.shield}</span>本人確認<span class="tag2">${S.verified?'認証済':'要登録'}</span></button>
      <button class="srow" onclick="toast('ドライバー認証：免許証・任意保険を確認します（デモ）')"><span class="ic">${I.car}</span>ドライバー認証<span class="tag2">${S.role==='m'?'認証済':'—'}</span></button>
      <button class="srow" onclick="taikai()" style="color:var(--danger)"><span class="ic" style="color:var(--danger)">${I.back}</span>退会<span class="arw">›</span></button>
      <button class="srow" onclick="logout()"><span class="ic">${I.back}</span>ログアウト<span class="arw">›</span></button>
    </div>
    <p class="muted wrap" style="font-size:11px;margin-top:14px">DEMO PROTOTYPE — 本人確認・決済連携・LINE連携は実装されません</p>
  </div>
  ${tabbar('my')}${demoPill()}`;
function taikai(){
  sheet(`<h3>退会</h3>
    <p style="font-size:13px;line-height:1.8">退会すると、プロフィール・マッチング履歴・保有ポイントはすべて削除され、復元できません。本当に退会しますか？</p>
    <button class="btn" style="margin-top:16px;background:var(--danger)" onclick="closeSheet();toast('退会処理はデモのため実行されません')">退会する</button>
    <button class="btn ghost" style="margin-top:10px" onclick="closeSheet()">キャンセル</button>`);
}
function logout(){ S.role=null; save(); go('#/login'); render(); }

V.subscription = () => {
  if(!S.subActive && isD()) return `
  ${appbar({title:'サブスクリプション', back:true})}
  <div class="page wrap paywall">
    <div style="height:10px"></div>
    <p class="muted" style="text-align:center">お客様のサブスクご利用状況：<b>未加入</b></p>
    <div class="pw-h" style="margin-top:14px">サブスクプラン（チケット制）</div>
    <ul class="pw-list">
      <li>メッセージ・ラウンド誘い（プレー代宣言）が使い放題</li>
      <li>プレミアムは謝礼オファーチケットが毎月1枚届く</li>
      <li>年間プランは割引ではなくチケット3枚を付与</li>
    </ul>
    <button class="pw-plan reco" onclick="subscribe('プレミアム')">
      <span class="pm">プレミアム<small>オファーチケット 月1枚つき</small></span><span class="pp">¥9,800<small>/月</small></span>
    </button>
    <button class="pw-plan" onclick="subscribe('スタンダード')">
      <span class="pm">スタンダード<small>メッセージ＋ラウンド誘い</small></span><span class="pp">¥2,480<small>/月</small></span>
    </button>
    <button class="pw-plan" onclick="subscribe('年間プラン')">
      <span class="pm">年間プラン<small>チケット3枚つき・月あたり¥1,980</small></span><span class="pp">¥23,760<small>/年</small></span>
    </button>
    <p class="muted" style="font-size:10.5px">チケット1枚＝デビューオファー1回（お相手に謝礼¥4,400）。当月限り有効。税込・自動更新・いつでも解約可（デモ）</p>
  </div>
  ${tabbar('my')}${demoPill()}`;
  if(!S.subActive) return `
  ${appbar({title:'サブスクリプション', back:true})}
  <div class="page wrap paywall">
    <div style="height:10px"></div>
    <p class="muted" style="text-align:center">お客様のサブスクご利用状況：<b>未加入</b></p>
    <div class="pw-h" style="margin-top:14px">14日間の無料トライアル</div>
    <ul class="pw-list">
      <li>メッセージ機能が利用可能</li>
      <li>気になる相手に直接ゴルフのお誘いが可能</li>
      <li>マッチング時の金額が30%OFF</li>
    </ul>
    <button class="pw-plan reco" onclick="subscribe('12ヶ月プラン')">
      <span class="pm">12ヶ月プラン<small>¥1,500お得</small></span><span class="pp">¥980<small>/月</small></span>
    </button>
    <button class="pw-plan" onclick="subscribe('3ヶ月プラン')">
      <span class="pm">3ヶ月プラン<small>¥500お得</small></span><span class="pp">¥1,980<small>/月</small></span>
    </button>
    <button class="pw-plan" onclick="subscribe('1ヶ月プラン')">
      <span class="pm">1ヶ月プラン</span><span class="pp">¥2,480<small>/月</small></span>
    </button>
    <p class="muted" style="font-size:10.5px">自動更新・いつでも解約可（デモのため決済は動作しません）</p>
  </div>
  ${tabbar('my')}${demoPill()}`;
  return `
  ${appbar({title:'サブスクリプション', back:true})}
  <div class="page wrap">
    <div style="height:14px"></div>
    <div class="card" style="padding:16px">
      <div class="spec" style="grid-template-columns:1fr">
        <div class="row"><span class="k">ステータス</span><span class="v">利用中</span></div>
        <div class="row"><span class="k">プラン名</span><span class="v">${isD()?'プレミアム（チケット制）':'12ヶ月プラン（トライアル中）'}</span></div>
        <div class="row"><span class="k">金額</span><span class="v">${isD()?'¥9,800／月':'¥980／月'}</span></div>
        ${isD()?`<div class="row"><span class="k">オファーチケット</span><span class="v">残り1枚（7/31失効）</span></div>`:''}
        <div class="row"><span class="k">次回更新日</span><span class="v">2026/8/11（Stripe自動更新）</span></div>
      </div>
    </div>
    <div style="height:18px"></div>
    <div class="plan reco">
      <span class="reco-tag">アップグレード案</span>
      <div class="nm">プレミアム</div>
      <div class="pr">¥9,800<small> /月</small></div>
      <ul><li>オファーのサービス利用料 0円</li><li>惜しいマッチの優先提案</li><li>コンペ先行エントリー</li><li>検索結果で優先表示</li></ul>
    </div>
    <button class="btn ghost" style="margin-top:8px" onclick="S.subActive=false;save();render();toast('サブスクを解約しました（デモ）')">サブスクの解約</button>
    <p class="muted" style="font-size:10.5px;margin-top:8px">サブスクは即時解約となり、返金はありません（デモ）</p>
  </div>
  ${tabbar('my')}${demoPill()}`;
};

/* ---- notifications ---- */
V.notifications = () => {
  const isM = S.role==='m';
  const items = isM ? [
    ['SAKIさんがあなたのプロフィールを見ました','10分前',I.foot],
    ['manamiさんとの日程が一致しました（7/14）','2時間前',I.cal],
    ['公式コンペ 7/19 残り2枠になりました','昨日',I.trophy],
    ['yukaさんから足あとがつきました','昨日',I.foot],
  ] : [
    ['Noriさんからオファーが届いています（¥17,600）','1時間前',I.invite],
    ['出金予定：7月分は 8/31 に振り込まれます','昨日',I.coin],
    ['BLACKランクまであと4ラウンドです','2日前',I.trophy],
  ];
  return `
  ${appbar({title:'通知', back:true, noBell:true})}
  <div class="page">
    ${items.map(x=>`<div class="ntf"><span class="ic">${x[2]}</span><div style="flex:1">${x[0]}<div class="tm">${x[1]}</div></div></div>`).join('')}
  </div>
  ${tabbar('')}${demoPill()}`;
};

/* ---- v6: 追加ページ群 ---- */
let coursePick = null, courseQ = '', coursePref = 'すべて';

V.forgot = () => `
  ${appbar({title:'パスワードを忘れた場合', back:true, noBell:true})}
  <div class="page nofoot wrap">
    <p class="muted" style="margin-top:24px;text-align:center">登録済みのメールアドレスを入力してください。<br>パスワードリセット用のメールを送信します。</p>
    <div class="label">メールアドレス</div>
    <input class="input" type="email" placeholder="example@email.com">
    <button class="btn" style="margin-top:18px" onclick="toast('リセットメールを送信しました（デモ）');history.back()">送信</button>
    <p style="text-align:center;margin-top:16px"><a class="muted" onclick="history.back()">ログインページに戻る</a></p>
  </div>`;

V.contact = () => `
  ${appbar({title:'お問い合わせ', back:true, noBell:true})}
  <div class="page nofoot wrap">
    <p class="muted" style="margin-top:14px">ご質問・ご要望などございましたら、以下のフォームよりお問い合わせください。</p>
    <div class="label">お名前 *</div>
    <input class="input" placeholder="山田太郎">
    <div class="label">メールアドレス *</div>
    <input class="input" type="email" placeholder="example@email.com">
    <div class="label">お問い合わせ種別 *</div>
    <select class="input"><option>選択してください</option><option>アカウントについて</option><option>お支払いについて</option><option>マッチングについて</option><option>不具合の報告</option><option>その他</option></select>
    <div class="label">お問い合わせ内容 *</div>
    <textarea class="input" rows="5" placeholder="お問い合わせ内容を入力してください"></textarea>
    <button class="btn" style="margin-top:18px" onclick="toast('お問い合わせを送信しました（デモ）');history.back()">送信</button>
  </div>`;

V.help = () => `
  ${appbar({title:'ヘルプ', back:true})}
  <div class="page">
    <div class="slist">
      <button class="srow" onclick="toast('利用方法ガイドを開きます（デモ）')">利用方法<span class="arw">›</span></button>
      <button class="srow" onclick="toast('利用規約を開きます（デモ）')">利用規約<span class="arw">›</span></button>
      <button class="srow" onclick="toast('プライバシーポリシーを開きます（デモ）')">プライバシーポリシー<span class="arw">›</span></button>
      <button class="srow" onclick="toast('特定商取引法に基づく表記を開きます（デモ）')">特定商取引法に基づく表記<span class="arw">›</span></button>
      <button class="srow" onclick="go('#/contact')">お問い合わせ<span class="arw">›</span></button>
    </div>
  </div>
  ${tabbar('my')}${demoPill()}`;

V.courses = () => {
  const prefs = ['すべて','千葉県','栃木県','お気に入り'];
  let list = COURSE_DATA.filter(c =>
    (coursePref==='すべて' || (coursePref==='お気に入り' ? S.favs[c.n] : c.p===coursePref)) &&
    (!courseQ || c.n.includes(courseQ) || c.k.includes(courseQ)));
  return `
  ${appbar({title:'ゴルフ場選択', back:true})}
  <div class="page">
    <div class="filters">
      ${prefs.map(p=>`<button class="chip ${coursePref===p?'':'line'}" onclick="coursePref='${p}';render()">${p==='お気に入り'?'★ ':''}${p}</button>`).join('')}
    </div>
    <div class="wrap" style="margin-top:8px">
      <input class="input" placeholder="ゴルフ場名で検索" value="${esc(courseQ)}" onchange="courseQ=this.value;render()">
    </div>
    <div class="tee-body">
      ${list.map(c=>`
        <div class="card course-row" onclick="${coursePick?`pickCourse('${c.n}')`:`toast('${c.n}（デモ）')`}">
          <img class="cimg" src="${c.img}">
          <div><div class="cn">${c.n}</div><div class="ck">${c.k}・${c.p}</div></div>
          <button class="fav ${S.favs[c.n]?'on':''}" onclick="event.stopPropagation();S.favs['${c.n}']=!S.favs['${c.n}'];save();render()">${I.star.replace('width="14" height="14"','width="20" height="20"')}</button>
        </div>`).join('') || '<div class="empty"><div class="big">—</div>該当するゴルフ場がありません</div>'}
      ${coursePick?'<p class="muted" style="font-size:11px;text-align:center">タップして選択すると前の画面に戻ります</p>':''}
    </div>
  </div>
  ${tabbar('my')}${demoPill()}`;
};
function pickCourse(n){
  if(coursePick==='offer') of_.course = n;
  coursePick = null;
  history.back();
  setTimeout(()=>toast(`${n} を選択しました`), 300);
}

V.base = () => `
  ${appbar({title:'拠点設定', back:true})}
  <div class="page wrap">
    <p class="muted" style="margin-top:12px">拠点を設定すると、近くのユーザーを優先して表示できます。正確な住所は保存されず、市区町村レベルの精度で管理されます。</p>
    <div class="card" style="padding:16px;margin-top:14px">
      <b style="font-size:14px">${I.pin} 現在地を使う（推奨）</b>
      <p class="muted" style="font-size:11.5px;margin-top:4px">ボタンを押すと、ブラウザが位置情報の許可を求めます。</p>
      <button class="btn sm" style="margin-top:10px" onclick="toast('拠点を「千葉市」付近に設定しました（デモ）')">現在地で設定する</button>
    </div>
    <div class="card" style="padding:16px;margin-top:12px">
      <b style="font-size:14px">郵便番号で設定</b>
      <div style="display:flex;gap:10px;margin-top:10px">
        <input class="input" placeholder="1234567" style="flex:1">
        <button class="btn sm" onclick="toast('拠点を設定しました（デモ）')">設定</button>
      </div>
    </div>
  </div>
  ${tabbar('my')}${demoPill()}`;

V.notifSettings = () => {
  const row = (k, t, s, dis) => `
    <div class="srow" style="cursor:default">
      <div style="flex:1"><div>${t}</div><div class="muted" style="font-size:10.5px">${s}</div></div>
      <button class="swt ${S.ntf[k]?'on':''}" ${dis?'disabled style="opacity:.4"':''} onclick="S.ntf['${k}']=!S.ntf['${k}'];save();render()"></button>
    </div>`;
  return `
  ${appbar({title:'通知設定', back:true})}
  <div class="page">
    <div class="sec wrap"><div class="sec-h"><span class="t">基本設定</span></div></div>
    <div class="slist" style="margin-top:0">
      ${row('email','Email通知','Emailでの通知を有効にする')}
      ${row('line','LINE通知','LINE連携が必要です', true)}
    </div>
    <div class="sec wrap"><div class="sec-h"><span class="t">通知項目</span></div></div>
    <div class="slist" style="margin-top:0">
      ${row('news','お知らせ通知','システムからのお知らせ')}
      ${row('foot','足あと通知','プロフィールを見られた時')}
      ${row('like','スタンプ/いいね','スタンプやいいねを貰った時')}
      ${row('msg','メッセージ通知','新しいメッセージ')}
    </div>
  </div>
  ${tabbar('my')}${demoPill()}`;
};

V.blocked = () => `
  ${appbar({title:'ブロック中', back:true})}
  <div class="page">
    <div class="empty"><div class="big">—</div>ブロック中のユーザーはいません</div>
  </div>
  ${tabbar('my')}${demoPill()}`;

V.card = () => `
  ${appbar({title:'クレジットカード情報', back:true})}
  <div class="page wrap">
    <p class="muted" style="margin:14px 0">クレジットカード情報を登録・更新できます。</p>
    <div class="ccard">
      <div style="display:flex;justify-content:space-between"><span class="cc-k">CREDIT CARD</span><span class="cc-k">${S.subActive?'登録済み':'未登録'}</span></div>
      <div class="cc-no">${S.subActive?'**** **** **** 6011':'カード未登録'}</div>
      <div class="cc-k">有効期限 ${S.subActive?'12/29':'--/--'}</div>
    </div>
    <button class="btn ghost" style="margin-top:18px" onclick="toast('カード登録画面を開きます（デモ・Stripe連携）')">カード情報を${S.subActive?'更新':'登録'}</button>
    <p class="muted" style="font-size:11px;margin-top:12px">・カード情報はStripeによって安全に暗号化・処理されます<br>・更新されたカード情報は今後の決済に使用されます</p>
  </div>
  ${tabbar('my')}${demoPill()}`;

V.password = () => `
  ${appbar({title:'パスワード更新', back:true})}
  <div class="page wrap">
    <div class="label">新しいパスワード</div>
    <input class="input" type="password">
    <div class="label">新しいパスワード（確認）</div>
    <input class="input" type="password">
    <button class="btn" style="margin-top:18px" onclick="toast('パスワードを更新しました（デモ）');history.back()">パスワードを更新</button>
  </div>
  ${tabbar('my')}${demoPill()}`;

V.verify = () => `
  ${appbar({title:'本人確認', back:true})}
  <div class="page wrap">
    ${S.verified?`
    <div class="notice" style="margin:14px 0 0"><span class="ic">${I.shield}</span><span>本人確認は完了しています</span></div>
    <p class="muted" style="margin-top:14px;font-size:12px">書類を再提出する場合は以下から行えます。</p>`:`
    <div class="warn-banner" style="margin:14px 0 0">本人確認書類の登録が必要です</div>`}
    <div class="label" style="margin-top:20px">書類の種類</div>
    <div class="opt-grid">
      <button class="opt on">運転免許証</button><button class="opt">マイナンバーカード</button><button class="opt">パスポート</button>
    </div>
    <div class="card" style="padding:18px;margin-top:16px;text-align:center">
      <p style="font-size:12.5px;line-height:1.8"><b>eKYC（電子本人確認）</b><br>書類のICチップ読み取りと顔照合で、なりすましを防止します。</p>
      <button class="btn" style="margin-top:12px" onclick="S.verified=true;save();render();toast('本人確認が完了しました（デモ）')">${I.camera} 撮影して照合する（デモ）</button>
    </div>
    <p class="muted" style="font-size:11px;margin-top:12px">審査は通常10分〜24時間以内に完了します。確認完了までオファー・メッセージの送信はできません。</p>
  </div>
  ${tabbar('my')}${demoPill()}`;

V.articles = () => `
  ${appbar({title:'記事', back:true, noBell:true})}
  <div class="page ${S.role?'':'nofoot'}">
    ${ARTICLES.map(a=>`
      <button class="card article-card" onclick="go('#/article/${a.id}')">
        <img src="${a.img}"><div class="ab"><div class="at">${a.title}</div><div class="am">PreGo しゅうへい ／ ${a.date}</div></div>
      </button>`).join('')}
  </div>
  ${S.role?tabbar('')+demoPill():''}`;

V.article = id => {
  const a = ARTICLES.find(x=>x.id===id) || ARTICLES[0];
  return `
  ${appbar({title:'記事', back:true, noBell:true})}
  <div class="page ${S.role?'':'nofoot'} article-body">
    <h2>${a.title}</h2>
    <div class="meta">PreGo しゅうへい ／ ${a.date}</div>
    <img src="${a.img}">
    ${a.body.map(p=>`<p>${p}</p>`).join('')}
    ${S.role?'':'<button class="btn" style="margin:14px 0" onclick="go(\'#/login\')">PreGoをはじめる</button>'}
  </div>
  ${S.role?tabbar('')+demoPill():''}`;
};

V.me = () => {
  const m = me();
  const inner = V.profile(S.role==='f'?'w1':'m1');
  const banner = `
    <div class="warn-banner" style="position:relative;z-index:5">
      未入力の項目があります。プロフィールを充実させてマッチング率を上げましょう
      <button class="go" onclick="go('#/edit-profile')">編集 →</button>
    </div>`;
  return inner.replace('<div class="page" style="padding-bottom:0">', `<div class="page" style="padding-bottom:0">${banner}`)
    .replace(/<div class="prof-cta">[\s\S]*?<\/div>\s*<\/div>/, `
    <div class="prof-cta">
      <button class="btn" onclick="go('#/edit-profile')">プロフィールを編集する</button>
    </div></div>`);
};

V.editProfile = () => {
  const m = me();
  return `
  ${appbar({title:'プロフィール編集', back:true, noBell:true})}
  <div class="page nofoot wrap">
    <div class="label">プロフィール写真（タップで変更）</div>
    <div style="display:flex;gap:10px">
      ${photosOf(m).map(p=>`<img src="${p}" style="width:74px;height:74px;border-radius:12px;object-fit:cover" onclick="toast('写真の変更（デモ）')">`).join('')}
      <button class="photo-pick" style="width:74px;height:74px;aspect-ratio:auto" onclick="toast('写真を追加（デモ）')">＋</button>
    </div>
    <div class="label">ニックネーム</div>
    <input class="input" value="${esc(m.name)}">
    <div class="label">自己紹介</div>
    <textarea class="input" rows="4">${esc(m.bio)}</textarea>
    <div style="display:flex;gap:10px">
      <div style="flex:1"><div class="label">ベストスコア</div><input class="input" type="number" value="${m.best}"></div>
      <div style="flex:1"><div class="label">アベレージ</div><input class="input" type="number" value="${m.ave}"></div>
    </div>
    <div class="label">プレー代の負担について</div>
    <select class="input"><option>お相手の分も払います</option><option selected>話し合って決めたい</option><option>お互い自分の分を払う</option><option>お相手に出してもらいたい</option></select>
    <div class="label">プレーエリア</div>
    <div class="psec"><div class="chips">${m.area.map(a=>`<span class="chip">${a}</span>`).join('')}<button class="chip line" onclick="toast('エリア編集（デモ）')">＋ 編集</button></div></div>
    <button class="btn" style="margin-top:22px" onclick="toast('プロフィールを保存しました（デモ）');history.back()">保存する</button>
  </div>`;
};

/* ---------- router ---------- */
let _lastRoute = null;
function render(){
  const h = location.hash || '#/login';
  const [_, route, arg] = h.split('/');
  const sameRoute = (_lastRoute === h);
  _lastRoute = h;
  document.body.classList.toggle('no-page-anim', sameRoute);
  if(!S.role && !['login','signup','forgot','contact','articles','article','help'].includes(route)){ location.hash = '#/login'; return; }
  const map = {
    '': V.login, 'login': V.login, 'signup': V.signup, 'forgot': V.forgot,
    'home': V.home, 'tee': V.tee, 'miss': V.miss, 'feed': V.feed,
    'messages': V.messages, 'chat': ()=>V.chat(arg),
    'profile': ()=>V.profile(arg), 'offer': ()=>V.offer(arg), 'offers': V.offers,
    'compe': ()=>V.compe(arg), 'mypage': V.mypage, 'points': V.points,
    'roundlog': V.roundlog, 'frames': V.frames,
    'settings': V.settings, 'subscription': V.subscription, 'notifications': V.notifications,
    'contact': V.contact, 'help': V.help, 'courses': V.courses, 'base': V.base,
    'notif-settings': V.notifSettings, 'blocked': V.blocked, 'card': V.card,
    'password': V.password, 'verify': V.verify,
    'articles': V.articles, 'article': ()=>V.article(arg),
    'me': V.me, 'edit-profile': V.editProfile,
  };
  $app.innerHTML = (map[route] || V.login)();
  window.scrollTo(0,0);
  countUp();
  if(route==='roundlog'){ document.fonts ? document.fonts.ready.then(drawFrame) : drawFrame(); setTimeout(drawFrame,300); }
}
window.addEventListener('hashchange', render);
applyTheme();
render();
