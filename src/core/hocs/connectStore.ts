import {
  MapDispatchToPropsParam,
  MapStateToPropsParam,
  connect,
} from 'react-redux';
import { RootState } from 'store';

export const connectStore = <
  TStateProps = {},
  TDispatchProps = {},
  TOwnProps = {},
>(
  mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, RootState>,
  mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
) => connect(mapStateToProps, mapDispatchToProps);

export { type ConnectedProps } from 'react-redux';
