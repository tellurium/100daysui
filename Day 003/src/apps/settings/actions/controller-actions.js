export const replaceView = () => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
