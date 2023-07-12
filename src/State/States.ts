import { IWalkmanState } from "./IWalkmanState";

class ClosedState implements IWalkmanState {

    Closed(walkman: Walkman): void {
        console.log('The devide is already closed');
    }
    Open(walkman: Walkman): void {
        console.log('The device is now open');
        walkman.ChangeState(new OpenState());
    }
    Playing(walkman: Walkman): void {
        console.log('The device is now playing');
        walkman.ChangeState(new PlayingState());
    }

}
class OpenState implements IWalkmanState {

    Closed(walkman: Walkman): void {
        console.log('The devide is now  closed');
        walkman.ChangeState(new ClosedState());
    }
    Open(walkman: Walkman): void {
        console.log('The device is already open');
    }
    Playing(walkman: Walkman): void {
        console.log('The device cannot play while open');
    }

}
class PlayingState implements IWalkmanState {

    Closed(walkman: Walkman): void {
        console.log('The devide is already closed and playing');
    }
    Open(walkman: Walkman): void {
        console.log('The device is now open');
        walkman.ChangeState(new OpenState());
    }
    Playing(walkman: Walkman): void {
        console.log('The devide is already playing');
    }

}

export class Walkman implements IWalkmanState {
    private state: IWalkmanState;

    constructor() {
        this.state = new ClosedState();
    }

    public ChangeState(state: IWalkmanState) {
        this.state = state;
    }

    public Closed(): void {
        this.state.Closed(this);
    }

    public Open(): void {
        this.state.Open(this);
    }

    public Playing(): void {
        this.state.Playing(this);
    }
}