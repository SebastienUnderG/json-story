import {Etape, Story, Ordre, OrdreAction, OrdreString, OrdreFollow} from "./phase";

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


    IsObjectChild(child: any): boolean {

        if (typeof child === "string") {
            return false

        } else if (Object.keys(child).length > 0) {
            return false

        }

    }

    search(step: string[], context: Story, key: string, callback?: any, error?: string): boolean {

        if (this.isIncludes(context, key)) {
            callback();

            console.log("search -> choisir la suite",
                context[key],
                Object.keys(context),
                Object.keys(context[key])
            );

            // this.LinkNext(step, context, key);


            // Conversation.IsObjectChild(context[key]);

            return true
        } else {
            // console.log(error ? error : ('Missing ' + key + ' KEYS'));
            return false
        }

    }

    isIncludes(story: Story, key: string): boolean {
        if (story) {
            return Object.keys(story).includes(key);
        } else {
            return false;
        }
    }

    whichAction(key: string, ordreAction: any, ordreString: any, ordreFollow: any) {
        if (OrdreAction.includes(key)) {
            ordreAction();
        } else if (OrdreString.includes(key)) {
            ordreString();
        } else if (OrdreFollow.includes(key)) {
            ordreFollow();
        }
    }


    iterator(step: string[], context: Story) {
        let index: number = 0;

        while (index < Ordre.length) {

            if (this.search(step, context, Ordre[index], () => {
            })) {

                if (this.LinkNextObject(step, context, Ordre[index])) {
                    console.log("Object >>", context[Ordre[index]]);

                    step.push(Ordre[index]);

                    this.iterator(step, context[Ordre[index]]);
                } else {
                    console.log("string >>", context[Ordre[index]]);



                    const parent: Story = this.foundParents(step, context, Ordre[index]);

                    console.log("parent", parent);


                }


                // console.log("IsObjectChild --> ", this.IsObjectChild(context[Ordre[index]]));

                console.log("-------->", context[Ordre[index]]);
                if (this.IsObjectChild(context[Ordre[index]])) {
                    console.log("IsObjectChild --> YES");
                } else {
                    console.log("IsObjectChild --> NO");
                }
                this.whichAction(Ordre[index],
                    () => {
                        console.log("---> OK ACTION", Ordre[index]);
                    },
                    () => {
                        console.log("---> OK STRING", Ordre[index]);
                    },
                    () => {
                        console.log("---> OK FOLLOW", Ordre[index]);
                    });


            }
            index++
        }

    }

    foundParents(step: string[], context: Story, key: string): Story {

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
            console.log("---> local child OK", step, context, context[key]);

        });

        // look en child
        // parent en Seconde position
        this.search(step, parent, context[key], () => {
            // variable ?
            console.log("---> parent child OK", step, parent, context[key]);

        });

        return parent;
    }

    LinkNext(step: string[], context: Story, key: string) {
        console.log("LinkNext");

        if (typeof context[key] === "string") {

            console.log("string >>", context[key]);

            const parent: Story = this.foundParents(step, context, key);

            console.log("parent", parent);

        } else if (Object.keys(context[key]).length > 0) {

            // NEXT => vers un vrai object

            console.log("Object >>", context[key]);

            step.push(key);
            this.iterator(step, context[key]);

        }

    }

    LinkNextObject(step: string[], context: Story, key: string): boolean {
        console.log("LinkNextObject");
        if (typeof context[key] === "string") {
            return false;
        } else if (Object.keys(context[key]).length > 0) {
            return true;
        }
    }


}


// const exemple: Conversation = new Conversation("./exemple.json");
new Conversation("./exemple.json");
