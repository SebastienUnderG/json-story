import { ActionStory, Phase } from "./phase";
export declare class Conversation {
    actions: ActionStory[];
    story: Phase[];
    constructor(actions: Map<String, any>[]);
    setStory(story: Phase[]): void;
    talk(): void;
}
