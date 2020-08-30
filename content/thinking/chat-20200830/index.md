---
title: Chat with Joe(2020.08.30)
date: 2020-08-31
type: thinking
category:
spoiler:
tags:
# readtime:
---

import Chat from '~comps/chat'

<Chat
  selfName="lencx"
  buddyName="Joe"
  dataSource={[
    { type: 'buddy', message: '我可能还得分出来一级' },
    { type: 'buddy', message: '对应食堂不同楼层' },
    { type: 'self', message: '每层伙食不同？其实不需要分级了' },
    { type: 'self', message: '这个就涉及到你的数据结构怎么处理了，并不是层级越深越好，越深需要的遍历也会越多' },
    { type: 'buddy', message: 'ok' },
    { type: 'self', message: '你先想想，其实我刚才已经提到了一个知识点' },
    { type: 'buddy', message: '那我标记一下楼层' },
    { type: 'self', message: '数组对象是可以去拓展的' },
    { type: 'buddy', message: 'children还可以有children' },
    { type: 'self', message: '最好用纸笔画一下，他们之间的关系，找到一个最好的结构' },
    { type: 'buddy', message: '我想做就是它们平行' },
    { type: 'self', message: '可以想想，每一个菜可以分配到哪些属性？如果属性过多，又可以怎么去精简你的属性？' },
    { type: 'buddy', message: '等下我找个比' },
    { type: 'self', message: '提示一下，每个菜都有自己的id，可以根据id做一些关联' },
    { type: 'buddy', message: '一对多吗' },
    { type: 'self', message: '你可以先画画，理理思路，我说的不一定对' },
    { type: 'self', message: '程序没有对错，只有更好的运行，与不能运行。更好就是看你的能力能做到什么程度，你的能力决定程序的运行状态' },
    { type: 'self', message: '再提示一下：楼层，窗口，都是位置信息' },
    { type: 'buddy', message: '一个窗口给一个id' },
    { type: 'self', message: '今天这个菜在二楼，明天可能在一楼' },
    { type: 'buddy', message: 'mod？？？' },
    { type: 'buddy', message: '那就是两张表吗' },
    { type: 'self', message: '也可能换窗口' },
    { type: 'buddy', message: '我们学校的菜基本上不改变楼和窗口））（不过这个思路很好！）' },
    { type: 'self', message: '记住，做程序需要的是通用解决方案，只有你考虑的足够多，你的程序才能越稳定，越健壮，需求永远都是不确定的' },
    { type: 'buddy', message: '那就是给菜编号 给窗口编号 一个菜对应一个窗口号' },
    { type: 'buddy', message: '我脑子里连b-树都出来了' },
    { type: 'self', message: '每个东西都有自己的属性信息，他们怎么产生关系，怎么去维护他们的关系是根据需求去做的，基本信息其实就是可复用的通用数据结构，只有他们之间的关系才是我们要做的需求' },
    { type: 'self', message: '好久没这样聊过天了，感觉我也在提高自己的语言及表达能力' },
    { type: 'buddy', message: '哈哈哈哈 我在提高理解能力和学习能力' },
    { type: 'self', message: '他们的关系是需求，即是你要写的逻辑' },
    { type: 'buddy', message: '最终的那些功能就是把数据进行处理和展示' },
    { type: 'self', message: '是的，还有就是最后的展示及功能和真实的数据结构(为了优雅，拓展性及可维护，可能不能满足需求)有时候是不能对应的，就需要做中间层去处理了' },
    { type: 'buddy', message: '中间层就是我们写的代码咯？' },
    { type: 'self', message: '也就是你刚才处理的list方法，也可以理解为一个中间层，只不过那个中间层其实是不需要的' },
    { type: 'buddy', message: '是啊哈哈' },
    { type: 'buddy', message: '不过我还有很多想加的功能' },
    { type: 'buddy', message: '现在乱写数据结构可能还可以勉强用用' },
    { type: 'buddy', message: '到后面就' },
    { type: 'buddy', message: '而且等我真的去学校采集数据了 也不能一个一个手动复制粘贴' },
    { type: 'buddy', message: '就要用类似你之前发的js代码的那种方式批量放进去' },
    { type: 'self', message: '你可以这么理解，在后端为了数据结构的稳定，特殊需求的处理可以做一个中间层，输出数据给前端。但是返回给前端的数据，可能又不满足于前端页面的展示需求，而前端又可以做一个中间层，去把数据格式化成展示需要的数据格式' },
    { type: 'self', message: '数据采集一般以excel或者文档形式去记录，这时候就需要你写个脚本，把数据转化成你需要的格式' },
    { type: 'buddy', message: '嗯哼' },
    { type: 'buddy', message: '（然后练习写脚本' },
    { type: 'self', message: '￼￼￼￼😅坑越来越深了' },
    { type: 'self', message: '哈哈哈，是不是感觉要学的东西，越来越多了' },
    { type: 'self', message: '我就是越学，感觉自己越渺小，也就是知道的越多，才发现不会的越多，这是个死循环' },
    { type: 'buddy', message: '至少越来越强）' },
    { type: 'buddy', message: '比啥也不知道傻乐好' },
    { type: 'self', message: '嗯嗯，其实刚才扯太多了，前期想的太多不一定是好事，但是自己可以有一个轮廓，知道自己应该怎么做才能更好，保持思考，任何复杂的系统都是从简单开始的。但是自己的简单要能够去演化' },
    { type: 'self', message: '￼😅，感觉越聊越严肃了' },
    { type: 'buddy', message: '我之前就是' },
    { type: 'buddy', message: '越学越不会' },
    { type: 'buddy', message: '🤷‍♀️' },
    { type: 'self', message: '都会经历这个阶段吧，后面我也有了自己的一些理解，其实学的东西影响的是我们的思维方式，以及我们的学习能力。思维方式，解决问题的能力及学习力才是我们的核心竞争力' },
  ]}
/>