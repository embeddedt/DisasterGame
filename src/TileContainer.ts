import * as PIXI from 'pixi.js';
import TileSprite from './TileSprite';
import { playAudio, HSVtoRGB, rgbToHexNum, getRandomArbitrary } from './utilities';
import RenderController from './RenderController';
import { TileSlant, overlayTextures } from './Tile';

const RISK_LEVEL_SHRINK_FACTOR = 0.95;

function randomPeopleVariation(n: number): number {
    return n + getRandomArbitrary(-0.02, 0.02);
}
export default class TileContainer extends PIXI.Container {
    tileObject: TileSprite;
    private tileHoverObject: TileSprite;
    tileBuildingObject: TileSprite;
    tileLeftObject: PIXI.Graphics;
    tileRightObject: PIXI.Graphics;
    tileAnimation: TileSprite<PIXI.AnimatedSprite>;
    tileRiskLevel: TileSprite;
    tileSelectionHighlight: TileSprite;
    disasterGameIndex: number;
    _tileSideHue: number;
    leftColor: number;
    rightColor: number;
    people: PIXI.Sprite[];
    set numPeople(newVal: number) {
        if(typeof this.people != 'undefined') {
            this.people.forEach(person => this.removeChild(person));
        }
        this.people = [];
        if(newVal > 0) {
            const personTexture = this.getTexture("sprites/person.png");
            for(var i = 0; i < newVal; i++) {
                this.people[i] = new PIXI.Sprite(personTexture);
                this.people[i].anchor = new PIXI.Point(0.5, 1);
                this.addChild(this.people[i]);
            }
            this.repositionPeople();
        }
    }
    get numPeople() {
        return this.people.length;
    }
    set tileSideHue(newVal: number) {
        this._tileSideHue = newVal;
        this.redrawTileSides();
    }
    get tileSideHue() {
        return this._tileSideHue;
    }
    private _slant: TileSlant;
    getOverlayTexture(): PIXI.Texture {
        if(this.slant == null)
            return this.getTexture(overlayTextures.noSlope);
        else
            return this.getTexture(overlayTextures[this.slant]);
    }
    set slant(newVal: TileSlant) {
        this._slant = newVal;
        this.redrawTileSides();
        this.tileRiskLevel.texture = this.getOverlayTexture();
        this.tileHoverObject.texture = this.getOverlayTexture();
        this.tileSelectionHighlight.texture = this.getOverlayTexture();
    }
    get slant() {
        return this._slant;
    }
    private _tileSize: number;
    get hoverVisible() {
        return this.tileHoverObject.visible;
    }
    set hoverVisible(visible: boolean) {
        this.tileHoverObject.visible = visible;
    }
    get tileSize() {
        return this._tileSize;
    }
    set tileSize(newVal: number) {
        this._tileSize = newVal;
        this.tileObject.tileSize = newVal;
        this.tileHoverObject.tileSize = newVal;
        this.tileSelectionHighlight.tileSize = newVal;
        this.tileAnimation.tileSize = newVal;
        this.tileRiskLevel.tileSize = newVal * RISK_LEVEL_SHRINK_FACTOR;
        if(typeof this.tileBuildingObject == 'object')
            this.tileBuildingObject.tileSize = newVal;

        this.repositionPeople();
        if(typeof newVal == 'number') {
            this.repositionTiles();
            
            this.redrawTileSides();
        }
    }
    repositionPeople() {
        this.people.forEach(person => {
            person.width = this.tileSize / 20;
            person.scale.y = person.scale.x;
            const pos = getRandomArbitrary(0.5, 0.9);
            person.x = pos * this.tileSize;
            person.y = (1-((pos-0.5)*0.55))*this.tileSize;
        });
    }
    repositionTiles() {
        this.tileObject.x = 0;
        this.tileObject.y = 1 * this.tileSize;
        this.tileHoverObject.x = 0;
        this.tileHoverObject.y = 1 * this.tileSize;
        this.tileAnimation.x = 0;
        this.tileSelectionHighlight.x = 0;
        this.tileSelectionHighlight.y = 1 * this.tileSize;
        this.tileAnimation.y = 1 * this.tileSize;
        if(typeof this.tileBuildingObject == 'object') {
            this.tileBuildingObject.x = 0;
            this.tileBuildingObject.y = 1 * this.tileSize;
        }
        this.tileRiskLevel.x = (1-RISK_LEVEL_SHRINK_FACTOR) * this.tileSize / 2; // 0.5 * this.tileSize;
        this.tileRiskLevel.y = (1-((1-RISK_LEVEL_SHRINK_FACTOR)/4)) * this.tileSize; //0.5 * this.tileSize;

        this.repositionPeople();
    }
    redrawTileSides() {
        const left_em = 0;
        const top_em = 0;
        if(typeof this.tileLeftObject == 'object') {
            this.tileLeftObject.cacheAsBitmap = false;
            this.tileLeftObject.clear();
            const color = HSVtoRGB(this.tileSideHue / 360, 67.9 / 100, 28 / 100);
            this.leftColor = rgbToHexNum(color);
            this.tileLeftObject.beginFill(this.leftColor);
            const leftXCoordinates = [ left_em * this.tileSize, this.tileSize * (left_em+0.5), this.tileSize * (left_em+0.5), left_em * this.tileSize];
            if(this.slant == null || this.slant == TileSlant.NortheastSouthwest) {
                this.tileLeftObject.drawPolygon([
                    new PIXI.Point(leftXCoordinates[0], this.tileSize * (top_em+0.75)),
                    new PIXI.Point(leftXCoordinates[1], this.tileSize * (top_em+1)),
                    new PIXI.Point(leftXCoordinates[2], this.tileSize * (top_em+1.5)),
                    new PIXI.Point(leftXCoordinates[3], this.tileSize * (top_em+1.25))
                ]);
            } else if(this.slant == TileSlant.SouthwestNortheast) {
                this.tileLeftObject.drawPolygon([
                    new PIXI.Point(leftXCoordinates[0], this.tileSize * (top_em+0.625)),
                    new PIXI.Point(leftXCoordinates[1], this.tileSize * (top_em+0.875)),
                    new PIXI.Point(leftXCoordinates[2], this.tileSize * (top_em+1.375)),
                    new PIXI.Point(leftXCoordinates[3], this.tileSize * (top_em+1.125))
                ]);
            } else if(this.slant == TileSlant.NorthwestSoutheast) {
                this.tileLeftObject.drawPolygon([
                    new PIXI.Point(leftXCoordinates[0], this.tileSize * (top_em+0.625)),
                    new PIXI.Point(leftXCoordinates[1], this.tileSize * (top_em+1)),
                    new PIXI.Point(leftXCoordinates[2], this.tileSize * (top_em+1.5)),
                    new PIXI.Point(leftXCoordinates[3], this.tileSize * (top_em+1.125))
                ]);
            } else if(this.slant == TileSlant.SoutheastNorthwest) {
                this.tileLeftObject.drawPolygon([
                    new PIXI.Point(leftXCoordinates[0], this.tileSize * (top_em+0.75)),
                    new PIXI.Point(leftXCoordinates[1], this.tileSize * (top_em+0.875)),
                    new PIXI.Point(leftXCoordinates[2], this.tileSize * (top_em+1.375)),
                    new PIXI.Point(leftXCoordinates[3], this.tileSize * (top_em+1.25))
                ]);
            }
            
            this.tileLeftObject.endFill();
            this.tileLeftObject.cacheAsBitmap = true;
        }

        if(typeof this.tileRightObject == 'object') {
            this.tileRightObject.cacheAsBitmap = true;
            this.tileRightObject.clear();
            const color = HSVtoRGB(this.tileSideHue / 360, 68.6 / 100, 35 / 100);
            this.rightColor = rgbToHexNum(color);
            this.tileRightObject.beginFill(this.rightColor);
            const rightXCoordinates = [ (left_em+1) * this.tileSize, this.tileSize * (left_em+0.5), this.tileSize * (left_em+0.5), this.tileSize * (left_em+1) ];
            if(this.slant == null || this.slant == TileSlant.NorthwestSoutheast) {
                this.tileRightObject.drawPolygon([
                    new PIXI.Point(rightXCoordinates[0], this.tileSize * (top_em+0.75)),
                    new PIXI.Point(rightXCoordinates[1], this.tileSize * (top_em+1)),
                    new PIXI.Point(rightXCoordinates[2], this.tileSize * (top_em+1.5)),
                    new PIXI.Point(rightXCoordinates[3], this.tileSize * (top_em+1.25))
                ]);
            } else if(this.slant == TileSlant.SouthwestNortheast) {
                this.tileRightObject.drawPolygon([
                    new PIXI.Point(rightXCoordinates[0], this.tileSize * (top_em+0.75)),
                    new PIXI.Point(rightXCoordinates[1], this.tileSize * (top_em+0.875)),
                    new PIXI.Point(rightXCoordinates[2], this.tileSize * (top_em+1.375)),
                    new PIXI.Point(rightXCoordinates[3], this.tileSize * (top_em+1.25))
                ]);
            } else if(this.slant == TileSlant.NortheastSouthwest) {
                this.tileRightObject.drawPolygon([
                    new PIXI.Point(rightXCoordinates[0], this.tileSize * (top_em+0.625)),
                    new PIXI.Point(rightXCoordinates[1], this.tileSize * (top_em+1)),
                    new PIXI.Point(rightXCoordinates[2], this.tileSize * (top_em+1.5)),
                    new PIXI.Point(rightXCoordinates[3], this.tileSize * (top_em+1.125))
                ]);
            } else if(this.slant == TileSlant.SoutheastNorthwest) {
                this.tileRightObject.drawPolygon([
                    new PIXI.Point(rightXCoordinates[0], this.tileSize * (top_em+0.625)),
                    new PIXI.Point(rightXCoordinates[1], this.tileSize * (top_em+0.875)),
                    new PIXI.Point(rightXCoordinates[2], this.tileSize * (top_em+1.375)),
                    new PIXI.Point(rightXCoordinates[3], this.tileSize * (top_em+1.125))
                ]);
            }
            this.tileRightObject.endFill();
            this.tileRightObject.cacheAsBitmap = false;
        }
        
    }
    onForwardEvent(newEventName: string, evt: PIXI.interaction.InteractionEvent) {
        this.emit(newEventName, evt);
    }
    triggerExplosion(): Promise<void> {
        return new Promise(resolve => {
            playAudio("audio/explosion.mp3", () => {
                this.tileAnimation.visible = true;
                RenderController.activeAnimations.add(this.tileAnimation);
                this.tileAnimation.base.gotoAndPlay(0);
                resolve();
            }, false);
        });
        
    }
    lastTouch: Touch;
    handleTouchEvent(e: PIXI.interaction.InteractionEvent) {
        const t: TouchEvent = e.data.originalEvent as TouchEvent;
        this.lastTouch = t.touches[0];
        t.preventDefault();
    }
    myDrawPolygon(this: PIXI.Graphics, path: number[] | PIXI.Point[] | PIXI.Polygon): PIXI.Graphics {
        (path as PIXI.Point[]).forEach((point: PIXI.Point, index: number) => {
            point.x = Math.trunc(point.x);
            point.y = Math.trunc(point.y);
        });
        PIXI.Graphics.prototype.drawPolygon.apply(this, arguments);
        return this;
    }
    constructor(i: number, protected getTexture: (name: string) => PIXI.Texture, explosionSprites: PIXI.Texture[]) {
        super();
        this.disasterGameIndex = i;
        
        this.interactive = true;
        this.interactiveChildren = true;
        this.tileObject = new TileSprite(new PIXI.Sprite(), i);
        this.tileObject.base.name = "tilemain" + i;
        this.tileObject.base.interactive = true;
        const pickHandler = this.onForwardEvent.bind(this, "pick");
        this.tileObject.base.on("touchstart", this.handleTouchEvent);
        this.tileObject.base.on("touchmove", this.handleTouchEvent);
        this.tileObject.base.on("touchend", (e: PIXI.interaction.InteractionEvent) => {
            const touches = [];
            touches[0] = this.lastTouch;
            e.data.originalEvent = Object.create(e.data.originalEvent, {
                touches: {value: touches /* configurable, enumerable, writable? */}
            });
            pickHandler(e);
        });
        this.tileObject.base.on("click", pickHandler);
        this.tileObject.base.on("mouseover", this.onForwardEvent.bind(this, "hoverin"));
        this.tileObject.base.on("mouseout", this.onForwardEvent.bind(this, "hoverout"));
        this.tileObject.base.on("mousemove", this.onForwardEvent.bind(this, "hovermove"));
        this.tileObject.base.zIndex = 0;
        this.addChild(this.tileObject.base);
        

        this.tileRiskLevel = new TileSprite(new PIXI.Sprite(), i);
        this.tileRiskLevel.usingHitmap = false;
        this.tileRiskLevel.setInteractive(false);
        this.tileRiskLevel.base.zIndex = 0;
        this.tileRiskLevel.visible = true;
        this.tileRiskLevel.base.tint = 0xFF0000;
        this.addChild(this.tileRiskLevel.base);
        
        this.tileHoverObject = new TileSprite(new PIXI.Sprite(), i);
        this.tileHoverObject.setInteractive(false);
        
        this.tileHoverObject.base.zIndex = 0;
        this.tileHoverObject.visible = false;

        this.tileSelectionHighlight = new TileSprite(new PIXI.Sprite(), i);
        this.tileSelectionHighlight.setInteractive(false);
        
        this.tileSelectionHighlight.base.zIndex = 0;
        this.tileSelectionHighlight.base.tint = 0x9900ff;
        this.tileSelectionHighlight.visible = false;
        this.addChild(this.tileSelectionHighlight.base);

        this.slant = null;
        
        
        this.addChild(this.tileHoverObject.base);

        
        this.numPeople = 0;

        this.tileBuildingObject = new TileSprite(new PIXI.Sprite(), i);
        this.tileBuildingObject.usingHitmap = false;
        this.tileBuildingObject.base.name = "tileBuilding" + i;
        this.tileBuildingObject.setInteractive(false);
        this.tileBuildingObject.base.hitArea = new PIXI.Rectangle(0, 0, 0, 0);
        this.tileBuildingObject.base.zIndex = 0;
        this.addChild(this.tileBuildingObject.base);
        

        this.tileAnimation = new TileSprite(new PIXI.AnimatedSprite([ PIXI.Texture.EMPTY ], true), i);
        this.tileAnimation.usingHitmap = false;
        this.tileAnimation.base.textures = explosionSprites;
        this.tileAnimation.setInteractive(false);
        this.tileAnimation.base.zIndex = 0;
        this.tileAnimation.base.hitArea = new PIXI.Rectangle(0, 0, 0, 0);
        this.tileAnimation.base.animationSpeed = 0.5;
        this.tileAnimation.base.loop = false;
        this.tileAnimation.base.onComplete = () => {
            this.tileAnimation.visible = false;
            RenderController.activeAnimations.delete(this.tileAnimation);
            RenderController.queueRender();
        };
        this.tileAnimation.base.visible = false;
        this.addChild(this.tileAnimation.base);

        const left = new PIXI.Graphics();
        this.addChild(left);
        left.position.x = 0;
        left.position.y = 0;
        left.pivot.x = 0;
        left.pivot.y = 0;
        left.cacheAsBitmap = true;
        left.zIndex = 0;
        left.interactive = false;
        left.drawPolygon = this.myDrawPolygon;
        this.tileLeftObject = left;
        
        const right = new PIXI.Graphics();
        this.addChild(right);
        right.position.x = 0;
        right.position.y = 0;
        right.pivot.x = 0;
        right.pivot.y = 0;
        right.cacheAsBitmap = true;
        right.zIndex = 0;
        right.interactive = false;
        right.drawPolygon = this.myDrawPolygon;
        this.tileRightObject = right;
        
    }
}
