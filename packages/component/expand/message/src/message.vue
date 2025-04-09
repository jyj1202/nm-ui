<template>
  <Transition
    name="nm-message-fade"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div
      ref="messageRef"
      class="nm-message"
      v-show="visible"
      :style="style"
      :class="`nm-message--${type}`"
    >
      <Info :class="`nm-message__icon--${type}`"/>
      <p class="nm-message__content">{{ message }}</p>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, type CSSProperties, onMounted, ref } from 'vue';
import { useResizeObserver, useTimeoutFn } from '@vueuse/core';
import { Info } from "@jyj/nm-icons";
import { instanceManger } from "./manager";
import { messageProps } from "./message";

const props = defineProps(messageProps)


const messageRef = ref<HTMLElement>()
const visible = ref(false)

const height = ref(0)

useResizeObserver(messageRef, () => {
  height.value = messageRef.value!.getBoundingClientRect().height
})

const offset = computed(() => {
  return (instanceManger.getOffsetOrSpace(props.id, 20) + instanceManger.getLastOffset(props.id))
})

const bottom = computed(() => {
  return offset.value + height.value
})

const style = computed<CSSProperties>(() => ({
  top: `${offset.value}px`,
  // zIndex: currentZIndex.value,
}))


onMounted(() => {
  startTimer()
  visible.value = true
})

function startTimer() {
  const { isPending, start, stop } = useTimeoutFn(() => {
    visible.value = false
  }, 3000)
}

function close() {
  visible.value = false
}

defineExpose({
  bottom,
})
</script>

<style scoped>
.nm-message {
  --nm-color-success: #67c23a;
  --nm-color-warning: #e6a23c;
  --nm-color-danger: #f56c6c;
  --nm-color-info: #909399;

  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: #333;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  p {
    margin: 0;
  }
  .nm-message__icon--info {
    color: var(--nm-color-info);
  }
  .nm-message__icon--success {
    color: var(--nm-color-success);
  }
  .nm-message__icon--warning {
    color: var(--nm-color-warning);
  }
  .nm-message__icon--error {
    color: var(--nm-color-danger);
  }
}

.nm-message--info {
  --nm-message-text-color: var(--nm-color-info);
}
.nm-message--success {
  --nm-message-text-color: var(--nm-color-success);
}
.nm-message--warning {
  --nm-message-text-color: var(--nm-color-warning);
}
.nm-message--error {
  --nm-message-text-color: var(--nm-color-danger);
}

.nm-message__content {
  color: var(--nm-message-text-color);
}

.nm-message-fade-enter-from,
.nm-message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
