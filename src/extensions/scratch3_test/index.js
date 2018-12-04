class Scratch3TestBlocks {
  constructor() {}
  getInfo() {
    return {
      id: 'test',
      name: 'Test',
      blocks: [
        {
          opcode: 'ts',
          blockType: Scratch.BlockType.COMMAND,
          text: 'hello'
        }
      ]
    }
  }
  ts() {
    console.log('ts');
  }
}
module.exports = Scratch3TestBlocks;
