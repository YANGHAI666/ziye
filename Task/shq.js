/*
软件名称:生活圈 商店搜索下载
更新时间：2021-04-09 @肥皂
脚本说明：生活圈自动阅读
脚本为自动完成生活圈的评论任务

4.9修改评论内容为本地词库随机评论,可以自己适当添加一些。我精力有限,只加了65个

请不要分享此脚本,请不要分享此脚本,请不要分享此脚本。
单纯跑脚本每天低保三块钱。手动去转载文章到生活圈,两毛一条，
请转账自己生活圈定位地区的文章。文章可以去微信搜索定位地区的一些本地新闻号转载。文章可转载或直接复制粘贴当原创发布,只要上了推送十块钱一篇。判定原创1元一贴

本人公众号,有些脚本可能只会发布到公众号,比如自己偷撸的,bug无限刷之类的,不定期更新一些文章吧。下面的链接是公众号二维码
https://ae01.alicdn.com/kf/Ub229d86c9337410ebe479afe22226c9aV.jpg

复制此文章链接到微信打开阅读并下载生活圈,我会有两分钱的收益,谢谢大家。
https://tz.fafengtuqiang.cn/weizhan/article/109912864/31896564367/1568637/510227705367/1080334
或者商店搜索下载,微信秒到,注册后七天可提现,之后每天可提

本脚本以学习为主！
使用方法:首页找到评论有奖,点进去即获取数据成功

TG电报群: https://t.me/hahaha8028

注意事项:必看。
脚本默认评论方式为使用文章标题评论,最好去boxjs自定义评论内容里添加自定义的内容,否则太多人评论都是相同的内容,这样容易出问题，部分地区可能没有评论有奖的任务，需要自己切换地区,首次打开软件最好把软件的定位权限关闭

可参与评论有奖的地区: 这些地区由@ziye测试提供,辛苦大佬。
无锡 徐州 泰州 莆田 泉州 南昌 赣州 烟台 威海 临沂 郑州 开封 洛阳 周口 十堰 荆门 孝感 荆州 重庆 自贡 宜宾

以上地区请不要批量扎堆到一个地方,自己随机选一个地区。多账号直接退出登录,换号就行,不需要使用卸载大法,去生活圈公众号绑定一下账号就行了,多账号请尽量错开地区玩，最好每天去boxjs修改一下自定义评论的内容,最大限度的防止黑号。

boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json

生活圈
圈X配置如下，其他软件自行测试
[task_local]
#生活圈
0-59 9,12,22 * * * https://raw.githubusercontent.com/age174/-/main/shq.js, tag=生活圈, img-url=https://ftp.bmp.ovh/imgs/2021/04/e2b32e2eb2ad0cd3.png, enabled=true

[rewrite_local]
#生活圈
https://ex.jwshq.cn/app/commentator/getActivityItemPage url script-request-header https://raw.githubusercontent.com/age174/-/main/shq.js

#loon
https://ex.jwshq.cn/app/commentator/getActivityItemPage script-path=https://raw.githubusercontent.com/age174/-/main/shq.js, requires-header=true, timeout=10, tag=生活圈

#surge
生活圈 = type=http-request,pattern=https://ex.jwshq.cn/app/commentator/getActivityItemPage,requires-header=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/shq.js,script-update-interval=0

[MITM]
hostname = ex.jwshq.cn
*/

const $ = new Env('生活圈自动评论');
let status;
status = (status = ($.getval("shqstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const shqurlArr = [], shqhdArr = [],shqcount = ''
let times = Math.round(Date.now() / 1000)
let shqurl = $.getdata('shqurl')
let shqhd = $.getdata('shqhd')
let shqkey = '',id = '',uid='',tid=''
let nr = ($.getval('nr') || '');//自定义评论内容
let txje = 15 //在此处修改一下需要提现的金额,可对照自己的余额修改提现,支持小数点提现,改完手动运行脚本即可提现,微信秒到,记得绑定自己的微信
let kg = 0  //提现开关,默认关闭,改为1手动执行一次可提现
let sjpl = ['那几秒的邂逅，像极了爱情。','我们总以为来日方长，却忘了世事无常.','不生不灭无魂无魄，只有一具不朽的躯壳。','我这一生啊 平庸至极，唯独见你，波澜迭起。','大风带走了树叶，只留下了树，树说没事，只有树叶是真的高兴。','男孩怀念那个满是起风了，纸短情长和往后余生的夏天，以及满是成都的秋天，还有就是你一定要幸福啊！那个夏天可惜的就是说散就散，一起吹过晚风的人终究还是会分开…...','“我喜欢可乐，去商店买发现没有了，就随手拿了一瓶牛奶。结账时突然发现了可乐，可是我不想换了。”懂吗？','因为有爱，才会有期待，所以纵使失望，也是一种幸福，虽然这种幸福有点痛。','枕头要常晒,因为里面装满了心酸的泪和发霉的梦。','成熟的人钱字当头，幼稚的人感情入喉！','一人一心一座城，一物一睹一声叹。','先好好活着，其他的再想想办法。','你跋山涉水去见的人不一定会记得你，ta只会记得自己跋山涉水去见的人。','我有个完美的女朋友，她不任性，不矫情，不黏人，不化妆，不存在。','比别人贪心，就要比别人用心。','你假装不懂，我也故作轻松，错过就错过，人嘛，总要有点性格。','晓夕有变，江南诸风在几席，此幸未如有也。','你要藏好软弱，世界大雨滂沱。万物苟且而活，无人为你背负更多。','我想你正在找文案吧，送你一句，人间忽晚，山河已秋，如若不喜欢，那就念念开头的三个字吧。','愿做你枕边的小熊 ，打败你梦里的恶龙。','提到钱谁都没有错，重点是有没有情义道德。','后来啊，我才想明白，太阳都没办法做到让所有人喜欢，你说它温暖、我说它刺眼，谁能不挨骂呀！','都是手机不离手的人，要想回你消息早回了。不要动不动就倾其所有，与其卑微到尘土里，不如留一些骄傲与疼爱给自己，然后各自安好，相见不如怀念，好久不见，不如不见。','“你联系我，我就听你说，你不联系我，我就顺其自然，实不相瞒，我很想你，但问题不大我能控制，因为这样比较酷。','世界上根本没有感同身受这回事，针刺不到你身上，你永远不知道有多痛。','拘谨带着温柔，虚伪又带着热情。','那些能让你变好的事，最开始也许不容易，但只要坚持，就能成长。','在北京的十字路口抽了半包烟，我在想念她，可是她却...','希望你哭过以后，把心放冷一点，把无情发挥好一些。','我可以爱一个人爱到不要命，但是我绝不能爱一个人爱到不要脸。有些伤口，无论过多久，依然一碰就痛;有些人，不管过多久，也还是一想起就疼。','有时候我们需要的不是一碗鸡汤，而是一个巴掌，有些人出现在你的生命里，就是为了告诉你你真好骗。','爱你有多难，忘记你就有多难。爱你有多苦，恨你就有多苦。','多谢你绝情，我学会死心。','不纠缠你，不等于不爱你。','城市在下雨，而我在想你。','从长远来说，我们都死了。','恨不相逢早，赠以双明珠。','红尘嚣，浮华一世转瞬空。','多情的女人，注定受伤害。','陋巷石头房，黄泥斑驳墙。','这一生，我为你画地为牢。','若情深已无用，知与谁同','谁解相思味，谁盼良人归','哀莫大于心不死。','爱你，却永远走不近你','把悲伤掩饰得天衣无缝。','不纠缠你不等于不爱你','城市在下雨，而我在想你。','从长远来说，我们都死了。','你会发现得不到的，才是最美的','恨不相逢早，赠以双明珠。','红尘嚣，浮华一世转瞬空。','笼天地于形内，借万物于笔端。','陋巷石头房，黄泥斑驳墙。','身后有余忘缩手，眼前无路想回头。','他很好，但我一点不感动','心中有丘壑，眉目作山河。','由来意气合，直取真影评','愈怕伤害，愈要谈恋爱']
let sjs = Math.floor(Math.random() * 59); //生成随机数目前为65个随机评论,可以自己添加,添加完几个就在65上面相加自己添加的数量。如自己添加了5个,65改成70,添加方式为在上方数组里加入评论语句。英文逗号相隔,''单引号里加入评论语句。🌰:    这是一个例子 ,'这是一个栗子'

!(async () => {
  if (typeof $request !== "undefined") {
    await shqck()
   
  } else {shqurlArr.push($.getdata('shqurl'))
    shqhdArr.push($.getdata('shqhd'))
    let shqcount = ($.getval('shqcount') || '1');
  for (let i = 2; i <= shqcount; i++) {
    shqurlArr.push($.getdata(`shqurl${i}`))
    shqhdArr.push($.getdata(`shqhd${i}`))
  }
    console.log(`------------- 共${shqhdArr.length}个账号-------------\n`)
      for (let i = 0; i < shqhdArr.length; i++) {
        if (shqhdArr[i]) {
         
          shqurl = shqurlArr[i];
          shqhd = shqhdArr[i];
          $.index = i + 1;
          console.log(`\n开始【生活圈${$.index}】`)
          await shqlb();
          await shqxx();
          if(kg == 1){
          await shqtx();
}
          

  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//生活圈数据获取


function shqck() {
   if ($request.url.indexOf("start=") > -1) {
 const shqurl = $request.url
  if(shqurl)     $.setdata(shqurl,`shqurl${status}`)
    $.log(shqurl)
  const shqhd = JSON.stringify($request.headers)
        if(shqhd)    $.setdata(shqhd,`shqhd${status}`)
$.log(shqhd)
   $.msg($.name,"",'生活圈'+`${status}` +'数据获取成功！')
  }
}






//生活圈任务列表
function shqlb(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : `https://ex.jwshq.cn/app/commentator/getActivityItemPage?start=0&limit=1`,
        headers : JSON.parse(shqhd),
       
}
      $.get(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code== 0){
if(result.data.data[0] == undefined){
$.log('\n生活圈没有匹配到任务列表')
}
name = result.data.data[0].title
name = encodeURI(sjpl[sjs]+nr)
key = result.data.data[0].articleId
        console.log('\n生活圈获取任务ID成功\n当前任务ID: '+key+'\n文章标题:'+result.data.data[0].title+'\n开始提交随机评论:'+sjpl[sjs]+nr)
  //$.log(name)
        await $.wait(1000);
        await shqtj()
} else {
       console.log('\n生活圈获取任务ID失败  '+result.msg)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}



//生活圈提交
function shqtj(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "https://ex.jwshq.cn/app/commentator/comment",
        headers : JSON.parse(shqhd),
        body : `imageId=&articleId=${key}&text=${name}&sign=0`,
}
      $.post(url, async (err, resp, data) => {
        try {

           
    const result = JSON.parse(data)
        if(result.data.award == 3){
        console.log('\n生活圈提交评论成功,获得'+result.data.award+'分现金奖励')
       await $.wait(1000);
       await shqtq()
       
} else {
       console.log('\n生活圈错误'+result.data.message)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//生活圈领取现金
function shqtq(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "https://ex.jwshq.cn/app/commentator/increaseBalance",
        headers : JSON.parse(shqhd),
        
}
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.data == true){
        console.log('\n生活圈任务提取现金成功')
       //await $.wait(1000);
        //await shqlb()
} else {
       console.log('\n生活圈任务提取现金失败')

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//生活圈提现
function shqtx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "https://ex.jwshq.cn/app/wx/withdraw",
        headers : JSON.parse(shqhd),
        body : 'amount='+txje,
        
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log(`\n生活圈提现:${result.data.message}`)
      
} else {
       console.log('\n生活圈提现错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//生活圈信息
function shqxx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "https://ex.jwshq.cn/app/commentator/commentAwardInfo",
        headers : JSON.parse(shqhd),
}
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
uid = result.data.awardAmountToday / 100
tid = result.data.awardAmountTotal / 100
        console.log(`\n生活圈今日评论文章数:${result.data.commentNum}\n今日共获得:${uid}元\n我的总收入:${tid}元`)
      
} else {
       console.log('\n生活圈错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
