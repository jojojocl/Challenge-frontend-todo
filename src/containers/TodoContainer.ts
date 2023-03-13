import { connect } from 'react-redux';

import { StoreTypes } from 'CustomCommons';
import * as todoActions from '../actions/todo';

const mapStateToProps = ({ todo }: StoreTypes) => ({ ...todo });
const mapDispatchToProps = {
    ...todoActions,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export type WithTodoPropsTypes = StateProps & DispatchProps;

export const withTodo = connect<StateProps, DispatchProps, any>(
    mapStateToProps,
    mapDispatchToProps,
);
