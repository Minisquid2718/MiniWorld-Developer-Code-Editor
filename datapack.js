
//获取本地设置的Snippet
function GetSnippetText() {
  var snippet = "\n\
snippet local_var_example\n\
  this is the test(obj) \n\
    ${2:--函数体}\n\
  end\n\
  skibiditoilet\n\
snippet local 创建变量\n\
  local ${1:val} = 0\n\
snippet local 创建空表\n\
  local ${1:tab}= {} \n\
snippet function 创建函数\n\
  function ${1:game}(obj) \n\
    ${2:--函数体}\n\
  end\n\
snippet if 条件语句\n\
  if ${1:true} then\n\
    ${2:--如果条件为真的执行体}\n\
  end\n\
snippet if.else条件语句\n\
  if ${1:true} then\n\
    ${2:--如果条件为真的执行体}\n\
  else\n\
    ${3:--如果条件为假的执行体}\n\
  end\n\
snippet for 循环语句\n\
  for i = 0 ,${1:10} do\n\
    --循环体\n\
    print(i)\n\
  end\n\
snippet for pairs迭代器语句\n\
  for k ,v in pairs(${1:tab}) do\n\
    --循环体\n\
    print(k,v)\n\
  end\n\
snippet while 循环语句\n\
  ${1:val} = 0\n\
  while ${2:val < 5} do\n\
    ${3:--循环直到val为假}\n\
    ${4:val = val + 1}\n\
  end\n\
snippet repeat 循环语句\n\
  ${1:val} = 0\n\
  repeat\n\
    ${2:--循环直到val为假}\n\
    ${3:val = val + 1}\n\
  until ${4:val > 5}\n\
snippet math.sin三角函数,正弦\n\
  math.sin(${1:deg})\n\
snippet math.asin反正弦\n\
  math.asin(${1:rad})\n\
snippet math.cos余弦\n\
  math.cos(${1:deg})\n\
snippet math.acos反余弦\n\
  math.acos(${1:rad})\n\
snippet math.tan正切\n\
  math.tan(${1:deg})\n\
snippet math.atan反正切\n\
  math.atan(${1:rad})\n\
snippet math.exp取e的x次方\n\
  math.exp(${1:x})\n\
snippet math.log计算x自然对数\n\
  math.log(${1:x})\n\
snippet math.log10计算10为底，x的对数\n\
  math.log(${1:x})\n\
snippet math.frexp将val拆成x*(2^y)的形式\n\
  math.frexp(${1:val})\n\
snippet math.ldexp计算x*(2^y)\n\
  math.ldexp(${1:x},y)\n\
snippet math.pi圆周率\n\
  math.pi\n\
snippet math.abs取绝对值\n\
  math.abs(${1:val})\n\
snippet math.pow幂运算\n\
  math.pow(${1:m},n)\n\
snippet math.sqrt开平方\n\
  math.sqrt(${1:m})\n\
snippet math.mod取模\n\
  math.mod(${1:val1},val2)\n\
snippet math.modf取整数、小数\n\
  math.modf(${1:float})\n\
snippet math.rad角度转弧度\n\
  math.rad(${1:val})\n\
snippet math.deg弧度转角度\n\
  math.deg(${1:val})\n\
snippet math.floor向上取整\n\
  math.floor(${1:val})\n\
snippet math.ceil向下取整\n\
  math.ceil(${1:val})\n\
snippet math.max取最大值\n\
  math.max(${1:str})\n\
snippet math.min取最小值\n\
  math.min(${1:str})\n\
snippet math.randomseed随机数种子\n\
  math.randomseed(os.time())\n\
snippet math.random取随机数（0-1）\n\
  math.random()\n\
snippet math.random取随机数（0-n）\n\
  math.random(${1:n})\n\
snippet math.random取随机数（m-n）\n\
  math.random(${1:m},n)\n\
snippet table.insert末尾插入\n\
  table.insert(${1:tab}, ${2:val})\n\
snippet table.insert在第n位插入\n\
  table.insert(${1:tab},${2:n},${3:val})\n\
snippet table.remove删除末尾\n\
  table.remove(${1:tab})\n\
snippet table.remove删除第n位的元素\n\
  table.remove(${1:tab},n)\n\
snippet table.remove连接字符串\n\
  table.remove(${1:tab})\n\
snippet table.remove连接字符串，指定连接符\n\
  table.remove(${1:tab},',')\n\
snippet table.remove连接字符串，指定索引和连接符\n\
  table.remove(${1:tab},',',m,n)\n\
snippet table.sort排序↑\n\
  table.sort(${1:tab})\n\
snippet table.sort排序↓\n\
  table.sort(${1:tab}, function (a, b) if a > b then return true end end)  --排序tab内元素，z-a，降序\n\
snippet OS库 clock获取cpu近似值\n\
  os.clock() --返回CPU运行的近似值\n\
snippet OS库 time时间\n\
  os.time() --返回从1070.1.1到当前的秒数\n\
snippet OS库 difftime返回时间差\n\
  os.difftime(m,n) --返回m-n之间的时间差，m、n可以用os.time()获取\n\
snippet OS库 date时间列表\n\
  os.date('*t') --返回当前时间的列表\n\
snippet OS库 date字符串参数\n\
  --%a  一星期中天数的简写Wed）\n\
  --%A  一星期中天数的全称（Wednesday）\n\
  --%b  月份的简写（Sep）\n\
  --%B  月份的全称（September）\n\
  --%c  日期和时间（09/16/98 23:48:10）\n\
  --%d  一个月中的第几天[0 ~ 31]\n\
  --%H  24小时制中的小时数[00 ~ 23]\n\
  --%I  12小时制中的小时数[01 ~ 12]\n\
  --%j  一年中的第几天[01 ~ 366]\n\
  --%M  分钟数[00 ~ 59]\n\
  --%m  月份数[01 ~ 12]\n\
  --%P  上午(am) 或 下午(pm)\n\
  --%S  秒数[00 ~ 59]\n\
  --%w  一星期中的第几天[0 ~ 6 = 星期天 ~ 星期六]\n\
  --%W　一年中的第几个星期0 ~ 52\n\
  --%x  日期（09/16/98）\n\
  --%X  时间（23:48:10）\n\
  --%y  两位数的年份[00 ~ 99]\n\
  --%Y  完整的年份\n\
  --%%  字符串'%'\n\
snippet string.len 长度\n\
  string.len(${1:str}) --返回字符串长度（不支持中文）\n\
snippet string.sub 截取字符串内容\n\
  string.sub(${1:str},m,n) --返回str中m-n位的内容\n\
snippet string.rep 重复\n\
  string.rep(${1:str},n) --重复n次str，并返回结果\n\
snippet string.lower 转换小写字母\n\
  string.lower(${1:str}) --str中的大写转为小写\n\
snippet string.upper 转换大写字母\n\
  string.upper(${1:str}) --str中的小写转为大写\n\
snippet string.char 转换字符\n\
  string.char(${1:ASCII}) --ASCII码转为字符\n\
snippet string.byte 转换ASCII码\n\
  string.byte(${1:str},n) --返回str中第n位字符对应的ASCII码\n\
snippet string.reverse 反转字符串\n\
  string.reverse(${1:str}) --反转字符串\n\
snippet string.format 格式化字符串\n\
  string.format(${1:val},str) --按照val参数格式化str\n\
snippet string.find 字符串查找\n\
  string.find(${1:str},n,1) --查找str中是否存在n，并返回具体位置\n\
snippet string.gmatch 字符串查找\n\
  string.gmatch(${1:str},st) --迭代器查找str中是否存在st，如果存在则返回st\n\
snippet string.match 字符串配对\n\
  string.match(${1:st1},st2) --只查找st1中第一个与st2匹配的字符串并返回\n\
snippet string.gsub 字符串替换\n\
  string.gsub(${1:str},m,n,num) --把str中的m替换成n，替换num次\n\
snippet string库 字符串配对转译码\n\
  --.(点): 与任何字符配对\n\
  --%a: 与任何字母配对\n\
  --%c: 与任何控制符配对\n\
  --%d: 与任何数字配对\n\
  --%l: 与任何小写字母配对\n\
  --%p: 与任何标点(punctuation)配对\n\
  --%s: 与空白字符配对\n\
  --%u: 与任何大写字母配对\n\
  --%w: 与任何字母/数字配对\n\
  --%x: 与任何十六进制数配对\n\
  --%z: 与任何代表0的字符配对\n\
  --%x(此处x是非字母非数字字符): 与字符x配对. 主要用来处理表达式中有功能的字符(^$()%.[]*+-?)的配对问题, 例如%%与%配对\n\
  --[数个字符类]: 与任何[]中包含的字符类配对. 例如[%w_]与任何字母/数字, 或下划线符号(_)配对\n\
  --[^数个字符类]: 与任何不包含在[]中的字符类配对. 例如[^%s]与任何非空白字符配对\n\
snippet string库 字符串格式化转译码\n\
  --%s - 接受一个字符串并按照给定的参数格式化该字符串\n\
  --%d - 接受一个数字并将其转化为有符号的整数格式\n\
  --%f - 接受一个数字并将其转化为浮点数格式(小数)，默认保留6位小数，不足位用0填充\n\
  --%x - 接受一个数字并将其转化为小写的十六进制格式\n\
  --%X - 接受一个数字并将其转化为大写的十六进制格式\n\
  --%c - 接受一个数字,并将其转化为ASCII码表中对应的字符\n\
  --%d, %i - 接受一个数字并将其转化为有符号的整数格式\n\
  --%o - 接受一个数字并将其转化为八进制数格式\n\
  --%u - 接受一个数字并将其转化为无符号整数格式\n\
  --%x - 接受一个数字并将其转化为十六进制数格式,使用小写字母\n\
  --%X - 接受一个数字并将其转化为十六进制数格式,使用大写字母\n\
  --%e - 接受一个数字并将其转化为科学记数法格式,使用小写字母e\n\
  --%E - 接受一个数字并将其转化为科学记数法格式,使用大写字母E\n\
  --%f - 接受一个数字并将其转化为浮点数格式\n\
  --%g(%G) - 接受一个数字并将其转化为%e(%E,对应%G)及%f中较短的一种格式\n\
  --%q - 接受一个字符串并将其转化为可安全被Lua编译器读入的格式\n\
  --%s - 接受一个字符串并按照给定的参数格式化该字符串\n\
snippet 字符串应用-转换数字大小写\n\
  local function ToCN(number)\n\
    local tostr = tostring(number) --把传入的数字转为字符串\n\
    local strsize = #tostr --获取输入的字符串长度\n\
    local strCN = ''   --创建空字符串，用来储存结果\n\
    local tabCN = {'一','二','三','四','五','六','七','八','九'}  --制定中文数字模板列表\n\
    for i = 1 , strsize do\n\
      --根据字符串长度决定取几次\n\
      local substr = string.sub(tostr,i,i)  --取字符串的第i位内容  \n\
      local tonum = tonumber(substr)   --把字符串转为数字\n\
      strCN = strCN..tabCN[tonum]  --取出对应位置的中文数字\n\
    end\n\
    return strCN\n\
  end\n\
  Chat:sendSystemMsg((ToCN(520)), 0) --传入数字，并把转换后的结果打印在聊天区\n\
snippet 等待\n\
  threadpool:wait(${1:second})--等待x秒\n\
snippet 玩家点击方块事件\n\
  function ClickBlock(obj)\n\
  --点击方块后执行的函数体\n\
    local playerid = obj.eventobjid--角色ID\n\
    local blockid = obj.blockid--方块ID\n\
    local x,y,z = obj.x,obj.y,obj.z--方块坐标\n\
  end\n\
  ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块\n\
snippet 玩家点击生物事件\n\
  function ClickActor(obj)\n\
    local playerid = obj.eventobjid--点击生物的玩家id\n\
    local actid = obj.toobjid--被点击的生物实例ID\n\
    local x,y,z = obj.x,obj.y,obj.z--被点击的生物坐标\n\
  end\n\
  ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], ClickActor)--点击生物\n\
snippet 按键按下事件\n\
  function InputKeyDown(obj)\n\
    local playerid = obj.eventobjid\n\
    local key = obj.vkey\n\
  end\n\
  ScriptSupportEvent:registerEvent([=[Player.InputKeyDown]=], InputKeyDown)--按下\n\
snippet 按键长按事件\n\
  function InputKeyOnPress(obj)\n\
    local playerid = obj.eventobjid\n\
    local key = obj.vkey\n\
  end\n\
  ScriptSupportEvent:registerEvent([=[Player.InputKeyOnPress]=], InputKeyOnPress)--长按\n\
snippet 按键抬起事件\n\
  function InputKeyUp(obj)\n\
    local playerid = obj.eventobjid\n\
    local key = obj.vkey\n\
  end\n\
  ScriptSupportEvent:registerEvent([=[Player.InputKeyUp]=], InputKeyUp)--抬起\n\
snippet 输入事件\n\
  function NewInputContent(obj)\n\
    local playerid = obj.eventobjid\n\
    local st = obj.content\n\
  --\n\
  end\n\
  ScriptSupportEvent:registerEvent([=[Player.NewInputContent]=], NewInputContent)\n\
snippet 游戏开始start\n\
  function GameStart()\n\
  end\n\
  ScriptSupportEvent:registerEvent([=[Game.Start]=], GameStart)\n\
snippet 游戏进行run\n\
  function GameRun()\n\
  --\n\
  end\n\
  ScriptSupportEvent:registerEvent([=[Game.Run]=], GameRun)\n\
snippet 游戏结束end\n\
  function GameEnd()\n\
  --\n\
  end\n\
  ScriptSupportEvent:registerEvent([=[Game.End]=],GameEnd)\n\
snippet 移动事件\n\
  function MoveOne()\n\
  --\n\
  end\n\
  ScriptSupportEvent:registerEvent([=[Player.MoveOneBlockSize]=],MoveOne)\n\
snippet 计时器用法time\n\
  local ret,timeid = MiniTimer:createTimer('计时器')--创建计时器\n\
  local ret, num, objIds = World:getAllPlayers()--获取player列表\n\
  MiniTimer:showTimerTips(objIds, timeid, '计时：', true)--显示计时器\n\
  MiniTimer:startBackwardTimer(timeid,20,false)--启动倒计时\n\
  --MiniTimer:startForwardTimer(timeid)--启动正计时\n\
  function change(obj)\n\
    local tid = obj.timerid\n\
    local tname = obj.timername\n\
    local result,second=MiniTimer:getTimerTime(tid)\n\
    if second < 1 then --当计时器小于1停止\n\
      MiniTimer:stopTimer(tid)--停止计时器 \n\
      MiniTimer:showTimerTips(objIds, timeid, '计时：', false)--隐藏计时器\n\
    end \n\
  end\n\
  ScriptSupportEvent:registerEvent([=[minitimer.change]=],change)--计时器tick\n\
snippet 绘制长方体\n\
  --设置起点坐标\n\
  local mapx = 0 \n\
  local mapy = 7 \n\
  local mapz = 0\n\
  --设置场景\n\
  local mapk = 10 --宽\n\
  local mapl = 30 --长\n\
  local maph = 8  --高\n\
  local woodblock = 1120 --用什么方块\n\
  for L = mapx , mapx + mapk do \n\
  --画地面，或者同样方法画顶\n\
    for H = mapz, mapz + mapl do \n\
      Block:replaceBlock(woodblock, L, mapy-1, H, 0) \n\
    end \n\
  end \n\
  for i = mapx , mapx + mapk do\n\
  --两面墙体\n\
    for h = mapy, mapy + maph do \n\
      Block:replaceBlock(woodblock, i, h, mapz-1, 0) \n\
      Block:replaceBlock(woodblock, i, h , mapz +mapl+1   , 0) \n\
    end\n\
  end\n\
  for j = mapz , mapz + mapl do\n\
  --两面墙体\n\
    for h = mapy, mapy + maph do \n\
      Block:replaceBlock(woodblock, mapx -1, h,  j  , 0) \n\
      Block:replaceBlock(woodblock, mapx + mapk +1, h, j , 0) \n\
    end\n\
  end \n\
snippet 播放音乐音效\n\
  --音调列表muisc[1]高音，muisc[2]中音，muisc[3]低音\n\
  local muisc = { \n\
  {2.00, 2.12 ,2.24, 2.38, 2.52, 2.67, 2.83, 3.00, 3.17, 3.36, 3.56, 3.78},\n\
  {1.00, 1.06, 1.12, 1.19, 1.26, 1.33, 1.41, 1.50, 1.59, 1.68, 1.78, 1.89},\n\
  {0.50, 0.53, 0.56, 0.59, 0.63, 0.67, 0.71, 0.75, 0.79, 0.84, 0.89, 0.94}} ---\n\
  --10768~10775电子，10776~10783，鼓10784~10792 \n\
  Player:playMusic(0, 10785, 10 ,muisc[1][1], false) \n\
snippet 天气事件\n\
  ScriptSupportEvent:registerEvent([=[Weather.Changed]=],Changed)--天气变化\n\
snippet 容器事件\n\
  ScriptSupportEvent:registerEvent([=[Backpack.ItemTakeOut]=],ItemTakeOut)--容器内道具被取出blockid, x, y, z, itemid, itemnum\n\
  ScriptSupportEvent:registerEvent([=[Backpack.ItemPutIn]=],ItemPutIn)--容器内道具放入blockid, x, y, z, itemid, itemnum\n\
  ScriptSupportEvent:registerEvent([=[Backpack.ItemChange]=],ItemChange)--容器内道具变化blockid, x, y, z, itemid, itemnum\n\
snippet 游戏事件\n\
  ScriptSupportEvent:registerEvent([=[Game.Start]=],Start)--游戏开始\n\
  ScriptSupportEvent:registerEvent([=[Game.End]=],End)--游戏结束\n\
  ScriptSupportEvent:registerEvent([=[Game.Load]=],Load)--启动游戏\n\
snippet 游戏时间事件\n\
  ScriptSupportEvent:registerEvent([=[Game.Hour]=],Hour)--世界时间到[n]点--hour \n\
  ScriptSupportEvent:registerEvent([=[Game.RunTime]=],RunTime)--世界时间到[n]秒--second\n\
  ScriptSupportEvent:registerEvent([=[Game.TimeOver]=],TimeOver)--游戏超时\n\
snippet 游戏玩家事件\n\
  ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.EnterGame]=],EnterGame)--任一玩家进入游戏eventobjid, toobjid \n\
  ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.LeaveGame]=],LeaveGame)--任一玩家离开游戏eventobjid, toobjid \n\
  ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.Victory]=],Victory)--任一玩家胜利eventobjid, toobjid \n\
  ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.Defeat]=],Defeat)--任一玩家战败eventobjid, toobjid \n\
  ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.ReadStage]=],ReadStage)--任意玩家读取进度\n\
snippet 装备事件\n\
  ScriptSupportEvent:registerEvent([=[Player.EquipChange]=],EquipChange)--装备栏变化\n\
  ScriptSupportEvent:registerEvent([=[Player.EquipOn]=],EquipOn)--穿上装备eventobjid, toobjid, itemid, itemnum\n\
  ScriptSupportEvent:registerEvent([=[Player.EquipOff]=],EquipOff)--脱下装备eventobjid, toobjid, itemid, itemnum\n\
snippet 道具事件\n\
  ScriptSupportEvent:registerEvent([=[Player.AddItem]=],AddItem)--新增道具 eventobjid, toobjid, itemid, itemnum \n\
  ScriptSupportEvent:registerEvent([=[Player.ConsumeItem]=],ConsumeItem)--消耗道具 eventobjid, toobjid, itemid, itemnum \n\
  ScriptSupportEvent:registerEvent([=[Player.DiscardItem]=],DiscardItem)--丢弃道具 eventobjid, toobjid, itemid, itemnum \n\
  ScriptSupportEvent:registerEvent([=[Item.Disappear]=],Disappear)--道具消失 eventobjid, toobjid, itemid, itemnum \n\
  ScriptSupportEvent:registerEvent([=[Item.Pickup]=],Pickup)--道具被拾取 eventobjid, toobjid, itemid, itemnum \n\
  ScriptSupportEvent:registerEvent([=[Player.UseItem]=],UseItem)--玩家使用道具 eventobjid, toobjid, itemid, itemnum \n\
snippet 掉落物事件\n\
  ScriptSupportEvent:registerEvent([=[DropItem.AreaIn]=],AreaIn)--掉落物进入区域 eventobjid, areaid, itemid(opt), itemnum(opt) \n\
  ScriptSupportEvent:registerEvent([=[DropItem.AreaOut]=],AreaOut)--掉落物离开区域 eventobjid, areaid, itemid(opt), itemnum(opt) \n\
  ScriptSupportEvent:registerEvent([=[Player.PickUpItem]=],PickUpItem)--拾取掉落物 eventobjid, toobjid, itemid, itemnum \n\
snippet 玩家区域事件\n\
  ScriptSupportEvent:registerEvent([=[Player.AreaIn]=],AreaIn)--玩家进入区域 eventobjid, areaid \n\
  ScriptSupportEvent:registerEvent([=[Player.AreaOut]=],AreaOut)--玩家离开区域 eventobjid, areaid \n\
snippet 玩家战斗事件\n\
  ScriptSupportEvent:registerEvent([=[Player.Attack]=],Attack)--玩家开始攻击 eventobjid, toobjid \n\
  ScriptSupportEvent:registerEvent([=[Player.AttackHit]=],AttackHit)--玩家攻击命中 eventobjid, toobjid \n\
  ScriptSupportEvent:registerEvent([=[Player.BeHurt]=],BeHurt)--玩家受到伤害 eventobjid, toobjid \n\
  ScriptSupportEvent:registerEvent([=[Player.DamageActor]=],DamageActor)--给对方造成伤害 eventobjid, toobjid \n\
  ScriptSupportEvent:registerEvent([=[Player.DefeatActor]=],DefeatActor)--打败目标 eventobjid, toobjid \n\
snippet 聊天事件\n\
  ScriptSupportEvent:registerEvent([=[Player.InputContent]=],InputContent)--聊天输出界面变化 eventobjid, content \n\
  ScriptSupportEvent:registerEvent([=[Player.NewInputContent]=],NewInputContent)--输入字符串 eventobjid, content \n\
snippet 玩家栏位事件\n\
  ScriptSupportEvent:registerEvent([=[Player.BackPackChange]=],BackPackChange)--背包栏变化 eventobjid, toobjid, itemid, itemnum \n\
  ScriptSupportEvent:registerEvent([=[Player.EquipChange]=],EquipChange)--装备栏变化 eventobjid, toobjid, itemid, itemnum \n\
  ScriptSupportEvent:registerEvent([=[Player.SelectShortcut]=],SelectShortcut)--选择快捷栏 eventobjid, toobjid, itemid, itemnum \n\
  ScriptSupportEvent:registerEvent([=[Player.ShortcutChange]=],ShortcutChange)--快捷栏变化 eventobjid, toobjid, itemid, itemnum \n\
snippet 玩家属性事件\n\
  ScriptSupportEvent:registerEvent([=[Player.ChangeAttr]=],ChangeAttr)--属性变化 eventobjid, playerattr \n\
snippet 玩家队伍事件\n\
  ScriptSupportEvent:registerEvent([=[Player.JoinTeam]=],JoinTeam)--加入队伍 eventobjid, toobjid \n\
snippet 坐骑事件\n\
  ScriptSupportEvent:registerEvent([=[Player.MountActor]=],MountActor)--骑乘坐骑/载具  eventobjid, toobjid \n\
  ScriptSupportEvent:registerEvent([=[Player.DismountActor]=],DismountActor)--取消骑乘 eventobjid, toobjid \n\
snippet 玩家状态事件\n\
  ScriptSupportEvent:registerEvent([=[Player.Die]=],Die)--玩家死亡 eventobjid, toobjid \n\
  ScriptSupportEvent:registerEvent([=[Player.Revive]=],Revive)--玩家复活 eventobjid, toobjid \n\
  ScriptSupportEvent:registerEvent([=[Player.MoveOneBlockSize]=],MoveOneBlockSize)--移动一格   eventobjid, toobjid \n\
  ScriptSupportEvent:registerEvent([=[Player.MotionStateChange]=],MotionStateChange)--运动状态改变 eventobjid, playermotion \n\
  ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],PlayAction)--动作表情改变 eventobjid, act \n\
snippet 生物战斗事件\n\
  ScriptSupportEvent:registerEvent([=[Actor.Attack]=],Attack)--开始攻击 eventobjid, toobjid \n\
  ScriptSupportEvent:registerEvent([=[Actor.AttackHit]=],AttackHit)--攻击命中 eventobjid, toobjid \n\
  ScriptSupportEvent:registerEvent([=[Actor.BeHurt]=],BeHurt)--受到伤害 eventobjid, toobjid \n\
  ScriptSupportEvent:registerEvent([=[Actor.Beat]=],Beat)--生物击败玩家/生物 eventobjid, toobjid \n\
  ScriptSupportEvent:registerEvent([=[Actor.Damage]=],Damage)--造成对方伤害 eventobjid, toobjid \n\
snippet 生物属性事件\n\
  ScriptSupportEvent:registerEvent([=[Actor.ChangeAttr]=],ChangeAttr)--属性变化 eventobjid, toobjid \n\
snippet 生物行为事件\n\
  ScriptSupportEvent:registerEvent([=[Actor.ChangeMotion]=],ChangeMotion)--生物行为状态变更 eventobjid, actormotion \n\
snippet 生物碰撞事件\n\
  ScriptSupportEvent:registerEvent([=[Actor.Collide]=],Collide)--与其他玩家或生物发生碰撞 eventobjid, toobjid \n\
snippet 生物事件\n\
  ScriptSupportEvent:registerEvent([=[Actor.Create]=],Create)--被创建   eventobjid, toobjid \n\
  ScriptSupportEvent:registerEvent([=[Actor.Die]=],Die)--生物死亡 eventobjid, toobjid \n\
snippet 投掷物事件\n\
  ScriptSupportEvent:registerEvent([=[Actor.Projectile.Hit]=],Hit)--投掷物击中生物 eventobjid, toobjid \n\
  ScriptSupportEvent:registerEvent([=[Missile.AreaIn]=],AreaIn)--投掷物进入区域 eventobjid, areaid, itemid(opt), itemnum(opt) \n\
  ScriptSupportEvent:registerEvent([=[Missile.AreaOut]=],AreaOut)--投掷物离开区域   eventobjid, areaid, itemid(opt), itemnum(opt) \n\
  ScriptSupportEvent:registerEvent([=[Missile.Create]=],Create)--投掷物被创建 eventobjid, toobjid, itemid, x, y, z \n\
snippet 生物区域事件\n\
  ScriptSupportEvent:registerEvent([=[Actor.AreaIn]=],AreaIn)--生物进入区域 eventobjid, areaid \n\
  ScriptSupportEvent:registerEvent([=[Actor.AreaOut]=],AreaOut)--生物离开区域 eventobjid, areaid \n\
snippet 方块事件\n\
  ScriptSupportEvent:registerEvent([=[Block.Add]=],BlockAdd)--方块被创建 blockid, x, y, z \n\
  ScriptSupportEvent:registerEvent([=[Block.DestroyBy]=],DestroyBy)--方块被破坏 eventobjid(opt), blockid, x, y, z \n\
snippet 方块放置事件\n\
  ScriptSupportEvent:registerEvent([=[Block.PlaceBy]=],PlaceBy)--方块被放置 eventobjid, blockid, x, y, z \n\
snippet 方块被移除事件\n\
  ScriptSupportEvent:registerEvent([=[Block.Remove]=],Remove)--方块被移除  blockid, x, y, z \n\
snippet 方块触发事件\n\
  ScriptSupportEvent:registerEvent([=[Block.Trigger]=],Trigger)--方块被触发 eventobjid, blockid, x, y, z \n\
snippet 方块挖掘事件\n\
  ScriptSupportEvent:registerEvent([=[Block.Dig.Begin]=],DigBegin)--方块开始挖掘 eventobjid, blockid, x, y, z\n\
  ScriptSupportEvent:registerEvent([=[Block.Dig.Cancel]=],Cancel)--取消方块挖掘 eventobjid, blockid, x, y, z\n\
  ScriptSupportEvent:registerEvent([=[Block.Dig.End]=],DigEnd)--完成方块挖掘 eventobjid, blockid, x, y, z\n\
snippet 方块施肥事件\n\
  ScriptSupportEvent:registerEvent([=[Block.Fertilize]=],Fertilize)--方块被施肥 eventobjid, blockid, x, y, z\n\
snippet 特效事件\n\
  ScriptSupportEvent:registerEvent([=[Particle.Mob.OnCreate]=],MobOnCreate)--任意生物身上特效被创建 eventobjid, effectid \n\
  ScriptSupportEvent:registerEvent([=[Particle.Player.OnCreate]=],PlayerOnCreate)--任意玩家身上特效被创建 eventobjid, effectid \n\
  ScriptSupportEvent:registerEvent([=[Particle.Pos.OnCreate]=],PosOnCreate)--任意位置上特效被创建 x, y, z, effectid \n\
  ScriptSupportEvent:registerEvent([=[Particle.Projectile.OnCreate]=],ProjectileOnCreate)--任意投掷物特效被创建 eventobjid, effectid\n\
snippet 聊天打印\n\
  Chat:sendSystemMsg(${1:val}, 0);\n\
snippet 参数数据查询-动作\n\
  打招呼：1\n\
  低头思考：2\n\
  哭泣：3\n\
  生气：4\n\
  伸懒腰：5\n\
  胜利（高兴）：6\n\
  感谢：7\n\
  休闲动作：8\n\
  倒地：9\n\
  pose1：10\n\
  站立：11\n\
  跑：12\n\
  躺下睡觉：13\n\
  坐下：14\n\
  游泳：15\n\
  攻击：16\n\
  死亡：17\n\
  受击：18\n\
  休闲：19\n\
  跳：20\n\
snippet 参数数据查询-游戏模式\n\
  单人模式：0 \n\
  多人创造模式：1 \n\
  极限模式：2 \n\
  由创造模式转的生存：3 \n\
  自制玩法的编辑模式：4 \n\
  自制玩法的运行模式：5 \n\
  冒险模式之自由模式：6 \n\
  录像模式：9 \n\
snippet 参数数据查询-存储栏\n\
  背包栏：0\n\
  快捷栏：1000\n\
  储物箱：3000\n\
  装备栏：8000\n\
snippet 增加当前生命\n\
  Actor:addHP(eventobjid,10)\n\
snippet 参数数据查询-地形\n\
  平坦地形：0\n\
  随机地形：1\n\
snippet 参数数据查询-装备部位\n\
  头：0\n\
  身体：1\n\
  腿：2\n\
  脚：3\n\
  特殊装备：4\n\
  武器：5\n\
snippet 参数数据查询-附魔属性\n\
  移动速度：0\n\
  游泳速度：1\n\
  往上跳的速度：2\n\
  近程攻击别人时加成的百分比：3\n\
  远程攻击别人时加成的百分比：4\n\
  爆炸攻击别人时加成的百分比：5\n\
  火攻击别人时加成的百分比：6\n\
  毒攻击别人时加成的百分比：7\n\
  凋零攻击别人时加成的百分比：8\n\
  攻击玩家时加成的百分比：9\n\
  攻击亡灵时加成的百分比：10\n\
  攻击动物别人时加成的百分比：11\n\
  被近程攻击时加成的百分比：12\n\
  被远程攻击时加成的百分比：13\n\
  被爆炸攻击时加成的百分比：14\n\
  被火攻击时加成的百分比：15\n\
  被毒攻击时加成的百分比：16\n\
  被凋零攻击时加成的百分比：17\n\
  高处掉下伤害加成的百分比：18\n\
  近程护甲加点：19\n\
  远程护甲加点：20\n\
  爆炸护甲加点：21\n\
  吸收伤害：22\n\
  暴击伤害加成：23\n\
  增加攻击别人的击退距离：24\n\
  减少击退距离：25\n\
  击退概率抵抗值, 0.2表示有20%概率不被击退：26\n\
  挖掘速度：27\n\
  挖掘幸运, 0.2表示增加20%掉落概率：28\n\
  怪物掉落：29\n\
  视野亮度 0 - 1.0：30\n\
  角色大小 0 - 1.0：31\n\
  氧气提供1:只能水底用， 100: 只能太空用， 101：都能用 10000:恢复氧气：32\n\
snippet 参数数据查询-声音\n\
  挖掘：0\n\
  破坏：1\n\
  放置：2\n\
  摔落：3\n\
  行走：4\n\
snippet 参数数据查询-实例类型\n\
  玩家：1\n\
  生物(包含怪物、动物、NPC等):2\n\
  掉落物:3\n\
  投掷物:4\n\
snippet 参数数据查询-背包类型\n\
  快捷栏：1\n\
  存储栏：2\n\
  装备栏：3\n\
snippet 参数数据查询-朝向\n\
  --标准参数--数值参数--描述\n\
  未指定：-1\n\
  X反方向：0\n\
  X正方向：1\n\
  Z反方向：2\n\
  Z正方向：3\n\
  Y反方向：4\n\
  Y正方向：5\n\
snippet 参数数据查询-生物属性\n\
  最大生命值：1\n\
  当前生命值：2\n\
  生命恢复：3\n\
  最大饥饿值：5\n\
  当前饥饿值：6\n\
  最大氧气值：7\n\
  当前氧气值：8\n\
  氧气恢复速度：9\n\
  移动速度：10\n\
  奔跑速度：11\n\
  游泳速度：13\n\
  跳跃力：14\n\
  重量：15\n\
  闪避率：16\n\
  近战攻击：17\n\
  远程攻击：18\n\
  近战防御：19\n\
  远程防御：20\n\
  模型大小：21\n\
snippet 参数数据查询-生物属性设置\n\
  可移动：1\n\
  可攻击：32\n\
  可被攻击：64\n\
  可被杀死：128\n\
  可拾取道具：256\n\
  死亡掉落：512\n\
snippet 参数数据查询-生物行为\n\
  空闲：1\n\
  待机：2\n\
  闲逛：3\n\
  近战攻击：4\n\
  远程攻击：5\n\
  跟随：6\n\
  游泳：7\n\
  逃跑：8\n\
  自爆：9\n\
  被吸引：10\n\
  交配：11\n\
snippet 参数数据查询-玩家属性\n\
  最大生命值：1\n\
  当前生命值：2\n\
  生命恢复：3\n\
  生命数：4\n\
  最大饥饿值：5\n\
  当前饥饿值：6\n\
  最大氧气值：7\n\
  当前氧气值：8\n\
  氧气恢复速度：9\n\
  移动速度：10\n\
  奔跑速度：11\n\
  潜行速度：12\n\
  游泳速度：13\n\
  跳跃力：14\n\
  闪避率：16\n\
  近战攻击：17\n\
  远程攻击：18\n\
  近战防御：19\n\
  远程防御：20\n\
  大小：21\n\
  分数：22\n\
  等级：23\n\
snippet 参数数据查询-玩家属性设置\n\
  可移动：1\n\
  可摆放方块：2\n\
  可操作方块：4\n\
  可破坏方块：8\n\
  可使用道具：16\n\
  可攻击：32\n\
  可被攻击：64\n\
  可被杀死：128\n\
  可拾取道具：256\n\
  死亡掉落：512\n\
  载具自动前行：1024\n\
  可丢弃道具：2048\n\
snippet 参数数据查询-玩家道具设置\n\
  道具不可丢弃：1\n\
  道具不可掉落：2\n\
snippet 参数数据查询-玩家行为\n\
  静止：0\n\
  行走：1\n\
  奔跑：2\n\
  跳跃：4\n\
  二段跳：8\n\
  潜行：16\n\
  落地：32\n\
snippet 参数数据查询-队伍属性\n\
  玩家数量：1\n\
  分数：2\n\
snippet 参数数据查询-伤害类型\n\
  近战伤害：0：HURTTYPE.MELEE\n\
  远程伤害：1：HURTTYPE.REMOTE\n\
  爆炸伤害：2：HURTTYPE.BOMB\n\
  物理伤害：3：HURTTYPE.PHYSICS\n\
  燃烧伤害：3：HURTTYPE.BURNING\n\
  毒素伤害：4：HURTTYPE.TOXIN\n\
  凋零伤害：5：HURTTYPE.WITHER\n\
  元素伤害：6：HURTTYPE.MAGIC\n\
  日晒：6：HURTTYPE.SUN\n\
  跌落伤害：7：HURTTYPE.FALL\n\
  被砸中伤害：8：HURTTYPE.ANVIL\n\
  仙人掌伤害：9：HURTTYPE.CACTUS\n\
  窒息伤害：10：HURTTYPE.ASPHYXIA\n\
  溺水伤害：11：HURTTYPE.DROWN\n\
  水下生物在空气中窒息伤害：12：HURTTYPE.SUFFOCATE\n\
  反伤：13：HURTTYPE.ANTIINJURY\n\
  被激光伤害：14：HURTTYPE.LASER\n\
snippet 参数数据查询-方块属性\n\
  爆炸抗性：1\n\
  硬度：2\n\
  滑行惯性：3\n\
  燃烧速度：4\n\
  燃烧几率：5\n\
  亮度：6\n\
snippet 参数数据查询-方块属性设置\n\
  可破坏：1\n\
  可操作：2\n\
  可被推动：4\n\
  可掉落道具：8\n\
  被推动掉落：16\n\
snippet 参数数据查询-方块状态\n\
  活跃(被激活)：1\n\
  不活跃(未被激活)：2\n\
snippet 参数数据查询-天气状态\n\
  晴雨交替：0\n\
  晴天：1\n\
  雨天：2\n\
snippet 参数数据查询-视角方向\n\
  主视角：0\n\
  背视角：1\n\
  正视角：2\n\
  俯视角：3\n\
  自定义视角：4\n\
snippet 参数数据查询-模板库类型\n\
  无：0\n\
  方块：1\n\
  道具：2\n\
  生物：3\n\
  特效：4\n\
  音效：5\n\
snippet 参数数据查询-变量库类型\n\
  位置：1\n\
  区域：2\n\
  数值：3\n\
  字符串：4\n\
  布尔值：5\n\
  玩家：6\n\
  玩家组：7\n\
  方块类型：8\n\
  道具类型：9\n\
  生物：10\n\
  actor类型：11\n\
  生物组：12\n\
  定时器：13\n\
  特效类型：14\n\
snippet 参数数据查询-方块朝向\n\
  东：FACE_DIRECTION.DIR_POS_X\n\
  南：FACE_DIRECTION.DIR_NEG_Z\n\
  西：FACE_DIRECTION.DIR_NEG_X\n\
  北：FACE_DIRECTION.DIR_POS_Z\n\
  上：FACE_DIRECTION.DIR_POS_Y\n\
  下：FACE_DIRECTION.DIR_NEG_Y\n\
snippet 参数数据查询-队伍ID\n\
  队伍1-红色：1\n\
  队伍2-蓝色：2\n\
  队伍3-绿色：3\n\
  队伍4-黄色：4\n\
  队伍5-橙色：5\n\
  队伍6-紫色：6\n\
snippet 游戏规则GameRule-设置时间\n\
  GameRule.CurTime = 1 --设置时间，设置在Game.Start之前\n\
snippet 游戏规则GameRule-锁定时间\n\
  GameRule.TimeLocked = 0 --锁定时间0否1是，设置在Game.Start之前\n\
snippet 游戏规则GameRule-设置天气\n\
  GameRule.Weather = 0 --设置0晴天 1雨天，设置在Game.Start之前\n\
snippet 游戏规则GameRule-玩家数量\n\
  GameRule.MaxPlayers = 10 --最大玩家数量，设置在Game.Start之前\n\
snippet 游戏规则GameRule-是否可摧毁方块\n\
  GameRule.BlockDestroy = 0 --是否可摧毁方块0否1是，设置在Game.Start之前\n\
snippet 游戏规则GameRule-可放置方块\n\
  GameRule.BlockPlace = 0 --可放置方块0否1是，设置在Game.Start之前\n\
snippet 游戏规则GameRule-可使用方块\n\
  GameRule.BlockUse = 0 --可使用方块0否1是，设置在Game.Start之前\n\
snippet 游戏规则GameRule-重力因子\n\
  GameRule.GravityFactor = 0 --重力因子(取值范围 0.1~10)，设置在Game.Start之前\n\
snippet 游戏规则GameRule-视角模式\n\
  GameRule.CameraDir = 0 --相机视角模式: 0/1/2:缺省主视角/正视角/背视角, 3/4/5/6:锁定主视角/正视角/背视角/俯视角，设置在Game.Start之前\n\
snippet 游戏规则GameRule-开启方式\n\
  GameRule.StartMode = 0 --开启方式:0房主/1自动，设置在Game.Start之前\n\
snippet 游戏规则GameRule-开启需要玩家数量\n\
  GameRule.StartPlayers = 1 --开启需要玩家数量，设置在Game.Start之前\n\
snippet 游戏规则GameRule-游戏队伍数量\n\
  GameRule.TeamNum = 1 --游戏队伍数量，设置在Game.Start之前\n\
snippet 游戏规则GameRule-禁止攻击\n\
  GameRule.AttackPlayerMode = 1 --禁止攻击:1玩家/2队友，设置在Game.Start之前\n\
snippet 游戏规则GameRule-游戏时长\n\
  GameRule.EndTime = 10 --游戏时长设置，设置在Game.Start之前\n\
snippet 游戏规则GameRule-胜利分数设定\n\
  GameRule.EndScore = 10 --胜利分数设定，设置在Game.Start之前\n\
snippet 游戏规则GameRule-击败玩家得分\n\
  GameRule.ScoreKillPlayer = 1 --击败玩家得分，设置在Game.Start之前\n\
snippet 游戏规则GameRule-击败怪物得分\n\
  GameRule.ScoreKillMob = 1 --击败怪物得分，设置在Game.Start之前\n\
snippet 游戏规则GameRule-星星得分\n\
  GameRule.ScoreCollectStar = 1 --收集星星所得分数(闪星方块)，设置在Game.Start之前\n\
snippet 游戏规则GameRule-复活模式\n\
  GameRule.ReviveMode = 1 --复活模式设置:参数为秒 0为自定义,需自己点，设置在Game.Start之前\n\
snippet 游戏规则GameRule-复活无敌时间\n\
  GameRule.ReviveInvulnerable = 1 --复活带无敌buff:参数为秒 0为默认时长(5秒)，设置在Game.Start之前\n\
snippet 游戏规则GameRule-名字显示\n\
  GameRule.DisplayName = 1 --名字显示 0默认显示 1仅己方 2仅对方 3不可见，设置在Game.Start之前\n\
snippet 游戏规则GameRule-超时规则\n\
  GameRule.WinLoseEndTime = 1 --超时胜负 0按分数 1全胜(绿) 2全败(红)，设置在Game.Start之前\n\
snippet 游戏规则GameRule-击杀提示\n\
  GameRule.KillNotify = 1 --被玩家击杀提示 1:true 0:false (系统聊天里的提示)，设置在Game.Start之前\n\
snippet 游戏规则GameRule-背景音乐\n\
  GameRule.BgMusicMode = 1 --背景音乐模式 0:关闭 1-8:对应不同的音乐 (系统聊天里的提示)，设置在Game.Start之前\n\
snippet 游戏规则GameRule-是否刷怪\n\
  GameRule.MobGen = 1 --是否刷怪: -1:按创建的选项刷, 0:不刷, 1:刷，设置在Game.Start之前\n\
snippet 游戏规则GameRule-复活点选择\n\
  GameRule.SpawnPtMode = 1 --复活点选择 0:随机一个点 1:选择最近的，设置在Game.Start之前\n\
snippet 游戏规则GameRule-小地图显示\n\
  GameRule.MinimapTeams = 1 --小地图显示: 0:所有可见 1:不同队伍不可见，设置在Game.Start之前\n\
snippet 游戏规则GameRule-掉落设置\n\
  GameRule.PlayerDieDrops = 0 --玩家死亡是否掉落物品 0:掉落在原地 3:掉落到储物箱 其他:不掉落，设置在Game.Start之前\n\
snippet 游戏规则GameRule-显示比分和时间\n\
  GameRule.DisplayScore = 1 --显示比分和时间 1:true 0:false，设置在Game.Start之前\n\
snippet 游戏规则GameRule-生命设置\n\
  GameRule.LifeNum = 1 --游戏生命数, 死亡次数达到这个则游戏以失败结束，设置在Game.Start之前\n\
snippet 游戏规则GameRule-显示准星\n\
  GameRule.ShowSight = 1 --显示准星: 1显示 2隐藏，设置在Game.Start之前\n\
snippet 游戏规则GameRule-中途加入\n\
  GameRule.AllowMidwayJoin = 1 --中途加入 0:不允许 1:允许，设置在Game.Start之前\n\
snippet 游戏规则GameRule-观战设置\n\
  GameRule.ViewMode = 1 --失败后观战 0:不开启 1:开启，设置在Game.Start之前\n\
snippet 游戏规则GameRule-观战类型\n\
  GameRule.ViewType = 1 --观战类型: 0-自由观战 1-跟随屏幕 2-可切换，设置在Game.Start之前\n\
snippet 游戏规则GameRule-回合设置\n\
  GameRule.ScoreResetRound = 1 --得分重置回合:类似足球比赛(进球后重新开始) 1:true，设置在Game.Start之前\n\
snippet 游戏规则GameRule-变色计分\n\
  GameRule.ScoreColorChange = 1 --自定义分数,每变红色所得分数，设置在Game.Start之前\n\
";  
  return snippet;
}

//获取本地设置的Completer
function GetServiceFuncs() {
  var jsonObj = [
    {"name":"World.isDaytime", "caption":"World:isDaytime", "value":"local result=World:isDaytime()", "meta":"World", "type":"local", "score":9}, 
{"name":"World.isCustomGame", "caption":"World:isCustomGame", "value":"local result=World:isCustomGame()", "meta":"World", "type":"local", "score":9}, 
{"name":"World.isCreativeMode", "caption":"World:isCreativeMode", "value":"local result=World:isCreativeMode()", "meta":"World", "type":"local", "score":9}, 
{"name":"World.isGodMode", "caption":"World:isGodMode", "value":"local result=World:isGodMode()", "meta":"World", "type":"local", "score":9}, 
{"name":"World.isExtremityMode", "caption":"World:isExtremityMode", "value":"local result=World:isExtremityMode()", "meta":"World", "type":"local", "score":9}, 
{"name":"World.isFreeMode", "caption":"World:isFreeMode", "value":"local result=World:isFreeMode()", "meta":"World", "type":"local", "score":9}, 
{"name":"World.isSurviveMode", "caption":"World:isSurviveMode", "value":"local result=World:isSurviveMode()", "meta":"World", "type":"local", "score":9}, 
{"name":"World.isCreateRunMode", "caption":"World:isCreateRunMode", "value":"local result=World:isCreateRunMode()", "meta":"World", "type":"local", "score":9}, 
{"name":"World.isGameMakerMode", "caption":"World:isGameMakerMode", "value":"local result=World:isGameMakerMode()", "meta":"World", "type":"local", "score":9}, 
{"name":"World.isGameMakerRunMode", "caption":"World:isGameMakerRunMode", "value":"local result=World:isGameMakerRunMode()", "meta":"World", "type":"local", "score":9}, 
{"name":"World.getHours", "caption":"World:getHours", "value":"local result,time=World:getHours()", "meta":"World", "type":"local", "score":9}, 
{"name":"World.setHours", "caption":"World:setHours", "value":"World:setHours(8)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.getCameraEditState", "caption":"World:getCameraEditState", "value":"local result,state=World:getCameraEditState()", "meta":"World", "type":"local", "score":9}, 
{"name":"World.setCameraEditState", "caption":"World:setCameraEditState", "value":"local result = World:setCameraEditState(state)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.getCustomCameraConfig", "caption":"World:getCustomCameraConfig", "value":"local result = World:getCustomCameraConfig()", "meta":"World", "type":"local", "score":9}, 
{"name":"World.getRangeXZ", "caption":"World:getRangeXZ", "value":"local result,startX,startZ,endX,endZ=World:getRangeXZ()", "meta":"World", "type":"local", "score":9}, 
{"name":"World.getRayLength", "caption":"World:getRayLength", "value":"local result,length=World:getRayLength(srcx, srcy, srcz, dstx, dsty, dstz, distance)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.getRayBlock", "caption":"World:getRayBlock", "value":"local result,blockid=World:getRayBlock(0,10,0,3,50)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.getActorsByBox", "caption":"World:getActorsByBox", "value":"local result,num,objids=World:getActorsByBox(objtype,x1,y1,z1,x2,y2,z2)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.getPlayerTotal", "caption":"World:getPlayerTotal", "value":"local result,num=World:getPlayerTotal(-1)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.getAllPlayers", "caption":"World:getAllPlayers", "value":"local result,num,array=World:getAllPlayers(-1)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.randomOnePlayer", "caption":"World:randomOnePlayer", "value":"local result,playerid=World:randomOnePlayer(-1)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.despawnActor", "caption":"World:despawnActor", "value":"World:despawnActor(actors[1])", "meta":"World", "type":"local", "score":9}, 
{"name":"World.spawnCreature", "caption":"World:spawnCreature", "value":"local result,objids=World:spawnCreature(0,7,0,3400,3)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.despawnCreature", "caption":"World:despawnCreature", "value":"World:despawnCreature(actors[1])", "meta":"World", "type":"local", "score":9}, 
{"name":"World.spawnItem", "caption":"World:spawnItem", "value":"local result,objid=World:spawnItem(0,7,0,101,3)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.despawnItemByBox", "caption":"World:despawnItemByBox", "value":"World:despawnItemByBox(-20,0,-20,20,50,20)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.despawnItemByObjid", "caption":"World:despawnItemByObjid", "value":"World:despawnItemByObjid(list[1])", "meta":"World", "type":"local", "score":9}, 
{"name":"World.spawnProjectile", "caption":"World:spawnProjectile", "value":"World:spawnProjectile(shooter, itemid, x, y, z, dstx, dsty, dstz, speed)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.spawnProjectileByDir", "caption":"World:spawnProjectileByDir", "value":"World:spawnProjectileByDir(shooter, itemid, x, y, z, dirx, diry, dirz, speed)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.calcDistance", "caption":"World:calcDistance", "value":"local result,distance=World:calcDistance({x=0,y=0,z=0},{x=10,y=10,z=10})", "meta":"World", "type":"local", "score":9}, 
{"name":"World.playParticalEffect", "caption":"World:playParticalEffect", "value":"World:playParticalEffect(0,7,0,1001,1)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.stopEffectOnPosition", "caption":"World:stopEffectOnPosition", "value":"World:stopEffectOnPosition(0,7,0,1001)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.setEffectScaleOnPosition", "caption":"World:setEffectScaleOnPosition", "value":"World:setEffectScaleOnPosition(0,7,0,1001,2)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.randomParticleEffectID", "caption":"World:randomParticleEffectID", "value":"local result,id=World:randomParticleEffectID()", "meta":"World", "type":"local", "score":9}, 
{"name":"World.playSoundEffectOnPos", "caption":"World:playSoundEffectOnPos", "value":"World:playSoundEffectOnPos({x=0,y=7,z=0},10713,100,1,false)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.stopSoundEffectOnPos", "caption":"World:stopSoundEffectOnPos", "value":"World:stopSoundEffectOnPos({x=0,y=7,z=0},10713)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.getLightByPos", "caption":"World:getLightByPos", "value":"local result,lightlv=World:getLightByPos(x,y,z)--获取坐标的亮度", "meta":"World", "type":"local", "score":9}, 
{"name":"World.setBlockLightEx", "caption":"World:setBlockLightEx", "value":"World:setBlockLightEx(x, y, z, lv)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.randomSoundID", "caption":"World:randomSoundID", "value":"local result,soundid = World:randomSoundID()", "meta":"World", "type":"local", "score":9}, 
{"name":"World.randomWeatherID", "caption":"World:randomWeatherID", "value":"local result,wtype = World:randomWeatherID()", "meta":"World", "type":"local", "score":9}, 
{"name":"World.getLocalDate", "caption":"World:getLocalDate", "value":"local result, year = World:getLocalDate(EVENTDATE.YEAR) -- 获取年", "meta":"World", "type":"local", "score":9}, 
{"name":"World.getLocalDateString", "caption":"World:getLocalDateString", "value":"local result,date = World:getLocalDateString() -- 获取日期", "meta":"World", "type":"local", "score":9}, 
{"name":"World.getServerDate", "caption":"World:getServerDate", "value":"local result, year = World:getServerDate(EVENTDATE.YEAR) -- 获取服务器时间的年", "meta":"World", "type":"local", "score":9}, 
{"name":"World.getServerDateString", "caption":"World:getServerDateString", "value":"local result,date = World:getServerDateString() -- 获取服务器日期", "meta":"World", "type":"local", "score":9}, 
{"name":"World.getDateFromTime", "caption":"World:getDateFromTime", "value":"local result, year = World:getDateFromTime(os.time(),EVENTDATE.YEAR) -- 获取年", "meta":"World", "type":"local", "score":9}, 
{"name":"World.getDateStringFromTime", "caption":"World:getDateStringFromTime", "value":"local result, date = World:getDateStringFromTime(os.time()) --  完整日期", "meta":"World", "type":"local", "score":9}, 
{"name":"World.SetTimeVanishingSpeed", "caption":"World:SetTimeVanishingSpeed", "value":"local code  = World:SetTimeVanishingSpeed(speed)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.SetSkyBoxTemplate", "caption":"World:SetSkyBoxTemplate", "value":"local code  = World:SetSkyBoxTemplate(value)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.SetSkyBoxMaps", "caption":"World:SetSkyBoxMaps", "value":"local code  = World:SetSkyBoxMaps(itype, url)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.SetSkyBoxColor", "caption":"World:SetSkyBoxColor", "value":"local code  = World:SetSkyBoxColor(time, itype, color)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.SetSkyBoxAttr", "caption":"World:SetSkyBoxAttr", "value":"local code  = World:SetSkyBoxAttr(time, itype, value)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.SetSkyBoxFilter", "caption":"World:SetSkyBoxFilter", "value":"local code  = World:SetSkyBoxFilter(playerid, itype, value)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.SetSkyBoxSwitch", "caption":"World:SetSkyBoxSwitch", "value":"local code  = World:SetSkyBoxSwitch(time, itype, value)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.SetSkyBoxFilterSwitch", "caption":"World:SetSkyBoxFilterSwitch", "value":"local code  = World:SetSkyBoxFilterSwitch(playerid, itype, value)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.SetGroup Weather", "caption":"World:SetGroup Weather", "value":"local ret  = World:SetGroupWeather(groupid, weatherid)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.GetGroup Weather", "caption":"World:GetGroup Weather", "value":"local ret  = World:GetGroupWeather(groupid)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.SetSkyBoxMapsAnim", "caption":"World:SetSkyBoxMapsAnim", "value":"local code  = World:SetSkyBoxMapsAnim(playerid, itype, url, animId, animTime)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.SetSkyBoxColorAnim", "caption":"World:SetSkyBoxColorAnim", "value":"local code  = World:SetSkyBoxColorAnim(playerid, itype, color, animId, animTime)", "meta":"World", "type":"local", "score":9}, 
{"name":"World.SetSkyBoxFilterAnim", "caption":"World:SetSkyBoxFilterAnim", "value":"local code  = World:SetSkyBoxFilterAnim(playerid, itype, value, animId, animTime)", "meta":"World", "type":"local", "score":9}, 
{"name":"Game.doGameEnd", "caption":"Game:doGameEnd", "value":"Game:doGameEnd(nil)", "meta":"Game", "type":"local", "score":9}, 
{"name":"Game.dispatchEvent", "caption":"Game:dispatchEvent", "value":"Game:dispatchEvent('customevent',{customdata = json})", "meta":"Game", "type":"local", "score":9}, 
{"name":"Game.getDefString", "caption":"Game:getDefString", "value":"local result,str=Game:getDefString(1)", "meta":"Game", "type":"local", "score":9}, 
{"name":"Game.setScriptVar", "caption":"Game:setScriptVar", "value":"local code = Game:setScriptVar(index, val)", "meta":"Game", "type":"local", "score":9}, 
{"name":"Game.getScriptVar", "caption":"Game:getScriptVar", "value":"local code, val = Game:getScriptVar(index)", "meta":"Game", "type":"local", "score":9}, 
{"name":"Game.sendScriptVars2Client", "caption":"Game:sendScriptVars2Client", "value":"local code = Game:sendScriptVars2Client()", "meta":"Game", "type":"local", "score":9}, 
{"name":"Game.addRenderGlobalEffect", "caption":"Game:addRenderGlobalEffect", "value":"local result,effectid = Game:addRenderGlobalEffect('particles/Fog.ent')", "meta":"Game", "type":"local", "score":9}, 
{"name":"Game.removeRenderGlobalEffect", "caption":"Game:removeRenderGlobalEffect", "value":"Game:removeRenderGlobalEffect(1)", "meta":"Game", "type":"local", "score":9}, 
{"name":"Game.setRenderGlobalEffectPos", "caption":"Game:setRenderGlobalEffectPos", "value":"Game:setRenderGlobalEffectPos(1,10,7,10)", "meta":"Game", "type":"local", "score":9}, 
{"name":"Game.setRenderGlobalEffectScale", "caption":"Game:setRenderGlobalEffectScale", "value":"Game:setRenderGlobalEffectScale(1,2,2,2)", "meta":"Game", "type":"local", "score":9}, 
{"name":"Game.msgBox", "caption":"Game:msgBox", "value":"Game:msgBox('这是一个弹窗！')", "meta":"Game", "type":"local", "score":9}, 
{"name":"Game.splitStr", "caption":"Game:splitStr", "value":"local code, strs = Game:splitStr(str, mark)", "meta":"Game", "type":"local", "score":9}, 
{"name":"Block.isSolidBlock", "caption":"Block:isSolidBlock", "value":"local result=Block:isSolidBlock(0,6,0)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.isLiquidBlock", "caption":"Block:isLiquidBlock", "value":"local result=Block:isLiquidBlock(0,6,0)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.isAirBlock", "caption":"Block:isAirBlock", "value":"local result=Block:isAirBlock(0,6,0)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.getBlockID", "caption":"Block:getBlockID", "value":"local result,id=Block:getBlockID(0,6,0)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.setBlockAll", "caption":"Block:setBlockAll", "value":"Block:setBlockAll(0,6,0,1,0)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.getBlockData", "caption":"Block:getBlockData", "value":"local result,data=Block:getBlockData(0,6,0)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.destroyBlock", "caption":"Block:destroyBlock", "value":"Block:destroyBlock(0,6,0,true)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.placeBlock", "caption":"Block:placeBlock", "value":"Block:placeBlock(1,0,7,0,0)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.replaceBlock", "caption":"Block:replaceBlock", "value":"Block:replaceBlock(1,0,6,0,0)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.setBlockAllForUpdate", "caption":"Block:setBlockAllForUpdate", "value":"Block:setBlockAllForUpdate(0,6,0,1)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.setBlockAllForNotify", "caption":"Block:setBlockAllForNotify", "value":"Block:setBlockAllForNotify(0,6,0,1)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.setBlockSettingAttState", "caption":"Block:setBlockSettingAttState", "value":"Block:setBlockSettingAttState(101,1,false)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.getBlockSettingAttState", "caption":"Block:getBlockSettingAttState", "value":"local result,switch=Block:getBlockSettingAttState(101,1)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.getBlockSwitchStatus", "caption":"Block:getBlockSwitchStatus", "value":"local result,isactive=Block:getBlockSwitchStatus({x=0,y=7,z=0})", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.setBlockSwitchStatus", "caption":"Block:setBlockSwitchStatus", "value":"Block:setBlockSwitchStatus({x=0,y=7,z=0},true)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.getBlockDataByDir", "caption":"Block:getBlockDataByDir", "value":"local result,data=Block:getBlockDataByDir(201,3)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.getBlockPowerStatus", "caption":"Block:getBlockPowerStatus", "value":"local result,isactive=Block:getBlockPowerStatus({x=0,y=7,z=0})", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.randomBlockID", "caption":"Block:randomBlockID", "value":"local result,blockid = Block:randomBlockID()", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.GetBlockDefName", "caption":"Block:GetBlockDefName", "value":"local result,name = Block:GetBlockDefName(blockid)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.GetBlockDefDesc", "caption":"Block:GetBlockDefDesc", "value":"local result,desc = Block:GetBlockDefDesc(blockid)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.GetBlockFacade", "caption":"Block:GetBlockFacade", "value":"local result,faced = Block:GetBlockFacade(blockid)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.PlayAct", "caption":"Block:PlayAct", "value":"local result = Block:PlayAct(0,8,0,12,ANIMMODE.ANIM_MODE_LOOP) --在坐标（0,8,0）的微缩方块循环播放跑的动画", "meta":"Block", "type":"local", "score":9}, 
{"name":"Block.ReplaceBluePrint", "caption":"Block:ReplaceBluePrint", "value":"local code  = Block:ReplaceBluePrint(x, y, z, blueprint, angle, mirror, placeMode)", "meta":"Block", "type":"local", "score":9}, 
{"name":"Buff.addBuff", "caption":"Buff:addBuff", "value":"local code  = Buff:addBuff(objid, buffid, bufflv, customticks)", "meta":"Buff", "type":"local", "score":9}, 
{"name":"Buff.removeBuff", "caption":"Buff:removeBuff", "value":"local code  = Buff:removeBuff(objid, buffid)", "meta":"Buff", "type":"local", "score":9}, 
{"name":"Buff.clearAllBuff", "caption":"Buff:clearAllBuff", "value":"local code  = Buff:clearAllBuff(objid)", "meta":"Buff", "type":"local", "score":9}, 
{"name":"Buff.clearAllBadBuff", "caption":"Buff:clearAllBadBuff", "value":"local code  = Buff:clearAllBadBuff(objid)", "meta":"Buff", "type":"local", "score":9}, 
{"name":"Buff.hasBuff", "caption":"Buff:hasBuff", "value":"local code  = Buff:hasBuff(objid, buffid, bufflv)", "meta":"Buff", "type":"local", "score":9}, 
{"name":"Buff.getBuffList", "caption":"Buff:getBuffList", "value":"local code ,num,arr = Buff:getBuffList(objid)", "meta":"Buff", "type":"local", "score":9}, 
{"name":"Buff.getBuffNumByBuffid", "caption":"Buff:getBuffNumByBuffid", "value":"local code ,num = Buff:getBuffNumByBuffid(objid, buffid)", "meta":"Buff", "type":"local", "score":9}, 
{"name":"Buff.getBuffIndex", "caption":"Buff:getBuffIndex", "value":"local code ,ix = Buff:getBuffIndex(objid, buffid)", "meta":"Buff", "type":"local", "score":9}, 
{"name":"Buff.getBuffLeftTime", "caption":"Buff:getBuffLeftTime", "value":"local code ,num = Buff:getBuffLeftTime(objid, buffid)", "meta":"Buff", "type":"local", "score":9}, 
{"name":"Buff.getBuffName", "caption":"Buff:getBuffName", "value":"local code ,name = Buff:getBuffName(objid, buffid)", "meta":"Buff", "type":"local", "score":9}, 
{"name":"Buff.GetBuffDefName", "caption":"Buff:GetBuffDefName", "value":"local code ,name = Buff:GetBuffDefName(buffid)", "meta":"Buff", "type":"local", "score":9}, 
{"name":"Buff.GetBuffDefDesc", "caption":"Buff:GetBuffDefDesc", "value":"local code ,desc = Buff:GetBuffDefDesc(buffid)", "meta":"Buff", "type":"local", "score":9}, 
{"name":"Actor.isPlayer", "caption":"Actor:isPlayer", "value":"local result=Actor:isPlayer(event.toobjid)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.isMob", "caption":"Actor:isMob", "value":"local result=Actor:isMob(event.toobjid)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.getObjType", "caption":"Actor:getObjType", "value":"local result3,objtype=Actor:getObjType(objids[1])", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.isInAir", "caption":"Actor:isInAir", "value":"local result=Actor:isInAir(event.toobjid)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.getPosition", "caption":"Actor:getPosition", "value":"local result,x,y,z=Actor:getPosition(event.toobjid)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.setPosition", "caption":"Actor:setPosition", "value":"Actor:setPosition(event.toobjid,10,20,10)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.jump", "caption":"Actor:jump", "value":"Actor:jump(event.toobjid)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.killSelf", "caption":"Actor:killSelf", "value":"Actor:killSelf(event.toobjid)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.getCurPlaceDir", "caption":"Actor:getCurPlaceDir", "value":"local result,dir=Actor:getCurPlaceDir(event.toobjid)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.tryMoveToActor", "caption":"Actor:tryMoveToActor", "value":"Actor:tryMoveToActor(event.toobjid,event.eventobjid,3)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.tryMoveToPos", "caption":"Actor:tryMoveToPos", "value":"Actor:tryMoveToPos(event.toobjid,10,7,10,3)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.addHP", "caption":"Actor:addHP", "value":"Actor:addHP(event.eventobjid,10)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.getHP", "caption":"Actor:getHP", "value":"local result,value=Actor:getHP(event.eventobjid)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.getMaxHP", "caption":"Actor:getMaxHP", "value":"local result,value=Actor:getMaxHP(event.eventobjid)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.addOxygen", "caption":"Actor:addOxygen", "value":"Actor:addOxygen(event.eventobjid,10)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.getOxygen", "caption":"Actor:getOxygen", "value":"local result,value=Actor:getOxygen(event.eventobjid)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.addEnchant", "caption":"Actor:addEnchant", "value":"Actor:addEnchant(event.eventobjid,5,10,5)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.removeEnchant", "caption":"Actor:removeEnchant", "value":"Actor:removeEnchant(event.eventobjid,5,10)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.findNearestBlock", "caption":"Actor:findNearestBlock", "value":"local result,x,y,z=Actor:findNearestBlock(objid, blockid, blockRange)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.setFaceYaw", "caption":"Actor:setFaceYaw", "value":"Actor:setFaceYaw(event.toobjid,0)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.getFaceYaw", "caption":"Actor:getFaceYaw", "value":"local result,yaw=Actor:getFaceYaw(0)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.turnFaceYaw", "caption":"Actor:turnFaceYaw", "value":"Actor:turnFaceYaw(objid,90)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.setFacePitch", "caption":"Actor:setFacePitch", "value":"Actor:setFacePitch(event.toobjid,0)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.getFacePitch", "caption":"Actor:getFacePitch", "value":"local result,pitch=Actor:getFacePitch(0)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.turnFacePitch", "caption":"Actor:turnFacePitch", "value":"Actor:turnFacePitch(objid,90)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.playBodyEffect", "caption":"Actor:playBodyEffect", "value":"Actor:playBodyEffect(0,1027)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.stopBodyEffect", "caption":"Actor:stopBodyEffect", "value":"Actor:stopBodyEffect(0,1027)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.playBodyEffectByFile", "caption":"Actor:playBodyEffectByFile", "value":"local result = Actor:playBodyEffectByFile(objid, filename, sync)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.stopBodyEffectByFile", "caption":"Actor:stopBodyEffectByFile", "value":"local result = Actor:stopBodyEffectByFile(objid, filename)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.playSound", "caption":"Actor:playSound", "value":"local result = Actor:playSound(objid, name, volume, pitch, flag)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.playSoundSpecial", "caption":"Actor:playSoundSpecial", "value":"local result = Actor:playSoundSpecial(objid, name, type)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.clearActorWithId", "caption":"Actor:clearActorWithId", "value":"Actor:clearActorWithId(3402,false)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.setAttackType", "caption":"Actor:setAttackType", "value":"Actor:setAttackType(objid, attacktype)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.setImmuneType", "caption":"Actor:setImmuneType", "value":"Actor:setImmuneType(objid, immunetype, isadd)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.mountActor", "caption":"Actor:mountActor", "value":"Actor:mountActor(event.eventobjid,event.toobjid,0)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.setActionAttrState", "caption":"Actor:setActionAttrState", "value":"Actor:setActionAttrState(0,1,false)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.getActionAttrState", "caption":"Actor:getActionAttrState", "value":"local result=Actor:getActionAttrState(0,1)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.tryNavigationToPos", "caption":"Actor:tryNavigationToPos", "value":"Actor:tryNavigationToPos(objid, x, y, z, cancontrol, showtip)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.randomActorID", "caption":"Actor:randomActorID", "value":"local result,id=Actor:randomActorID()", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.getRidingActorObjId", "caption":"Actor:getRidingActorObjId", "value":"local result,objid=Actor:getRidingActorObjId(0)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.playBodyEffectById", "caption":"Actor:playBodyEffectById", "value":"Actor:playBodyEffectById(0,1029,1)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.stopBodyEffectById", "caption":"Actor:stopBodyEffectById", "value":"Actor:stopBodyEffectById(0,1029)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.setBodyEffectScale", "caption":"Actor:setBodyEffectScale", "value":"Actor:setBodyEffectScale(0,1029,2)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.playSoundEffectById", "caption":"Actor:playSoundEffectById", "value":"Actor:playSoundEffectById(0,10713,100,1,false)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.stopSoundEffectById", "caption":"Actor:stopSoundEffectById", "value":"Actor:stopSoundEffectById(0,10713)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.appendSpeed", "caption":"Actor:appendSpeed", "value":"Actor:appendSpeed(0,5,6,7)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.getFaceDirection", "caption":"Actor:getFaceDirection", "value":"local result,dirx,diry,dirz=Actor:getFaceDirection(0)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.calcDirectionByDirection", "caption":"Actor:calcDirectionByDirection", "value":"local result,dir=Actor:calcDirectionByDirection(objid, vx, vy, vz)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.calcDirectionByAngle", "caption":"Actor:calcDirectionByAngle", "value":"local result,dir=Actor:calcDirectionByAngle(objid, yaw, pitch)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.calcDirectionByYawDirection", "caption":"Actor:calcDirectionByYawDirection", "value":"local result,dir=Actor:calcDirectionByYawDirection(objid, vx, vy, vz)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.calcDirectionByYawAngle", "caption":"Actor:calcDirectionByYawAngle", "value":"local result,dir=Actor:calcDirectionByYawAngle(objid, yaw, pitch)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.getEyeHeight", "caption":"Actor:getEyeHeight", "value":"local result,height=Actor:getEyeHeight(0)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.getEyePosition", "caption":"Actor:getEyePosition", "value":"local result,x,y,z=Actor:getEyePosition(0)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.getBodySize", "caption":"Actor:getBodySize", "value":"local result,w,h=Actor:getBodySize(0)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.playAct", "caption":"Actor:playAct", "value":"Actor:playAct(0,1)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.shownickname", "caption":"Actor:shownickname", "value":"Actor:shownickname(objid, isshow)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.setnickname", "caption":"Actor:setnickname", "value":"Actor:setnickname(objid, name)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.getActorFacade", "caption":"Actor:getActorFacade", "value":"local result,name=Actor:getActorFacade(objid)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.changeCustomModel", "caption":"Actor:changeCustomModel", "value":"Actor:changeCustomModel(objid2, name)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.recoverinitialModel", "caption":"Actor:recoverinitialModel", "value":"Actor:recoverinitialModel(objid)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.addBuff", "caption":"Actor:addBuff", "value":"Actor:addBuff(0,50,4,10000)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.hasBuff", "caption":"Actor:hasBuff", "value":"local result=Actor:hasBuff(0,50)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.removeBuff", "caption":"Actor:removeBuff", "value":"Actor:removeBuff(0,50)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.clearAllBuff", "caption":"Actor:clearAllBuff", "value":"Actor:clearAllBuff(0)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.clearAllBadBuff", "caption":"Actor:clearAllBadBuff", "value":"Actor:clearAllBadBuff(0)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.getBuffList", "caption":"Actor:getBuffList", "value":"local result,num,array=Actor:getBuffList(0)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.getBuffLeftTick", "caption":"Actor:getBuffLeftTick", "value":"local result,ticks=Actor:getBuffLeftTick(0,50)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.randomFacadeID", "caption":"Actor:randomFacadeID", "value":"local result = Actor:randomFacadeID()", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.playerHurt", "caption":"Actor:playerHurt", "value":"Actor:playerHurt(objidA, objidB, hp, attackType)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.playerHurtArea", "caption":"Actor:playerHurtArea", "value":"Actor:playerHurtArea(objidA, areaid, hp, attackType)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.actorHurt", "caption":"Actor:actorHurt", "value":"Actor:actorHurt(objidA, objidB, hp, attackType)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.actorHurtArea", "caption":"Actor:actorHurtArea", "value":"Actor:actorHurtArea(objidA, areaid, hp, attackType)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.getPositionV2", "caption":"Actor:getPositionV2", "value":"local code ,pos = Actor:getPositionV2(objid)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.setFaceDirection", "caption":"Actor:setFaceDirection", "value":"local code  = Actor:setFaceDirection(objid, x, y, z)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Actor.ChangePlayerSkin", "caption":"Actor:ChangePlayerSkin", "value":"local code  = Actor:ChangePlayerSkin(objid, uin)", "meta":"Actor", "type":"local", "score":9}, 
{"name":"Player.getAttr", "caption":"Player:getAttr", "value":"local result,value=Player:getAttr(0,2)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.setAttr", "caption":"Player:setAttr", "value":"Player:setAttr(0,1,500)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.getHostUin", "caption":"Player:getHostUin", "value":"local result,uin=Player:getHostUin()", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.isMainPlayer", "caption":"Player:isMainPlayer", "value":"local result=Player:isMainPlayer(1000)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.getMainPlayerUin", "caption":"Player:getMainPlayerUin", "value":"local result,uin=Player:getMainPlayerUin()", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.getGameResults", "caption":"Player:getGameResults", "value":"local result,value=Player:getGameResults(0)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.setGameResults", "caption":"Player:setGameResults", "value":"Player:setGameResults(0,1)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.getGameScore", "caption":"Player:getGameScore", "value":"local result,value=Player:getGameScore(0)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.setGameScore", "caption":"Player:setGameScore", "value":"Player:setGameScore(0,100)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.getGameRanking", "caption":"Player:getGameRanking", "value":"local result,rank=Player:getGameRanking(0)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.setGameRanking", "caption":"Player:setGameRanking", "value":"Player:setGameRanking(0,1)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.gainItems", "caption":"Player:gainItems", "value":"Player:gainItems(0,1,10,1)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.teleportHome", "caption":"Player:teleportHome", "value":"Player:teleportHome(0)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.getCurToolID", "caption":"Player:getCurToolID", "value":"local result,id=Player:getCurToolID(0)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.getNickname", "caption":"Player:getNickname", "value":"local result,name=Player:getNickname(0)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.removeBackpackItem", "caption":"Player:removeBackpackItem", "value":"Player:removeBackpackItem(0,101,10)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.getDieTimes", "caption":"Player:getDieTimes", "value":"local result,value=Player:getDieTimes(0)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.getLeftLifeNum", "caption":"Player:getLeftLifeNum", "value":"local result,value=Player:getLeftLifeNum(0)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.setTeam", "caption":"Player:setTeam", "value":"Player:setTeam(0,2)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.getTeam", "caption":"Player:getTeam", "value":"local result,value=Player:getTeam(0)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.getFoodLevel", "caption":"Player:getFoodLevel", "value":"local result,value=Player:getFoodLevel(0)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.setFoodLevel", "caption":"Player:setFoodLevel", "value":"Player:setFoodLevel(0,100)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.getCurShotcut", "caption":"Player:getCurShotcut", "value":"local result,scutIdx=Player:getCurShotcut(0)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.onCurToolUsed", "caption":"Player:onCurToolUsed", "value":"Player:onCurToolUsed(0,1)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.setSkillCD", "caption":"Player:setSkillCD", "value":"Player:setSkillCD(0,12005,100)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.reviveToPos", "caption":"Player:reviveToPos", "value":"Player:reviveToPos(0,50,7,50)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.setRevivePoint", "caption":"Player:setRevivePoint", "value":"Player:setRevivePoint(0,50,7,50)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.mountActor", "caption":"Player:mountActor", "value":"Player:mountActor(playerid, objid, posindex)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.playAct", "caption":"Player:playAct", "value":"Player:playAct(1000,1)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.notifyGameInfo2Self", "caption":"Player:notifyGameInfo2Self", "value":"Player:notifyGameInfo2Self(0,'这里是飘窗文字内容')", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.useItem", "caption":"Player:useItem", "value":"Player:useItem(objid, itemid, status, onshift)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.rotateCamera", "caption":"Player:rotateCamera", "value":"Player:rotateCamera(0,90,90)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.changeViewMode", "caption":"Player:changeViewMode", "value":"Player:changeViewMode(0,0,true)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.setActionAttrState", "caption":"Player:setActionAttrState", "value":"Player:setActionAttrState(0,1,false)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.checkActionAttrState", "caption":"Player:checkActionAttrState", "value":"local result=Player:checkActionAttrState(0,1)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.isEquipByResID", "caption":"Player:isEquipByResID", "value":"local result=Player:isEquipByResID(objid, itemid)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.setPosition", "caption":"Player:setPosition", "value":"Player:setPosition(0,100,7,100)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.getAimPos", "caption":"Player:getAimPos", "value":"local result,x,y,z=Player:getAimPos(0)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.setItemAttAction", "caption":"Player:setItemAttAction", "value":"Player:setItemAttAction(0,101,1,true)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.playMusic", "caption":"Player:playMusic", "value":"Player:playMusic(0,10713,100,1,false)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.stopMusic", "caption":"Player:stopMusic", "value":"Player:stopMusic(0)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.setGameWin", "caption":"Player:setGameWin", "value":"local result=Player:setGameWin(1000)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.openDevStore", "caption":"Player:openDevStore", "value":"Player:openDevStore(0)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.getPropsType", "caption":"Player:getPropsType", "value":"local result,id=Player:getPropsType(playerid)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.setCheckBoxScale", "caption":"Player:setCheckBoxScale", "value":"Player:setCheckBoxScale(objid, range)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.openBoxByPos", "caption":"Player:openBoxByPos", "value":"Player:openBoxByPos(objid, x, y, z)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.forceOpenBoxUI", "caption":"Player:forceOpenBoxUI", "value":"Player:forceOpenBoxUI(objid, itemid)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.openDevGoodsBuyDialo", "caption":"Player:openDevGoodsBuyDialo", "value":"Player:openDevGoodsBuyDialog(objid, devGoodsId, customDesc)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.changPlayerMoveType", "caption":"Player:changPlayerMoveType", "value":"Player:changPlayerMoveType(objid, moveType)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.setImmuneType", "caption":"Player:setImmuneType", "value":"Player:setImmuneType(objid, immunetype, isadd)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.shakeCamera", "caption":"Player:shakeCamera", "value":"Player:shakeCamera(objid, duration, power)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.stopShakeCamera", "caption":"Player:stopShakeCamera", "value":"Player:stopShakeCamera(objid)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.playQQMusic", "caption":"Player:playQQMusic", "value":"local result = Player:playQQMusic(objid,musicId,valume,idLoop)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.operateQQMusic", "caption":"Player:operateQQMusic", "value":"local result = Player:operateQQMusic(operate,objid)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.OpenAppraiseView", "caption":"Player:OpenAppraiseView", "value":"local ret = Player:OpenAppraiseView(event.eventobjid)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.OpenCollectionView", "caption":"Player:OpenCollectionView", "value":"local ret = Player:OpenCollectionView(event.eventobjid)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.IsMiniVip", "caption":"Player:IsMiniVip", "value":"local ret = Player:IsMiniVip(event.eventobjid)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.SendFriendApply", "caption":"Player:SendFriendApply", "value":"local result = Player:SendFriendApply(playerid,playerid2)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.HasFriend", "caption":"Player:HasFriend", "value":"local result = Player:HasFriend(playerid,playerid2)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.PlayActInHand", "caption":"Player:PlayActInHand", "value":"local result = Player:PlayActInHand(objid,12,ITEMATTR.ATTACK) --指定玩家当前选择的微缩道具循环播放跑动画", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.openDevStoreNew", "caption":"Player:openDevStoreNew", "value":"local code  = Player:openDevStoreNew(objid)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.OpenBuiltinRank", "caption":"Player:OpenBuiltinRank", "value":"local code  = Player:OpenBuiltinRank(playerid, id)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.HideBuiltinRank", "caption":"Player:HideBuiltinRank", "value":"local code  = Player:HideBuiltinRank(playerid)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.openDevGoodsBuyDetailedDialog", "caption":"Player:openDevGoodsBuyDetailedDialog", "value":"local code  = Player:openDevGoodsBuyDetailedDialog(objid, devGoodsId)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.setMobileVibrate", "caption":"Player:setMobileVibrate", "value":"local code  = Player:setMobileVibrate(playerid, time, amplitude)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.SetCameraPosTransformBy", "caption":"Player:SetCameraPosTransformBy", "value":"local code  = Player:SetCameraPosTransformBy(playerid, vec, animid, time)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.SetCameraPosTransformTo", "caption":"Player:SetCameraPosTransformTo", "value":"local code  = Player:SetCameraPosTransformTo(playerid, vec, animid, time)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.SetCameraRotTransformBy", "caption":"Player:SetCameraRotTransformBy", "value":"local code  = Player:SetCameraRotTransformBy(playerid, vec, animid, time)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.SetCameraRotTransformTo", "caption":"Player:SetCameraRotTransformTo", "value":"local code  = Player:SetCameraRotTransformTo(playerid, vec, animid, time)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.SetCameraFovTransformBy", "caption":"Player:SetCameraFovTransformBy", "value":"local code  = Player:SetCameraFovTransformBy(playerid, value, animid, time)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.SetCameraFovTransformTo", "caption":"Player:SetCameraFovTransformTo", "value":"local code  = Player:SetCameraFovTransformTo(playerid, value, animid, time)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.SetCameraAttrState", "caption":"Player:SetCameraAttrState", "value":"local code  = Player:SetCameraAttrState(playerid, attr, enable)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.SetCameraRotMode", "caption":"Player:SetCameraRotMode", "value":"local code  = Player:SetCameraRotMode(playerid, attr)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.SetCameraMountObj", "caption":"Player:SetCameraMountObj", "value":"local code  = Player:SetCameraMountObj(playerid, objid)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.SetCameraMountPos", "caption":"Player:SetCameraMountPos", "value":"local code  = Player:SetCameraMountPos(playerid, pos)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.ResetCameraAttr", "caption":"Player:ResetCameraAttr", "value":"local code  = Player:ResetCameraAttr(playerid)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.openDevGoodsSkinBuyDialog", "caption":"Player:openDevGoodsSkinBuyDialog", "value":"local code  = Player:openDevGoodsSkinBuyDialog(playerid, skin, desc)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.openDevGoodsSkinDetail", "caption":"Player:openDevGoodsSkinDetail", "value":"local code  = Player:openDevGoodsSkinDetail(playerid, skin)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.openDevGoodsSkin", "caption":"Player:openDevGoodsSkin", "value":"local code  = Player:openDevGoodsSkin(playerid)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.OpenInviteBulletBox", "caption":"Player:OpenInviteBulletBox", "value":"local code  = Player:OpenInviteBulletBox(playerid)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.GetFirstInviter", "caption":"Player:GetFirstInviter", "value":"local code , uin = Player:GetFirstInviter(playerid)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.GetInviteGroupS", "caption":"Player:GetInviteGroupS", "value":"local code ,uins = Player:GetInviteGroupS(playerid)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.OpenDevGoodsPage", "caption":"Player:OpenDevGoodsPage", "value":"local code  = Player:OpenDevGoodsPage(playerid, pagetype, pagetitle)", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.openUIView", "caption":"Player:openUIView", "value":"Player:openUIView(uin,uiid)--给玩家打开界面", "meta":"Player", "type":"local", "score":9}, 
{"name":"Player.hideUIView", "caption":"Player:hideUIView", "value":"Player:hideUIView(uin,uiid)--给玩家隐藏界面", "meta":"Player", "type":"local", "score":9}, 
{"name":"Creature.getAttr", "caption":"Creature:getAttr", "value":"local result,value=Creature:getAttr(event.toobjid,2)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.setAttr", "caption":"Creature:setAttr", "value":"Creature:setAttr(event.toobjid,1,999)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.isAdult", "caption":"Creature:isAdult", "value":"local result=Creature:isAdult(event.toobjid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.setOxygenNeed", "caption":"Creature:setOxygenNeed", "value":"Creature:setOxygenNeed(event.toobjid,false)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.getTamedOwnerID", "caption":"Creature:getTamedOwnerID", "value":"local result,uin=Creature:getTamedOwnerID(event.toobjid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.setPanic", "caption":"Creature:setPanic", "value":"Creature:setPanic(event.toobjid,true)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.setAIActive", "caption":"Creature:setAIActive", "value":"Creature:setAIActive(event.toobjid,false)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.getActorID", "caption":"Creature:getActorID", "value":"local result,actorid=Creature:getActorID(event.toobjid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.getActorName", "caption":"Creature:getActorName", "value":"local result,name=Creature:getActorName(event.toobjid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.addModAttrib", "caption":"Creature:addModAttrib", "value":"Creature:addModAttrib(event.toobjid,0,1)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.getModAttrib", "caption":"Creature:getModAttrib", "value":"local result,value=Creature:getModAttrib(event.toobjid,0)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.setTeam", "caption":"Creature:setTeam", "value":"Creature:setTeam(event.toobjid,1)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.getTeam", "caption":"Creature:getTeam", "value":"local result,teamid=Creature:getTeam(event.toobjid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.getMaxFood", "caption":"Creature:getMaxFood", "value":"local result,value=Creature:getMaxFood(event.toobjid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.getFood", "caption":"Creature:getFood", "value":"local result,value=Creature:getFood(event.toobjid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.setFood", "caption":"Creature:setFood", "value":"Creature:setFood(event.toobjid,100)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.getHpRecover", "caption":"Creature:getHpRecover", "value":"local result,value=Creature:getHpRecover(event.toobjid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.getMaxOxygen", "caption":"Creature:getMaxOxygen", "value":"local result,value=Creature:getMaxOxygen(event.toobjid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.getWalkSpeed", "caption":"Creature:getWalkSpeed", "value":"local result,value=Creature:getWalkSpeed(event.toobjid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.getSwimSpeed", "caption":"Creature:getSwimSpeed", "value":"local result,value=Creature:getSwimSpeed(event.toobjid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.getJumpPower", "caption":"Creature:getJumpPower", "value":"local result,value=Creature:getJumpPower(event.toobjid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.getMass", "caption":"Creature:getMass", "value":"local result,value=Creature:getMass(event.toobjid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.getDodge", "caption":"Creature:getDodge", "value":"local result,value=Creature:getDodge(event.toobjid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.getPunchAttack", "caption":"Creature:getPunchAttack", "value":"local result,value=Creature:getPunchAttack(event.toobjid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.getRangeAttack", "caption":"Creature:getRangeAttack", "value":"local result,value=Creature:getRangeAttack(event.toobjid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.getPunchDefense", "caption":"Creature:getPunchDefense", "value":"local result,value=Creature:getPunchDefense(event.toobjid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.getRangeDefense", "caption":"Creature:getRangeDefense", "value":"local result,value=Creature:getRangeDefense(event.toobjid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.setMaxHp", "caption":"Creature:setMaxHp", "value":"Creature:setMaxHp(event.toobjid,100)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.setHP", "caption":"Creature:setHP", "value":"Creature:setHP(event.toobjid,100)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.setHpRecover", "caption":"Creature:setHpRecover", "value":"Creature:setHpRecover(event.toobjid,100)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.setOxygen", "caption":"Creature:setOxygen", "value":"Creature:setOxygen(event.toobjid,100)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.setWalkSpeed", "caption":"Creature:setWalkSpeed", "value":"Creature:setWalkSpeed(event.toobjid,100)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.setSwimSpeed", "caption":"Creature:setSwimSpeed", "value":"Creature:setSwimSpeed(event.toobjid,100)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.setJumpPower", "caption":"Creature:setJumpPower", "value":"Creature:setJumpPower(event.toobjid,100)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.setDodge", "caption":"Creature:setDodge", "value":"Creature:setDodge(event.toobjid,100)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.setPunchAttack", "caption":"Creature:setPunchAttack", "value":"Creature:setPunchAttack(event.toobjid,100)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.setRangeAttack", "caption":"Creature:setRangeAttack", "value":"Creature:setRangeAttack(event.toobjid,100)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.setPunchDefense", "caption":"Creature:setPunchDefense", "value":"Creature:setPunchDefense(event.toobjid,100)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.setRangeDefense", "caption":"Creature:setRangeDefense", "value":"Creature:setRangeDefense(event.toobjid,100)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.replaceActor", "caption":"Creature:replaceActor", "value":"Creature:replaceActor(objid, actorid, hp)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.GetMonsterDefName", "caption":"Creature:GetMonsterDefName", "value":"local result,name = Creature:GetMonsterDefName(monsterid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"Creature.GetMonsterDefDesc", "caption":"Creature:GetMonsterDefDesc", "value":"local result,desc = Creature:GetMonsterDefDesc(monsterid)", "meta":"Creature", "type":"local", "score":9}, 
{"name":"UI.setGBattleUI", "caption":"UI:setGBattleUI", "value":"UI:setGBattleUI('left_title','这里是左标题')", "meta":"UI", "type":"local", "score":9}, 
{"name":"UI.world2RadarPos", "caption":"UI:world2RadarPos", "value":"local result,x,z=UI:world2RadarPos(100,100)", "meta":"UI", "type":"local", "score":9}, 
{"name":"UI.world2RadarDist", "caption":"UI:world2RadarDist", "value":"local result,length=UI:world2RadarDist(100)", "meta":"UI", "type":"local", "score":9}, 
{"name":"UI.setMinimapRenderMode", "caption":"UI:setMinimapRenderMode", "value":"UI:setMinimapRenderMode(1)", "meta":"UI", "type":"local", "score":9}, 
{"name":"UI.setShapeLine", "caption":"UI:setShapeLine", "value":"local result = UI:setShapeLine(uiname, p1x, p1y, p2x, p2y)", "meta":"UI", "type":"local", "score":9}, 
{"name":"UI.setShapeCircle", "caption":"UI:setShapeCircle", "value":"local result = UI:setShapeCircle(uiname, x, y, radius)", "meta":"UI", "type":"local", "score":9}, 
{"name":"UI.ShowScreenEffect", "caption":"UI:ShowScreenEffect", "value":"UI:ShowScreenEffect(3,false,1)", "meta":"UI", "type":"local", "score":9}, 
{"name":"Area.createAreaRect", "caption":"Area:createAreaRect", "value":"ret111, areaid = Area:createAreaRect(pos1, dim)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.createAreaRectByRange", "caption":"Area:createAreaRectByRange", "value":"local result,areaid=Area:createAreaRectByRange({x=0,y=7,z=0},{x=5,y=10,z=5})", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.destroyArea", "caption":"Area:destroyArea", "value":"Area:destroyArea(1)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.getAreaByPos", "caption":"Area:getAreaByPos", "value":"local result,areaid=Area:getAreaByPos({x=0,y=7,z=0})", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.offsetArea", "caption":"Area:offsetArea", "value":"Area:offsetArea(areaid,5,5,5)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.expandArea", "caption":"Area:expandArea", "value":"Area:expandArea(areaid,2,2,2)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.getAreaCenter", "caption":"Area:getAreaCenter", "value":"local result,pos=Area:getAreaCenter(areaid)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.getAreaRectLength", "caption":"Area:getAreaRectLength", "value":"local result,x,y,z=Area:getAreaRectLength(areaid)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.getAreaRectRange", "caption":"Area:getAreaRectRange", "value":"local result,posBeg,posEnd=Area:getAreaRectRange(areaid)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.getRandomPos", "caption":"Area:getRandomPos", "value":"local result,pos=Area:getRandomPos(areaid)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.objInArea", "caption":"Area:objInArea", "value":"local result=Area:objInArea(areaid,1000)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.blockInArea", "caption":"Area:blockInArea", "value":"local result=Area:blockInArea(areaid,101)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.posInArea", "caption":"Area:posInArea", "value":"local result=Area:posInArea({x=0,y=7,z=0},areaid)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.getAreaPlayers", "caption":"Area:getAreaPlayers", "value":"local result,playerlist=Area:getAreaPlayers(areaid)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.getAreaCreatures", "caption":"Area:getAreaCreatures", "value":"local result,creaturelist=Area:getAreaCreatures(areaid)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.fillBlock", "caption":"Area:fillBlock", "value":"Area:fillBlock(areaid,1,0)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.clearAllBlock", "caption":"Area:clearAllBlock", "value":"Area:clearAllBlock(areaid,101)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.cloneArea", "caption":"Area:cloneArea", "value":"Area:cloneArea(areaid,{x=0,y=10,z=0})", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.getPosOffset", "caption":"Area:getPosOffset", "value":"local result,pos=Area:getPosOffset(srcpos, dim)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.replaceAreaBlock", "caption":"Area:replaceAreaBlock", "value":"Area:replaceAreaBlock(areaid,101,1,0)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.blockInAreaRange", "caption":"Area:blockInAreaRange", "value":"local result=Area:blockInAreaRange(101,{x=0,y=5,z=0},{x=1,y=8,z=1})", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.getAllObjsInAreaRange", "caption":"Area:getAllObjsInAreaRange", "value":"local result,objids=Area:getAllObjsInAreaRange(posbegin, posend, objtype)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.getAllObjsInAreaRangeByObjTypes", "caption":"Area:getAllObjsInAreaRangeByObjTypes", "value":"local result,objids=Area:getAllObjsInAreaRangeByObjTypes(posbegin, posend, objtypes)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.getAllPlayersInAreaRange", "caption":"Area:getAllPlayersInAreaRange", "value":"local result,objids=Area:getAllPlayersInAreaRange(posbegin, posend)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.getAllCreaturesInAreaRange", "caption":"Area:getAllCreaturesInAreaRange", "value":"local result,objids=Area:getAllCreaturesInAreaRange(posbegin, posend)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.fillBlockAreaRange", "caption":"Area:fillBlockAreaRange", "value":"Area:fillBlockAreaRange({x=0,y=7,z=0},{x=5,y=9,z=5},1,0)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.clearAllBlockAreaRange", "caption":"Area:clearAllBlockAreaRange", "value":"Area:clearAllBlockAreaRange({x=0,y=7,z=0},{x=5,y=9,z=5},101)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.cloneAreaRange", "caption":"Area:cloneAreaRange", "value":"Area:cloneAreaRange({x=0,y=3,z=0},{x=5,y=7,z=5},{x=0,y=10,z=0})", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.replaceAreaRangeBlock", "caption":"Area:replaceAreaRangeBlock", "value":"Area:replaceAreaRangeBlock({x=0,y=3,z=0},{x=5,y=7,z=5},101,1,0)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Area.DestroyBlockAreaRange", "caption":"Area:DestroyBlockAreaRange", "value":"Area:DestroyBlockAreaRange({x=0,y=6,z=0},{x=5,y=7,z=5},100)", "meta":"Area", "type":"local", "score":9}, 
{"name":"Chat.sendChat", "caption":"Chat:sendChat", "value":"Chat:sendChat('这是一条聊天消息！',0)", "meta":"Chat", "type":"local", "score":9}, 
{"name":"Chat.sendSystemMsg", "caption":"Chat:sendSystemMsg", "value":"Chat:sendSystemMsg('这是一条系统消息！',0)", "meta":"Chat", "type":"local", "score":9}, 
{"name":"Team.getNumTeam", "caption":"Team:getNumTeam", "value":"local result,num=Team:getNumTeam()", "meta":"Team", "type":"local", "score":9}, 
{"name":"Team.getTeamPlayerNum", "caption":"Team:getTeamPlayerNum", "value":"local result,num=Team:getTeamPlayerNum(1,2)", "meta":"Team", "type":"local", "score":9}, 
{"name":"Team.getTeamPlayers", "caption":"Team:getTeamPlayers", "value":"local result,num,array=Team:getTeamPlayers(1,2)", "meta":"Team", "type":"local", "score":9}, 
{"name":"Team.randomTeamPlayer", "caption":"Team:randomTeamPlayer", "value":"local result,uin=Team:randomTeamPlayer(1,2)", "meta":"Team", "type":"local", "score":9}, 
{"name":"Team.getTeamCreatures", "caption":"Team:getTeamCreatures", "value":"local result,array=Team:getTeamCreatures(1)", "meta":"Team", "type":"local", "score":9}, 
{"name":"Team.setTeamScore", "caption":"Team:setTeamScore", "value":"Team:setTeamScore(1,10)", "meta":"Team", "type":"local", "score":9}, 
{"name":"Team.getTeamScore", "caption":"Team:getTeamScore", "value":"local result,score=Team:getTeamScore(1)", "meta":"Team", "type":"local", "score":9}, 
{"name":"Team.addTeamScore", "caption":"Team:addTeamScore", "value":"Team:addTeamScore(1,10)", "meta":"Team", "type":"local", "score":9}, 
{"name":"Team.setTeamResults", "caption":"Team:setTeamResults", "value":"Team:setTeamResults(1,1)", "meta":"Team", "type":"local", "score":9}, 
{"name":"Team.getTeamResults", "caption":"Team:getTeamResults", "value":"local result,teamresult=Team:getTeamResults(1)", "meta":"Team", "type":"local", "score":9}, 
{"name":"Team.setTeamDieTimes", "caption":"Team:setTeamDieTimes", "value":"Team:setTeamDieTimes(1,10)", "meta":"Team", "type":"local", "score":9}, 
{"name":"Team.getTeamDieTimes", "caption":"Team:getTeamDieTimes", "value":"local result,times=Team:getTeamDieTimes(1)", "meta":"Team", "type":"local", "score":9}, 
{"name":"Team.addTeamDieTimes", "caption":"Team:addTeamDieTimes", "value":"Team:addTeamDieTimes(1)", "meta":"Team", "type":"local", "score":9}, 
{"name":"Team.changePlayerTeamTeam", "caption":"Team:changePlayerTeamTeam", "value":"Team:changePlayerTeam(0,2)", "meta":"Team", "type":"local", "score":9}, 
{"name":"Item.getItemName", "caption":"Item:getItemName", "value":"local result,name=Item:getItemName(1)", "meta":"Item", "type":"local", "score":9}, 
{"name":"Item.getItemId", "caption":"Item:getItemId", "value":"local result3,itemid=Item:getItemId(objids[1])", "meta":"Item", "type":"local", "score":9}, 
{"name":"Item.getDropItemNum", "caption":"Item:getDropItemNum", "value":"local result3,itemnum=Item:getDropItemNum(objids[1])", "meta":"Item", "type":"local", "score":9}, 
{"name":"Item.randomItemID", "caption":"Item:randomItemID", "value":"local result,blockid = Item:randomItemID()", "meta":"Item", "type":"local", "score":9}, 
{"name":"Item.randomProjectileID", "caption":"Item:randomProjectileID", "value":"local result,itemid = Item:randomProjectileID()", "meta":"Item", "type":"local", "score":9}, 
{"name":"Item.getItemDesc", "caption":"Item:getItemDesc", "value":"local result,desc = Item:getItemDesc(itemid)", "meta":"Item", "type":"local", "score":9}, 
{"name":"Item.GetAttr", "caption":"Item:GetAttr", "value":"local result,value = Item:GetAttr(itemid,ITEMATTR.ATTACK)", "meta":"Item", "type":"local", "score":9}, 
{"name":"Item.playAct", "caption":"Item:playAct", "value":"local result = Item:playAct(objid,12,ITEMATTR.ATTACK) --指定掉落物循环播放跑动画", "meta":"Item", "type":"local", "score":9}, 
{"name":"Backpack.getBackpackBarIDRange", "caption":"Backpack:getBackpackBarIDRange", "value":"local result,begid,endid=Backpack:getBackpackBarIDRange(1)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.getBackpackBarSize", "caption":"Backpack:getBackpackBarSize", "value":"local result,size=Backpack:getBackpackBarSize(1)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.setGridItem", "caption":"Backpack:setGridItem", "value":"Backpack:setGridItem(1000,0,12005,10,nil)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.removeGridItem", "caption":"Backpack:removeGridItem", "value":"Backpack:removeGridItem(1000,0,10)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.removeGridItemByItemID", "caption":"Backpack:removeGridItemByItemID", "value":"local result,num=Backpack:removeGridItemByItemID(1000,101,50)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.clearPack", "caption":"Backpack:clearPack", "value":"Backpack:clearPack(1000,1)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.clearAllPack", "caption":"Backpack:clearAllPack", "value":"Backpack:clearAllPack(1000)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.moveGridItem", "caption":"Backpack:moveGridItem", "value":"local result=Backpack:moveGridItem(1000,0,1000,10)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.swapGridItem", "caption":"Backpack:swapGridItem", "value":"local result=Backpack:swapGridItem(1000,0,1000)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.enoughSpaceForItem", "caption":"Backpack:enoughSpaceForItem", "value":"local result=Backpack:enoughSpaceForItem(1000,101,999)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.calcSpaceNumForItem", "caption":"Backpack:calcSpaceNumForItem", "value":"local result,num=Backpack:calcSpaceNumForItem(1000,101)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.getBackpackBarValidList", "caption":"Backpack:getBackpackBarValidList", "value":"local result,num,array=Backpack:getBackpackBarValidList(1000,2)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.getBackpackBarItemList", "caption":"Backpack:getBackpackBarItemList", "value":"local result,num,arr=Backpack:getBackpackBarItemList(1000,1)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.hasItemByBackpackBar", "caption":"Backpack:hasItemByBackpackBar", "value":"local result=Backpack:hasItemByBackpackBar(1000,1,1)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.getItemNumByBackpackBar", "caption":"Backpack:getItemNumByBackpackBar", "value":"local result,num,arr=Backpack:getItemNumByBackpackBar(1000,2,101)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.getGridItemID", "caption":"Backpack:getGridItemID", "value":"local result,itemid,num=Backpack:getGridItemID(1000,0)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.getGridItemName", "caption":"Backpack:getGridItemName", "value":"local result,name=Backpack:getGridItemName(1000,0)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.getGridStack", "caption":"Backpack:getGridStack", "value":"local result,num,maxstack=Backpack:getGridStack(1000,0)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.getGridDurability", "caption":"Backpack:getGridDurability", "value":"local result,durcur,durmax=Backpack:getGridDurability(1000,0)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.getGridEnchantList", "caption":"Backpack:getGridEnchantList", "value":"local result,num,arr=Backpack:getGridEnchantList(1000,1000)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.getGridToolType", "caption":"Backpack:getGridToolType", "value":"local result,type=Backpack:getGridToolType(1000,1000)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.addItem", "caption":"Backpack:addItem", "value":"local result,successNum=Backpack:addItem(1000,101,999)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.discardItem", "caption":"Backpack:discardItem", "value":"Backpack:discardItem(1000,0,10)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.getGridNum", "caption":"Backpack:getGridNum", "value":"local result,num=Backpack:getGridNum(1000,0)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.actEquipUpByResID", "caption":"Backpack:actEquipUpByResID", "value":"Backpack:actEquipUpByResID(objid, resid)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.actEquipOffByEquipID", "caption":"Backpack:actEquipOffByEquipID", "value":"Backpack:actEquipOffByEquipID(objid, equipid)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.actCreateEquip", "caption":"Backpack:actCreateEquip", "value":"Backpack:actCreateEquip(objid, resid)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.actDestructEquip", "caption":"Backpack:actDestructEquip", "value":"Backpack:actDestructEquip(objid, equipid)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.PlayShortCutIxEffect", "caption":"Backpack:PlayShortCutIxEffect", "value":"local result = Backpack:PlayShortCutIxEffect(objid, effectid,scale)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.StopShortCutIxEffect", "caption":"Backpack:StopShortCutIxEffect", "value":"local result = Backpack:StopShortCutIxEffect(objid, equipid)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.PlayShortCutItemEffect", "caption":"Backpack:PlayShortCutItemEffect", "value":"local result = Backpack:PlayShortCutItemEffect(objid,itemid, effectid,scale)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"Backpack.StopShortCutItemEffect", "caption":"Backpack:StopShortCutItemEffect", "value":"local result = Backpack:StopShortCutItemEffect(objid, itemid,effectid)", "meta":"Backpack", "type":"local", "score":9}, 
{"name":"ObjectLib.getAreaData", "caption":"ObjectLib:getAreaData", "value":"local result,areaid= ObjectLib:getAreaData(10000001) --场景中拉取的区域", "meta":"ObjectLib", "type":"local", "score":9}, 
{"name":"ObjectLib.getPositionData", "caption":"ObjectLib:getPositionData", "value":"local result,areaid= ObjectLib:getPositionData(20000001) --场景中放置的位置", "meta":"ObjectLib", "type":"local", "score":9}, 
{"name":"ObjectLib.getLivingData", "caption":"ObjectLib:getLivingData", "value":"local result,areaid= ObjectLib:getLivingData(30000001) --场景中放置的生物", "meta":"ObjectLib", "type":"local", "score":9}, 
{"name":"ObjectLib.getItemData", "caption":"ObjectLib:getItemData", "value":"local result,areaid= ObjectLib:getItemData(50000001) --场景中放置的道具点", "meta":"ObjectLib", "type":"local", "score":9}, 
{"name":"VarLib2.setGlobalVarByName", "caption":"VarLib2:setGlobalVarByName", "value":"VarLib2:setGlobalVarByName(actionattr,msg,val)", "meta":"VarLib2", "type":"local", "score":9}, 
{"name":"VarLib2.getGlobalVarByName", "caption":"VarLib2:getGlobalVarByName", "value":"local result,value = VarLib2:getGlobalVarByName(actionattr,msg)", "meta":"VarLib2", "type":"local", "score":9}, 
{"name":"VarLib2.setPlayerVarByName", "caption":"VarLib2:setPlayerVarByName", "value":"VarLib2:setPlayerVarByName(objid,actionattr,msg,val)", "meta":"VarLib2", "type":"local", "score":9}, 
{"name":"VarLib2.getPlayerVarByName", "caption":"VarLib2:getPlayerVarByName", "value":"local result,value = VarLib2:getPlayerVarByName(objid,actionattr,msg)", "meta":"VarLib2", "type":"local", "score":9}, 
{"name":"MapMark.newShape", "caption":"MapMark:newShape", "value":"local result,shapeid=MapMark:newShape(0,true,0,0,0)", "meta":"MapMark", "type":"local", "score":9}, 
{"name":"MapMark.deleteShape", "caption":"MapMark:deleteShape", "value":"MapMark:deleteShape(1)", "meta":"MapMark", "type":"local", "score":9}, 
{"name":"MapMark.setShapeColor", "caption":"MapMark:setShapeColor", "value":"MapMark:setShapeColor(1,0,0,0)", "meta":"MapMark", "type":"local", "score":9}, 
{"name":"MapMark.showShape", "caption":"MapMark:showShape", "value":"MapMark:showShape(1,false)", "meta":"MapMark", "type":"local", "score":9}, 
{"name":"MapMark.updateLine", "caption":"MapMark:updateLine", "value":"MapMark:updateLine(1,0,0,1,1)", "meta":"MapMark", "type":"local", "score":9}, 
{"name":"MapMark.updateRectangle", "caption":"MapMark:updateRectangle", "value":"MapMark:updateRectangle(1,0,0,1,1)", "meta":"MapMark", "type":"local", "score":9}, 
{"name":"MapMark.updateCircle", "caption":"MapMark:updateCircle", "value":"MapMark:updateCircle(1,0,0,1)", "meta":"MapMark", "type":"local", "score":9}, 
{"name":"Spawnport.getSpawnPoint", "caption":"Spawnport:getSpawnPoint", "value":"local result,x,y,z=Spawnport:getSpawnPoint()", "meta":"Spawnport", "type":"local", "score":9}, 
{"name":"Spawnport.setSpawnPoint", "caption":"Spawnport:setSpawnPoint", "value":"Spawnport:setSpawnPoint(x, y, z)", "meta":"Spawnport", "type":"local", "score":9}, 
{"name":"Spawnport.getChunkValidSpawnPos", "caption":"Spawnport:getChunkValidSpawnPos", "value":"local result,x,y,z=Spawnport:getChunkValidSpawnPos(0,0,0)", "meta":"Spawnport", "type":"local", "score":9}, 
{"name":"MiniTimer.isExist", "caption":"MiniTimer:isExist", "value":"local result=MiniTimer:isExist(1)", "meta":"MiniTimer", "type":"local", "score":9}, 
{"name":"MiniTimer.createTimer", "caption":"MiniTimer:createTimer", "value":"local result2,id=MiniTimer:createTimer('timer',nil,true)", "meta":"MiniTimer", "type":"local", "score":9}, 
{"name":"MiniTimer.deleteTimer", "caption":"MiniTimer:deleteTimer", "value":"MiniTimer:deleteTimer(1)", "meta":"MiniTimer", "type":"local", "score":9}, 
{"name":"MiniTimer.startBackwardTimer", "caption":"MiniTimer:startBackwardTimer", "value":"MiniTimer:startBackwardTimer(1,20,false)", "meta":"MiniTimer", "type":"local", "score":9}, 
{"name":"MiniTimer.startForwardTimer", "caption":"MiniTimer:startForwardTimer", "value":"MiniTimer:startForwardTimer(1)", "meta":"MiniTimer", "type":"local", "score":9}, 
{"name":"MiniTimer.pauseTimer", "caption":"MiniTimer:pauseTimer", "value":"MiniTimer:pauseTimer(1)", "meta":"MiniTimer", "type":"local", "score":9}, 
{"name":"MiniTimer.resumeTimer", "caption":"MiniTimer:resumeTimer", "value":"MiniTimer:resumeTimer(1)", "meta":"MiniTimer", "type":"local", "score":9}, 
{"name":"MiniTimer.stopTimer", "caption":"MiniTimer:stopTimer", "value":"MiniTimer:stopTimer(1)", "meta":"MiniTimer", "type":"local", "score":9}, 
{"name":"MiniTimer.changeTimerTime", "caption":"MiniTimer:changeTimerTime", "value":"local result = MiniTimer:changeTimerTime(id, curtime)", "meta":"MiniTimer", "type":"local", "score":9}, 
{"name":"MiniTimer.getTimerTime", "caption":"MiniTimer:getTimerTime", "value":"local result,second=MiniTimer:getTimerTime(1)", "meta":"MiniTimer", "type":"local", "score":9}, 
{"name":"MiniTimer.showTimerWnd", "caption":"MiniTimer:showTimerWnd", "value":"local code  = MiniTimer:showTimerWnd(playerids, timerid, title)", "meta":"MiniTimer", "type":"local", "score":9}, 
{"name":"MiniTimer.hideTimerWnd", "caption":"MiniTimer:hideTimerWnd", "value":"local code  = MiniTimer:hideTimerWnd(playerids, timerid)", "meta":"MiniTimer", "type":"local", "score":9}, 
{"name":"Graphics.makeGraphicsText", "caption":"Graphics:makeGraphicsText", "value":"local graphicsInfo=Graphics:makeGraphicsText(title, font, alpha, itype)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.makeflotageText", "caption":"Graphics:makeflotageText", "value":"local graphicsInfo=Graphics:makeflotageText(title, font, itype)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.makeGraphicsProgress", "caption":"Graphics:makeGraphicsProgress", "value":"local graphicsInfo=Graphics:makeGraphicsProgress(v1, v2, color, itype)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.makeGraphicsArrowToPos", "caption":"Graphics:makeGraphicsArrowToPos", "value":"local info=Graphics:makeGraphicsArrowToPos(x, y, z, size, color, id)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.makeGraphicsLineToPos", "caption":"Graphics:makeGraphicsLineToPos", "value":"local info=Graphics:makeGraphicsLineToPos(x, y, z, size, color, id)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.makeGraphicsSurfaceToPos", "caption":"Graphics:makeGraphicsSurfaceToPos", "value":"local info=Graphics:makeGraphicsSurfaceToPos(x, y, z, size, color, id)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.makeGraphicsArrowToActor", "caption":"Graphics:makeGraphicsArrowToActor", "value":"local info=Graphics:makeGraphicsArrowToActor(objid, size, color, id)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.makeGraphicsLineToActor", "caption":"Graphics:makeGraphicsLineToActor", "value":"local info=Graphics:makeGraphicsLineToActor(objid, size, color, id)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.makeGraphicsSurfaceToActor", "caption":"Graphics:makeGraphicsSurfaceToActor", "value":"local info=Graphics:makeGraphicsSurfaceToActor(objid, size, color, id)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createGraphicsTxtByPos", "caption":"Graphics:createGraphicsTxtByPos", "value":"local result,graphid=Graphics:createGraphicsTxtByPos(x, y, z, graphicsInfo, x2, y2)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createGraphicsTxtByActor", "caption":"Graphics:createGraphicsTxtByActor", "value":"local result,graphid=Graphics:createGraphicsTxtByActor(objid, graphicsInfo, dir, offset, x2, y2)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createflotageTextByPos", "caption":"Graphics:createflotageTextByPos", "value":"local result,graphid=Graphics:createflotageTextByPos(x, y, z, graphicsInfo, x2, y2)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createflotageTextByActor", "caption":"Graphics:createflotageTextByActor", "value":"local result,graphid = Graphics:createflotageTextByActor(objid, graphicsInfo, dir, offset, x2, y2)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createGraphicsProgressByPos", "caption":"Graphics:createGraphicsProgressByPos", "value":"local result,graphid = Graphics:createGraphicsProgressByPos(x, y, z, graphicsInfo, x2, y2)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createGraphicsProgressByActor", "caption":"Graphics:createGraphicsProgressByActor", "value":"local result,graphid = Graphics:createGraphicsProgressByActor(objid, graphicsInfo, dir, offset, x2, y2)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.removeGraphicsByPos", "caption":"Graphics:removeGraphicsByPos", "value":"Graphics:removeGraphicsByPos(x, y, z, itype, graphType)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.removeGraphicsByObjID", "caption":"Graphics:removeGraphicsByObjID", "value":"Graphics:removeGraphicsByObjID(objid, itype, graphType)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.updateGraphicsTextById", "caption":"Graphics:updateGraphicsTextById", "value":"Graphics:updateGraphicsTextById(graphid, title, fontsize, alpha)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.updateGraphicsProgressById", "caption":"Graphics:updateGraphicsProgressById", "value":"Graphics:updateGraphicsProgressById(graphid, val1, val2)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createGraphicsArrowByActorToPos", "caption":"Graphics:createGraphicsArrowByActorToPos", "value":"Graphics:createGraphicsArrowByActorToPos(objid, info, dir, offset)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createGraphicsArrowByActorToActor", "caption":"Graphics:createGraphicsArrowByActorToActor", "value":"Graphics:createGraphicsArrowByActorToActor(objid2, info, dir, offset)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createGraphicsArrowByPosToPos", "caption":"Graphics:createGraphicsArrowByPosToPos", "value":"Graphics:createGraphicsArrowByPosToPos(x2, y2, z2, info)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createGraphicsArrowByPosToActor", "caption":"Graphics:createGraphicsArrowByPosToActor", "value":"Graphics:createGraphicsArrowByPosToActor(x, y, z, info)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createGraphicsLineByActorToPos", "caption":"Graphics:createGraphicsLineByActorToPos", "value":"Graphics:createGraphicsLineByActorToPos(objid, info, dir, offset)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createGraphicsLineByActorToActor", "caption":"Graphics:createGraphicsLineByActorToActor", "value":"Graphics:createGraphicsLineByActorToActor(objid2, info, dir, offset)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createGraphicsLineByPosToPos", "caption":"Graphics:createGraphicsLineByPosToPos", "value":"Graphics:createGraphicsLineByPosToPos(x2, y2, z2, info)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createGraphicsLineByPosToActor", "caption":"Graphics:createGraphicsLineByPosToActor", "value":"Graphics:createGraphicsLineByPosToActor(x, y, z, info)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createGraphicsSurfaceByActorToPos", "caption":"Graphics:createGraphicsSurfaceByActorToPos", "value":"Graphics:createGraphicsSurfaceByActorToPos(objid, info, dir, offset)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createGraphicsSurfaceByActorToActor", "caption":"Graphics:createGraphicsSurfaceByActorToActor", "value":"Graphics:createGraphicsSurfaceByActorToActor(objid2, info, dir, offset)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createGraphicsSurfaceByPosToPos", "caption":"Graphics:createGraphicsSurfaceByPosToPos", "value":"Graphics:createGraphicsSurfaceByPosToPos(x2, y2, z2, info)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createGraphicsSurfaceByPosToActor", "caption":"Graphics:createGraphicsSurfaceByPosToActor", "value":"Graphics:createGraphicsSurfaceByPosToActor(x, y, z, info)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.snycGraphicsInfo2Client", "caption":"Graphics:snycGraphicsInfo2Client", "value":"Graphics:snycGraphicsInfo2Client()", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.makeGraphicsImage", "caption":"Graphics:makeGraphicsImage", "value":"local result = Graphics:makeGraphicsImage(v1, v2, color, itype)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createGraphicsImageByActor", "caption":"Graphics:createGraphicsImageByActor", "value":"local result = Graphics:createGraphicsImageByActor(objid,info,dir,offest,x2,y2)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"Graphics.createGraphicsImageByPos", "caption":"Graphics:createGraphicsImageByPos", "value":"local result = Graphics:createGraphicsImageByPos(x,y,z, info,x2,y2)", "meta":"Graphics", "type":"local", "score":9}, 
{"name":"ListenParam.AddGraphicsListenParam", "caption":"ListenParam:AddGraphicsListenParam", "value":"ListenParam:AddGraphicsListenParam(grapid,funcs,param)", "meta":"ListenParam", "type":"local", "score":9}, 
{"name":"Valuegroup.getAllGroupItem", "caption":"Valuegroup:getAllGroupItem", "value":"local result,ret=Valuegroup:getAllGroupItem(vartype, libname, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.insertInGroupByName", "caption":"Valuegroup:insertInGroupByName", "value":"Valuegroup:insertInGroupByName(vartype, libname, value, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.removeValueIndexByName", "caption":"Valuegroup:removeValueIndexByName", "value":"Valuegroup:removeValueIndexByName(vartype, libname, index, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.removeValueByName", "caption":"Valuegroup:removeValueByName", "value":"Valuegroup:removeValueByName(vartype, libname, value, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.clearGroupByName", "caption":"Valuegroup:clearGroupByName", "value":"Valuegroup:clearGroupByName(vartype, libname, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.getGrouplengthByName", "caption":"Valuegroup:getGrouplengthByName", "value":"local result,length=Valuegroup:getGrouplengthByName(vartype, libname, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.getValueNoByName", "caption":"Valuegroup:getValueNoByName", "value":"local result,value=Valuegroup:getValueNoByName(vartype, libname, index, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.setValueNoByName", "caption":"Valuegroup:setValueNoByName", "value":"Valuegroup:setValueNoByName(vartype, libname, index, value, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.getRandomValueByName", "caption":"Valuegroup:getRandomValueByName", "value":"local result,value=Valuegroup:getRandomValueByName(vartype, libname, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.insertValueByName", "caption":"Valuegroup:insertValueByName", "value":"Valuegroup:insertValueByName(vartype, libname, no, val, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.deleteNoByName", "caption":"Valuegroup:deleteNoByName", "value":"Valuegroup:deleteNoByName(vartype, libname, no, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.deleteValueByName", "caption":"Valuegroup:deleteValueByName", "value":"Valuegroup:deleteValueByName(vartype, libname, val, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.clearNoValueByName", "caption":"Valuegroup:clearNoValueByName", "value":"Valuegroup:clearNoValueByName(??????) --Trên wiki hàm này không có", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.addGroupByName", "caption":"Valuegroup:addGroupByName", "value":"Valuegroup:addGroupByName(vartype, libname, libname2, playerid, playerid2)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.removeGroupByName", "caption":"Valuegroup:removeGroupByName", "value":"Valuegroup:removeGroupByName(vartype, libname, libname2, playerid, playerid2)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.deleteGroupByName", "caption":"Valuegroup:deleteGroupByName", "value":"Valuegroup:deleteGroupByName(vartype, libname, libname2, playerid, playerid2)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.insertGroupByName", "caption":"Valuegroup:insertGroupByName", "value":"Valuegroup:insertGroupByName(vartype, libname, no, libname2, playerid, playerid2)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.replaceValueByName", "caption":"Valuegroup:replaceValueByName", "value":"Valuegroup:replaceValueByName(vartype, libname, oldval, newval, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.sortGroupByName", "caption":"Valuegroup:sortGroupByName", "value":"Valuegroup:sortGroupByName(vartype, libname, sortType, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.hasValueByName", "caption":"Valuegroup:hasValueByName", "value":"local result=Valuegroup:hasValueByName(vartype, libname, val, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.hasNoByName", "caption":"Valuegroup:hasNoByName", "value":"local result=Valuegroup:hasNoByName(vartype, libname, no, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.getValueCountByName", "caption":"Valuegroup:getValueCountByName", "value":"local result,num=Valuegroup:getValueCountByName(vartype, libname, val, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.getGroupNoByValue", "caption":"Valuegroup:getGroupNoByValue", "value":"local result,no=Valuegroup:getGroupNoByValue(vartype, libname, val, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Valuegroup.getSpcialValueByName", "caption":"Valuegroup:getSpcialValueByName", "value":"local result,m=Valuegroup:getSpcialValueByName(libname, itype, playerid)", "meta":"Valuegroup", "type":"local", "score":9}, 
{"name":"Customui.setText", "caption":"Customui:setText", "value":"Customui:setText(playerid, uiid, elementid, text)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.setTexture", "caption":"Customui:setTexture", "value":"Customui:setTexture(playerid, uiid, elementid, url)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.setSize", "caption":"Customui:setSize", "value":"Customui:setSize(playerid, uiid, elementid, width, height)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.setFontSize", "caption":"Customui:setFontSize", "value":"Customui:setFontSize(playerid, uiid, elementid, size)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.setColor", "caption":"Customui:setColor", "value":"Customui:setColor(playerid, uiid, elementid, color)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.showElement", "caption":"Customui:showElement", "value":"Customui:showElement(playerid, uiid, elementid)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.hideElement", "caption":"Customui:hideElement", "value":"Customui:hideElement(playerid, uiid, elementid)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.rotateElement", "caption":"Customui:rotateElement", "value":"Customui:rotateElement(playerid, uiid, elementid, rotate)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.setState", "caption":"Customui:setState", "value":"Customui:setState(playerid, uiid, statename)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.setAlpha", "caption":"Customui:setAlpha", "value":"Customui:setAlpha(playerid, uiid, elementid, alpha)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.setPosition", "caption":"Customui:setPosition", "value":"Customui:setPosition(playerid, uiid, elementid, x, y)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.getItemIcon", "caption":"Customui:getItemIcon", "value":"local result,iconid = Customui:getItemIcon(itemid)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.getMonsterObjIcon", "caption":"Customui:getMonsterObjIcon", "value":"local result,iconid = Customui:getMonsterObjIcon(objid)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.getMonsterIcon", "caption":"Customui:getMonsterIcon", "value":"local result,iconid = Customui:getMonsterIcon(actorid)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.getStatusIcon", "caption":"Customui:getStatusIcon", "value":"local result,iconid = Customui:getStatusIcon(buffid)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.getBlockIcon", "caption":"Customui:getBlockIcon", "value":"local result,iconid = Customui:getBlockIcon(blockid)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.getRoleIcon", "caption":"Customui:getRoleIcon", "value":"local result,iconid = Customui:getRoleIcon(playerid)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.getShuctIcon", "caption":"Customui:getShuctIcon", "value":"local result,iconid = Customui:getShuctIcon(playerid，ix)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.SmoothMoveTo", "caption":"Customui:SmoothMoveTo", "value":"local code  = Customui:SmoothMoveTo(playerid, uiid, elementid, time, x, y)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.SmoothMoveBy", "caption":"Customui:SmoothMoveBy", "value":"local code  = Customui:SmoothMoveBy(playerid, uiid, elementid, time, x, y)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.SmoothScaleTo", "caption":"Customui:SmoothScaleTo", "value":"local code  = Customui:SmoothScaleTo(playerid, uiid, elementid, time, w, h)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.SmoothScaleBy", "caption":"Customui:SmoothScaleBy", "value":"local code  = Customui:SmoothScaleBy(playerid, uiid, elementid, time, w, h)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.SmoothRotateTo", "caption":"Customui:SmoothRotateTo", "value":"local code  = Customui:SmoothRotateTo(playerid, uiid, elementid, time, angle)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.SmoothRotateBy", "caption":"Customui:SmoothRotateBy", "value":"local code  = Customui:SmoothRotateBy(playerid, uiid, elementid, time, angle)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.PlayElementAnim", "caption":"Customui:PlayElementAnim", "value":"local code  = Customui:PlayElementAnim(playerid, uiid, elementid, animid, time, mode)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"Customui.StopAnim", "caption":"Customui:StopAnim", "value":"local code  = Customui:StopAnim(playerid, uiid, elementid)", "meta":"Customui", "type":"local", "score":9}, 
{"name":"WorldContainer.addFurnace", "caption":"WorldContainer:addFurnace", "value":"WorldContainer:addFurnace(0,7,0)", "meta":"WorldContainer", "type":"local", "score":9}, 
{"name":"WorldContainer.removeFurnace", "caption":"WorldContainer:removeFurnace", "value":"WorldContainer:removeFurnace(0,7,0)", "meta":"WorldContainer", "type":"local", "score":9}, 
{"name":"WorldContainer.checkFurnace", "caption":"WorldContainer:checkFurnace", "value":"local result=WorldContainer:checkFurnace(0,7,0)", "meta":"WorldContainer", "type":"local", "score":9}, 
{"name":"WorldContainer.getFurnaceHeatPercent", "caption":"WorldContainer:getFurnaceHeatPercent", "value":"local result,val=WorldContainer:getFurnaceHeatPercent(0,7,0)", "meta":"WorldContainer", "type":"local", "score":9}, 
{"name":"WorldContainer.getFurnaceMeltPercent", "caption":"WorldContainer:getFurnaceMeltPercent", "value":"local result,val=WorldContainer:getFurnaceMeltPercent(0,7,0)", "meta":"WorldContainer", "type":"local", "score":9}, 
{"name":"WorldContainer.addStorageBox", "caption":"WorldContainer:addStorageBox", "value":"WorldContainer:addStorageBox(0,7,0)", "meta":"WorldContainer", "type":"local", "score":9}, 
{"name":"WorldContainer.removeStorageBox", "caption":"WorldContainer:removeStorageBox", "value":"WorldContainer:removeStorageBox(0,7,0)", "meta":"WorldContainer", "type":"local", "score":9}, 
{"name":"WorldContainer.checkStorage", "caption":"WorldContainer:checkStorage", "value":"local result=WorldContainer:checkStorage(0,7,0)", "meta":"WorldContainer", "type":"local", "score":9}, 
{"name":"WorldContainer.clearStorageBox", "caption":"WorldContainer:clearStorageBox", "value":"WorldContainer:clearStorageBox(0,7,0)", "meta":"WorldContainer", "type":"local", "score":9}, 
{"name":"WorldContainer.checkStorageEmptyGrid", "caption":"WorldContainer:checkStorageEmptyGrid", "value":"local result=WorldContainer:checkStorageEmptyGrid(0,7,0,0)", "meta":"WorldContainer", "type":"local", "score":9}, 
{"name":"WorldContainer.setStorageItem", "caption":"WorldContainer:setStorageItem", "value":"WorldContainer:setStorageItem(0,7,0,0,101,30)", "meta":"WorldContainer", "type":"local", "score":9}, 
{"name":"WorldContainer.getStorageItem", "caption":"WorldContainer:getStorageItem", "value":"local result,itemid,itemNum=WorldContainer:getStorageItem(0,7,0,0)", "meta":"WorldContainer", "type":"local", "score":9}, 
{"name":"WorldContainer.addStorageItem", "caption":"WorldContainer:addStorageItem", "value":"local result,relNum=WorldContainer:addStorageItem(0,7,0,101,99)", "meta":"WorldContainer", "type":"local", "score":9}, 
{"name":"WorldContainer.removeStorageItemByID", "caption":"WorldContainer:removeStorageItemByID", "value":"WorldContainer:removeStorageItemByID(0,7,0,101,10)", "meta":"WorldContainer", "type":"local", "score":9}, 
{"name":"WorldContainer.removeStorageItemByIndex", "caption":"WorldContainer:removeStorageItemByIndex", "value":"WorldContainer:removeStorageItemByIndex(0,7,0,0,5)", "meta":"WorldContainer", "type":"local", "score":9}, 
{"name":"WorldContainer.addItemToContainer", "caption":"WorldContainer:addItemToContainer", "value":"local result,relNum=WorldContainer:addItemToContainer(0,7,0,101,99)", "meta":"WorldContainer", "type":"local", "score":9}, 
{"name":"WorldContainer.removeContainerItemByID", "caption":"WorldContainer:removeContainerItemByID", "value":"WorldContainer:removeContainerItemByID(0,7,0,101,10)", "meta":"WorldContainer", "type":"local", "score":9}, 
{"name":"WorldContainer.clearContainer", "caption":"WorldContainer:clearContainer", "value":"WorldContainer:clearContainer(0,7,0)", "meta":"WorldContainer", "type":"local", "score":9}, 
{"name":"DisPlayBoard.showBoard", "caption":"DisPlayBoard:showBoard", "value":"local result = DisPlayBoard:showBoard(playerid, boardid)", "meta":"DisPlayBoard", "type":"local", "score":9}, 
{"name":"DisPlayBoard.hideBoard", "caption":"DisPlayBoard:hideBoard", "value":"local result = DisPlayBoard:hideBoard(playerid, boardid)", "meta":"DisPlayBoard", "type":"local", "score":9}, 
{"name":"DisPlayBoard.setBoardPicture", "caption":"DisPlayBoard:setBoardPicture", "value":"local result = DisPlayBoard:setBoardPicture(playerid, boardid, pictureid)", "meta":"DisPlayBoard", "type":"local", "score":9}, 
{"name":"CloudSever.setOrderDataBykey", "caption":"CloudSever:setOrderDataBykey", "value":"local ret = CloudSever:setOrderDataBykey(libvarname,'key1',1)", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.removeOrderDataByKey", "caption":"CloudSever:removeOrderDataByKey", "value":"local ret = CloudSever:removeOrderDataByKey(libvarname,'key1')", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.getOrderDataByKeyEx", "caption":"CloudSever:getOrderDataByKeyEx", "value":"local ret = CloudSever:getOrderDataByKeyEx(libvarname,'key1',callback)", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.getOrderDataIndexValueEx", "caption":"CloudSever:getOrderDataIndexValueEx", "value":"local ret = CloudSever:getOrderDataIndexValueEx(libvarname,1,callback) -- 请求第1名的数据", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.ClearOrderData", "caption":"CloudSever:ClearOrderData", "value":"local ret = CloudSever:ClearOrderData(libvarname) -- 清空排行榜", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.automaticByKey", "caption":"CloudSever:automaticByKey", "value":"local ret = CloudSever:automaticByKey(libvarname,'key1',value) -- 设置自运算值加10", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.getOrderDataIndexAreaEx", "caption":"CloudSever:getOrderDataIndexAreaEx", "value":"local ret = CloudSever:getOrderDataIndexAreaEx(libvarname,reqcount,callback)", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.getOrderDataValueAreaEx", "caption":"CloudSever:getOrderDataValueAreaEx", "value":"local ret  = CloudSever:getOrderDataValueAreaEx(libvarname,-2,50,200,callback) -- 请求值是50 - 200的从大到小排序的前2名的数据", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.setDataListBykey", "caption":"CloudSever:setDataListBykey", "value":"local ret = CloudSever:setDataListBykey(libvarname,'key1.score',1)", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.removeDataListByKey", "caption":"CloudSever:removeDataListByKey", "value":"local ret = CloudSever:removeDataListByKey(libvarname,'key1.score') --获取key1的分数", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.getDataListByKeyEx", "caption":"CloudSever:getDataListByKeyEx", "value":"local ret = CloudSever:getDataListByKeyEx(libvarname,'key1.score',callback) --获取key1的分数", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.ClearDataList", "caption":"CloudSever:ClearDataList", "value":"local ret = CloudSever:ClearDataList(libvarname)", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.getlistCache", "caption":"CloudSever:getlistCache", "value":"local ret,values = CloudSever:getlistCache(libvarname)", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.UpdateDataListByKey", "caption":"CloudSever:UpdateDataListByKey", "value":"local ret = CloudSever:UpdateDataListByKey('list','score',callback)", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.SendSeverMsg", "caption":"CloudSever:SendSeverMsg", "value":"CloudSever:SendSeverMsg('customevent',{customdata = json}) -- 发送云服消息广播", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.TransmitToMap", "caption":"CloudSever:TransmitToMap", "value":"local ret  = CloudSever:TransmitToMap(playerid, mapid)", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.TransmitToRoom", "caption":"CloudSever:TransmitToRoom", "value":"local ret  = CloudSever:TransmitToRoom(playerid, roomid)", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.TransmitOtherRoom", "caption":"CloudSever:TransmitOtherRoom", "value":"local ret  = CloudSever:TransmitOtherRoom(playerid)", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.GetRoomID", "caption":"CloudSever:GetRoomID", "value":"local ret ,roomid = CloudSever:GetRoomID()", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.TransmitToCategoryRoom", "caption":"CloudSever:TransmitToCategoryRoom", "value":"local ret  = CloudSever:TransmitToCategoryRoom(playerid, roomtype, mapid)", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.SetForbidJoin", "caption":"CloudSever:SetForbidJoin", "value":"local code  = CloudSever:SetForbidJoin(seconds)", "meta":"CloudSever", "type":"local", "score":9}, 
{"name":"CloudSever.CloseCurRoom", "caption":"CloudSever:CloseCurRoom", "value":"local code  = CloudSever:CloseCurRoom(countdown, msg)", "meta":"CloudSever", "type":"local", "score":9}, 
    {"name":"Trigger.wait", "caption":"Trigger:wait", "value":"Trigger:wait(tick)", "meta":"Trigger", "type":"local", "score":9}, 
    {"name":"ScriptSupportEvent", "caption":"ScriptSupportEvent", "value":"ScriptSupportEvent:registerEvent('event',func)", "meta":"Event", "type":"local", "score":9}, 
    {"name":"Backpack.ItemChange", "caption":"Backpack.ItemChange", "value":"Backpack.ItemChange", "meta":"Event", "type":"local", "score":9},
		{"name":"Backpack.ItemPutIn", "caption":"Backpack.ItemPutIn", "value":"Backpack.ItemPutIn", "meta":"Event", "type":"local", "score":9},
		{"name":"Backpack.ItemTakeOut", "caption":"Backpack.ItemTakeOut", "value":"Backpack.ItemTakeOut", "meta":"Event", "type":"local", "score":9},
		{"name":"Game.Hour", "caption":"Game.Hour", "value":"Game.Hour", "meta":"Event", "type":"local", "score":9},
		{"name":"Game.RunTime", "caption":"Game.RunTime", "value":"Game.RunTime", "meta":"Event", "type":"local", "score":9},
		{"name":"Game.AnyPlayer.Defeat", "caption":"Game.AnyPlayer.Defeat", "value":"Game.AnyPlayer.Defeat", "meta":"Event", "type":"local", "score":9},
		{"name":"Game.AnyPlayer.EnterGame", "caption":"Game.AnyPlayer.EnterGame", "value":"Game.AnyPlayer.EnterGame", "meta":"Event", "type":"local", "score":9},
		{"name":"Game.AnyPlayer.LeaveGame", "caption":"Game.AnyPlayer.LeaveGame", "value":"Game.AnyPlayer.LeaveGame", "meta":"Event", "type":"local", "score":9},
		{"name":"Game.AnyPlayer.Victory", "caption":"Game.AnyPlayer.Victory", "value":"Game.AnyPlayer.Victory", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.AddBuff", "caption":"Player.AddBuff", "value":"Player.AddBuff", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.AddItem", "caption":"Player.AddItem", "value":"Player.AddItem", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.AreaIn", "caption":"Player.AreaIn", "value":"Player.AreaIn", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.AreaOut", "caption":"Player.AreaOut", "value":"Player.AreaOut", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.AttackHit", "caption":"Player.AttackHit", "value":"Player.AttackHit", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.Attack", "caption":"Player.Attack", "value":"Player.Attack", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.BackPackChange", "caption":"Player.BackPackChange", "value":"Player.BackPackChange", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.BeHurt", "caption":"Player.BeHurt", "value":"Player.BeHurt", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.ChangeAttr", "caption":"Player.ChangeAttr", "value":"Player.ChangeAttr", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.ClickActor", "caption":"Player.ClickActor", "value":"Player.ClickActor", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.ClickBlock", "caption":"Player.ClickBlock", "value":"Player.ClickBlock", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.Collide", "caption":"Player.Collide", "value":"Player.Collide", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.ConsumeItem", "caption":"Player.ConsumeItem", "value":"Player.ConsumeItem", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.DamageActor", "caption":"Player.DamageActor", "value":"Player.DamageActor", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.DefeatActor", "caption":"Player.DefeatActor", "value":"Player.DefeatActor", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.Die", "caption":"Player.Die", "value":"Player.Die", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.DiscardItem", "caption":"Player.DiscardItem", "value":"Player.DiscardItem", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.DismountActor", "caption":"Player.DismountActor", "value":"Player.DismountActor", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.EquipChange", "caption":"Player.EquipChange", "value":"Player.EquipChange", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.EquipOff", "caption":"Player.EquipOff", "value":"Player.EquipOff", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.EquipOn", "caption":"Player.EquipOn", "value":"Player.EquipOn", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.InputContent", "caption":"Player.InputContent", "value":"Player.InputContent", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.InputKeyDown", "caption":"Player.InputKeyDown", "value":"Player.InputKeyDown", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.InputKeyOnPress", "caption":"Player.InputKeyOnPress", "value":"Player.InputKeyOnPress", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.InputKeyUp", "caption":"Player.InputKeyUp", "value":"Player.InputKeyUp", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.InvateFriend", "caption":"Player.InvateFriend", "value":"Player.InvateFriend", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.LevelModelUpgrade", "caption":"Player.LevelModelUpgrade", "value":"Player.LevelModelUpgrade", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.MotionStateChange", "caption":"Player.MotionStateChange", "value":"Player.MotionStateChange", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.MountActor", "caption":"Player.MountActor", "value":"Player.MountActor", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.MoveOneBlockSize", "caption":"Player.MoveOneBlockSize", "value":"Player.MoveOneBlockSize", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.NewInputContent", "caption":"Player.NewInputContent", "value":"Player.NewInputContent", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.PickUpItem", "caption":"Player.PickUpItem", "value":"Player.PickUpItem", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.PlayAction", "caption":"Player.PlayAction", "value":"Player.PlayAction", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.RemoveBuff", "caption":"Player.RemoveBuff", "value":"Player.RemoveBuff", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.Revive", "caption":"Player.Revive", "value":"Player.Revive", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.SelectShortcut", "caption":"Player.SelectShortcut", "value":"Player.SelectShortcut", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.ShortcutChange", "caption":"Player.ShortcutChange", "value":"Player.ShortcutChange", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.UseGiftPack", "caption":"Player.UseGiftPack", "value":"Player.UseGiftPack", "meta":"Event", "type":"local", "score":9},
		{"name":"Player.UseItem", "caption":"Player.UseItem", "value":"Player.UseItem", "meta":"Event", "type":"local", "score":9},
		{"name":"Actor.AddBuff", "caption":"Actor.AddBuff", "value":"Actor.AddBuff", "meta":"Event", "type":"local", "score":9},
		{"name":"Actor.Arean", "caption":"Actor.Arean", "value":"Actor.Arean", "meta":"Event", "type":"local", "score":9},
		{"name":"Actor.AreaOut", "caption":"Actor.AreaOut", "value":"Actor.AreaOut", "meta":"Event", "type":"local", "score":9},
		{"name":"Actor.AttackHit", "caption":"Actor.AttackHit", "value":"Actor.AttackHit", "meta":"Event", "type":"local", "score":9},
		{"name":"Actor.Attack", "caption":"Actor.Attack", "value":"Actor.Attack", "meta":"Event", "type":"local", "score":9},
		{"name":"Actor.BeHurt", "caption":"Actor.BeHurt", "value":"Actor.BeHurt", "meta":"Event", "type":"local", "score":9},
		{"name":"Actor.Beat", "caption":"Actor.Beat", "value":"Actor.Beat", "meta":"Event", "type":"local", "score":9},
		{"name":"Actor.ChangeAttr", "caption":"Actor.ChangeAttr", "value":"Actor.ChangeAttr", "meta":"Event", "type":"local", "score":9},
		{"name":"Actor.ChangeMotion", "caption":"Actor.ChangeMotion", "value":"Actor.ChangeMotion", "meta":"Event", "type":"local", "score":9},
		{"name":"Actor.Collide", "caption":"Actor.Collide", "value":"Actor.Collide", "meta":"Event", "type":"local", "score":9},
		{"name":"Actor.Create", "caption":"Actor.Create", "value":"Actor.Create", "meta":"Event", "type":"local", "score":9},
		{"name":"Actor.Damage", "caption":"Actor.Damage", "value":"Actor.Damage", "meta":"Event", "type":"local", "score":9},
		{"name":"Actor.Die", "caption":"Actor.Die", "value":"Actor.Die", "meta":"Event", "type":"local", "score":9},
		{"name":"Actor.Projectile.Hit", "caption":"Actor.Projectile.Hit", "value":"Actor.Projectile.Hit", "meta":"Event", "type":"local", "score":9},
		{"name":"Actor.RemoveBuff", "caption":"Actor.RemoveBuff", "value":"Actor.RemoveBuff", "meta":"Event", "type":"local", "score":9},
		{"name":"Block.Add", "caption":"Block.Add", "value":"Block.Add", "meta":"Event", "type":"local", "score":9},
		{"name":"Block.Destroy.By", "caption":"Block.Destroy.By", "value":"Block.Destroy.By", "meta":"Event", "type":"local", "score":9},
		{"name":"Block.Dig.Begin", "caption":"Block.Dig.Begin", "value":"Block.Dig.Begin", "meta":"Event", "type":"local", "score":9},
		{"name":"Block.Dig.Cancel", "caption":"Block.Dig.Cancel", "value":"Block.Dig.Cancel", "meta":"Event", "type":"local", "score":9},
		{"name":"Block.Dig.End", "caption":"Block.Dig.End", "value":"Block.Dig.End", "meta":"Event", "type":"local", "score":9},
		{"name":"Block.Remove", "caption":"Block.Remove", "value":"Block.Remove", "meta":"Event", "type":"local", "score":9},
		{"name":"Block.Trigger", "caption":"Block.Trigger", "value":"Block.Trigger", "meta":"Event", "type":"local", "score":9},
		{"name":"Dropitem.Arein", "caption":"Dropitem.Arein", "value":"Dropitem.Arein", "meta":"Event", "type":"local", "score":9},
		{"name":"Dropitem.AreaOut", "caption":"Dropitem.AreaOut", "value":"Dropitem.AreaOut", "meta":"Event", "type":"local", "score":9},
		{"name":"Item.Create", "caption":"Item.Create", "value":"Item.Create", "meta":"Event", "type":"local", "score":9},
		{"name":"Item.Destroy", "caption":"Item.Destroy", "value":"Item.Destroy", "meta":"Event", "type":"local", "score":9},
		{"name":"Item.Disappear", "caption":"Item.Disappear", "value":"Item.Disappear", "meta":"Event", "type":"local", "score":9},
		{"name":"Item.Pickup", "caption":"Item.Pickup", "value":"Item.Pickup", "meta":"Event", "type":"local", "score":9},
		{"name":"Item.expend", "caption":"Item.expend", "value":"Item.expend", "meta":"Event", "type":"local", "score":9},
		{"name":"Missile.Arein", "caption":"Missile.Arein", "value":"Missile.Arein", "meta":"Event", "type":"local", "score":9},
		{"name":"Missile.AreaOut", "caption":"Missile.AreaOut", "value":"Missile.AreaOut", "meta":"Event", "type":"local", "score":9},
		{"name":"Missile.Create", "caption":"Missile.Create", "value":"Missile.Create", "meta":"Event", "type":"local", "score":9},
		{"name":"Particle.Item.OnCreate", "caption":"Particle.Item.OnCreate", "value":"Particle.Item.OnCreate", "meta":"Event", "type":"local", "score":9},
		{"name":"Particle.Mob.OnCreate", "caption":"Particle.Mob.OnCreate", "value":"Particle.Mob.OnCreate", "meta":"Event", "type":"local", "score":9},
		{"name":"Particle.Player.OnCreate", "caption":"Particle.Player.OnCreate", "value":"Particle.Player.OnCreate", "meta":"Event", "type":"local", "score":9},
		{"name":"Particle.Pos.OnCreate", "caption":"Particle.Pos.OnCreate", "value":"Particle.Pos.OnCreate", "meta":"Event", "type":"local", "score":9},
		{"name":"Particle.Projectile.OnCreate", "caption":"Particle.Projectile.OnCreate", "value":"Particle.Projectile.OnCreate", "meta":"Event", "type":"local", "score":9},
		{"name":"UI.Button.Click", "caption":"UI.Button.Click", "value":"UI.Button.Click", "meta":"Event", "type":"local", "score":9},
		{"name":"UI.Button.TouchBegin", "caption":"UI.Button.TouchBegin", "value":"UI.Button.TouchBegin", "meta":"Event", "type":"local", "score":9},
		{"name":"UI.Hide", "caption":"UI.Hide", "value":"UI.Hide", "meta":"Event", "type":"local", "score":9},
		{"name":"UI.LostFocus", "caption":"UI.LostFocus", "value":"UI.LostFocus", "meta":"Event", "type":"local", "score":9},
		{"name":"UI.Show", "caption":"UI.Show", "value":"UI.Show", "meta":"Event", "type":"local", "score":9},
		{"name":"BluePrint.BuildBegin", "caption":"BluePrint.BuildBegin", "value":"BluePrint.BuildBegin", "meta":"Event", "type":"local", "score":9},
		{"name":"Craft.end", "caption":"Craft.end", "value":"Craft.end", "meta":"Event", "type":"local", "score":9},
		{"name":"Developer.BuyItem", "caption":"Developer.BuyItem", "value":"Developer.BuyItem", "meta":"Event", "type":"local", "score":9},
		{"name":"Furnace.begin", "caption":"Furnace.begin", "value":"Furnace.begin", "meta":"Event", "type":"local", "score":9},
		{"name":"Furnace.end", "caption":"Furnace.end", "value":"Furnace.end", "meta":"Event", "type":"local", "score":9},
		{"name":"MiNiVip_1", "caption":"MiNiVip_1", "value":"MiNiVip_1", "meta":"Event", "type":"local", "score":9},
		{"name":"MiNiVip_3", "caption":"MiNiVip_3", "value":"MiNiVip_3", "meta":"Event", "type":"local", "score":9},
		{"name":"Plot.begin", "caption":"Plot.begin", "value":"Plot.begin", "meta":"Event", "type":"local", "score":9},
		{"name":"Plot.end", "caption":"Plot.end", "value":"Plot.end", "meta":"Event", "type":"local", "score":9},
		{"name":"QQMusic.PlayBegin", "caption":"QQMusic.PlayBegin", "value":"QQMusic.PlayBegin", "meta":"Event", "type":"local", "score":9},
		{"name":"minitimer.change", "caption":"minitimer.change", "value":"minitimer.change", "meta":"Event", "type":"local", "score":9},
  ]
  return jsonObj
}

function GetGlobalVars() {
  var jsonObj = [
    {"name":"ACTORBODY_EFFECT.BODYFX_ACCUMFIRE", "caption":"BODYFX_ACCUMFIRE", "value":"ACTORBODY_EFFECT.BODYFX_ACCUMFIRE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
  ]
  return jsonObj
}

