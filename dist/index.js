"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = read;
var Conversation = (function () {
    function Conversation(actions) {
        this.actions = actions;
    }
    Conversation.prototype.setStory = function (story) {
        this.story = story;
    };
    Conversation.prototype.talk = function () {
    };
    return Conversation;
}());
exports.Conversation = Conversation;
function read(story) {
    if (isIncludes(story, 'init')) {
        child(story['init']);
    }
    else {
        console.log('Missing init KEYS');
    }
    return null;
}
function search(context, key, callback, error) {
    if (isIncludes(context, key)) {
        callback();
    }
    else {
        console.log(error ? error : ('Missing ' + key + ' KEYS'));
    }
}
function isIncludes(story, key) {
    return Object.keys(story).includes(key);
}
function child(context) {
    Object.keys(context).forEach(function (e) { return search(e, context); });
}
function init(context) {
    search(context, 'init', function () {
    });
}
function start() {
}
//# sourceMappingURL=index.js.map