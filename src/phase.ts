export const Ordre: string[] = [
    "_init",
    "_user",
    "_label",
    "_message",
    "_start",
    "_action",
    "_timeNext",
    "_next"
];

export const OrdreAction: string[] = [
    "_init",
    "_action",
];

export const OrdreString: string[] = [
    "_user",
    "_label",
    "_message",
    "_timeNext"
];

export const OrdreFollow: string[] = [
    "_start",
    "_next"
];


export class GroupeLabel {
    user: Label;
    label: Label;
    message: Label;
}

export class Etape {
    _init: Story;
    _start: Story;
    _restart: Story;
    _core: Story;
    _end: Story;
    _endAgain: Story;
    _terminat: Story;

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
