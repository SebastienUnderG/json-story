export class Phase {
    init: Etape;
    start: Etape;
    restart: Etape;
    core: Etape;
    end: Etape;
    endAgain: Etape;
    terminat: Etape;

}

export class Etape {

    label: Label;
    user: Label;
    input: { label: Label, _variable: string };
    switch: { [key: string]: string }
    time: number;
    message: Label;
    action: any;
    next: any;
    if: ({ [key: string]: string }| any)

}
// { [key: string]: string }
type Label = (string | string[]);

export type Story = (Phase | Etape);

export type ActionStory = Map<String, any>;
