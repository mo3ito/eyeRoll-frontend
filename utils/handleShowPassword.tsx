

const showPasswordHandler = (
  event: React.MouseEvent,
  setStateFunction: Function,
  stateValue: boolean = false
) => {
  event.preventDefault();
  setStateFunction(stateValue);
};

export default showPasswordHandler;
