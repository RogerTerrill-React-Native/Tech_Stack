export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};








// Yes, all reducers will receive the action that you dispatch. However, you will usually have either switch statements, or if-statements inside your reducers, meaning they will only act / do something if the switch case is met. 

// BTW, you can just put a console.log() in all your reducers, and you'll notice they get called whenver you dispatch anything. Its up to you to have them in a manner where they ignore the action, and only act when appropriate. Hopefully I didn't cause any confusion.