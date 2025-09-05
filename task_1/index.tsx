import React, { Component } from "react";

type IUser = {
    name: string;
    age: number;
};

type IProps = {
    user: IUser;
};

// functional component
const FirstComponent = React.memo(({ name, age }: IUser) => (
    <div>
        my name is {name}, my age is {age}
    </div>
));

export { FirstComponent };

// functional component
const Second = ({ user: { name, age } }: IProps) => (
    <div>
        my name is {name}, my age is {age}
    </div>
);

export const SecondComponent = React.memo(Second, (prevProps, nextProps) => {
    return (
        prevProps.user.name === nextProps.user.name &&
        prevProps.user.age === nextProps.user.age
    );
});

// class component
export class ThirdComponent extends PureComponent<IUser> {
    render() {
        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        );
    }
}

// class component
export class FourthComponent extends Component<IProps> {
    shouldComponentUpdate(nextProps) {
        return (
            nextProps.user.name !== this.props.user.name ||
            nextProps.user.age !== this.props.user.age
        );
    }

    render() {
        return (
            <div>
                my name is {this.props.user.name}, my age is {this.props.user.age}
            </div>
        );
    }
}
