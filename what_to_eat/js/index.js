window.onload = function () {

    function choose_menu(){
        var menus  = ["馄饨","拉面", "烩面", "热干面", "刀削面", "油泼面", "炸酱面", "炒面", "重庆小面", "米线", "酸辣粉", "土豆粉",
            "螺狮粉", "凉皮儿", "麻辣烫肉夹馍", "羊肉汤", "炒饭", "盖浇饭", "卤肉饭", "烤肉饭", "黄焖鸡米饭", "驴肉火烧", "川菜",
            "麻辣香锅", "火锅", "酸菜鱼", "烤串","披萨", "烤鸭", "汉堡", "炸鸡", "寿司", "蟹黄包", "粽子", "煎饼果子", "生煎", "炒年糕"];

        // 生成一个0到1的随机数
        random_num = Math.random();

        //将随机数扩大N倍 (N为数组的长度), 然后取整,获得随机的索引!

        menus_index = parseInt(random_num * (menus.length));

        // 获得食物
        the_menu = menus[menus_index];
        // 返回食物
        return the_menu

    }

    // 预先定义食物变量
    var my_food;

    //获取两个元素对象
    var btn = document.getElementById("ibtn");
    var best_food = document.getElementById("ifood");

    // 点击按钮后的事件
    btn.onclick = (function () {

        // 获取新食物
        var new_food;
        new_food = choose_menu();
        // 将这次的食物与上次对比,如果不相同,则替换为 新食物的名称
        if (new_food != my_food){

            my_food = new_food;

        }
        //如果和上次重复了,就自动再抽一次,如果又重复了(遇到几率这么的情况,实属不易),建议这顿就吃个吧!

        else{

            new_food = choose_menu()

        }

        // 更新显示的食物名称

        best_food.innerHTML= the_menu;

        // 更新按钮显示的文字,只是第一次起作用
        btn.innerHTML = "换一个";

    })
    
};