
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
    {"name":"World.isDaytime", "caption":"World:isDaytime", "value":"local result=World:isDaytime()", "meta":"Block", "type":"local", "score":9},
{"name":"World.isCustomGame", "caption":"World:isCustomGame", "value":"local result=World:isCustomGame()", "meta":"Block", "type":"local", "score":9},
{"name":"World.isCreativeMode", "caption":"World:isCreativeMode", "value":"local result=World:isCreativeMode()", "meta":"Block", "type":"local", "score":9},
{"name":"World.isGodMode", "caption":"World:isGodMode", "value":"local result=World:isGodMode()", "meta":"Block", "type":"local", "score":9},
{"name":"World.isExtremityMode", "caption":"World:isExtremityMode", "value":"local result=World:isExtremityMode()", "meta":"Block", "type":"local", "score":9},
{"name":"World.isFreeMode", "caption":"World:isFreeMode", "value":"local result=World:isFreeMode()", "meta":"Block", "type":"local", "score":9},
{"name":"World.isSurviveMode", "caption":"World:isSurviveMode", "value":"local result=World:isSurviveMode()", "meta":"Block", "type":"local", "score":9},
{"name":"World.isCreateRunMode", "caption":"World:isCreateRunMode", "value":"local result=World:isCreateRunMode()", "meta":"Block", "type":"local", "score":9},
{"name":"World.isGameMakerMode", "caption":"World:isGameMakerMode", "value":"local result=World:isGameMakerMode()", "meta":"Block", "type":"local", "score":9},
{"name":"World.isGameMakerRunMode", "caption":"World:isGameMakerRunMode", "value":"local result=World:isGameMakerRunMode()", "meta":"Block", "type":"local", "score":9},
{"name":"World.getHours", "caption":"World:getHours", "value":"local result,time=World:getHours()", "meta":"Block", "type":"local", "score":9},
{"name":"World.setHours", "caption":"World:setHours", "value":"World:setHours(8)", "meta":"Block", "type":"local", "score":9},
  ]
  return jsonObj
}

function GetGlobalVars() {
  var jsonObj = [
    {"name":"ACTORBODY_EFFECT.BODYFX_ACCUMFIRE", "caption":"BODYFX_ACCUMFIRE", "value":"ACTORBODY_EFFECT.BODYFX_ACCUMFIRE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_AI_ANGRY", "caption":"BODYFX_AI_ANGRY", "value":"ACTORBODY_EFFECT.BODYFX_AI_ANGRY", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_AI_HUNGRY", "caption":"BODYFX_AI_HUNGRY", "value":"ACTORBODY_EFFECT.BODYFX_AI_HUNGRY", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_AI_NEEDREEDS", "caption":"BODYFX_AI_NEEDREEDS", "value":"ACTORBODY_EFFECT.BODYFX_AI_NEEDREEDS", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_AI_SLEEP", "caption":"BODYFX_AI_SLEEP", "value":"ACTORBODY_EFFECT.BODYFX_AI_SLEEP", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_BALL_CHARGE", "caption":"BODYFX_BALL_CHARGE", "value":"ACTORBODY_EFFECT.BODYFX_BALL_CHARGE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_BALL_SHOOT_RELEASE", "caption":"BODYFX_BALL_SHOOT_RELEASE", "value":"ACTORBODY_EFFECT.BODYFX_BALL_SHOOT_RELEASE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_CONCEAL", "caption":"BODYFX_CONCEAL", "value":"ACTORBODY_EFFECT.BODYFX_CONCEAL", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_DANCE", "caption":"BODYFX_DANCE", "value":"ACTORBODY_EFFECT.BODYFX_DANCE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_DEADPROTECT", "caption":"BODYFX_DEADPROTECT", "value":"ACTORBODY_EFFECT.BODYFX_DEADPROTECT", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_DISAPPEAR", "caption":"BODYFX_DISAPPEAR", "value":"ACTORBODY_EFFECT.BODYFX_DISAPPEAR", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_DIZZY", "caption":"BODYFX_DIZZY", "value":"ACTORBODY_EFFECT.BODYFX_DIZZY", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_DRAGONDIE0", "caption":"BODYFX_DRAGONDIE0", "value":"ACTORBODY_EFFECT.BODYFX_DRAGONDIE0", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_DRAGONDIE1", "caption":"BODYFX_DRAGONDIE1", "value":"ACTORBODY_EFFECT.BODYFX_DRAGONDIE1", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_DRAGONDIE2", "caption":"BODYFX_DRAGONDIE2", "value":"ACTORBODY_EFFECT.BODYFX_DRAGONDIE2", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_DRAGONFIRE", "caption":"BODYFX_DRAGONFIRE", "value":"ACTORBODY_EFFECT.BODYFX_DRAGONFIRE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_DRAGONSUMMON", "caption":"BODYFX_DRAGONSUMMON", "value":"ACTORBODY_EFFECT.BODYFX_DRAGONSUMMON", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_ENCH_FALL", "caption":"BODYFX_ENCH_FALL", "value":"ACTORBODY_EFFECT.BODYFX_ENCH_FALL", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_FEAR", "caption":"BODYFX_FEAR", "value":"ACTORBODY_EFFECT.BODYFX_FEAR", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_FIRE", "caption":"BODYFX_FIRE", "value":"ACTORBODY_EFFECT.BODYFX_FIRE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_FORBIDDEN", "caption":"BODYFX_FORBIDDEN", "value":"ACTORBODY_EFFECT.BODYFX_FORBIDDEN", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_HORSE_BENTENG", "caption":"BODYFX_HORSE_BENTENG", "value":"ACTORBODY_EFFECT.BODYFX_HORSE_BENTENG", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_HORSE_FLY", "caption":"BODYFX_HORSE_FLY", "value":"ACTORBODY_EFFECT.BODYFX_HORSE_FLY", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_HURT", "caption":"BODYFX_HURT", "value":"ACTORBODY_EFFECT.BODYFX_HURT", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_INTERACTION", "caption":"BODYFX_INTERACTION", "value":"ACTORBODY_EFFECT.BODYFX_INTERACTION", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_MAKETROUBLE", "caption":"BODYFX_MAKETROUBLE", "value":"ACTORBODY_EFFECT.BODYFX_MAKETROUBLE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_MILKING", "caption":"BODYFX_MILKING", "value":"ACTORBODY_EFFECT.BODYFX_MILKING", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_PORTAL", "caption":"BODYFX_PORTAL", "value":"ACTORBODY_EFFECT.BODYFX_PORTAL", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_ROLECOLLECT", "caption":"BODYFX_ROLECOLLECT", "value":"ACTORBODY_EFFECT.BODYFX_ROLECOLLECT", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_ROLEJUMP", "caption":"BODYFX_ROLEJUMP", "value":"ACTORBODY_EFFECT.BODYFX_ROLEJUMP", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_TAME_FAILED", "caption":"BODYFX_TAME_FAILED", "value":"ACTORBODY_EFFECT.BODYFX_TAME_FAILED", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_TAME_FOOD", "caption":"BODYFX_TAME_FOOD", "value":"ACTORBODY_EFFECT.BODYFX_TAME_FOOD", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_TAME_NOFOOD", "caption":"BODYFX_TAME_NOFOOD", "value":"ACTORBODY_EFFECT.BODYFX_TAME_NOFOOD", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_TAME_SUCCEED", "caption":"BODYFX_TAME_SUCCEED", "value":"ACTORBODY_EFFECT.BODYFX_TAME_SUCCEED", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_TRAINMOVE", "caption":"BODYFX_TRAINMOVE", "value":"ACTORBODY_EFFECT.BODYFX_TRAINMOVE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_TRANSPORT", "caption":"BODYFX_TRANSPORT", "value":"ACTORBODY_EFFECT.BODYFX_TRANSPORT", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.BODYFX_WEAPON_FIRE", "caption":"BODYFX_WEAPON_FIRE", "value":"ACTORBODY_EFFECT.BODYFX_WEAPON_FIRE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.HUDFX_HEADSHOT", "caption":"HUDFX_HEADSHOT", "value":"ACTORBODY_EFFECT.HUDFX_HEADSHOT", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.HUDFX_NORMALSHOT", "caption":"HUDFX_NORMALSHOT", "value":"ACTORBODY_EFFECT.HUDFX_NORMALSHOT", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"ACTORBODY_EFFECT.TOOLFX_JETPACK2", "caption":"TOOLFX_JETPACK2", "value":"ACTORBODY_EFFECT.TOOLFX_JETPACK2", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
    {"name":"BACKPACK_TYPE.EQUIP", "caption":"EQUIP", "value":"BACKPACK_TYPE.EQUIP", "meta":"BACKPACK_TYPE", "type":"local", "score":6},
    {"name":"BACKPACK_TYPE.INVENTORY", "caption":"INVENTORY", "value":"BACKPACK_TYPE.INVENTORY", "meta":"BACKPACK_TYPE", "type":"local", "score":6},
    {"name":"BACKPACK_TYPE.SHORTCUT", "caption":"SHORTCUT", "value":"BACKPACK_TYPE.SHORTCUT", "meta":"BACKPACK_TYPE", "type":"local", "score":6},
    {"name":"BLOCKATTR.BURNING_PROBABILITY", "caption":"BURNING_PROBABILITY", "value":"BLOCKATTR.BURNING_PROBABILITY", "meta":"BLOCKATTR", "type":"local", "score":6},
    {"name":"BLOCKATTR.BURNING_SPEED", "caption":"BURNING_SPEED", "value":"BLOCKATTR.BURNING_SPEED", "meta":"BLOCKATTR", "type":"local", "score":6},
    {"name":"BLOCKATTR.EXPLODE_RESISTANCE", "caption":"EXPLODE_RESISTANCE", "value":"BLOCKATTR.EXPLODE_RESISTANCE", "meta":"BLOCKATTR", "type":"local", "score":6},
    {"name":"BLOCKATTR.GLISSADE", "caption":"GLISSADE", "value":"BLOCKATTR.GLISSADE", "meta":"BLOCKATTR", "type":"local", "score":6},
    {"name":"BLOCKATTR.HARDNESS", "caption":"HARDNESS", "value":"BLOCKATTR.HARDNESS", "meta":"BLOCKATTR", "type":"local", "score":6},
    {"name":"BLOCKATTR.LIGHTNESS", "caption":"LIGHTNESS", "value":"BLOCKATTR.LIGHTNESS", "meta":"BLOCKATTR", "type":"local", "score":6},
    {"name":"BLOCKATTR_ENABLE.BEPUSHED_DROPITEM", "caption":"BEPUSHED_DROPITEM", "value":"BLOCKATTR_ENABLE.BEPUSHED_DROPITEM", "meta":"BLOCKATTR_ENABLE", "type":"local", "score":6},
    {"name":"BLOCKATTR_ENABLE.ENABLE_BEOPERATED", "caption":"ENABLE_BEOPERATED", "value":"BLOCKATTR_ENABLE.ENABLE_BEOPERATED", "meta":"BLOCKATTR_ENABLE", "type":"local", "score":6},
    {"name":"BLOCKATTR_ENABLE.ENABLE_BEPUSHED", "caption":"ENABLE_BEPUSHED", "value":"BLOCKATTR_ENABLE.ENABLE_BEPUSHED", "meta":"BLOCKATTR_ENABLE", "type":"local", "score":6},
    {"name":"BLOCKATTR_ENABLE.ENABLE_DESTROYED", "caption":"ENABLE_DESTROYED", "value":"BLOCKATTR_ENABLE.ENABLE_DESTROYED", "meta":"BLOCKATTR_ENABLE", "type":"local", "score":6},
    {"name":"BLOCKATTR_ENABLE.ENABLE_DROPITEM", "caption":"ENABLE_DROPITEM", "value":"BLOCKATTR_ENABLE.ENABLE_DROPITEM", "meta":"BLOCKATTR_ENABLE", "type":"local", "score":6},
    {"name":"BLOCKID.AIR", "caption":"AIR", "value":"BLOCKID.AIR", "meta":"BLOCKID", "type":"local", "score":6},
    {"name":"BLOCKSTATUS.ACTIVE", "caption":"ACTIVE", "value":"BLOCKSTATUS.ACTIVE", "meta":"BLOCKSTATUS", "type":"local", "score":6},
    {"name":"BLOCKSTATUS.INACTIVE", "caption":"INACTIVE", "value":"BLOCKSTATUS.INACTIVE", "meta":"BLOCKSTATUS", "type":"local", "score":6},
    {"name":"BPACK_SINDEX.BACKPACK_START_INDEX", "caption":"BACKPACK_START_INDEX", "value":"BPACK_SINDEX.BACKPACK_START_INDEX", "meta":"BPACK_SINDEX", "type":"local", "score":6},
    {"name":"BPACK_SINDEX.EQUIP_START_INDEX", "caption":"EQUIP_START_INDEX", "value":"BPACK_SINDEX.EQUIP_START_INDEX", "meta":"BPACK_SINDEX", "type":"local", "score":6},
    {"name":"BPACK_SINDEX.SHORTCUT_START_INDEX", "caption":"SHORTCUT_START_INDEX", "value":"BPACK_SINDEX.SHORTCUT_START_INDEX", "meta":"BPACK_SINDEX", "type":"local", "score":6},
    {"name":"BPACK_SINDEX.STORAGE_START_INDEX", "caption":"STORAGE_START_INDEX", "value":"BPACK_SINDEX.STORAGE_START_INDEX", "meta":"BPACK_SINDEX", "type":"local", "score":6},
    {"name":"CREATUREATTR.ATK_MELEE", "caption":"ATK_MELEE", "value":"CREATUREATTR.ATK_MELEE", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR.ATK_REMOTE", "caption":"ATK_REMOTE", "value":"CREATUREATTR.ATK_REMOTE", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR.CUR_HP", "caption":"CUR_HP", "value":"CREATUREATTR.CUR_HP", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR.CUR_HUNGER", "caption":"CUR_HUNGER", "value":"CREATUREATTR.CUR_HUNGER", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR.CUR_OXYGEN", "caption":"CUR_OXYGEN", "value":"CREATUREATTR.CUR_OXYGEN", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR.DEF_MELEE", "caption":"DEF_MELEE", "value":"CREATUREATTR.DEF_MELEE", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR.DEF_REMOTE", "caption":"DEF_REMOTE", "value":"CREATUREATTR.DEF_REMOTE", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR.DIMENSION", "caption":"DIMENSION", "value":"CREATUREATTR.DIMENSION", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR.DODGE", "caption":"DODGE", "value":"CREATUREATTR.DODGE", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR.HP_RECOVER", "caption":"HP_RECOVER", "value":"CREATUREATTR.HP_RECOVER", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR.JUMP_POWER", "caption":"JUMP_POWER", "value":"CREATUREATTR.JUMP_POWER", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR.MAX_HP", "caption":"MAX_HP", "value":"CREATUREATTR.MAX_HP", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR.MAX_HUNGER", "caption":"MAX_HUNGER", "value":"CREATUREATTR.MAX_HUNGER", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR.MAX_OXYGEN", "caption":"MAX_OXYGEN", "value":"CREATUREATTR.MAX_OXYGEN", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR.RECOVER_OXYGEN", "caption":"RECOVER_OXYGEN", "value":"CREATUREATTR.RECOVER_OXYGEN", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR.RUN_SPEED", "caption":"RUN_SPEED", "value":"CREATUREATTR.RUN_SPEED", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR.SWIN_SPEED", "caption":"SWIN_SPEED", "value":"CREATUREATTR.SWIN_SPEED", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR.WALK_SPEED", "caption":"WALK_SPEED", "value":"CREATUREATTR.WALK_SPEED", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR.WEIGHT", "caption":"WEIGHT", "value":"CREATUREATTR.WEIGHT", "meta":"CREATUREATTR", "type":"local", "score":6},
    {"name":"CREATUREATTR_ENABLE.ENABLE_ATTACK", "caption":"ENABLE_ATTACK", "value":"CREATUREATTR_ENABLE.ENABLE_ATTACK", "meta":"CREATUREATTR_ENABLE", "type":"local", "score":6},
    {"name":"CREATUREATTR_ENABLE.ENABLE_BEATTACKED", "caption":"ENABLE_BEATTACKED", "value":"CREATUREATTR_ENABLE.ENABLE_BEATTACKED", "meta":"CREATUREATTR_ENABLE", "type":"local", "score":6},
    {"name":"CREATUREATTR_ENABLE.ENABLE_BEKILLED", "caption":"ENABLE_BEKILLED", "value":"CREATUREATTR_ENABLE.ENABLE_BEKILLED", "meta":"CREATUREATTR_ENABLE", "type":"local", "score":6},
    {"name":"CREATUREATTR_ENABLE.ENABLE_DEATHDROPITEM", "caption":"ENABLE_DEATHDROPITEM", "value":"CREATUREATTR_ENABLE.ENABLE_DEATHDROPITEM", "meta":"CREATUREATTR_ENABLE", "type":"local", "score":6},
    {"name":"CREATUREATTR_ENABLE.ENABLE_MOVE", "caption":"ENABLE_MOVE", "value":"CREATUREATTR_ENABLE.ENABLE_MOVE", "meta":"CREATUREATTR_ENABLE", "type":"local", "score":6},
    {"name":"CREATUREATTR_ENABLE.ENABLE_PICKUP", "caption":"ENABLE_PICKUP", "value":"CREATUREATTR_ENABLE.ENABLE_PICKUP", "meta":"CREATUREATTR_ENABLE", "type":"local", "score":6},
    {"name":"CREATUREMOTION.ATK_MELEE", "caption":"ATK_MELEE", "value":"CREATUREMOTION.ATK_MELEE", "meta":"CREATUREMOTION", "type":"local", "score":6},
    {"name":"CREATUREMOTION.ATK_REMOTE", "caption":"ATK_REMOTE", "value":"CREATUREMOTION.ATK_REMOTE", "meta":"CREATUREMOTION", "type":"local", "score":6},
    {"name":"CREATUREMOTION.BEATTRACTED", "caption":"BEATTRACTED", "value":"CREATUREMOTION.BEATTRACTED", "meta":"CREATUREMOTION", "type":"local", "score":6},
    {"name":"CREATUREMOTION.COPULATION", "caption":"COPULATION", "value":"CREATUREMOTION.COPULATION", "meta":"CREATUREMOTION", "type":"local", "score":6},
    {"name":"CREATUREMOTION.FOLLOW", "caption":"FOLLOW", "value":"CREATUREMOTION.FOLLOW", "meta":"CREATUREMOTION", "type":"local", "score":6},
    {"name":"CREATUREMOTION.IDLE", "caption":"IDLE", "value":"CREATUREMOTION.IDLE", "meta":"CREATUREMOTION", "type":"local", "score":6},
    {"name":"CREATUREMOTION.RUN_AWAY", "caption":"RUN_AWAY", "value":"CREATUREMOTION.RUN_AWAY", "meta":"CREATUREMOTION", "type":"local", "score":6},
    {"name":"CREATUREMOTION.SELF_BOMB", "caption":"SELF_BOMB", "value":"CREATUREMOTION.SELF_BOMB", "meta":"CREATUREMOTION", "type":"local", "score":6},
    {"name":"CREATUREMOTION.STANDBY", "caption":"STANDBY", "value":"CREATUREMOTION.STANDBY", "meta":"CREATUREMOTION", "type":"local", "score":6},
    {"name":"CREATUREMOTION.STROLL", "caption":"STROLL", "value":"CREATUREMOTION.STROLL", "meta":"CREATUREMOTION", "type":"local", "score":6},
    {"name":"CREATUREMOTION.SWIM", "caption":"SWIM", "value":"CREATUREMOTION.SWIM", "meta":"CREATUREMOTION", "type":"local", "score":6},
    {"name":"CameraEditState.CAMERA_EDIT_STATE_EDIT", "caption":"CAMERA_EDIT_STATE_EDIT", "value":"CameraEditState.CAMERA_EDIT_STATE_EDIT", "meta":"CameraEditState", "type":"local", "score":6},
    {"name":"CameraEditState.CAMERA_EDIT_STATE_NULL", "caption":"CAMERA_EDIT_STATE_NULL", "value":"CameraEditState.CAMERA_EDIT_STATE_NULL", "meta":"CameraEditState", "type":"local", "score":6},
    {"name":"CameraEditState.CAMERA_EDIT_STATE_TEST", "caption":"CAMERA_EDIT_STATE_TEST", "value":"CameraEditState.CAMERA_EDIT_STATE_TEST", "meta":"CameraEditState", "type":"local", "score":6},
    {"name":"EQUIP_SLOT_TYPE.EQUIP_BREAST", "caption":"EQUIP_BREAST", "value":"EQUIP_SLOT_TYPE.EQUIP_BREAST", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
    {"name":"EQUIP_SLOT_TYPE.EQUIP_HEAD", "caption":"EQUIP_HEAD", "value":"EQUIP_SLOT_TYPE.EQUIP_HEAD", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
    {"name":"EQUIP_SLOT_TYPE.EQUIP_LEGGING", "caption":"EQUIP_LEGGING", "value":"EQUIP_SLOT_TYPE.EQUIP_LEGGING", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
    {"name":"EQUIP_SLOT_TYPE.EQUIP_PIFENG", "caption":"EQUIP_PIFENG", "value":"EQUIP_SLOT_TYPE.EQUIP_PIFENG", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
    {"name":"EQUIP_SLOT_TYPE.EQUIP_SHOE", "caption":"EQUIP_SHOE", "value":"EQUIP_SLOT_TYPE.EQUIP_SHOE", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
    {"name":"EQUIP_SLOT_TYPE.EQUIP_WEAPON", "caption":"EQUIP_WEAPON", "value":"EQUIP_SLOT_TYPE.EQUIP_WEAPON", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
    {"name":"EQUIP_SLOT_TYPE.MAX_EQUIP_SLOTS", "caption":"MAX_EQUIP_SLOTS", "value":"EQUIP_SLOT_TYPE.MAX_EQUIP_SLOTS", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
    {"name":"ErrorCode.FAILED", "caption":"FAILED", "value":"ErrorCode.FAILED", "meta":"ErrorCode", "type":"local", "score":6},
    {"name":"ErrorCode.OK", "caption":"OK", "value":"ErrorCode.OK", "meta":"ErrorCode", "type":"local", "score":6},
    {"name":"FACE_DIRECTION.DIR_NEG_X", "caption":"DIR_NEG_X", "value":"FACE_DIRECTION.DIR_NEG_X", "meta":"FACE_DIRECTION", "type":"local", "score":6},
    {"name":"FACE_DIRECTION.DIR_NEG_Y", "caption":"DIR_NEG_Y", "value":"FACE_DIRECTION.DIR_NEG_Y", "meta":"FACE_DIRECTION", "type":"local", "score":6},
    {"name":"FACE_DIRECTION.DIR_NEG_Z", "caption":"DIR_NEG_Z", "value":"FACE_DIRECTION.DIR_NEG_Z", "meta":"FACE_DIRECTION", "type":"local", "score":6},
    {"name":"FACE_DIRECTION.DIR_NOT_INIT", "caption":"DIR_NOT_INIT", "value":"FACE_DIRECTION.DIR_NOT_INIT", "meta":"FACE_DIRECTION", "type":"local", "score":6},
    {"name":"FACE_DIRECTION.DIR_POS_X", "caption":"DIR_POS_X", "value":"FACE_DIRECTION.DIR_POS_X", "meta":"FACE_DIRECTION", "type":"local", "score":6},
    {"name":"FACE_DIRECTION.DIR_POS_Y", "caption":"DIR_POS_Y", "value":"FACE_DIRECTION.DIR_POS_Y", "meta":"FACE_DIRECTION", "type":"local", "score":6},
    {"name":"FACE_DIRECTION.DIR_POS_Z", "caption":"DIR_POS_Z", "value":"FACE_DIRECTION.DIR_POS_Z", "meta":"FACE_DIRECTION", "type":"local", "score":6},
    {"name":"GSOUND_TYPE.GSOUND_DESTROY", "caption":"GSOUND_DESTROY", "value":"GSOUND_TYPE.GSOUND_DESTROY", "meta":"GSOUND_TYPE", "type":"local", "score":6},
    {"name":"GSOUND_TYPE.GSOUND_DIG", "caption":"GSOUND_DIG", "value":"GSOUND_TYPE.GSOUND_DIG", "meta":"GSOUND_TYPE", "type":"local", "score":6},
    {"name":"GSOUND_TYPE.GSOUND_FALLGROUND", "caption":"GSOUND_FALLGROUND", "value":"GSOUND_TYPE.GSOUND_FALLGROUND", "meta":"GSOUND_TYPE", "type":"local", "score":6},
    {"name":"GSOUND_TYPE.GSOUND_PLACE", "caption":"GSOUND_PLACE", "value":"GSOUND_TYPE.GSOUND_PLACE", "meta":"GSOUND_TYPE", "type":"local", "score":6},
    {"name":"GSOUND_TYPE.GSOUND_WALK", "caption":"GSOUND_WALK", "value":"GSOUND_TYPE.GSOUND_WALK", "meta":"GSOUND_TYPE", "type":"local", "score":6},
    {"name":"HURTTYPE.ANTIINJURY", "caption":"ANTIINJURY", "value":"HURTTYPE.ANTIINJURY", "meta":"HURTTYPE", "type":"local", "score":6},
    {"name":"HURTTYPE.ANVIL", "caption":"ANVIL", "value":"HURTTYPE.ANVIL", "meta":"HURTTYPE", "type":"local", "score":6},
    {"name":"HURTTYPE.ASPHYXIA", "caption":"ASPHYXIA", "value":"HURTTYPE.ASPHYXIA", "meta":"HURTTYPE", "type":"local", "score":6},
    {"name":"HURTTYPE.BOMB", "caption":"BOMB", "value":"HURTTYPE.BOMB", "meta":"HURTTYPE", "type":"local", "score":6},
    {"name":"HURTTYPE.BURNING", "caption":"BURNING", "value":"HURTTYPE.BURNING", "meta":"HURTTYPE", "type":"local", "score":6},
    {"name":"HURTTYPE.CACTUS", "caption":"CACTUS", "value":"HURTTYPE.CACTUS", "meta":"HURTTYPE", "type":"local", "score":6},
    {"name":"HURTTYPE.DROWN", "caption":"DROWN", "value":"HURTTYPE.DROWN", "meta":"HURTTYPE", "type":"local", "score":6},
    {"name":"HURTTYPE.FALL", "caption":"FALL", "value":"HURTTYPE.FALL", "meta":"HURTTYPE", "type":"local", "score":6},
    {"name":"HURTTYPE.LASER", "caption":"LASER", "value":"HURTTYPE.LASER", "meta":"HURTTYPE", "type":"local", "score":6},
    {"name":"HURTTYPE.MAGIC", "caption":"MAGIC", "value":"HURTTYPE.MAGIC", "meta":"HURTTYPE", "type":"local", "score":6},
    {"name":"HURTTYPE.MELEE", "caption":"MELEE", "value":"HURTTYPE.MELEE", "meta":"HURTTYPE", "type":"local", "score":6},
    {"name":"HURTTYPE.PHYSICS", "caption":"PHYSICS", "value":"HURTTYPE.PHYSICS", "meta":"HURTTYPE", "type":"local", "score":6},
    {"name":"HURTTYPE.REMOTE", "caption":"REMOTE", "value":"HURTTYPE.REMOTE", "meta":"HURTTYPE", "type":"local", "score":6},
    {"name":"HURTTYPE.SUFFOCATE", "caption":"SUFFOCATE", "value":"HURTTYPE.SUFFOCATE", "meta":"HURTTYPE", "type":"local", "score":6},
    {"name":"HURTTYPE.SUN", "caption":"SUN", "value":"HURTTYPE.SUN", "meta":"HURTTYPE", "type":"local", "score":6},
    {"name":"HURTTYPE.TOXIN", "caption":"TOXIN", "value":"HURTTYPE.TOXIN", "meta":"HURTTYPE", "type":"local", "score":6},
    {"name":"HURTTYPE.WITHER", "caption":"WITHER", "value":"HURTTYPE.WITHER", "meta":"HURTTYPE", "type":"local", "score":6},
    {"name":"MAPMARK_TYPE.MMARK_CIRCLE", "caption":"MMARK_CIRCLE", "value":"MAPMARK_TYPE.MMARK_CIRCLE", "meta":"MAPMARK_TYPE", "type":"local", "score":6},
    {"name":"MAPMARK_TYPE.MMARK_LINE", "caption":"MMARK_LINE", "value":"MAPMARK_TYPE.MMARK_LINE", "meta":"MAPMARK_TYPE", "type":"local", "score":6},
    {"name":"MAPMARK_TYPE.MMARK_RECTANGLE", "caption":"MMARK_RECTANGLE", "value":"MAPMARK_TYPE.MMARK_RECTANGLE", "meta":"MAPMARK_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MAX_MOB_MODATTR", "caption":"MAX_MOB_MODATTR", "value":"MODATTRIB_TYPE.MAX_MOB_MODATTR", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MAX_MOD_ATTRIB", "caption":"MAX_MOD_ATTRIB", "value":"MODATTRIB_TYPE.MAX_MOD_ATTRIB", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MAX_PLAYER_MODATTR", "caption":"MAX_PLAYER_MODATTR", "value":"MODATTRIB_TYPE.MAX_PLAYER_MODATTR", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_ACTOR_SCALE", "caption":"MODATTR_ACTOR_SCALE", "value":"MODATTRIB_TYPE.MODATTR_ACTOR_SCALE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_ARMOR_EXPLODE", "caption":"MODATTR_ARMOR_EXPLODE", "value":"MODATTRIB_TYPE.MODATTR_ARMOR_EXPLODE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_ARMOR_PUNCH", "caption":"MODATTR_ARMOR_PUNCH", "value":"MODATTRIB_TYPE.MODATTR_ARMOR_PUNCH", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_ARMOR_RANGE", "caption":"MODATTR_ARMOR_RANGE", "value":"MODATTRIB_TYPE.MODATTR_ARMOR_RANGE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_ATTACK_ANIMAL", "caption":"MODATTR_ATTACK_ANIMAL", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_ANIMAL", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_ATTACK_EXPLODE", "caption":"MODATTR_ATTACK_EXPLODE", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_EXPLODE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_ATTACK_FIRE", "caption":"MODATTR_ATTACK_FIRE", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_FIRE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_ATTACK_PLAYER", "caption":"MODATTR_ATTACK_PLAYER", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_PLAYER", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_ATTACK_POISON", "caption":"MODATTR_ATTACK_POISON", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_POISON", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_ATTACK_PUNCH", "caption":"MODATTR_ATTACK_PUNCH", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_PUNCH", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_ATTACK_RANGE", "caption":"MODATTR_ATTACK_RANGE", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_RANGE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_ATTACK_UNDEAD", "caption":"MODATTR_ATTACK_UNDEAD", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_UNDEAD", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_ATTACK_WITHER", "caption":"MODATTR_ATTACK_WITHER", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_WITHER", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_CRITICAL_HIT", "caption":"MODATTR_CRITICAL_HIT", "value":"MODATTRIB_TYPE.MODATTR_CRITICAL_HIT", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_EXPLODE", "caption":"MODATTR_DAMAGED_EXPLODE", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_EXPLODE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_FALLING", "caption":"MODATTR_DAMAGED_FALLING", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_FALLING", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_FIRE", "caption":"MODATTR_DAMAGED_FIRE", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_FIRE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_POISON", "caption":"MODATTR_DAMAGED_POISON", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_POISON", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_PUNCH", "caption":"MODATTR_DAMAGED_PUNCH", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_PUNCH", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_RANGE", "caption":"MODATTR_DAMAGED_RANGE", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_RANGE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_WITHER", "caption":"MODATTR_DAMAGED_WITHER", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_WITHER", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_DAMAGE_ABSORB", "caption":"MODATTR_DAMAGE_ABSORB", "value":"MODATTRIB_TYPE.MODATTR_DAMAGE_ABSORB", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_DIG_SPEED", "caption":"MODATTR_DIG_SPEED", "value":"MODATTRIB_TYPE.MODATTR_DIG_SPEED", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_JUMP_SPEED", "caption":"MODATTR_JUMP_SPEED", "value":"MODATTRIB_TYPE.MODATTR_JUMP_SPEED", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_KNOCK", "caption":"MODATTR_KNOCK", "value":"MODATTRIB_TYPE.MODATTR_KNOCK", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_KNOCK_RESIST", "caption":"MODATTR_KNOCK_RESIST", "value":"MODATTRIB_TYPE.MODATTR_KNOCK_RESIST", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_KNOCK_RESIST_PROB", "caption":"MODATTR_KNOCK_RESIST_PROB", "value":"MODATTRIB_TYPE.MODATTR_KNOCK_RESIST_PROB", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_LUCK_DIG", "caption":"MODATTR_LUCK_DIG", "value":"MODATTRIB_TYPE.MODATTR_LUCK_DIG", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_LUCK_KILLMOB", "caption":"MODATTR_LUCK_KILLMOB", "value":"MODATTRIB_TYPE.MODATTR_LUCK_KILLMOB", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_MOVE_SPEED", "caption":"MODATTR_MOVE_SPEED", "value":"MODATTRIB_TYPE.MODATTR_MOVE_SPEED", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_OXYGEN_SUPPLY", "caption":"MODATTR_OXYGEN_SUPPLY", "value":"MODATTRIB_TYPE.MODATTR_OXYGEN_SUPPLY", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_SWIM_SPEED", "caption":"MODATTR_SWIM_SPEED", "value":"MODATTRIB_TYPE.MODATTR_SWIM_SPEED", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"MODATTRIB_TYPE.MODATTR_VIEW_BRIGHT", "caption":"MODATTR_VIEW_BRIGHT", "value":"MODATTRIB_TYPE.MODATTR_VIEW_BRIGHT", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
    {"name":"OBJ_TYPE.OBJTYPE_CREATURE", "caption":"OBJTYPE_CREATURE", "value":"OBJ_TYPE.OBJTYPE_CREATURE", "meta":"OBJ_TYPE", "type":"local", "score":6},
    {"name":"OBJ_TYPE.OBJTYPE_DROPITEM", "caption":"OBJTYPE_DROPITEM", "value":"OBJ_TYPE.OBJTYPE_DROPITEM", "meta":"OBJ_TYPE", "type":"local", "score":6},
    {"name":"OBJ_TYPE.OBJTYPE_MISSILE", "caption":"OBJTYPE_MISSILE", "value":"OBJ_TYPE.OBJTYPE_MISSILE", "meta":"OBJ_TYPE", "type":"local", "score":6},
    {"name":"OBJ_TYPE.OBJTYPE_PLAYER", "caption":"OBJTYPE_PLAYER", "value":"OBJ_TYPE.OBJTYPE_PLAYER", "meta":"OBJ_TYPE", "type":"local", "score":6},
    {"name":"PLAYERATTR.ATK_MELEE", "caption":"ATK_MELEE", "value":"PLAYERATTR.ATK_MELEE", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.ATK_REMOTE", "caption":"ATK_REMOTE", "value":"PLAYERATTR.ATK_REMOTE", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.CUR_HP", "caption":"CUR_HP", "value":"PLAYERATTR.CUR_HP", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.CUR_HUNGER", "caption":"CUR_HUNGER", "value":"PLAYERATTR.CUR_HUNGER", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.CUR_OXYGEN", "caption":"CUR_OXYGEN", "value":"PLAYERATTR.CUR_OXYGEN", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.DEF_MELEE", "caption":"DEF_MELEE", "value":"PLAYERATTR.DEF_MELEE", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.DEF_REMOTE", "caption":"DEF_REMOTE", "value":"PLAYERATTR.DEF_REMOTE", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.DIMENSION", "caption":"DIMENSION", "value":"PLAYERATTR.DIMENSION", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.DODGE", "caption":"DODGE", "value":"PLAYERATTR.DODGE", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.HP_RECOVER", "caption":"HP_RECOVER", "value":"PLAYERATTR.HP_RECOVER", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.JUMP_POWER", "caption":"JUMP_POWER", "value":"PLAYERATTR.JUMP_POWER", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.LEVEL", "caption":"LEVEL", "value":"PLAYERATTR.LEVEL", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.LIFE_NUM", "caption":"LIFE_NUM", "value":"PLAYERATTR.LIFE_NUM", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.MAX_HP", "caption":"MAX_HP", "value":"PLAYERATTR.MAX_HP", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.MAX_HUNGER", "caption":"MAX_HUNGER", "value":"PLAYERATTR.MAX_HUNGER", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.MAX_OXYGEN", "caption":"MAX_OXYGEN", "value":"PLAYERATTR.MAX_OXYGEN", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.RECOVER_OXYGEN", "caption":"RECOVER_OXYGEN", "value":"PLAYERATTR.RECOVER_OXYGEN", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.RUN_SPEED", "caption":"RUN_SPEED", "value":"PLAYERATTR.RUN_SPEED", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.SCORE", "caption":"SCORE", "value":"PLAYERATTR.SCORE", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.SNEAK_SPEED", "caption":"SNEAK_SPEED", "value":"PLAYERATTR.SNEAK_SPEED", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.SWIN_SPEED", "caption":"SWIN_SPEED", "value":"PLAYERATTR.SWIN_SPEED", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR.WALK_SPEED", "caption":"WALK_SPEED", "value":"PLAYERATTR.WALK_SPEED", "meta":"PLAYERATTR", "type":"local", "score":6},
    {"name":"PLAYERATTR_ENABLE.ENABLE_ATTACK", "caption":"ENABLE_ATTACK", "value":"PLAYERATTR_ENABLE.ENABLE_ATTACK", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
    {"name":"PLAYERATTR_ENABLE.ENABLE_BEATTACKED", "caption":"ENABLE_BEATTACKED", "value":"PLAYERATTR_ENABLE.ENABLE_BEATTACKED", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
    {"name":"PLAYERATTR_ENABLE.ENABLE_BEKILLED", "caption":"ENABLE_BEKILLED", "value":"PLAYERATTR_ENABLE.ENABLE_BEKILLED", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
    {"name":"PLAYERATTR_ENABLE.ENABLE_DEATHDROPITEM", "caption":"ENABLE_DEATHDROPITEM", "value":"PLAYERATTR_ENABLE.ENABLE_DEATHDROPITEM", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
    {"name":"PLAYERATTR_ENABLE.ENABLE_DESTROYBLOCK", "caption":"ENABLE_DESTROYBLOCK", "value":"PLAYERATTR_ENABLE.ENABLE_DESTROYBLOCK", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
    {"name":"PLAYERATTR_ENABLE.ENABLE_DISCARDITEM", "caption":"ENABLE_DISCARDITEM", "value":"PLAYERATTR_ENABLE.ENABLE_DISCARDITEM", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
    {"name":"PLAYERATTR_ENABLE.ENABLE_MOVE", "caption":"ENABLE_MOVE", "value":"PLAYERATTR_ENABLE.ENABLE_MOVE", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
    {"name":"PLAYERATTR_ENABLE.ENABLE_OPERATEBLOCK", "caption":"ENABLE_OPERATEBLOCK", "value":"PLAYERATTR_ENABLE.ENABLE_OPERATEBLOCK", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
    {"name":"PLAYERATTR_ENABLE.ENABLE_PICKUP", "caption":"ENABLE_PICKUP", "value":"PLAYERATTR_ENABLE.ENABLE_PICKUP", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
    {"name":"PLAYERATTR_ENABLE.ENABLE_PLACEBLOCK", "caption":"ENABLE_PLACEBLOCK", "value":"PLAYERATTR_ENABLE.ENABLE_PLACEBLOCK", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
    {"name":"PLAYERATTR_ENABLE.ENABLE_USEITEM", "caption":"ENABLE_USEITEM", "value":"PLAYERATTR_ENABLE.ENABLE_USEITEM", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
    {"name":"PLAYERATTR_ENABLE.ENABLE_VEHICLEAUTOFORWARD", "caption":"ENABLE_VEHICLEAUTOFORWARD", "value":"PLAYERATTR_ENABLE.ENABLE_VEHICLEAUTOFORWARD", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
    {"name":"PLAYERATTR_ITEM.ITEM_DISABLE_DROP", "caption":"ITEM_DISABLE_DROP", "value":"PLAYERATTR_ITEM.ITEM_DISABLE_DROP", "meta":"PLAYERATTR_ITEM", "type":"local", "score":6},
    {"name":"PLAYERATTR_ITEM.ITEM_DISABLE_THROW", "caption":"ITEM_DISABLE_THROW", "value":"PLAYERATTR_ITEM.ITEM_DISABLE_THROW", "meta":"PLAYERATTR_ITEM", "type":"local", "score":6},
    {"name":"PLAYERMOTION.DOWN", "caption":"DOWN", "value":"PLAYERMOTION.DOWN", "meta":"PLAYERMOTION", "type":"local", "score":6},
    {"name":"PLAYERMOTION.FALL", "caption":"FALL", "value":"PLAYERMOTION.FALL", "meta":"PLAYERMOTION", "type":"local", "score":6},
    {"name":"PLAYERMOTION.FALL_GROUND", "caption":"FALL_GROUND", "value":"PLAYERMOTION.FALL_GROUND", "meta":"PLAYERMOTION", "type":"local", "score":6},
    {"name":"PLAYERMOTION.JUMP", "caption":"JUMP", "value":"PLAYERMOTION.JUMP", "meta":"PLAYERMOTION", "type":"local", "score":6},
    {"name":"PLAYERMOTION.JUMP_TWICE", "caption":"JUMP_TWICE", "value":"PLAYERMOTION.JUMP_TWICE", "meta":"PLAYERMOTION", "type":"local", "score":6},
    {"name":"PLAYERMOTION.RUN", "caption":"RUN", "value":"PLAYERMOTION.RUN", "meta":"PLAYERMOTION", "type":"local", "score":6},
    {"name":"PLAYERMOTION.SNEAK", "caption":"SNEAK", "value":"PLAYERMOTION.SNEAK", "meta":"PLAYERMOTION", "type":"local", "score":6},
    {"name":"PLAYERMOTION.STATIC", "caption":"STATIC", "value":"PLAYERMOTION.STATIC", "meta":"PLAYERMOTION", "type":"local", "score":6},
    {"name":"PLAYERMOTION.TURNBACK", "caption":"TURNBACK", "value":"PLAYERMOTION.TURNBACK", "meta":"PLAYERMOTION", "type":"local", "score":6},
    {"name":"PLAYERMOTION.UP", "caption":"UP", "value":"PLAYERMOTION.UP", "meta":"PLAYERMOTION", "type":"local", "score":6},
    {"name":"PLAYERMOTION.WALK", "caption":"WALK", "value":"PLAYERMOTION.WALK", "meta":"PLAYERMOTION", "type":"local", "score":6},
    {"name":"RESLIBTYPE.BLOCK", "caption":"BLOCK", "value":"RESLIBTYPE.BLOCK", "meta":"RESLIBTYPE", "type":"local", "score":6},
    {"name":"RESLIBTYPE.ITEM", "caption":"ITEM", "value":"RESLIBTYPE.ITEM", "meta":"RESLIBTYPE", "type":"local", "score":6},
    {"name":"RESLIBTYPE.MONSTER", "caption":"MONSTER", "value":"RESLIBTYPE.MONSTER", "meta":"RESLIBTYPE", "type":"local", "score":6},
    {"name":"RESLIBTYPE.NONE", "caption":"NONE", "value":"RESLIBTYPE.NONE", "meta":"RESLIBTYPE", "type":"local", "score":6},
    {"name":"RESLIBTYPE.PARTICLE", "caption":"PARTICLE", "value":"RESLIBTYPE.PARTICLE", "meta":"RESLIBTYPE", "type":"local", "score":6},
    {"name":"RESLIBTYPE.SOUND", "caption":"SOUND", "value":"RESLIBTYPE.SOUND", "meta":"RESLIBTYPE", "type":"local", "score":6},
    {"name":"TEAMATTR.PLAYER_NUM", "caption":"PLAYER_NUM", "value":"TEAMATTR.PLAYER_NUM", "meta":"TEAMATTR", "type":"local", "score":6},
    {"name":"TEAMATTR.SCORE", "caption":"SCORE", "value":"TEAMATTR.SCORE", "meta":"TEAMATTR", "type":"local", "score":6},
    {"name":"TEAM_RESULTS.TEAM_RESULTS_DOGFALL", "caption":"TEAM_RESULTS_DOGFALL", "value":"TEAM_RESULTS.TEAM_RESULTS_DOGFALL", "meta":"TEAM_RESULTS", "type":"local", "score":6},
    {"name":"TEAM_RESULTS.TEAM_RESULTS_LOSE", "caption":"TEAM_RESULTS_LOSE", "value":"TEAM_RESULTS.TEAM_RESULTS_LOSE", "meta":"TEAM_RESULTS", "type":"local", "score":6},
    {"name":"TEAM_RESULTS.TEAM_RESULTS_NONE", "caption":"TEAM_RESULTS_NONE", "value":"TEAM_RESULTS.TEAM_RESULTS_NONE", "meta":"TEAM_RESULTS", "type":"local", "score":6},
    {"name":"TEAM_RESULTS.TEAM_RESULTS_WIN", "caption":"TEAM_RESULTS_WIN", "value":"TEAM_RESULTS.TEAM_RESULTS_WIN", "meta":"TEAM_RESULTS", "type":"local", "score":6},
    {"name":"TerrainType.TERRAIN_FLAT", "caption":"TERRAIN_FLAT", "value":"TerrainType.TERRAIN_FLAT", "meta":"TerrainType", "type":"local", "score":6},
    {"name":"TerrainType.TERRAIN_NORMAL", "caption":"TERRAIN_NORMAL", "value":"TerrainType.TERRAIN_NORMAL", "meta":"TerrainType", "type":"local", "score":6},
    {"name":"VIEWPORTTYPE.BACKVIEW", "caption":"BACKVIEW", "value":"VIEWPORTTYPE.BACKVIEW", "meta":"VIEWPORTTYPE", "type":"local", "score":6},
    {"name":"VIEWPORTTYPE.CUSTOMVIEW", "caption":"CUSTOMVIEW", "value":"VIEWPORTTYPE.CUSTOMVIEW", "meta":"VIEWPORTTYPE", "type":"local", "score":6},
    {"name":"VIEWPORTTYPE.FRONTVIEW", "caption":"FRONTVIEW", "value":"VIEWPORTTYPE.FRONTVIEW", "meta":"VIEWPORTTYPE", "type":"local", "score":6},
    {"name":"VIEWPORTTYPE.MAINVIEW", "caption":"MAINVIEW", "value":"VIEWPORTTYPE.MAINVIEW", "meta":"VIEWPORTTYPE", "type":"local", "score":6},
    {"name":"VIEWPORTTYPE.TOPVIEW", "caption":"TOPVIEW", "value":"VIEWPORTTYPE.TOPVIEW", "meta":"VIEWPORTTYPE", "type":"local", "score":6},
    {"name":"WEATHERSTATUS.RAIN", "caption":"RAIN", "value":"WEATHERSTATUS.RAIN", "meta":"WEATHERSTATUS", "type":"local", "score":6},
    {"name":"WEATHERSTATUS.SHINE", "caption":"SHINE", "value":"WEATHERSTATUS.SHINE", "meta":"WEATHERSTATUS", "type":"local", "score":6},
    {"name":"WEATHERSTATUS.SHINE_AND_RAIN", "caption":"SHINE_AND_RAIN", "value":"WEATHERSTATUS.SHINE_AND_RAIN", "meta":"WEATHERSTATUS", "type":"local", "score":6},
    {"name":"WorldType.OWTYPE_CREATE", "caption":"OWTYPE_CREATE", "value":"WorldType.OWTYPE_CREATE", "meta":"WorldType", "type":"local", "score":6},
    {"name":"WorldType.OWTYPE_CREATE_RUNGAME", "caption":"OWTYPE_CREATE_RUNGAME", "value":"WorldType.OWTYPE_CREATE_RUNGAME", "meta":"WorldType", "type":"local", "score":6},
    {"name":"WorldType.OWTYPE_EXTREMITY", "caption":"OWTYPE_EXTREMITY", "value":"WorldType.OWTYPE_EXTREMITY", "meta":"WorldType", "type":"local", "score":6},
    {"name":"WorldType.OWTYPE_FREEMODE", "caption":"OWTYPE_FREEMODE", "value":"WorldType.OWTYPE_FREEMODE", "meta":"WorldType", "type":"local", "score":6},
    {"name":"WorldType.OWTYPE_GAMEMAKER", "caption":"OWTYPE_GAMEMAKER", "value":"WorldType.OWTYPE_GAMEMAKER", "meta":"WorldType", "type":"local", "score":6},
    {"name":"WorldType.OWTYPE_GAMEMAKER_RUN", "caption":"OWTYPE_GAMEMAKER_RUN", "value":"WorldType.OWTYPE_GAMEMAKER_RUN", "meta":"WorldType", "type":"local", "score":6},
    {"name":"WorldType.OWTYPE_RECORD", "caption":"OWTYPE_RECORD", "value":"WorldType.OWTYPE_RECORD", "meta":"WorldType", "type":"local", "score":6},
    {"name":"WorldType.OWTYPE_SINGLE", "caption":"OWTYPE_SINGLE", "value":"WorldType.OWTYPE_SINGLE", "meta":"WorldType", "type":"local", "score":6},
  ]
  return jsonObj
}

