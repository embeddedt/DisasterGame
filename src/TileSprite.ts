import * as PIXI from 'pixi.js';
import { getAverageHue, genHitmapAndAverageHue } from './utilities';

type AcceptableBases = PIXI.Sprite|PIXI.AnimatedSprite;
export default class TileSprite<T extends AcceptableBases = AcceptableBases> {
    disasterGameIndex: number;
    _tileSize: number = null;
    usingHitmap: boolean = true;
    getBaseObject(): T {
        return this._base;
    }
    get tileSize() {
        return this._tileSize;
    }
    set tileSize(newVal: number) {
        this._tileSize = newVal;
        this.handleTextureResize();
    }
    get base() {
        return this._base;
    }
    get visible() {
        return this._base.visible;
    }
    set visible(v: boolean) {
        this._base.visible = v;
    }
    get x() {
        return this._base.x;
    }
    set x(x: number) {
        this._base.x = x;
    }
    get y() {
        return this._base.y;
    }
    set y(y: number) {
        this._base.y = y;
    }
    get texture() {
        return this._base.texture;
    }
    set texture(texture: PIXI.Texture) {
        if(texture == null) {
            this._base.texture = PIXI.Texture.EMPTY;
            return;
        }
        
        this._base.texture.off("update", this.handleTextureResize);
        this._base.texture = texture;
        this._base.texture.on("update", this.handleTextureResize);
        if((this.usingHitmap && typeof (texture.baseTexture as any).hitmap == 'undefined') || typeof (texture.baseTexture as any).averageHue == 'undefined') {
            genHitmapAndAverageHue(texture.baseTexture, 127);
        }
        this.handleTextureResize(false);
    }
    setInteractive(interactive: boolean) {
        this._base.interactive = interactive;
    }
    constructor(protected _base: T, index: number) {
        _base.texture = PIXI.Texture.EMPTY;
        this.disasterGameIndex = index;
        (_base as any).disasterGameIndex = index;
        this.handleTextureResize = this.handleTextureResize.bind(this);
        _base.anchor = new PIXI.Point(0, 1);
    }
    
    handleTextureResize(generateHitmap?: any) {
        if(this.tileSize == null)
            return;
        this._base.width = this.tileSize;
        this._base.scale.y = this._base.scale.x;
        this.setInteractive(this._base.interactive);
        /*
        if(generateHitmap != false && typeof (this.texture as any).hitmap != 'undefined') {
            genHitmap(this.texture.baseTexture, 127);
        }
        */
    }
}

const tempPoint = new PIXI.Point();
PIXI.Sprite.prototype.containsPoint = function (point) {
   
    this.worldTransform.applyInverse(point, tempPoint);
 
    const width = this._texture.orig.width;
    const height = this._texture.orig.height;
    const x1 = -width * this.anchor.x;
    let y1 = 0;
 
    let flag = false;
 
    if (tempPoint.x >= x1 && tempPoint.x < x1 + width)
    {
        y1 = -height * this.anchor.y;
 
        if (tempPoint.y >= y1 && tempPoint.y < y1 + height)
        {
            flag = true;
        }
    }
 
    if (!flag) {
        return false
    }

    // bitmap check
    const tex = this.texture;
    const baseTex = this.texture.baseTexture;
    const res = baseTex.resolution;
    if (!baseTex.hitmap) {
        return true;
    }
 
    const hitmap = baseTex.hitmap;
    // this does not account for rotation yet!!!
    let dx = Math.round((tempPoint.x - x1 + tex.frame.x) * res);
    let dy = Math.round((tempPoint.y - y1 + tex.frame.y) * res);
    let ind = (dx + dy * baseTex.realWidth);
    let ind1 = ind % 32;
    let ind2 = ind / 32 | 0;
    return (hitmap[ind2] & (1<<ind1)) !== 0;
}
