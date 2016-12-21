// @flow

import type {RootState} from './root/types'
import type {HelloAction, ReplyAction} from './hello/types'

export type Action<Type: string, Payload: mixed> = {
  type: Type,
  payload?: Payload,
}

export type Selector<Value, Props: ?Object> = (state: RootState, props: Props) => Value

export type ValidActions =
  HelloAction |
  ReplyAction
