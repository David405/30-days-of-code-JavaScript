function Solution(){
    this.stack = [];
    this.queue = [];

    Solution.prototype.pushCharacter = this.stack.push;
    Solution.prototype.popCharacter = this.stack.pop;
    Solution.prototype.enqueueCharacter = this.queue.push;
    Solution.prototype.dequeueCharacter = this.queue.shift;
}