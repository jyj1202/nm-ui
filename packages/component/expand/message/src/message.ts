import { PropType } from "vue";

export interface MessageProps {
  type: string;
  id: number;
  message: string;
  onClose: () => void;
}

export type MessageOption = Partial<MessageProps>

export const messageTypes = ['success', 'info', 'warning', 'error'] as const

export const messageProps = {
  type: {
    type: String,
    values: messageTypes,
    default: 'info'
  },
  id: {
    type: Number,
    default: 0
  },
  message: {
    type: String,
    default: ''
  },
  onClose: {
    type: Function as PropType<() => void>,
    default: () => {}
  }
}
