export let Ordre: string[] = [
    "_init",
    "_user",
    "_label",
    "_message",
    "_start",
    "_action",
    "_timeNext",
    "_next"
];


export class GroupeLabel {
    user: Label;
    label: Label;
    message: Label;
}

export class Etape {
    init: Story;
    start: Story;
    restart: Story;
    core: Story;
    end: Story;
    endAgain: Story;
    terminat: Story;

}

export class Action {
    // switch: { [key: string]: string };
    // input: { label: Label, _variable: string };
    action: ActionAutre;
    timeNext: number;
    next: Story | string;
    // if: ({ [key: string]: string } | any);
}

export class ActionAutre {

}

// { [key: string]: string }
type Label = (string | string[]);

export type Story = (Etape | GroupeLabel | Action);

export type ActionStory = Map<String, any>;
