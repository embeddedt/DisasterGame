export function getStringEnumName<E>(e: object, val: E): string {
    if(val == undefined)
        return undefined;
    for (const [enum_key, enum_val] of Object.entries(e)) {
        if (enum_val == val)
            return enum_key;
    }
    throw new Error("Invalid enum value");
}

type ObjectMapResultChange = 'unchanged'|'deleted'|'created'|'updated';
type ObjectMapResult<T> = {
    [P in keyof T]: {
        type: ObjectMapResultChange;
        data: T[P];
    };
}

export function pad(n: number|string, width: number, z?: string): string {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
var _debounce = function<T extends Array<any>>(ms: number, fn: (...args: T) => void): (...args: Parameters<typeof fn>) => void {
    var timer;
    return function() {
      clearTimeout(timer);
      var args = Array.prototype.slice.call(arguments);
      args.unshift(this);
      timer = setTimeout(fn.bind.apply(fn, args), ms);
    };
};
export { _debounce };

var currentAudio: HTMLAudioElement = null;
var lastSoundShouldStop: boolean = true;
export function playAudio(source: string, onPlayStart?: () => void, stopIfInterrupted = true, interruptOtherSound = true) {
    if(currentAudio != null) {
        if(lastSoundShouldStop && interruptOtherSound)
            currentAudio.pause();
        currentAudio = null;
    }
    const onError = (e) => {
        console.error("Couldn't play audio: ", e);
        if(typeof onPlayStart == 'function')
            onPlayStart();
    };
    try {
        const a = new Audio(source);
        currentAudio = a;
        lastSoundShouldStop = stopIfInterrupted;
        a.addEventListener("canplaythrough", () => {
            if(currentAudio == a) {
                try {
                    a.play();
                } catch(e) {
                    onError(e);
                }
            }
            if(typeof onPlayStart == 'function')
                onPlayStart();
        });
        a.addEventListener("error", (e) => {
            onError(e);
        });
        
    } catch(e) {
        
    }
}

export function genHitmapAndAverageHue(baseTex: PIXI.BaseTexture, threshold: number): boolean {
    let imageData = getImageDataFromTexture(baseTex);
    if(imageData == null)
        return false;
    let hitmap = (baseTex as any).hitmap = new Uint32Array(Math.ceil(imageData.w*imageData.h/32));
    const hues = [];
    for (let i=0;i<imageData.w*imageData.h;i++) {
        let ind1 = i % 32;
        let ind2 = i / 32 | 0;
        if (imageData.data.data[i * 4 + 3] >= threshold) {
            hitmap[ind2] = hitmap[ind2] | (1<<ind1);
            hues.push(RGBtoHSV(imageData.data.data[i * 4 + 0], imageData.data.data[i * 4 + 1], imageData.data.data[i * 4 + 2]).h * 360);
        }
    }
    const hueSum = hues.reduce((prev, cur) => prev + cur, 0);
    const averageHue = hueSum / hues.length;
    (baseTex as any).averageHue = averageHue;
    return true;
}

export function getAverageHue(baseTex: PIXI.BaseTexture): number {
    const hues = [];
    let imageData = getImageDataFromTexture(baseTex);
    if(imageData == null)
        return null;
    for (let i=0;i<imageData.w*imageData.h;i++) {
        if(imageData.data.data[i * 4 + 3] > 0) {
            hues.push(RGBtoHSV(imageData.data.data[i * 4 + 0], imageData.data.data[i * 4 + 1], imageData.data.data[i * 4 + 2]).h * 360);
        }
        
    }
    var hueSum = hues.reduce((prev, cur) => prev + cur, 0);
    return hueSum / hues.length;
}

export function getImageDataFromTexture(baseTex: PIXI.BaseTexture): { data: ImageData, w: number, h: number } {
    if (!baseTex.resource) {
        //renderTexture
        return null;
    }
    const imgSource = (baseTex.resource as PIXI.resources.BaseImageResource).source;
    let canvas = null;
    if (!imgSource) {
        return null;
    }
    let context = null;
    if (typeof (imgSource as HTMLCanvasElement).getContext != 'undefined') {
        canvas = imgSource;
        context = canvas.getContext('2d');
    } else if (imgSource instanceof Image) {
        canvas = document.createElement('canvas');
        canvas.width = imgSource.width;
        canvas.height = imgSource.height;
        context = canvas.getContext('2d');
        context.drawImage(imgSource, 0, 0);
    } else {
        //unknown source;
        return null;
    }
 
    const w = canvas.width, h = canvas.height;
    let imageData = context.getImageData(0, 0, w, h);
    return { data: imageData, w, h };
}

export function RGBtoHSV(r, g, b) {
    if (arguments.length === 1) {
        g = r.g, b = r.b, r = r.r;
    }
    var max = Math.max(r, g, b), min = Math.min(r, g, b),
        d = max - min,
        h,
        s = (max === 0 ? 0 : d / max),
        v = max / 255;

    switch (max) {
        case min: h = 0; break;
        case r: h = (g - b) + d * (g < b ? 6: 0); h /= 6 * d; break;
        case g: h = (b - r) + d * 2; h /= 6 * d; break;
        case b: h = (r - g) + d * 4; h /= 6 * d; break;
    }

    return {
        h: h,
        s: s,
        v: v
    };
}

export function rgbToHexNum(obj: { r: number; g: number; b: number; }): number {
    return (obj.r << 16) | (obj.g << 8) | obj.b;
}
export function HSVtoRGB(h: number, s: number, v: number);
export function HSVtoRGB(h: { h: number; s: number; v: number; });
export function HSVtoRGB(h: number|{ h: number; s: number; v: number }, s?: number, v?: number): { r: number; g: number; b: number; } {
    var r, g, b, i, f, p, q, t;
    if (typeof h == 'object') {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

export function getRandomArbitrary(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export function preloadAudio(source: string): Promise<HTMLAudioElement> {
    return new Promise(resolve => {
        const a = new Audio(source);
        a.addEventListener("canplaythrough", () => resolve(a));
    });
}

var deepDiffMapper = function () {
    return {
        VALUE_CREATED: 'created',
        VALUE_UPDATED: 'updated',
        VALUE_DELETED: 'deleted',
        VALUE_UNCHANGED: 'unchanged',
        map: function (obj1, obj2) {
            if (this.isFunction(obj1) || this.isFunction(obj2)) {
                throw 'Invalid argument. Function given, object expected.';
            }
            if (this.isValue(obj1) || this.isValue(obj2)) {
                return {
                    type: this.compareValues(obj1, obj2),
                    data: obj1 === undefined ? obj2 : obj1
                };
            }

            var diff = {};
            for (var key in obj1) {
                if (this.isFunction(obj1[key])) {
                    continue;
                }

                var value2 = undefined;
                if (obj2[key] !== undefined) {
                    value2 = obj2[key];
                }

                diff[key] = this.map(obj1[key], value2);
            }
            for (var key in obj2) {
                if (this.isFunction(obj2[key]) || diff[key] !== undefined) {
                    continue;
                }

                diff[key] = this.map(undefined, obj2[key]);
            }

            return diff;

        },
        compareValues: function (value1, value2): ObjectMapResultChange {
            if (value1 === value2) {
                return this.VALUE_UNCHANGED;
            }
            if (this.isDate(value1) && this.isDate(value2) && value1.getTime() === value2.getTime()) {
                return this.VALUE_UNCHANGED;
            }
            if (value1 === undefined) {
                return this.VALUE_CREATED;
            }
            if (value2 === undefined) {
                return this.VALUE_DELETED;
            }
            return this.VALUE_UPDATED;
        },
        isFunction: function (x) {
            return Object.prototype.toString.call(x) === '[object Function]';
        },
        isArray: function (x) {
            return Object.prototype.toString.call(x) === '[object Array]';
        },
        isDate: function (x) {
            return Object.prototype.toString.call(x) === '[object Date]';
        },
        isObject: function (x) {
            return Object.prototype.toString.call(x) === '[object Object]';
        },
        isValue: function (x) {
            return !this.isObject(x) && !this.isArray(x);
        }
    }
}();

export { deepDiffMapper };

export function scheduleIdleWorkLoop(numEntries: number, cb: (i: number) => void): Promise<void> {
    return new Promise((resolve, reject) => {
        var i = 0;
        const triggerMoreWork = () => (window as any).requestIdleCallback(info => {
            try {
                while(info.timeRemaining() > 0 && i < numEntries) {
                    cb(i);
                    i++;
                }
                if(i < numEntries)
                    triggerMoreWork();
                else {
                    resolve();
                }
            } catch(e) {
                reject(e);
            }
        });
        triggerMoreWork();
    });
}


export function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export function getRandomArrayMember<T>(arr: Array<T>): T {
    return arr[getRandomInt(0, arr.length)];
}
export function stringTillFirstDigit(s: string): string {
    if(s == undefined)
        return undefined;
    const i = s.search(/\d/);
    if(i == -1)
        return s;
    return s.substr(0, i);
}