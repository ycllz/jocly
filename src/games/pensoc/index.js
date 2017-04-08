
var mvs = {
    "models": {
        "pensoc": {
            "plazza": "true",
            "title-en": "Penguin soccer",
            "module": "pensoc",
            "js": [
                "pensoc-model.js"
            ],
            "gameOptions": {
                "levelOptions": {
                    "distGoalFactor": 12,
                    "distBallFactor": -1,
                    "haveBallFactor": 3.2,
                    "reachableFactor": 0.1,
                    "ballReachableFactor": 3.4
                },
                "uctTransposition": "state"
            },
            "levels": [
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.63,
                    "ignoreLeaf": false,
                    "log": false,
                    "uncertaintyFactor": 3,
                    "name": "baby",
                    "label": "Baby",
                    "maxNodes": 2000
                },
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.63,
                    "ignoreLeaf": false,
                    "log": false,
                    "uncertaintyFactor": 3,
                    "name": "fast",
                    "label": "Fast [1sec]",
                    "maxDuration": 1,
                    "isDefault": true
                },
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.63,
                    "ignoreLeaf": false,
                    "log": false,
                    "uncertaintyFactor": 3,
                    "name": "papa",
                    "label": "Papa",
                    "maxNodes": 10000
                },
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.63,
                    "ignoreLeaf": false,
                    "log": false,
                    "uncertaintyFactor": 3,
                    "name": "mama",
                    "label": "Mama",
                    "maxNodes": 10000
                }
            ],
            "defaultLevel": 2,
            "summary": "Penguins playing soccer",
            "rules": {
                "en": "rules.html",
                "fr": "rules-fr.html"
            },
            "credits": {
                "en": "credits.html",
                "fr": "credits-fr.html"
            },
            "description": {
                "en": "description.html",
                "fr": "description-fr.html"
            },
            "thumbnail": "thumbnail.png",
            "strings": [],
            "debugEval": true
        }
    },
    "views": {
        "pensoc": {
            "title-en": "Penguin Soccer View",
            "module": "pensoc",
            "xdView": true,
            "js": [
                "pensoc-xd-view.js"
            ],
            "visuals": {
                "600x600": [
                    "res/visuals/pensoc-600x600-3d.jpg",
                    "res/visuals/pensoc-600x600-2d.jpg"
                ]
            },
            "css": [
                "pensoc.css"
            ],
            "preferredRatio": 1.1638,
            "switchable": true,
            "useShowMoves": true,
            "useNotation": true,
            "animateSelfMoves": false,
            "sounds": {
                "turn": "turn",
                "slide": "slide",
                "kick": "kick",
                "getup0": "hoha",
                "getup1": "hehop",
                "slide0": "ouai",
                "slide1": "hoho1",
                "slide2": "hoho1",
                "slide3": "oula1",
                "slide4": "oula2",
                "haha": "hahaha",
                "goout": "hehehehe"
            },
            "skins": [
                {
                    "name": "3dofficial",
                    "title": "Official 3D",
                    "3d": true,
                    "camera": {
                        "radius": 15,
                        "limitCamMoves": true,
                        "elevationMin": 0,
                        "rotationAngle": 110
                    },
                    "world": {
                        "skyLightIntensity": 0.2,
                        "skyLightPosition": {
                            "x": 24,
                            "y": 24,
                            "z": 5
                        },
                        "lightIntensity": 0.4,
                        "lightPosition": {
                            "x": -12,
                            "y": 12,
                            "z": 10
                        },
                        "lightShadowDarkness": 0.4,
                        "fog": false,
                        "color": 0
                    },
                    "preload": [
                        "smoothedfilegeo|0|/res/xd-view/meshes/banquise4.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/goals3.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/arrow.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/ring-target.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/soccerball2.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/icecube1.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/iceberg-small.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/ocean.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/mama-animated.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/daddy-animated.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/baby-animated.js",
                        "map|/res/xd-view/meshes/soccer-texture2.jpg",
                        "map|/res/xd-view/meshes/mama-A-diffusex512.jpg",
                        "map|/res/xd-view/meshes/mama-B-diffusex512.jpg",
                        "map|/res/xd-view/meshes/daddy-A-diffusex512.jpg",
                        "map|/res/xd-view/meshes/daddy-B-diffusex512.jpg",
                        "map|/res/xd-view/meshes/baby-A-diffusex512.jpg",
                        "map|/res/xd-view/meshes/baby-B-diffusex512.jpg"
                    ]
                },
                {
                    "name": "official",
                    "title": "Official 2D"
                }
            ],
            "defaultOptions": {
                "sounds": true,
                "notation": false,
                "moves": true
            },
            "preloadImages": {
                "background": "res/images/ps-background.jpg",
                "sprites": "res/images/ps-images.png"
            }
        }
    }
};

var games = {};

for(var name in mvs.models) {
    games[name] = {
        name: name,
        modelScripts: mvs.models[name].js,
        config: {
            status: true,
            model: mvs.models[name]
        }
    }
}

for(var name in mvs.views) {
    if(games[name]) {
        games[name].viewScripts = mvs.views[name].js;
        games[name].config.view = mvs.views[name];
    }
}

exports.games = Object.keys(games).map((name)=>{
    return games[name];
});
