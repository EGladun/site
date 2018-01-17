var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Герои Ведьмака' });
});

/* Страница Геральта */ 
router.get("/geralt",function(req,res,next){
    res.render('witcher',{ 
        title:"Геральт", 
        picture: "images/geralt.png", 
        about: "Ведьмак, убийца чудовищ" 
    })
})

/* Страница Лютика */
router.get("/lutic",function(req,res,next){
    res.render('witcher',{ 
        title:"Лютик", 
        picture: "images/lutic.png", 
        about: "Поэт, лучший друг Геральта" 
    })
})

/* Страница Йеннифер */
router.get("/yennifer",function(req,res,next){
    res.render('witcher',{ 
        title:"Йеннифер", 
        picture: "images/yennifer.png", 
        about: "Довольно своенравная, вспыльчивая чародейка" 
    })
})

/* Страница Трисс */
router.get("/triss",function(req,res,next){
    res.render('witcher',{ 
        title:"Трисс", 
        picture: "images/triss.jpg", 
        about: "Молодая чародейка, не раз помогала ведьмаку" 
    })
})

/* Страница Цири */
router.get("/ciri",function(req,res,next){
    res.render('witcher',{ 
        title:"Цири", 
        picture: "images/ciri.png", 
        about: "Девочка с пепельными волосами, предназначение Геральта" 
    })
})

/* Страница персонажей */
router.get("/all",function(req,res,next){
    res.render('witcher',{
        title:"Персонажи",
        picture: "images/all.jpg",
        about: "Самые известные персонажи мира ведьмака"
    })
})

module.exports = router;
