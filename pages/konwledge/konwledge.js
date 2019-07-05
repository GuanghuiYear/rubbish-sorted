Page({
  data: {
    click:0,
    active:0,
    navson:[
      {
        "class": "blue",
        "title": "可回收",
        "context":"可回收物主要包括废纸、塑料、玻璃、金属和布料五大类。 废纸：主要包括报纸、期刊、图书、各种包装纸等。但是，要注意纸巾和厕所纸由于水溶性太强不可回收。 塑料：各种塑料袋、塑料泡沫、塑料包装、一次性塑料餐盒餐具、硬塑料、塑料牙刷、塑料杯子、矿泉水瓶等。 玻璃：主要包括各种玻璃瓶、碎玻璃片、镜子、暖瓶等。 金属物：主要包括易拉罐、罐头盒等。 布料：主要包括废弃衣服、桌布、洗脸巾、书包、鞋等。 这些垃圾通过综合处理回收利用，可以减少污染，节省资源。如每回收1吨废纸可造好纸850公斤，节省木材300公斤，比等量生产减少污染74%；每回收1吨塑料饮料瓶可获得0.7吨二级原料；每回收1吨废钢铁可炼好钢0.9吨，比用矿石冶炼节约成本47%，减少空气污染75%，减少97%的水污染和固体废物。"
      },
      {
        "class": "green",
        "title": "湿垃圾",
        "context": "湿垃圾 废纸：主要包括报纸、期刊、图书、各种包装纸等。但是，要注意纸巾和厕所纸由于水溶性太强不可回收。 塑料：各种塑料袋、塑料泡沫、塑料包装、一次性塑料餐盒餐具、硬塑料、塑料牙刷、塑料杯子、矿泉水瓶等。 玻璃：主要包括各种玻璃瓶、碎玻璃片、镜子、暖瓶等。 金属物：主要包括易拉罐、罐头盒等。 布料：主要包括废弃衣服、桌布、洗脸巾、书包、鞋等。 这些垃圾通过综合处理回收利用，可以减少污染，节省资源。如每回收1吨废纸可造好纸850公斤，节省木材300公斤，比等量生产减少污染74%；每回收1吨塑料饮料瓶可获得0.7吨二级原料；每回收1吨废钢铁可炼好钢0.9吨，比用矿石冶炼节约成本47%，减少空气污染75%，减少97%的水污染和固体废物。"
      },
      {
        "class": "orange",
        "title": "干垃圾",
        "context": "干垃圾 废纸：主要包括报纸、期刊、图书、各种包装纸等。但是，要注意纸巾和厕所纸由于水溶性太强不可回收。 塑料：各种塑料袋、塑料泡沫、塑料包装、一次性塑料餐盒餐具、硬塑料、塑料牙刷、塑料杯子、矿泉水瓶等。 玻璃：主要包括各种玻璃瓶、碎玻璃片、镜子、暖瓶等。 金属物：主要包括易拉罐、罐头盒等。 布料：主要包括废弃衣服、桌布、洗脸巾、书包、鞋等。 这些垃圾通过综合处理回收利用，可以减少污染，节省资源。如每回收1吨废纸可造好纸850公斤，节省木材300公斤，比等量生产减少污染74%；每回收1吨塑料饮料瓶可获得0.7吨二级原料；每回收1吨废钢铁可炼好钢0.9吨，比用矿石冶炼节约成本47%，减少空气污染75%，减少97%的水污染和固体废物。"
      },
      {
        "class": "red",
        "title": "有害垃圾",
        "context": "有害垃圾 废纸：主要包括报纸、期刊、图书、各种包装纸等。但是，要注意纸巾和厕所纸由于水溶性太强不可回收。 塑料：各种塑料袋、塑料泡沫、塑料包装、一次性塑料餐盒餐具、硬塑料、塑料牙刷、塑料杯子、矿泉水瓶等。 玻璃：主要包括各种玻璃瓶、碎玻璃片、镜子、暖瓶等。 金属物：主要包括易拉罐、罐头盒等。 布料：主要包括废弃衣服、桌布、洗脸巾、书包、鞋等。 这些垃圾通过综合处理回收利用，可以减少污染，节省资源。如每回收1吨废纸可造好纸850公斤，节省木材300公斤，比等量生产减少污染74%；每回收1吨塑料饮料瓶可获得0.7吨二级原料；每回收1吨废钢铁可炼好钢0.9吨，比用矿石冶炼节约成本47%，减少空气污染75%，减少97%的水污染和固体废物。"
      }
    ]    
  },
  onLoad: function (options) {

  },
  rubbishDisplay:function(e){
    this.setData({
      active: e.currentTarget.dataset.index
    })
  },
})