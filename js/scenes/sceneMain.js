class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {

    }


    create() {

        emitter = new Phaser.Events.EventEmitter()
        controller = new Controller()
        var mediaManager = new MediaManager({ scene: this })
        //mediaManager.setBackgroundMusic("backgroundMusic")//

        model.gameOver = false
        model.speed = 1
        model.score = 0
        model.speedUpdated = true;
        



        console.log("Ready!");
        this.road = new Road({ scene: this });
        this.road.x = game.config.width * .25;
        this.road.makeLines();
        //
        //
        this.road2 = new Road({ scene: this });
        this.road2.x = game.config.width * .75;
        this.road2.makeLines();

        this.road2.car.setFrame(1)

        this.alignGrid = new AlignGrid({ scene: this, rows: 5, cols: 5 })
        //this.alignGrid.showNumbers()  
        //this.alignGrid.placeAtIndex(4, this.sb)


        var soundButtons = new SoundButtons({ scene: this })

        this.sb = new ScoreBox({ scene: this })

        this.sb.x = game.config.width / 2
        this.sb.y = 50
        emitter.on(G.SCORE_UPDATED, this.speedUpdated, this)
        
    }
    speedUpdated() {
        if ((model.score / 5 == Math.floor(model.score / 5))) {
            model.speed+=.2
            console.log('speed up!');
        }
    }
    update() {
        this.road.moveLines();
        this.road.moveObject();
        this.road2.moveLines();
        this.road2.moveObject();
 
    }
}