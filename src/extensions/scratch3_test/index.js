//const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
//const Cast = require('../../util/cast');
//const Clone = require('../../util/clone');
//const Color = require('../../util/color');
const formatMessage = require('format-message');
//const MathUtil = require('../../util/math-util');
//const RenderedTarget = require('../../sprites/rendered-target');
//const log = require('../../util/log');
//const StageLayering = require('../../engine/stage-layering');

class Scratch3TestBlocks {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'test',
            name: formatMessage({
                id: 'test.categoryName',
                default: 'Test',
                description: 'Test extension'
            }),
            blocks: [
                {
                    opcode: 'test',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'test.test',
                        default: 'Test',
                        description: 'Test block'
                    })
                }
            ],
            menus: {

	    }
        };
    }

    test () {
      //
    }
}

module.exports = Scratch3TestBlocks;
