import {ActionStory, Phase, Story} from "./phase";

// module.exports = read;

/** Scenario par défault */

/**
 * init : Permet la préparation de paramettre
 * start : Lancement de la naration initial
 * restart : Lancement secondaire
 * core : naratif principal
 * end :
 * endAgain :
 * terminat : finalisation des paramettres
 * @param context
 */

/**
 *     label: Label;
 * user: Label;
 * input: { label: Label, _variable: string };
 * switch: { [key: string]: string }
 * time: number;
 * message: Label;
 * action: any;
 * next: any;
 * if: ({ [key: string]: string }| any)
 *
 */

export class Conversation {

    actions: ActionStory[];
    story: Phase[];


    constructor(actions: ActionStory[]) {
        this.actions = actions;
    }

    setStory(story: Phase[]) {
        this.story = story;
        this.init(this.story);
    }

    talk() {

    }

    init(context: Phase) {
        this.search(context, 'init', () => {
            // variable ?
        });
    }

    start() {

    }


    search(context: Story, key: string, callback?: any, error?: string) {
        if (this.isIncludes(context, key)) {
            callback();
            // child(context[key]);
        } else {
            console.log(error ? error : ('Missing ' + key + ' KEYS'));
        }
    }

    isIncludes(story: any, key: string): boolean {
        return Object.keys(story).includes(key);
    }

    isVariable() {

    }

    child(context: Phase[]) {
        Object.keys(context).forEach(e => this.search(e, context));
    }


}

/*
function read(story: Map<string, any>): Observable<string> {

    if (isIncludes(story, 'init')) {
        child(story['init']);
    } else {
        console.log('Missing init KEYS');
    }


    return null;
}
 */

/*
    export class Story {
    }
*/


