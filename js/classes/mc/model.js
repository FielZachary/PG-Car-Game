class Model
{
    constructor()
    {
        
        this._score = 0
        this.soundOn = true
        this._musicOn = true
        this.gameOver = false
        this.score = 0
        
    }   
    set musicOn(val)
    {
        this._musicOn = val
        emitter.emit(G.MUSIC_CHANGED)
    }
    get musicOn()
    {
        return this._musicOn
    }
    set score(val)
    {
        this._score = val
    }
    get score()
    {
        return this._score
    }






}