import {ActionStory, Etape, Story, Ordre} from "./phase";

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
 * label: Label;
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


// créé une suite logique d'instruction


export class Conversation {

    // actions: ActionStory[];
    // storys: Etape[];
    story: Etape;
    step: string[] = [];


    constructor(actionsURL: string) {
        // this.actions = require(actionsURL);
        // faire un scan de tous les nouveaux caracteur
        this.story = require(actionsURL);

        // initialise
        // this.init(this.story);
        this.iterator([], this.story);

    }

    iterator(step: string[], context: Story) {
        let index: number = 0;
        while (index < Ordre.length) {

            this.search(step, context, Ordre[index], () => {
                // variable ?
                console.log("---> OK", Ordre[index]);

            });
            index++
        }
    }

    setStory(story: Etape[]) {
        // this.story = story;
        // this.init(this.story);
    }

    talk() {

    }

    init(context: Story) {
        this.search(null, context, 'init', () => {
            // variable ?
            console.log("---> OK");


        });
    }

    start() {

    }


    search(step: string[], context: Story, key: string, callback?: any, error?: string) {
        if (this.isIncludes(context, key)) {
            callback();
            // child(context[key]);
            console.log("search ->", context[key], Object.keys(context), Object.keys(context[key]));

            if (typeof context[key] === "string") {

                console.log("string>>>", context[key]);

                // look en local
                let parent: Story;
                let parent_: Story = this.story;
                let step_: number = 0;
                console.log("step_", step_, step[step_], step.length);
                if (step.length > 0) {
                    while (step_ < step.length) {
                        console.log(this.story, parent_[step[step_]]);
                        parent_ = parent_[step[step_]];
                        parent = parent_;
                        step_++;
                        console.log("parent", parent);
                    }
                }


                this.search(step, context, context[key], () => {
                    // variable ?
                    console.log("---> local child OK");

                });

                // look en child
                // parent en Seconde position
                this.search(step, parent, context[key], () => {
                    // variable ?
                    console.log("---> parent child OK");

                });


            } else if (Object.keys(context[key]).length > 0) {

                // NEXT =>
                step.push(key);
                this.iterator(step, context[key]);

            }

        } else {
            console.log(error ? error : ('Missing ' + key + ' KEYS'));
        }
    }

    isIncludes(story: Story, key: string): boolean {
        if (story) {
            return Object.keys(story).includes(key);
        } else {
            return false;
        }


    }

    isVariable() {

    }

    child(context: Etape[]) {
        // Object.keys(context).forEach(e => this.search(e, context));
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


let exemple: Conversation = new Conversation("./exemple.json");
